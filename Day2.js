class Day2 {

    partOne(input) {
        let finalNecessaryPaper = 0;
        const inputArray = input.split(/\r?\n|\r|\n/g);
        inputArray.forEach(element => {
            const dimensions = element.split('x');
            const l = Number(dimensions[0]);
            const w = Number(dimensions[1]);
            const h = Number(dimensions[2]);
            const extraPaper = Number(this.getSmallestIndexValue([(l*w),(w*h),(h*l)]));
            finalNecessaryPaper += ((l*w) + (w*h) + (h*l)) * 2 + extraPaper;
        });
        return finalNecessaryPaper;
    }

    getSmallestIndexValue(arrayOfValues) {
        let smallestValue = arrayOfValues[0];
        arrayOfValues.forEach(element => {
            smallestValue = element < smallestValue ? element : smallestValue;
        });
        return smallestValue;
    }
}
const input = `2x3x4`;
const obj = new Day2();
console.log(`result: ${obj.partOne(input)}`);