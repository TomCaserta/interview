import { interpolate } from ".";

describe('interpolate', () => {
    it('should return the input as is if no replacements are needed', () => {
        expect(interpolate('Hello World', {})).toEqual('Hello World');
    });

    it('should interpolate 1 level deep', () => {
        expect(interpolate('Hello {{name}}', { name: 'Tom' })).toEqual('Hello Tom');
    });

    it('should accept alphanumeric keys', () => {
        expect(interpolate('Hello {{name1}}', { name1: 'Tom' })).toEqual('Hello Tom');
    });

    it('should allow deep access of properties', () => {
        expect(interpolate('Hello {{your.name}}', { your: { name: 'Tom' } })).toEqual('Hello Tom');
    });

    it('should make multiple replacements', () => {
        expect(interpolate('Hello {{your.name}}, I am {{me}}', { me: 'Rob', your: { name: 'Tom' } })).toEqual('Hello Tom, I am Rob');
    });

    it('should replace with an empty string if no replacement is found', () => {
        expect(interpolate('Hello {{name}}', { })).toEqual('Hello ');
        expect(interpolate('Hello {{deep.name}}', { })).toEqual('Hello ');
    });

    it('should accept arbitrary spaces between the brackets', () => {
        expect(interpolate('Hello {{ name }}', { name: 'Tom' })).toEqual('Hello Tom');

        expect(interpolate('Hello {{ name}}', { name: 'Tom' })).toEqual('Hello Tom');

        expect(interpolate('Hello {{ name   }}', { name: 'Tom' })).toEqual('Hello Tom');
    });
});