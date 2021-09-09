function min(a,b){
    if(a<b) return a;
    else return b;
}

function isEven(n){
    if(n==0) return true;
    else if(n===1) return false;
    else if (n<0) return isEven(-n);
    else return isEven(n - 2);
}

let result = min(2,3);
console.log("result = " +result);

let value = isEven(4);
console.log("value = " +value);