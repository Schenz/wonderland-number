import { Kata } from './kata';

let fixture: Kata;

beforeEach(() => {
    fixture = new Kata();
});

describe('Kata Tests', () => {
    it.each`
        name         | expected
        ${'Ingage'}  | ${'Hello Ingage'}
        ${'Brandon'} | ${'Hello Brandon'}
    `(
        'returns $expected when $name is passed to function',
        ({ name, expected }) => {
            expect(fixture.hello(name)).toEqual(expected);
        }
    );
});
