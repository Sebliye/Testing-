function fib(n){
     if(n<=1){
          return 1;
     }
     let arr=[0,1];
     for(let i=2;i<=n;i++){
          let a=arr[i-1];
          let b=arr[i-2];
          arr.push(a+b)
     }
     return arr;
}
console.log(fib(12))