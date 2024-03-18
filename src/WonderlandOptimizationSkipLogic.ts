export class WonderlandOptimizationSkipLogic {
    private digits = (n: number): number[] => n.toString().split('').map(Number)

    private permutation(l1: number[], l2: number[]): [isWonderland: boolean, error?: string] {
        if (l1.length !== l2.length) {
            return [false, "length"];
        }

        const sorted1 = l1.slice().sort();
        const sorted2 = l2.slice().sort();

        for (let i = 0; i < sorted1.length; i++) {
            if (sorted1[i] !== sorted2[i]) {
                return [false, "permutation"];
            }
        }
        return [true];
    }

    public wonderland(n: number): [isWonderland: boolean, error?: string] {
        const nums = [2 * n, 3 * n, 4 * n, 5 * n, 6 * n];
        const nDigits = this.digits(n);
        for (const num of nums) {
            const result = this.permutation(this.digits(num), nDigits);
            if (!result[0]) {
                return result;
            }
        }

        return [true];
    }

    public findWonderlandNumber(maxMatches: number): number[] {
        let n = 142_857;
        let skipLengthErrors = 1_000_000;
        let matches = 0;
        let matchNumbers = [];
        while (matches < maxMatches) {
            const [isWonderland, error] = this.wonderland(n);
            if (isWonderland) {
                matches++
                matchNumbers.push(n);
            } else if (error == "length") {
                n = skipLengthErrors;
                skipLengthErrors = n * 10;
            }
            n++;
        }
        
        return matchNumbers;
    }
}
