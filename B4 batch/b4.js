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


const submitted=()=>{
    alert('Form submitted');
}

function changedValue(){
    console.log('Value changed..');
}

function overIt(){
    console.log('Hovering on name section');
}
function enterIt(){
    console.log('Entering the age section');
}
function leaveIt(){
    console.log('Leaving name field');
}
function focusingI(){
    console.log('Focusing on age');
}
function goingOut(){
    console.log('Blurred out age');
}
function mykeyUp(e){
    console.log('User just pressed a key',e.key);
    console.log(e);
}