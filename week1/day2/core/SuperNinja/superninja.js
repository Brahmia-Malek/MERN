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
class Sensei extends Ninja{
    constructor(name){
        super(name)
        this.health=200;
        this.speed=10;
        this.strength=10;
        this.wisdom=10;

    }

speakWisdom(){
    super.drinkSake();
    console.log("A wise message: Wisdom is the key to true power.")

}    
}
// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
