describe('Blackjack', () => {
    const ace = { val: 11, displayVal: 'Ace', suit: 'hearts' };
    const two = { val: 2, displayVal: '2', suit: 'hearts' };
    const four = { val: 4, displayVal: '4', suit: 'hearts' };
    const five = { val: 5, displayVal: '5', suit: 'hearts' };
    const six = { val: 6, displayVal: '6', suit: 'hearts' };
    const seven = { val: 7, displayVal: '7', suit: 'hearts' };
    const nine = { val: 9, displayVal: '9', suit: 'hearts' };
    const ten = { val: 10, displayVal: '10', suit: 'hearts' };

    describe('dealerShouldDraw function', () => {

    });

    describe('calcPoints function', () => {
        it('No aces should calc correctly', () => {
            const expected = {
                total: 19,
                isSoft: false
            };
            expect(calcPoints([ten, nine])).toEqual(expected);
        });
        it('1 soft ace should calc correctly', () => {
            const expected = {
                total: 19,
                isSoft: true
            };
            expect(calcPoints([ace, six, two])).toEqual(expected);
        });
        it('1 not soft ace should calc correctly', () => {
            const expected = {
                total: 18,
                isSoft: false
            };
            expect(calcPoints([ten, two, ace, five])).toEqual(expected);
        });
        it('Multiple soft aces should calc correctly', () => {
            const expected = {
                total: 20,
                isSoft: true
            };
            expect(calcPoints([ace, two, ace, six])).toEqual(expected);
        });
        it('Multiple not soft aces should calc correctly', () => {
            const expected = {
                total: 19,
                isSoft: false
            };
            expect(calcPoints([ace, two, ace, ten, five])).toEqual(expected);
        });
    });
    
});