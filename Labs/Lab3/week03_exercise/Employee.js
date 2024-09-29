//TODO - Create Employee Module here and export to use in index.js

let employees = [
    {id: 1, firstName: "Pritesh", lastName: "Patel", email: "pritesh@gmail.com", Salary:5000},
    {id: 2, firstName: "Krish", lastName: "Lee", email: "krish@gmail.com", Salary:4000},
    {id: 3, firstName: "Racks", lastName: "Jacson", email: "racks@gmail.com", Salary:5500},
    {id: 4, firstName: "Denial", lastName: "Roast", email: "denial@gmail.com", Salary:9000}
]

exports.details = function(){
    var s ="Employee details: <br>"
    for( var i in employees){
    for( const [key, value] of Object.entries(employees[i])){
        s=s+`${key} ${value}<br>`
    }
    s=s+'<br>'

}
    return s

}

exports.orderedNames= ()=>{
    var arr=[]
    for( const [key, value] of Object.entries(employees)){
        arr.push(`${value.firstName} ${value.lastName}`)
    }
    arr.sort()
    return arr.join("<br>")
}

exports.totalSalary = ()=>{
    var sum = 0;
    for( const [key, value] of Object.entries(employees)){
        sum=sum+value.Salary
    }
    return sum
}





