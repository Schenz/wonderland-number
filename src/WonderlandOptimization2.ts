export class WonderlandOptimization2 {
    private digits = (n: bigint): number[] => Array.from(n.toString()).map(Number) as number[];

    private permutation(l1: number[], l2: number[]): boolean {
        if (l1.length !== l2.length) {
            return false;
        }

        const sorted1 = l1.slice().sort();
        const sorted2 = l2.slice().sort();

        for (let i = 0; i < sorted1.length; i++) {
            if (sorted1[i] !== sorted2[i]) {
                return false;
            }
        }
        return true;
    }

    public wonderland(n: bigint): boolean {
        const nums = [BigInt(6) * n, BigInt(5) * n, BigInt(4) * n, BigInt(3) * n, BigInt(2) * n];
        const nDigits = this.digits(n);
        for (const num of nums) {
            const result = this.permutation(this.digits(num), nDigits);
            if (!result) {
                return result;
            }
        }

        return true;
    }

    public findWonderlandNumber(maxMatches: number): bigint[] {
        let n: bigint = BigInt(1_000_000);
        let numMatches = 0;
        let matches = new Set<bigint>([BigInt(142_857)]);
        while (numMatches < maxMatches) {
            n = (Array.from(matches).pop()!) + BigInt(1287);
            const result = this.wonderland(n);
            
            if (result) {
                matches.add(n);
            }

            const tempSet = new Set<bigint>();
            matches.forEach(match => tempSet.add(match * BigInt(10)));

            // Merge the temporary set with the original set
            tempSet.forEach(match => matches.add(match));
            numMatches = matches.size;
        }
        
        return Array.from(matches).slice(0, maxMatches);
    }
}
