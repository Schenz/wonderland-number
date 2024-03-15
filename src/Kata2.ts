export class Kata2 {
    private readonly nDigits: number[] = [];
    private readonly counts: number[] = new Array(10).fill(0);

    // Function to check if a number is a wonderland number
    public wonderland(n: number): { isWonderland: boolean, reason?: string } {
        this.nDigits.length = 0; // Reuse nDigits array
        let temp = n;
        while (temp > 0) {
            this.nDigits.push(temp % 10);
            temp = Math.floor(temp / 10);
        }

        for (let i = 6; i >= 2; i--) {
            const num = i * n;
            let numTemp = num;
            let numDigits = 0;

            // Optimized digit extraction using bitwise operations
            while (numTemp > 0) {
                numDigits++;
                numTemp = numTemp / 10 | 0; // Integer division using bitwise OR
            }

            if (numDigits > this.nDigits.length) {
                return { isWonderland: false, reason: "length" };
            }

            this.counts.fill(0); // Reuse counts array
            temp = n;
            numTemp = num;

            // Counting and comparing digits using bitwise operations
            while (temp > 0) {
                this.counts[temp % 10]++;
                this.counts[numTemp % 10]--;
                temp = temp / 10 | 0; // Integer division using bitwise OR
                numTemp = numTemp / 10 | 0; // Integer division using bitwise OR
            }

            for (let count of this.counts) {
                if (count !== 0) return { isWonderland: false, reason: "permutation" };
            }
        }
        return { isWonderland: true };
    }

    // Function to find the first wonderland number
    public findWonderlandNumber(maxMatches: number): [number, number[]] {
        let n = 100_000;
        const matches = [];
        let nextStartingPoint = 1_000_000; // Initial next starting point
        for (; n < nextStartingPoint; n++) {
            const result = this.wonderland(n);
            if (result.isWonderland) {
                matches.push(n);
                if (matches.length === maxMatches) return [matches.length, matches];
            } else if (result.reason === "length") {
                // Skip to the next starting point
                n = nextStartingPoint - 1; // Adjust n to end the current loop
                nextStartingPoint *= 10; // Update next starting point for the next iteration
            }
        }
        return [matches.length, matches];
    }
}
