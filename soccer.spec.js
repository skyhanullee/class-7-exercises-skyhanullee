describe('Tests for the soccer game', () => {
    describe('Test the getTotalPoints Method', () => {
        it('Should return correct point total', () => {
            const points = getTotalPoints('wwdl');

            expect(points).toBe(7);

            expect(getTotalPoints('llll')).toBe(0);
            expect(getTotalPoints('wwww')).toBe(12);
            expect(getTotalPoints('dddd')).toBe(4);
            expect(getTotalPoints('dddl')).toBe(3);
            expect(getTotalPoints('wdll')).toBe(4);
        });
        
    });
    
    describe("Test the orderTeams function", () => {
        it('Should return the correct teams, with points', () => {
            const team1 = {
                name: "Sounders",
                results: "wwww"
            };
            const team2 = {
                name: "SoundersTwo",
                results: "llll"
            };
            const team3 = {
                name: "SoundersThree",
                results: "dddd"
            };
            const team4 = {
                name: "SoundersFour",
                results: "wlwl"
            };

            const expectedString = `Sounders: 12
SoundersTwo: 0
SoundersThree: 4
SoundersFour: 6`;

            const result = orderTeams(team1, team2, team3, team4);

            expect(result).toEqual(expectedString);

        });
    });
});