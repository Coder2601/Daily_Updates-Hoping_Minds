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

// function submitted(event){
//     event.preventDefault();
//     console.log('Form submitted successfuly');
// };



// var x = document.getElementById('heading2')
// // console.log(x);
// x.style.color='cyan';
// x.style.backgroundColor='orange'
// x.style.display='inline-block'

// //how to add multiple stylings with one dom manipulation


// // console.log( document.getElementById('heading2').innerHTML)
// // console.log( document.getElementById('heading2').innerText)

// document.getElementById('heading2').innerHTML='<em>Learning JS DOM</em>'

// // document.getElementById('heading2').innerText='<p>Learning JS DOM</p>'

// var img = document.getElementById('pic1');
// var photo = true;

// function hovering(){

//     if(photo){
//         img.src = 'https://imagekit.io/blog/content/images/2019/12/image-optimization.jpg';
//         photo=!photo
//     }
//     else{
//         img.src='https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg';
//         photo=!photo;
//     }

// }

// function update(){
//     // console.log('typing...');
//     let elements = document.getElementsByClassName('ip')[1].value;
//     console.log(elements);

// }

// let collection=document.getElementsByClassName('ip');

// let myDiv=document.getElementById('values');


// for(let i=0;i<collection.length;i++){
//     collection[i].addEventListener('change',(event)=>{
//         myDiv.innerHTML += `<p>${event.target.id} : ${event.target.value}</p>`;
//         // console.log(`<p>${event.target.id} : ${event.target.value}</p>`);
//     })
// }


// let myButton = document.getElementsByTagName('button')[0];


// myButton.addEventListener('click',()=>alert('Button Clicked!'))


// function func(event){
//     event.preventDefault()
//     myDiv.style.display='block'
// }


// function a(){
//     console.log('Countdown of 30 second begins....');
//     var count = 30
//     let x = setInterval(()=>{
//             console.log(count);
//             count--;
//         },1000);
//     setTimeout(()=>{
//         clearTimeout(x);
//         alert("Time's Up!!")
//     },30000);
// }

// // function b(){
// //     console.log('b');
// //     let x = setInterval(()=>{
// //         console.log('Timeout delay of 5 seconds is called....');
// //     },5000);

// //     setTimeout(()=>{clearInterval(x); console.log('Cleared Interval');},10000)
// // }
// // b();
// a();




let tz = 'am'
let x = new Date();

let hours = x.getHours();
let mins = x.getMinutes()
let sec = x.getSeconds();
document.getElementById('liveClock').innerHTML =`<i>${hours} : ${mins} : ${sec} ${tz}</i>`;

let clock = setInterval(()=>{
    sec+=1;
    if(sec>60){
        sec=1;
        mins+=1;
    }
    if(mins>60){
        mins=1;
        hours+=1;
    }
    if(hours>24){
        hours=1;
    }
    if(hours>=12){
        tz='pm'
    }
    else{
        tz='am'
    }
    let print = `${hours} : ${mins} : ${sec} ${tz}`;
    document.getElementById('liveClock').innerHTML = `<i>${print}</i>`
    // console.log(`${hours} : ${mins} : ${sec}`);
},1000)






// var arr = [1,2,3,4,5,6];


// let newArr = arr.map(function(item){
//     return item*2;
// })
// console.log(arr);
// console.log(newArr);

// //Alternate method by defining arrow function outside map function
// function demo(item){
//     return item*2;
// }
// let newArr2 = arr.map(demo)
// console.log(newArr2);



// let newArr = arr.filter((item)=>{
//     if(item%2 === 0){
//         return item;
//     }
// })

// console.log(arr);
// console.log(newArr);
// var op = arr.reduce(demo,20);

// function demo(a,b){
//     // console.log(a);
//     // console.log(b);
//     // console.log(a+b);
//     return a*b;
// }
// console.log(op);




//op1 = javascript
//op2 = Learn javascript
//op = a,a,i


// var arr = ['j','a','v','a','s','c','r','i','p','t'];
// var vowels = ['a','e','i','o','u'];

// arr.forEach((item)=>{
//     if(vowels.includes(item)){
//         console.log(item);
//     }
// })
// var onlyVowels = arr.filter((item)=>{
//     if(vowels.includes(item))return item;

// })
// console.log(onlyVowels);

// let op1 = arr.reduce((acc,cv)=>acc+cv) //javascript
// let op2 = arr.reduce((acc,cv)=>acc+cv,'Learn ') //Learn javascript

// let op3 = arr.filter(vowelFilter);

// function vowelFilter (item){
//     if(item=='a'||item=='e'||item=='i'||item=='o'||item=='u'){
//         return item;
//     }
// }
// console.log(op1);
// console.log(op2);
// console.log(op3);


//Objects methods
// var myObj = {
//     fname:'Pika',
//     lname:'Chu',
//     fullname:function(){
//         return (`${this.fname} ${this.lname}`)
//     }
// }
// console.log(myObj.fullname());

// function printing(game,time){
//     let x = `${this.fullname()} loves to play ${game} in the ${time}`
//     console.log(x);
// }
//apply method 
//1. Binds a function with another function or another object
//2. Executes the  function at same time.
///3. all parameters are passed in an array

// printing.call(myObj,'football','morning.');
// printing.apply(myObj,['chess','evening.']);



//Hoisting-> defines the functions and declare the variables on top-level.



// xyz();
// var x = 10;
// function xyz(){
//     x=50;
//     console.log(x);
// }


//Closures-> when a func is defined inside another func then parent func will not have access to child func properties, whereas vice versa is possible and that forms a closure

// function parent(){
//     var x = 10;
//     child();

//     function child(){
//         // var x = 50;
//         var y=45;
//         console.log(x);
//     }
//     console.log(y);
// }


// parent();



//Higher Order Functions- funcs that either take a func as an argument or returns a func or do both
// function parent(){
//     var x = 10;
//     return (function(){
//         return x;
//     });
// }
// console.log(parent()());



//Callstack 

// function a(x){
//     return x+1;
// }
// function b(y){
//     return a(y+1)
// }
// function c(z){
//     return b(z+1);
// }
// console.log(c(3));



//Callback Queue
// function a(func){
//     setTimeout(()=>{
//         console.log('a');
//         func();
//     },5000)
// }

// function b(){
//     setTimeout(()=>console.log('b'),2000)
// }

// a(b);






// function task1(t2){
//     setTimeout(()=>{
//         console.log('T1');
//         t2(t3)
//     },1000)
// }
// function task2(t3){
//     setTimeout(()=>{
//         console.log('T2');
//         t3()
//     })  
// }
// function task3(){
//     console.log('T3');
// }
// task1(task2);


//b
//a
// let hdng = document.querySelector('.myHdng')
// console.log(hdng.innerText);

// hdng.innerHTML = `<a href='#'>Form </a>`

//Callback Hell, Pyramid of Doom
// function task1(){
//     setTimeout(()=>{
//         console.log('Task 1 executed after 1s..')
//         setTimeout(()=>{
//             console.log('Task 1 executed after 1s..')
//             setTimeout(()=>{
//                 console.log('Task 1 executed after 1s..')
//                 setTimeout(()=>{
//                     console.log('Task 1 executed after 1s..')
//                     setTimeout(()=>{
//                         console.log('Task 1 executed after 1s..')
//                         setTimeout(()=>{
//                             console.log('Task 1 executed after 1s..')
//                             setTimeout(()=>{
//                                 console.log('Task 1 executed after 1s..')
//                                 setTimeout(()=>{
//                                     console.log('Task 1 executed after 1s..')
//                                 }, 1000)
//                             }, 1000)
//                         }, 1000)
//                     }, 1000)
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }
// task1()



//Promises
// var age = 21;
// var myPromise = new Promise((resolve,reject)=>{
//     if(age>=18){
//         resolve('Resolved: Eligible');
//     }else{
//         reject('Rejected: Not eligible');
//     }
// }).then((response)=>console.log(`then executed : ${response}`))
// .catch((err)=>{console.log(`catch executed: ${err}`)})



//Promise Chaining
// function timer(time){
//     return new Promise((resolve)=>{
//         return setTimeout(resolve,time);
//     })
// }
// timer(3000)
// .then(()=>{
//     console.log('Task 1 executed !!');
//     return timer(2000)
// })
// .then(()=>{
//     console.log('Task 2 executed!!');
//     return timer(5000)
// })
// .catch(err=>console.log(err))

//API - Application Programming Interface


//Using fetch and axios

//add "<script src="https://unpkg.com/axios/dist/axios.min.js"></script>"  in head section to use AXIOS


//URI  // URL


const result = axios('https://jsonplaceholder.typicode.com/posts')
console.log(result);

result.then((response)=>{
    return response.data
}).then((data)=>{
    // console.log(data);
    data.forEach(item=>{
        // console.log(item);
        for(let key in item){
            // console.log(`${key}: ${(item)[key]}`);
            document.getElementById('apiResponse').innerHTML += `${key}: ${(item)[key]} <br/>`
        }
        document.getElementById('apiResponse').innerHTML += `<br/> <hr> <br/>`
    })
})


let isReg = true;
let isLogged = true;
new Promise((resolve,reject)=>{
    if(!isReg && !isLogged){
        reject(`Registration Pending..!!`)
    }
    else if(isReg && !isLogged){
        reject(`Login Pending..!!!!`)
    }
    else{
        resolve(`Access Granted`)
    }
}).then(response=>console.log(`Log in Success.. ${response}`))
.catch(err=>console.log(`${err} Rejected!`))