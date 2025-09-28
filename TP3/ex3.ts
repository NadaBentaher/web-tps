let id : number | string ;
id = 12;
//id = "ABC"
type A = {matière : string};
type B = {coefficient : number};
type C = A & B;
let personne : C = {
    matière : "math",
    coefficient : 2
}

type Status  = "pending" | "done" | "canceled";
let tache : Status = "canceled";

let unknownValue: unknown = "Bonjour";
let length = (unknownValue as string).length;