import { expect, test } from 'vitest';
import { strToId } from '../lib';

test('strToId', () => {
  expect(strToId('  aB$)\t  Cd$$ ')).toBe('_ab___cd___');
})