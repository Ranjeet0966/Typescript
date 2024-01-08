const   num1Element = document.getElementById('num1') as HTMLInputElement;
const num2Element = document.getElementById('num2') as HTMLInputElement;
const buttonElement = document.querySelector('button')!;

const numberResults: Array<number>=[];
const textResults: string[] = [];

type numorstring = number | string;
type Result = {val : number; timestamp:Date};

interface resultObj{
    val : number;
     timestamp:Date;
}
function add(num1: numorstring, num2: numorstring) {
    if(typeof num1 ==='number' && typeof num2 ==='number')
    {
        return num1+num2;
    }else if(typeof num1 ==='string' && num2 ==='string')
    {
        return num1+' '+num2;
    }
    return +num1 + +num2;
    
}

function printResult(resultObj :Result)
{
    console.log(printResult);
}

buttonElement.addEventListener('click', ()=>{

    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1, +num2);
    numberResults.push(result as number);
    const stringResult = add(num1, num2);
    textResults.push(stringResult as string);
    //console.log(result);
   // console.log(stringResult);
    printResult({val: result as number, timestamp:new Date()});
    console.log(numberResults, textResults)

})
const myPromise = new Promise<string>((resolve , reject)=> {
    setTimeout(()=>{
        resolve('It worked');
    },1000)
});

myPromise.then((result)=>{
    console.log(result.split('w'));
})


