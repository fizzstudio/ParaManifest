/* ParaManifest: Inline Data into Manifest
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

import { AllSeriesData } from "./helpers";
import { JIMManifest, SeriesManifest } from "./manifest";

function copyJSON<T extends object>(source: T): T {
  return JSON.parse(JSON.stringify(source));
}

// TODO: Assumes at most 1 series with a given key
function getSeriesManifest(manifest: JIMManifest, key: string): SeriesManifest | null {
  const matching = manifest.datasets[0].series.filter((series) => series.key === key);
  if (matching.length === 0) {
    return null;
  }
  return matching[0];
}

export function inlineData(manifest: JIMManifest, data: AllSeriesData): JIMManifest {
  const dataset = manifest.datasets[0];
  if ('records' in dataset.series[0]) {
    throw new Error('[ParaManifest/Inliner]: Cannot inline data into manifest which already has inline data.')
  }

  const newManifest = copyJSON(manifest);
  const newDataset = newManifest.datasets[0];
  delete newDataset.href;

  for (const dataSeriesKey in data) {
    const newManifestSeries = getSeriesManifest(newManifest, dataSeriesKey);
    // Checks if series is in data but not manifest
    if (newManifestSeries === null) {
      throw new Error(`[ParaManifest/Inliner]: Series key ${dataSeriesKey} is missing in manifest.`)
    }
    newManifestSeries.records = data[dataSeriesKey];
  }

  // Checks if series is in manifest but not data
  const missingData = newDataset.series.filter((series) => series.records === undefined)
  if (missingData.length !== 0) {
    throw new Error(`[ParaManifest/Inliner]: Series key ${missingData[0].key} is missing in data.`)
  }

  return newManifest;
}