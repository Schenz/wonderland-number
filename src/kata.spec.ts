import { Kata } from './kata';

let fixture: Kata;

beforeEach(() => {
    fixture = new Kata();
});

describe('Kata Tests', () => {
    it('should find the wonderland number', () => {
        expect(fixture.findWonderlandNumber()).toEqual(142857);
    });
});
