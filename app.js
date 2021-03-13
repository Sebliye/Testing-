/* 
 4. Write a function swap that swaps the first and last element of the array.
 
 */
 function swap(arr){
      let temp=arr[0]
      arr[0]=arr[arr.length-1];
      arr[arr.length-1]=temp;
      return arr;
 }
 //console.log(swap([1,2,3]))


 /* 
 5. Write a function reverse that takes an array of numbers
  and returns a new array that is in reverse order.
 */

 function reverse(arr){
      return arr.reverse()
 };
 //console.log(reverse([1,2,3,8]))

 function reverse2(arr){
      let x=[];

      for(let i=arr.length-1;i>=0;i--){
           x.push(arr[i])
      }
      return x;
 }
 //console.log(reverse2([8,9,10]))

 /* 
 6. Write a function that takes an array of numbers and removes the second element in the array.
 */
 function removeSecond(arr){
       arr.splice(1,1);
       return arr;
 };
 console.log(removeSecond([1,2,3]))