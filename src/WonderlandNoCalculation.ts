export class WonderlandNoCalculation {
    public findWonderlandNumber(maxMatches: number): bigint[] {
        let matches = new Set<bigint>([142_857n]);
        let numMatches = 1;
    
        while (numMatches < maxMatches) {
            // Multiply each match by 10 and add to a temporary set
            const tempSet = new Set<bigint>();
            matches.forEach(match => tempSet.add(match * 10n));

            // Merge the temporary set with the original set
            tempSet.forEach(match => matches.add(match));

            // Find the largest number in the array and add 1287 to it
            const nextNumber = ((Array.from(matches).pop()!) + 1287n);
            matches.add(nextNumber);

            numMatches = matches.size;
        }
    
        return Array.from(matches).slice(0, maxMatches);
    }    
}
