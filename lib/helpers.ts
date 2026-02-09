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

import { DatapointManifest, JIMManifest, Theme } from "./manifest";

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

export type Datatype = JIMManifest['datasets'][number]['facets']['x']['datatype'];
export type AllSeriesDataXY = Record<string, XyPoint[]>;
export type AllSeriesData = Record<string, DatapointManifest[]>;

export type BaseKind = Theme['baseKind'];

// Functions

export function dataFromManifest(manifest: JIMManifest): AllSeriesData {
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

/**
 * Takes a string and normalizes it, stripping it of any non-alphanum characters and replacing its 
 *   whitespaces with underscores, so that can can serve as a DOM id.
 * @param {string} s A string, which may have spaces, punctuation, or other non-alphanum characters.
 * @returns {string} The unique string, stripped of all non-alphanum characters, to be used as an id.
 * @internal
 */
export function strToId(s: string): string {
  return s.replace(/\W+/g, '_').toLowerCase();
} //.replace(/\s+/g, '_')