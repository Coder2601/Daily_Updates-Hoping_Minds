// for(var i = 3;i<=15;i+=2){
//     console.log(i);
// }
// console.log('Loop ended');



// for(var x = 1;x<46; x++){
//     if(x%3===0 && x%5 !==0){
//         console.log(x+ ' Fizz');
//     } 
//     else if(x%3!==0 && x%5===0){
//         console.log(`${x} = Buzz`);
//     }
//     else if(x%3===0 && x%5 ===0){
//         console.log(x+' FizzBuzz');
//     }
// }


// var fname ='Divya ';
// var lname = 'Goyal';

// //Divya Goyal
// var fullName = fname.concat(lname);
// console.log(fullName);

// console.log(fullName.length);

// console.log(fname.toUpperCase());
// console.log(lname.toLowerCase());

// console.log(fname);
// console.log(fname.trim())

// var sen = 'Ram loves eating apple. Ram is happy';
// console.log(sen);

// var newSen = sen.replace(/ram/ig,'Saksham');
// console.log(newSen);

// console.log(fullName.slice(0,5));
// console.log(fullName.substring(0,4));

// console.log(fullName.charAt(5));




// const arr = ['oo','pp'];

// const[tag1,tag6='ll',...t4] = arr;
// console.log(t4);



// var fruits = ['apple','mango','grapes'];
// console.log(fruits);

// fruits.push('orange');
// fruits.push('orange');
// console.log(fruits);

// fruits.pop();
// console.log(fruits);

// fruits.unshift('tomato');
// fruits.unshift('tomato');
// console.log(fruits);

// fruits.shift();
// console.log(fruits);

// ['apple', 'mango', 'grapes', 'orange']

// for(var i=0;i<fruits.length;i++){
//     console.log(fruits[i]);
// }


// var arr = [];
// for(var i=1;i<=5;i++){
//     var x = prompt('Enter any name');
//     arr.push(x);
// }
// console.log(arr);
// var x = Math.floor(Math.random()*5)
// console.log(`${arr[x]} is going to buy lunch today!`);


// var mainArr = [];


// for(var i=0;i<5;i++){
//     if(i==1 || i==4){
//         var subArr = [];
//         for(var j=0;j<2;j++){
//             var ip = prompt('Enter any value');
//             subArr.push(ip);
//         }
//         mainArr.push(subArr);
//     }
//     else{
//         var x = prompt('Enter any value');
//         mainArr.push(x);    
//     }  
// }
// console.log(mainArr);



//defining objects with literal method

// var myList={
//     english:50,
//     maths:66,
//     hindi:98
// }
// for (let i in myList) {
//     console.log(i);
//     console.log((myList)[i]);
// }


//Method 2- using create method
// var myObj = Object.create(null);
// console.log(myObj); 

// myObj.fname='Divya';
// console.log(myObj.fname);


//Method 3 - using new keyword
// var myObj = new Object();
// console.log(myObj);

// myObj.fname='Divya';
// console.log(myObj.fname);


// class CelloBottle{
//     constructor(r,h){
//         this.radius = r;
//         this.height = h;
//         this.logo='Cello'
//     }
// }

// let myBottle = new CelloBottle(23,55);
// console.log(myBottle);

// var arr = [18,2,26,23,78,98,77,55,36,21,14,7,3,6];
// document.write(arr.length);

// arr.forEach((i) => {
//     console.log(i);
//     i
// });

// for (i of arr) {
//     console.log(arr[i]);
// }


// Write a JavaScript program which accept a number as input and 
// insert dashes (-) between each two even numbers. For example if you 
// accept 025468 the output should be 0-254-6-8.



// Function -> Named, anonymous, arrow

//Named Functions


// var x  = Number(prompt('Enter first number'));
// var y = Number(prompt('Enter second number'));

// //defining a function
// function addition(a,b=87){  //arguments - a,b
//     alert(a+b); 
// }

// addition(x,y); //parameters
// addition(8,3); //11
// addition(88); //120
// addition(75,21); //96

//Write a function to generate even numbers in the given range

// var check =  (x,a,b)=>{
//     if(x==='e'){
//         if(a%2===0){
//             for(let i =a;i<=b;i+=2){
//                 console.log(i);
//             }
//         }
//         else{
//             a+=1;
//             for(let i =a;i<=b;i+=2){
//                 console.log(i);
//             }
//         }
//     }
//     else{
//         if(a%2===0){
//             a++;
//             for(let i =a;i<=b;i+=2){
//                 console.log(i);
//             }
//         }
//         else{
//             for(let i =a;i<=b;i+=2){
//                 console.log(i);
//             }
//         }
//     }

// }
// check('o',4,9);
// check('e',89,150);



// var myObj={
//     name:'Divya',
//     age:59,
//     criteria:(x)=>{
//         if(x>=18){
//             console.log('Eligible');
//             x;

//         }
//         else if(x<18){
//             console.log('Under-age');
//             x;
//         }
//         else{
//             console.log('check your input');
//         }
//     }
// }

// myObj.criteria(myObj.age);
// myObj.criteria();

// var anonymousFun = function(){console.log('I am anonymous function');}


//Local and global scope
// var myName = 'divya';//global
// var myAge=9;
// const user='Guest'
// const printIt=()=>{
//     console.log(myName);
//     let myAge = 52; //local
// }
// printIt();
// console.log(myAge);
// var myAge = 20;
// console.log(myAge);

// // user='Agent';
// console.log(user);

//onclick, ondblclick, onchange, onfocus,onblur, onkeyup, onkeydown, onmouseover, onmouseenter, onmouseleave


function triggerButton(){
    alert('Enter values in input fields..')
}

const nameInput=()=>{
    console.log('Typing name...');
}

const focussing=()=>{
    console.log('Focus on age input box')
}

const blurring=()=>{
    console.log('Focus diverted from age input box');
}

function downKeyPressed(event){
    console.log('A key is pressed');
    console.log(event.key);
}

function hoverEffect(){
    console.log('Name field left');
}


function submitted(e){
    // e.preventDefault();
    console.log('Form submitted successfuly');
};
