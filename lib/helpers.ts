/* ParaManifest: Manifest Helpers
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

// Imports

import { DatapointManifest, Manifest } from "./manifest";

//  Types

/**
 * A datapoint on the graph.
 */
export interface XyPoint {
  /**
   * The location of the point on the x-axis.
   */
  x: string;
  /**
   * The location of the point on the y-axis.
   */
  y: string;
}

export type Datatype = Manifest['datasets'][number]['facets']['x']['datatype'];
export type AllSeriesDataXY = Record<string, XyPoint[]>;
export type AllSeriesData = Record<string, DatapointManifest[]>;

// Functions

export function dataFromManifest(manifest: Manifest): AllSeriesData {
  const dataset = manifest.datasets[0];
  if (dataset.data.source !== 'inline') {
    throw new Error('only manifests with inline data can use this function.');
  }
  const data: AllSeriesData = {};
  for (const series of dataset.series) {
    data[series.key] = series.records!;
  }
  return data;
}

export function collectXs(data: DatapointManifest[]): Set<string> {
  return new Set(...data.map((datapoint) => datapoint.x));
}

// TODO: specify that T must be primitive
function setEquals<T>(lhs: Set<T>, rhs: Set<T>) {
  return lhs.size === rhs.size && lhs.isSubsetOf(rhs);
}

export function chartDataIsOrdered(data: AllSeriesData): boolean {
  let chartXs: Set<string> | null = null;
  for (const key in data) {
    const seriesData = data[key];
    const xs = collectXs(seriesData);
    // Series not ordered
    if (xs.size !== seriesData.length) {
      return false;
    }
    // Chart not ordered
    if (chartXs === null) {
      chartXs = xs;
    } else if (!setEquals(xs, chartXs)) {
      return false;
    }
  }
  return true;
}
