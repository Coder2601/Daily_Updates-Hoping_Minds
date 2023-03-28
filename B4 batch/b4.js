// // var fname = 'Divya ';
// // var lname = 'Goyal'
// // var fullName = fname.concat(lname);
// // console.log(fullName);

// // var len = fname.length
// // console.log(len);

// // console.log(fname.toUpperCase());
// // console.log(fname.toLowerCase());

// // var fruit = 'pineapple'
// // console.log(fruit.slice(4,9));

// // console.log(fullName.charAt(6));


// // var sen = 'Ram is eating apple. Ram is happy.';
// // console.log(sen);

// // var newSen = sen.replace(/ram/gi,'Ravi');
// // console.log(newSen);


// // var fruits = ['apple','mango','grapes'];
// // console.log(fruits.length);

// // console.log(fruits[0]);

// // fruits.push('oranges');
// // console.log(fruits);

// // fruits.pop();
// // console.log(fruits);

// // var thisIsAnArray = ["element1", "element2", "element3", "element4"];

// // for(var i =0;i < thisIsAnArray.length;i++){
// //     console.log(thisIsAnArray[i]);
// // }

// // var arr=[];

// // for(var i=1; i<=5;i++){
// //     var ip = prompt('Enter a name');
// //     arr.push(ip);
// // }
// // console.log(arr);

// // var rand = Math.floor(Math.random()*5);
// // console.log(rand);

// // console.log(arr[rand] + " is going to buy lunch today..! :)")
// // console.log(`${arr[rand]} is going to buy lunch today..! :)`)



// // var mainArr = [];


// // for(var i=0;i<4;i++){
// //     if(i<2 || i>2){
// //         var subArr =[];
// //     for(var j=0;j<2;j++){
// //         var ip = prompt('Enter values');
// //         subArr.push(ip);
// //     }
// //     mainArr.push(subArr);
// //     }
// //     else{
// //         var ip = prompt('Enter value');
// //         mainArr.push(ip)
// //     }
// // }
// // console.log(mainArr);

// //Method 1
// const myObj={
//     name:'verna',
//     color:'black',
//     model:2020,
//     avg:22,
//     fuel:'diesel',
//     move:function(){
//         console.log(`I have ${this.color} ${this.name} of model ${this.model}`);
//     }
// }

// // console.log(myObj);
// // console.log(myObj.model);


// //Method2
// // let myObj = Object.create(null);
// // console.log(myObj);

// // myObj.name = 'Verna';
// // console.log(myObj);


// //Method3
// // let myObj = new Object();
// // console.log(myObj);
// // myObj.name = 'Verna';
// // console.log(myObj);


// //Method 4
// // class Car{
// //     constructor(){
// //         this.name='verna';
// //         this.color='black';
// //         this.move=function(){
// //             console.log(`I have ${this.color} ${this.name}.`);
// //         }
// //     }
// // }

// // var model = new Car();
// // console.log(model);
// // model.move();




// var arr = [56,98, ,33,22,2,4,87]
// var newArr=[];

// arr.forEach((item)=>{
    
//     console.log(item);
//     item+=1;
//     newArr.push(item);
// });
// console.log(newArr);
// //57,99,34,23,3,4,88




// for (let item of arr) {
//     console.log(item);
// }


// var myObj = {
//     fname:'Divya',
//     lname:'Goyal',
//     skills:4,
//     core:'Full stack'
// }
// for (let item in myObj) {
// console.log(item);
// console.log((myObj)[item]);
// }


//Named Function
// var no1 = parseInt(prompt('Which table you want to generate? '));
// var no2 = parseInt(prompt('Till what range ? '));

// function addition(x,y){
//     console.log(`Addition value = ${x+y}`);
// }
// function subtraction(x,y){
//     console.log(`Subtraction value = ${x-y}`);
// }

// addition(no1,no2)
// addition(3,6);
// addition(9,26);
// addition(5,66)


// subtraction(5,2);
// subtraction(9,1);
// subtraction(15,12);
// subtraction(59,21);


// function tables(x,y){
//     for(var i=1;i<=y;i++){
        
//         document.write(`${x} x ${i} = ${x*i} <br/>`);
//     }
//     return x*y;
// }
// tables(no1,no2);
// tables(8,12);


// const kuchBhi = (x)=> console.log(x.split(' '));


// kuchBhi('I am a programmer');


// const area=(r)=>
//     console.log(Math.round(Math.PI*r*r));

// const peri=(r)=>
//     console.log(Math.round(2*r*Math.PI));

// const vol=(r,h)=>conso0le.log((Math.PI*r*r*h).toFixed(4));

// vol(2,6);
// area(5);
// peri(5)


// function changedValue(){
//     console.log('Value changed..');
// }

// function overIt(){
//     console.log('Hovering on name section');
// }
// function enterIt(){
//     console.log('Entering the age section');
// }
// function leaveIt(){
//     console.log('Leaving name field');
// }
// function focusingI(){
//     console.log('Focusing on age');
// }
// function goingOut(){
//     console.log('Blurred out age');
// }
// function mykeyUp(e){
//     console.log('User just pressed a key',e.key);
//     console.log(e);
// }



// function submitted(e){
//     e.preventDefault();
//     console.log('Form submitted');
//     document.getElementById('response').style.display='inline-block'
// }


// let x = document.getElementById('heading2')
// console.log(x.innerHTML);
// console.log(x.innerText);

// x.style.backgroundColor='skyblue'
// x.style.color='purple'



// function hovering(){
// document.getElementById('pic1').src='https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg'
// }

// var pic1 = true;
// var img = document.getElementById('pic1')
// function same(){
//     if(pic1){
//         img.src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg';
//         pic1=!pic1;
//     }
//     else{
//         img.src='https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg';
//         pic1=!pic1;
//     }
//     let music = document.getElementById('sound')
//     music.play();
// }


// function op(event){
//     // event.preventDefault()
//     //   document.getElementById('response').style.display='inline-block'

//     console.log(event.target.value);
//     document.getElementById('response').style.display='none'
//     document.getElementById('response').innerHTML += `<i>${event.target.name} : ${event.target.value}</i> <br/>`

// }


// let c = document.getElementsByClassName('ip');
// console.log(c);

// for(var i=0; i<c.length;i++){
//     c[i].style.backgroundColor = 'pink'
//     c[i].style.color = 'white'
// }

// c[1].style.border = '5px solid black'


// let t = document.getElementsByTagName('label');
// console.log(t);

// for(var i=0; i<c.length;i++){
//     t[i].style.backgroundColor = 'orange'
//     t[i].style.color = 'black'
//     t[i].style.textShadow="0.5px 0.5px 0.9px yellow"
// }


// var arr = [3,6,2,5,9,1,7,8];
// var newArr = arr.map(xyz);

// function xyz(item){
//     return item**2;
// }
// console.log(arr);
// console.log(newArr);

// let even = arr.filter(abc);
// function abc(item){
//     if(item % 2 !== 0)return item
// }
// console.log(even);


// let outputR = arr.reduce((acc,cv)=>acc+cv,20);

// console.log((outputR));

// var names = ['rahul','yash','ishan','arpit'];

// console.log(names.includes('yash'));




// var myArr = ['j','a','v','a','s','c','r','i','p','t'];
// var vowels=['a','e','i','o','u']
//op1 = javascript
//op2 = Learn javascript
//op3 = ['a','a','i']


// let op1 = myArr.reduce((acc,cv)=>acc+cv)
// console.log(op1);

// let op2 = myArr.reduce(demo1,'Learn ');
// function demo1(acc,cv){
//     return acc+cv
// }

// console.log(op2);

// let op3 = myArr.filter((item)=>{
//     if(vowels.includes(item))return item
// })
// console.log(op3);



// var pokemon ={
//     firstname:'Pika',
//     lastname:'Chu',
//     fullname:function(){
//         return (this.firstname + this.lastname);
//     }
// }
// console.log(pokemon.firstname);
// pokemon.fullname()


// function printing(snacks,hobby){
//     let op = `${this.fullname()} loves games as well as ${snacks} and ${hobby}`
//     console.log(op);
// }
// let output1 = printing.bind(pokemon,'candies','travelling');
// x();
// printing.call(pokemon,'chocolates','sleeping');
// printing.apply(pokemon,['maggi','walking']);



//HOISTING -> process of moving variable declarations and function definitions on top-level of code

// x = 10;
// console.log(x+80);
// var x;

// printIt();

// function printIt(){

//     console.log(x+10);
//     x=50;
//     console.log(x*2);
// }
// console.log(x+50);


//CLOSURES = when a function is defined or returned inside a function, the child func will have access to properties of parent func but vice versa is not possible and this makes a closure
// function parent(){
//     var property = 'Bunglow 1';

//     return function (){
//         console.log(property);
//     }
// }

// adder(5)(8);  //13


//adder
//IP => 1. Adder of what number? 2. What to add into it?
//OP =>Added value

// function adder(x){
//     return function(y){
//         return x+y;
//     }
// }
// console.log(adder(4)(8));

//Higher Order Function (HOF)=> A function that either takes a function as an argument or returns a function or does both is called HOF.






//exec in js


// function a(){
//    let x = setInterval(()=>{
//         console.log('a');
//     },2000)

//     setTimeout(()=>clearTimeout(x),12000);
// }

// function b(){
//     setTimeout(()=>{
//         console.log('b');
//     },8000)
// }

// a()
// b()

// let time = document.getElementById('timeVal').value;

// let cd;
// function start(){

//     cd = setInterval(()=>{
//         document.getElementById('printTime').innerHTML = time;
//         time--;
//     },1000)

//     setTimeout(()=>{
//         clearInterval(cd)
//     },time*1000);
// }

// function stop(){
//     clearInterval();
// }


// let newDate = new Date();
// console.log(newDate);


// console.log(newDate.getTime());

function foo(a,b){
    var y = 5;
    a()
    b()
    return x*y
}

function bar(b){
    var a=80;
    return a+b
}
bar(10);