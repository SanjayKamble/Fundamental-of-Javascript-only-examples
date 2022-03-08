//Arrays in javascript and iterating over it


// Following are the three ways to create an array

const cars = ['mercedes','BMW','maruti','KIA'];

console.log(cars[2]);
console.log(cars.length);

const mobiles = [];

mobiles[0] = 'nokia';
mobiles[1] = 'samsung';
mobiles[2] = 'lg';

console.log(mobiles);

const names = new Array('namu','sanjay','arya');

console.log(names);


//Accessing and Manipulating array elements

cars[0] = 'volvo';
cars.push('MG');


console.log(cars);

document.getElementById('demo').innerText = cars;

let lastCar  = cars[cars.length-1];

console.log(lastCar);

mobiles[9]='iphone';// this creates holes in array

console.log(mobiles);

// iterating through an array

// using for loop

let carsLenght = cars.length;
let text = '<ul>';

for (let i = 0; i < carsLenght ; i++) {
    text += '<li>'+cars[i]+'</li>';
}

text += '</ul>';

console.log(text);

document.getElementById('demo').innerHTML  = text;

let var1='';

for (let i = 0; i < cars.length; i++) {
     var1 += cars[i]+ " ";
    
}

console.log(var1);
document.getElementById('demo').innerHTML  = var1;


//using for each loop

let text1 = '<ul>';

mobiles.forEach(myFunction);

    text1 += '</ul>';

    function myFunction(value) {
        text1 += "<li>"+value+"</li>";
    }

    console.log(text1);

    document.getElementById("demo").innerHTML = text1;

    const arr2 = ['a','b','c','d','e'];

    arr2.forEach((ele) => console.log(ele));

    const arr3 = ['a','b','c','d','e'];

    arr3.forEach(printArray);

    function printArray(ele1,i){
        //document.write(i + ":" + ele1 +"<br>");

       //document.write(ele1 +"<br>");

       document.getElementById('demo').innerHTML = ele1;
      // document.write(ele1);
    }