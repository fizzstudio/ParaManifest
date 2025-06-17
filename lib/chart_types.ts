/* ParaManifest: Chart Types
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

import { Manifest } from "./manifest";

// Types

export type ChartType = Manifest['datasets'][number]['type'];

export type ChartTypeFamily = 'line' | 'bar' | 'pastry' | 'scatter';

// Constants

export const CHART_FAMILY_MAP: Record<ChartType, ChartTypeFamily> = {
  'line': 'line',
  'stepline': 'line',
  'bar': 'bar',
  'column': 'bar',
  'lollipop': 'bar',
  'histogram': 'bar',
  'scatter': 'scatter',
  'heatmap': 'scatter',
  'pie': 'pastry',
  'donut': 'pastry'
}

export const PLANE_CHART_FAMILIES: ChartTypeFamily[] = ['line', 'bar', 'scatter'];

// Functions

export function isPlaneType(chartType: ChartType): boolean {
  return PLANE_CHART_FAMILIES.includes(CHART_FAMILY_MAP[chartType]);
}

export function isLineType(chartType: ChartType): boolean {
  return CHART_FAMILY_MAP[chartType] === 'line';
}

export function isBarType(chartType: ChartType): boolean {
  return CHART_FAMILY_MAP[chartType] === 'bar';
}

export function isScatterType(chartType: ChartType): boolean {
  return CHART_FAMILY_MAP[chartType] === 'scatter';
}

export function isPastryType(chartType: ChartType): boolean {
  return CHART_FAMILY_MAP[chartType] === 'pastry';
}