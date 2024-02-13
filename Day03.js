class Day3 {

    partOne(input){
        let xCoordinate = 0;
        let yCoordinate = 0;
        const grid = new Map();
        const elfDirections = input.split('');
        let counter = 0;
        elfDirections.forEach(element => {
            switch(element){
                case ">" :
                    xCoordinate++;
                    break;
                case "<" :
                    xCoordinate--;
                    break
                case "^" :
                    yCoordinate++;
                    break;
                case "v" :
                    yCoordinate--;
            }
            const coordinate = `${xCoordinate}x${yCoordinate}`;
            const tmp = (grid.get(coordinate) ?? 0) + 1;
            grid.set(coordinate, tmp);
            if(tmp == 1) counter++;
        });
        return counter;
    }
}