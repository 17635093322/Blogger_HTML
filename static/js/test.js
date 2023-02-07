var number_demo;
function factorial(num){
    if(num<=1){
        console.log(number_demo);
        return number_demo;
    }else{
        number_demo = num * factorial(num-1);
        console.log(number_demo)
        // return num * factorial(num-1);
    }
}
factorial(5)
console.log(number_demo)