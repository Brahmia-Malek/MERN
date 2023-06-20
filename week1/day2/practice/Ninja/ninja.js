class Ninja{
    constructor(name){
        this.name=name;
        this.health=100;
        this.speed=3;
        this.strength=3;

    }

sayName(){

    console.log(`My name is${this.name}.`);
    
}
showStats(){
    console.log(` Name: ${this.name}.`);
    console.log(` Strenght: ${this.strength}.`);
    console.log(` Speed: ${this.speed}.`);
    console.log(` health: ${this.health}.`);

}
drinkSake(){
    this.health+=10;
    console.log(`${this.name} drank sake and gained 10 health.`);
}


}
const ninja1= new Ninja("Malek")
ninja1.sayName();
ninja1.showStats();
