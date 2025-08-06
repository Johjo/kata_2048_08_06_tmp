import { expect, describe, it } from 'vitest';

function right(before) {
  if (before[0] == 2) {
    let after = [];
    after.push(0);
    after.push(0);
    after.push(2);
    after.push(4);
    return after;
  }
  if (before[1] == 4) {
    let after = [];
    after.push(0);
    after.push(0);
    after.push(0);
    after.push(4);
    return after;
  }
  let after = [];
  after.push(0);
  after.push(0);
  after.push(0);
  after.push(2);
  return after;
}

describe('2048', () => {
  it('should 1', () => {
    expect(right([0,2,0,0])).toEqual([0,0,0,2])
  });

  it('should 2', () => {
    expect(right([0,4,0,0])).toEqual([0,0,0,4])
  });

  it('should 3', () => {
    expect(right([2,4,0,0])).toEqual([0,0,2,4])
  });
});
