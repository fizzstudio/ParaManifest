/* ParaManifest: Testing
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

import { html, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Json } from '@hyperjump/json-pointer';

import { ManifestPicker, ManifestPickerProps } from "@fizz/test-utils";

import { ManifestValidator, ValidateOutput } from '../../lib';

@customElement('manifest-validator-picker')
export class ManifestValidatorPicker extends ManifestPicker {

  private validator = new ManifestValidator();
  private validationResult?: ValidateOutput;

  protected async onManifestLoad(): Promise<void> {
    this.validationResult = await this.validator.validateManifest(
      this.manifest as unknown as Json, 'enveloped'
    );
  }

  protected async renderManifest(): Promise<TemplateResult> {
    if (this.validationResult!.valid) {
      return html`Manifest is valid`;
    }

    return html`<pre>${this.validationResult!.errors}</pre>`;
  }
  
}

export const ManifestValidatorPickerMaker = ({ filename, debug }: ManifestPickerProps) => {
  return html`
    <manifest-validator-picker
      filename=${filename}
      debug=${debug}
    >
    </manifest-validator-picker>
  `;
};