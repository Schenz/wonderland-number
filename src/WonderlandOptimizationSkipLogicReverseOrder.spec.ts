import { WonderlandOptimizationSkipLogicReverseOrder } from './WonderlandOptimizationSkipLogicReverseOrder';

let fixture: WonderlandOptimizationSkipLogicReverseOrder;

beforeEach(async () => {
    fixture = new WonderlandOptimizationSkipLogicReverseOrder();
});

describe('Optimization Skip Logic With Reverse Order Tests', () => {
    it.each`
        maxMatches  | skip      | expected
        ${1}        | ${false}  | ${[142857]}
        ${2}        | ${false}  | ${[142857, 1428570]}
        ${3}        | ${false}  | ${[142857, 1428570, 1429857]}
        ${4}        | ${false}   | ${[142857, 1428570, 1429857, 14285700]}
    `(
        'returns $expected when $maxMatches is passed to findWonderlandNumber',
        ({ maxMatches, skip, expected }) => {
            if (!skip) {
                expect(fixture.findWonderlandNumber(maxMatches)).toStrictEqual(expected);    
            }
        }
    );
});