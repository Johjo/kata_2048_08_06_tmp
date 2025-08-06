import { expect, describe, it } from 'vitest';

function right(before) {
  const after: number[] = [];
  if (before[3] !== 0) {
    after.unshift(before[3]);
  }
  if (before[2] !== 0) {
    after.unshift(before[2]);
  }
  if (before[1] !== 0) {
    if (before[1] === after[0]) {
      after[0] = 2*after[0];
    }
    else {
      after.unshift(before[1]);
    }
  }
  if (before[0] !== 0) {
    after.unshift(before[0]);
  }
  while (after.length < 4) {
    after.unshift(0)
  }
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

  it('should 4', () => {
    expect(right([0,0,2,0])).toEqual([0,0,0,2])
  });

  it('should 5', () => {
    expect(right([2,4,8,16])).toEqual([2,4,8,16])
  });

  it('should 5', () => {
    expect(right([0,2,0,2])).toEqual([0,0,0,4])
  });

});
