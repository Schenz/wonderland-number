export class Kata {
    // Function to get digits of a number
    private digits = (n: number): number[] => n.toString().split('').map(Number)

    // Function to check if two lists are permutations of each other
    private permutation(l1: number[], l2: number[]): boolean {
        if (l1.length !== l2.length) return false;

        const sorted1 = l1.slice().sort();
        const sorted2 = l2.slice().sort();

        for (let i = 0; i < sorted1.length; i++) {
            if (sorted1[i] !== sorted2[i]) {
                return false;
            }
        }
        return true;
    }

    // Function to check if a number is a wonderland number
    public wonderland(n: number): boolean {
        const nums = [2 * n, 3 * n, 4 * n, 5 * n, 6 * n];
        const nDigits = this.digits(n);
        return nums.every(num => this.permutation(this.digits(num), nDigits));
    }

    // Function to find the first wonderland number
    public findWonderlandNumber(maxMatches: number): number[] {
        let n = 100_000;
        let matches = 0;
        let matchNumbers = [];
        while (matches < maxMatches) {
            if (this.wonderland(n)) {
                matches++
                matchNumbers.push(n)
            }
            n++;
        }
        
        return matchNumbers;
    }
}
