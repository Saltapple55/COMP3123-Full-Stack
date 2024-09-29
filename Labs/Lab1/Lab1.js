//Audrey Tjandra 101420460
function capitalize(s){
    s=s.trim()
    sarr=s.split(" ")
    capped=""
    for(var i=0;i<sarr.length;i++){
    capped=capped+sarr[i][0].toUpperCase()+sarr[i].slice(1)+" "
    }
    return capped
}
console.log("Q1")
console.log(capitalize("Hello my name is Audrey"))
console.log(capitalize("the quick brown fox"))

function max3(a, b, c){
    var largest=a;
    if (a<b){
        if (b<c) largest= c;
        else largest=b;
    }
    else if (a<c) largest=c;
    return largest
}
console.log("Q2")

console.log(max3 (1,0,1));
console.log(max3 (0,-10,-20));
console.log(max3 (1000,510,440));

function right(s){
    if(s.length<=3 ) return s
    var right=s.slice(s.length-3)
    return right+s.slice(0, s.length-3)
}
console.log("Q3")

console.log(right("Python"));
console.log(right("JavaScript"));
console.log(right("Hi"));

function array_max_sum(arr, digits){
    var max=Number.MIN_SAFE_INTEGER;
    for(var i =0; i<arr.length-digits+1;i++){
        var sum=0
        for(var j=i;j<digits+i;j++){
            sum=sum+arr[j]
        }
        if(sum>max) max=sum
    }
    return max
}
console.log("Q5")

console.log(array_max_sum([1, 2, 3, 14, 5], 2))
console.log(array_max_sum([2, 3, 5, 1, 6], 3))
console.log(array_max_sum([9, 3, 5, 1, 7], 2))

