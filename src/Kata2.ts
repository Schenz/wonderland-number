export class Kata2 {
    public findWonderlandNumber(maxMatches: number): number[] {
        let n = 142_857;
        const matches = new Set<number>(); // Using Set to keep matches unique
        let nextStartingPoint = n * 10; // Initial next starting point
        for (; n < nextStartingPoint; n++) {
            matches.add(n);
            if (matches.size === maxMatches) {
                return Array.from(matches);
            }
            
            // Update next starting point based on last match found
            n = ((Array.from(matches).pop()! * 10) + 1287) - 1;

            // Multiply each match by 10 and add to a temporary set
            const tempSet = new Set<number>();
            matches.forEach(match => tempSet.add(match * 10));

            // Merge the temporary set with the original set
            tempSet.forEach(match => matches.add(match));

            // Check if matches size equals or exceeds maxMatches
            if (matches.size >= maxMatches) {
                // If so, trim matches to maxMatches
                return Array.from(matches).slice(0, maxMatches);
            }

            // make sure we continue to loop
            nextStartingPoint = nextStartingPoint * 10;
        }
        return Array.from(matches);
    }
}
