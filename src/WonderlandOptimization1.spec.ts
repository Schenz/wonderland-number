import { WonderlandOptimization1 } from './WonderlandOptimization1';

let optimization1: WonderlandOptimization1;

beforeEach(async () => {
    optimization1 = new WonderlandOptimization1();
});

describe('Optimization 1 Tests', () => {
    it.each`
        maxMatches  | skip      | expected
        ${1}        | ${false}  | ${[142857]}
        ${2}        | ${false}  | ${[142857, 1428570]}
        ${3}        | ${false}  | ${[142857, 1428570, 1429857]}
        ${4}        | ${true}   | ${[142857, 1428570, 1429857, 14285700]}
    `(
        'returns $expected when $maxMatches is passed to findWonderlandNumber',
        ({ maxMatches, skip, expected }) => {
            if (!skip) {
                expect(optimization1.findWonderlandNumber(maxMatches)).toStrictEqual(expected);    
            }
        }
    );
});