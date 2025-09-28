class Person{
    name : string;
    age : number;
    constructor(name: string, age : number){
        this.name=name;
        this.age=age;
    }
    greet() {
        console.log("Bonjour, je m'appelle ",this.name);
    }
}
class Student extends Person{
    school : string;
    constructor(name:string,age:number,school:string){
        super(name,age);
        this.school=school;
    }
}
abstract class Shape{
    abstract area() : number;
}
class Circle extends Shape{
    rayon : number;
    constructor(rayon: number){
        super();
        this.rayon= rayon;
    }
    area() : number{
        return this.rayon*this.rayon*Math.PI;
    }
}
class Rectangle extends Shape{
    Longueur : number;
    largeur : number;
    constructor(Longueur : number,largeur : number){
        super();
        this.Longueur=Longueur;
        this.largeur=largeur;
        
    }
    area() : number{
        return this.Longueur*this.largeur;
    }
}
interface Drivable{
    drive() : void;
}
class Car implements Drivable{
    drive(){
        console.log("driving");
    }
}