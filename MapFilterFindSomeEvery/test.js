const assert = require('assert');
const { map, filter, find, some, every } = require('./mapFilterFindSomeEvery')

describe('Map', () => {
    it('should square each number in the array', () => {
        const result = map([1, 2, 3, 4, 5], n => n * n);
        assert.deepEqual(result, [1, 4, 9, 16, 25]);
    });
});

describe('Filter', () => {
    it('should return only odd numbers from an array', () => {
        const result = filter([1, 2, 3, 4, 5], n => n % 2 !== 0);
        assert.deepEqual(result, [1, 3, 5]);
    });
});

describe('Find', () => {
    it('should find an existing element in the array', () => {
        const result = find(['a', 'b', 'c'], 'b');
        assert.equal(result, 'b');
    });

    it('should return "Element not found" when element is not present', () => {
        const result = find(['a', 'b', 'c'], 'd');
        assert.equal(result, 'Элемент не найден');
    });
});

describe('Some', () => {
    it('should return true if at least one element satisfies the condition', () => {
        const result = some([1, 3, 5, 7, 10], n => n > 9);
        assert.equal(result, true);
    });

    it('should return false if no elements satisfy the condition', () => {
        const result = some([1, 3, 5, 7, 9], n => n > 9);
        assert.equal(result, false);
    });
});

describe('Every', () => {
    it('should return true if all elements satisfy the condition', () => {
        const result = every([1, 3, 5, 7, 9], n => n % 2 !== 0);
        assert.equal(result, true);
    });

    it('should return false if any element does not satisfy the condition', () => {
        const result = every([1, 3, 5, 7, 8], n => n % 2 !== 0);
        assert.equal(result, false);
    });
});