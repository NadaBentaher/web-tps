function add(a : number, b: number): number{
    return a+b;
}
function greet(name : string,age?: number){
    if (age != undefined){
        console.log(`Bonjour ${name}!`);
    }
    else{
         console.log(`Bonjour ${name}, tu as ${age} ans.`);
    }
}
function power(base: number, exp: number = 2): number {
    return base ** exp;
}

function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: any, b: any): any {
  return a + b;
}