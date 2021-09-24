export class Program {
    length = 0;
   
    /**
     * Gets a incrementer function that can be used to 
     * extend the length of the program
     * @returns {() => void}
     */
    getIncrementer() {
        return function () {
            this.length++;
        };
    }

    /**
     * Returns the length of the program
     * @returns {number}
     */
    getLength() {
        return this.length;
    }
}
