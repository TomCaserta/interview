import { Program } from ".";

describe('Program', () => {
    let program;

    beforeEach(() => {
        program = new Program();
    });

    describe('#getIncrementer', () => {
        it('should return an incrementer function', () => {
            expect(typeof program.getIncrementer()).toBe('function');
        }); 
    });

    describe('#getLength', () => {
        it('should return 0 by default', () => {
            expect(program.getLength()).toBe(0);
        });
    });

    it('should be able to count the amount of times the incremter was called', function () {
        const incrementer = program.getIncrementer();

        incrementer();
        incrementer();
        incrementer();

        expect(program.getLength()).toBe(3);
    });
});