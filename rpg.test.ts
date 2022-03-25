describe('Test function', function () {
    it('should be true when true given', function () {
        expect(true).toBe(true)
    });
    it('should not pass', function () {
        expect(true).toBe(false)
    });
});