export class WonderlandNoCalculation {
    public findWonderlandNumber(maxMatches: number): number[] {
        let matches = new Set<number>([142_857]);
        let numMatches = 1;
    
        while (numMatches < maxMatches) {
            // Multiply each match by 10 and add to a temporary set
            const tempSet = new Set<number>();
            matches.forEach(match => tempSet.add(match * 10));

            // Merge the temporary set with the original set
            tempSet.forEach(match => matches.add(match));

            // Find the largest number in the array and add 1287 to it
            const nextNumber = ((Array.from(matches).pop()!) + 1287);
            matches.add(nextNumber);

            numMatches = matches.size;
        }
    
        return Array.from(matches).slice(0, maxMatches);
    }    
}
