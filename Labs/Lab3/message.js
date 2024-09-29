exports.name='Audrey'
exports.sum = (a,b) => a+b;



exports.myCars=["Mazda", "BMW", "FORD"]
class Car{
    constructor(type)
    {this.type=type}
    Model(){
        return this.type

    }

}

exports.Car=Car

exports.myClass=class{
    constructor(age){
        this.age=age
    }
    Age(){
        return this.age
    }
}