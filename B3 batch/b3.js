
//Why we use arrow functions?
// let a= Number(prompt('Enter value of a'))
// let b= Number(prompt('Enter value of b'))

// function sum(a,b){
//     console.log(a+b);
//     return a+b;
// }

// const addition =(a,b)=>{console.log(a-b); a+b};

// alert(sum(a,b))
// alert(addition(a,b));

//benefits: shorter syntax, implicit return statements, when used in inner funcs, retain the scope of the method declared in
//Constraints of using fat arrow funcs: not suited for object-methods,
//arrow funcs do not rebind value of this, as ****they don't have their own this****


//Hoisting -> declaring var and functions on top

// business();
// function business(){
//     console.log('Hi user');
// }

// console.log(fname);
// var fname='John';

// fname='John';

// normie();
// const normie = function(){
//     console.log('I am normie');
// }

//Function expressions are not hoisted in JS
//what is hoisting order for variables and functions?


// console.log(me);

// var me = 'cricket';

// function me(){
//     console.log('XYZ');
// }


// document.getElementById('heading').style.backgroundColor="cyan";
// document.getElementById('heading').style.display="inline-block";

// console.log(document.getElementById('inputValue').checked);
// document.getElementById('inputValue').checked = true

// document.getElementById('inputValue').checked = "true";
// console.log(document.getElementById('inputValue').checked);

// document.querySelector('#heading').textContent = '<em>Hi user</em>';
// console.log(document.querySelector('#heading').textContent);

// var att = document.getElementById('ggl').getAttributeNames();
// console.log(att);


// setTimeout(()=>{
//     console.log('Timeout method is called');
// },3000);

// let threeTimer = setInterval(()=>{
//     console.log('Interval method is called');
// },3000);


// setTimeout(()=>{
//     clearInterval(threeTimer);
//     console.log('Interval method stopped');
// },10000);



// const beginTimer=()=>{
//     var count = 30;
//     //begin countdown from 30s
//     let thirtyTimer = setInterval(
//         ()=>{
//             document.getElementById('heading').innerText = count;
//             count--;
//         },1000);
    
//     //clear countdown interval
//         setTimeout(()=>{
//         clearInterval(thirtyTimer);
//         console.log(document.querySelector('#audio').src);
//         document.getElementById('audio').play();
//     },3000);
// }



// var car = {
//     name:'verna',
//     color:'black',
//     model:2020,
//     oil:'diesel',
//     move:function(){
//         console.log(`${this.name} is Auto-start and can run on cruise mode.`);
//     },
//     details :function(){
//         return ()=>{
//             console.log(`I have ${this.color} ${car.name} of ${car.model} model, runs on ${car.oil}`);
//         }
//     }
// }

// console.log(car);
// console.log(car.details()());
// console.log(car.move());



//key=value pairs
//i have black verna of 2020 model that runs on diesel.



//Ways to create an object
//Object.create

//Method2
// const obj = Object.create(null)
// console.log(obj);
// obj.fname = 'Divya';
// obj.lname = 'Goyal';
// console.log(obj);


// Method3
// const obj = new Object();
// console.log(obj);
// obj.fname = 'Divya'
// obj.lname = 'Goyal';
// console.log(obj);


//Method4
// class NewPlayer {
//     constructor(name){
//         this.pName=name;
//         this.score=0;
//         this.fuel = 100;
//         this.life=4;
//         this.move=function(){
//             console.log('Move the car');
//         }
//     }
// }

// const P1Obj = new NewPlayer('Divya');
// console.log(P1Obj);

// const PI = 3.14
// var r = parseInt(prompt('Enter radius'));
// var h = parseInt(prompt('Enter height'));

// const cylinder={
//     raidus:r,
//     height:h,
//     vol:function(){
//         var v =(Math.PI*this.raidus*this.raidus*this.height);
//         console.log(v.toFixed(9));
//         return v;
//     },
    // volume: Math.round(Math.PI*this.raidus*this.raidus*this.height)
// }

// cylinder.vol();
// console.log(cylinder.volume);


// var x = parseInt(prompt('Enter radius of circle'));

// var myObj = {
//     radius:x,
//     area:function(){
        
//         return Math.round(Math.PI*this.radius*this.radius)
//     },
//     peri:function(){
//         return Math.round(2*Math.PI*this.radius)
//     }
// }
// console.log(myObj.area());
// console.log(myObj.peri());



// var todayDate = new Date();
// console.log(todayDate); 

// var hourTime = todayDate.getHours();
// console.log(hourTime);



// function first(){
//     setTimeout(()=>{
//         console.log('First');
//     },5000);
// }

// function second(){
//     setTimeout(()=>{
//         console.log('second');
//     },3000);
// }

// function third(){
//     setTimeout(()=>{
//         console.log('third');
//     },2000);
// }

// first();
// second();
// third();



// function task1(t2){
//     console.log('Task 1');
//     t2(task2);
// }
// function task2(t3){
//     setTimeout(()=>{
//         console.log('Task 2');
//         t3(task4);
//     },2000);
// }
// function task3(t4){
//     console.log('Task 3');
//     t4(task5);
// }
// function task4(t5){
//     setTimeout(()=>{
//         console.log('Task 4');
//         t5();
//     },3000)
// }
// function task5(){
//     setTimeout(()=>{
//         console.log('Task 5');
//     },1000);
// }


// task1(task2);



//1 3 5 2 4

// const addOne = (value) => value + 1;
// const addTwo = (value) => addOne(value + 1);
// const addThree = (value) => addTwo(value + 1);


// const calculation = () => {
//   return addThree(1) + addTwo(2);
// };
// calculation();


//calculation--> addThree --> addTwo --> addOne (4)+(4)



// const myPromise = new Promise((resolve,reject)=>{
//     let sum = 10+10;
//     if(sum===20){
//         resolve('success');
//     }else{
//         reject('rejected');
//     }
// });

// myPromise.then((message)=>{
//     console.log('Then executed..sum>20',message);
// })
// .catch((message)=>{
//     console.log('Catch executed...sum not greater than 20',message);
// })

// console.log('a');

// setTimeout(()=>{
//     console.log('c');
// },0);

// const myPromise = new Promise((res,rej)=>{
//     res();
// }).then(()=>console.log('b'))

// console.log('d');

// const timeout = (time) => {
//   return (new Promise((resolve,reject)=>{
//   setTimeout(resolve, time)
//   } ))
// }
// timeout(1000).then(() => {
//     console.log('Hi after 1 second');
//     return timeout(1000);
//   }).then(() => {
//     console.log('Hi after 2 seconds');
//   })



// const tasks=(time)=>{
//     return (new Promise((resolve,reject)=>{
//         setTimeout(resolve,time);
//     }))
// }
// tasks(0).then(()=>{
//     console.log('Task 1')
//     return tasks(2000);
// })
// .then(()=>{
//     console.log('Task 2');
//     return tasks(3000);
// })
// .then(()=>{
//     console.log('Task 3');
//     return tasks(0);
// })
// .then(()=>{
//     console.log('Task 4');
//     return tasks(2000);
// })
// .then(()=>{
//     console.log('Task 5');
// })


let register=true;
let login = true;

new Promise((resolve,reject)=>{
    if(register==false){
        reject({
            username:'abc@example.com',
            message:'Registration pending!!'
        })
    }
    else if(!login){
        reject({
            username:'abc@example.com',
            message:'Login to access pages!'
        })
    }
    else{
        resolve('Log in sucess');
    }
})
.catch((event)=>{
    console.log(`${event.username} : ${event.message}`);
})
.then((x)=>{
    console.log(x);
})