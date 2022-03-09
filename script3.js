//find the total of all elements in array using forEach() function
const arr = [1,4,56,4,34,9];


let sum=0; 



arr.forEach(findSum);

function findSum(ele){

    sum += ele;
}



console.log(sum);

// Example 2: Adding 10 to every number in array

const arr1 = [2,34,8,45,3];



arr1.forEach((ele,i,array)=>{
    array[i] = ele + 10;
});

console.log(arr1);

//Example3: copying an array into another

const arr2 = [4,5,'g','r'];
const arr3 =[];

arr2.forEach((ele)=>{

    arr3.push(ele);
});

console.log(arr3);


//Example 4 : Printing content of array in index-value form


const arr4 = ['r','dfg',7,788];

arr4.forEach((ele,i)=>{
    console.log('arr4['+i+'] = '+ele);
})


