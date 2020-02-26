import chai from 'chai';
import { expect, } from 'chai';
import { add, } from './util';

describe('add', () => {
  it('should add two numbers', () => {
    expect(add(1, 2)).to.eql(3);
  });
  it('should work with one number', () => {
    expect(add(1)).to.eql(1);
  });
  it('should work with multiple numbers', () => {
    expect(add(1,2,3,4,5)).to.eql(15);
  });
  it('should work with no parameters', () => {
    expect(add()).to.eql(0);
  })
});