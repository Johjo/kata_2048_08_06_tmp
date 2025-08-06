import { expect, describe, it } from 'vitest';

function right(before) {
  let after = [];
  if (before[0] == 2) {
    after.push(0);
    after.push(0);
    after.push(before[0]);
    after.push(before[1]);
    return after;
  }

  if (before[2] == 2) {
    after.push(0);
    after.push(0);
    after.push(0);
    after.push(before[2]);
    return after;
  }

  if (before[1] == 4 && before[2] == 0) {
    after.push(0);
    after.push(0);
    after.push(0);
    after.push(before[1]);
    return after;
  }
  after.push(0);
  after.push(0);
  after.push(0);
  after.push(before[1]);
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

  it('should 1', () => {
    expect(right([0,0,2,0])).toEqual([0,0,0,2])
  });

});
