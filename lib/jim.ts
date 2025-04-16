/* ParaManifest: Jimerator
Copyright (C) 2025 Fizz Studios

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.*/

import { ChartType } from "./types";
import { Manifest, Dataset as ManifestDataset } from "./manifest";

export interface Jim {
  dataset: Dataset;
  selectors: Selectors;
}

export interface Dataset {
  title: string;
  subtitle?: string;
  source?: Source;
  facets: {[key: string]: Facet};
  series: Series[];
  href?: Href;
}

export interface Source {
  url: string;
  name: string;
}

export interface Facet {
  label: string;
  variableType?: 'independent' | 'dependent';
}

type SeriesType = 'row' | 'column' | 'line' | 'other';

export interface Series {
  name: string;
  type: SeriesType;
  records: Record_[];
}

export interface Record_ {
  x: string;
  y: string;
}

export interface Href {
  url: string;
  format: 'csv' | 'json';
  type: 'extendedDataset';
}

export interface Selectors {
  [id: string]: string | string[];
}

const CHART_TYPE_MAP: Record<ChartType, SeriesType> = {
  bar: 'column',
  column: 'column',
  lollipop: 'column',
  line: 'line',
  stepline: 'line',
  scatter: 'other',
  pie: 'other'
}

export class Jimerator {

  private _jim!: Jim;
  private _modelSelectors: {[colName: string]: string[][]} = {};
  private _dataset: ManifestDataset;

  constructor(private _manifest: Manifest) {
    this._dataset = this._manifest.datasets[0];
  }

  get jim() {
    return this._jim;
  }

  get modelSelectors() {
    return this._modelSelectors;
  }

  public addSelector(col: string, row: number, sel: string) {
    if (!this._modelSelectors[col]) {
      this._modelSelectors[col] = [];
    }
    if (!this._modelSelectors[col][row]) {
      this._modelSelectors[col][row] = [];
    }
    this._modelSelectors[col][row].push(sel);
  }

  private saveSelectors(colName: string, row: number, path: string, selectors: Selectors) {
    for (const sel of this._modelSelectors[colName][row]) {
      const fullSel = `#${sel}`;
      if (selectors[fullSel] === undefined) {
        selectors[fullSel] = path;
      } else if (typeof selectors[fullSel] === 'string') {
        const ary: string[] = [selectors[fullSel] as string, path];
        selectors[fullSel] = ary;
      } else if (Array.isArray(selectors[fullSel])) {
        (selectors[fullSel] as string[]).push(path);  
      } else {
        throw new Error(`invalid value for selector '${fullSel}'`);
      }
    }
  }

  public render() {
    const dataset: Dataset = {
      title: this._dataset.title,
      facets: this._dataset.facets,
      series: []
    };
    let selectors: Selectors = {
      '#chart-title': '$.dataset.title'
    };
    //const xSeries = this.canvas.controller.model!.indepSeries();
    dataset.series = this._dataset.series.map((aSeries) => ({
      name: aSeries.key,
      type: CHART_TYPE_MAP[this._dataset.type],
      records: this.canvas.controller.model!.data.map((rec, row) => {
        const x = rec.col(this.canvas.controller.model!.indepVar).at(0);
        const y = rec.col(key).at(0);
        const xPath = `$.dataset.series[${col}].records[${row}].x`;
        const yPath = `$.dataset.series[${col}].records[${row}].y`;
        this.saveSelectors(this.canvas.controller.model!.indepVar, row, xPath, selectors);
        this.saveSelectors(key, row, yPath, selectors);
        return {
          x: this.canvas.controller.model!.format(xSeries.atBoxed(row), 'jimX'),
          y: y.toString()
        };
      })
    }));
    selectors = Object.fromEntries(
      Object.keys(selectors).sort().map(k => [k, selectors[k]]));
    this._jim = {dataset, selectors};
  }

}