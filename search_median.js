const input = [8, 7, 7, 9, 5, 4, 2, 9];

function result(input){
    //sort input
    //2,4,5,7,7,8,9,9
    const sorted = input.sort();
    //check length
    const length = input.length;

    if(length%2 == 1)
        return input[(length+1)/2]
    else {
        const halfLength = length/2;
        //array start from 0, length start from 1
        //halfLength-1 and halfLength for middle number then find the avg 
        median = (input[halfLength-1] + input[halfLength]) / 2
        return median
    }
        
}

console.log(result(input));