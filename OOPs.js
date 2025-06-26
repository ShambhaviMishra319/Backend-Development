// const obj1={
//     name:'shambhavi'
// }
// const obj2={
//     designation:'SDE AT GOOGLE'
// }

// const obj3={
//     ...obj1,...obj2
// }

// console.log(obj3)
// console.log(Object.keys(obj1).length)
// console.log(Object.keys(obj3).length)
// console.log(typeof obj3==='object' && obj3!=null)

// let obj = { name: "Sourav" };
// console.log(typeof obj === "object" && obj !== null);


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      PROTOTYPE       >>>>>>>>>>>>>>>>>>>>>>>>>>>
// const person={
//     greet:function(){
//         console.log("hello")
//     }
// }

// const shambhavi={
//     name:'shambhavi'
// }

// shambhavi.__proto__=person
// shambhavi.greet()



//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> JS IS PROTOTYPE OBJECT ORIENTED LANGUAGE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// class person{
//     constructor(name,designation){
//         this.name=name
//         this.designation=designation
//     }
//     greet(){
//         console.log(`Hello my name is ${this.name} and i am a ${this.designation} at GOOGLE`)
//     }
// }

// const shambhavi=new person(
//     'shambhavi',
//     'Software Engineer'
// )

// shambhavi.greet()



//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>   INHERITANCE   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
class vehicle{
    constructor(brand,speed){
        this.brand=brand
        this.speed=speed
    }
    move(){
        console.log(`this car of brand > ${this.brand} has speed > ${this.speed}`)
    }
}

class car extends vehicle{
    constructor(brand,fuel,speed){
        super(brand,speed); //calls the parent constructor
        this.fuel=fuel
    }
    move(){
        super.move() //calls the parent method
        console.log(`this car of brand ${this.brand} takes this fuel ${this.fuel} and has a speed of ${this.speed}`)
    }

    honk(){
        console.log("beep beep")
    }
}

const c1=new car('BMW','PETROL',56)
c1.move();
c1.honk()