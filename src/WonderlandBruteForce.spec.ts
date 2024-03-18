import { WonderlandBruteForce } from './WonderlandBruteForce';

let bruteForce: WonderlandBruteForce;

beforeEach(async () => {
    bruteForce = new WonderlandBruteForce();
});

describe('Brute Force Tests', () => {
    it.each`
    iterations  | skip      | expected
    ${1}        | ${false}  | ${[142857]}
    ${2}        | ${false}  | ${[142857, 1428570]}
    ${3}        | ${false}  | ${[142857, 1428570, 1429857]}
    ${4}        | ${true}   | ${[142857, 1428570, 1429857, 14285700]}
    `(
        'returns $expected when $iterations is passed to findWonderlandNumber',
        async ({ iterations, skip, expected }) => {
            if (!skip) {
                expect(bruteForce.findWonderlandNumber(iterations)).toStrictEqual(expected);    
            }
        }
    );
});
