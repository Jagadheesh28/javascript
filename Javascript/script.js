
        // let amount = 0;
        // amount = 1000;
        // console.log("Your Bill amount is Rs."+amount) 

        // let name =prompt("what is your name")
        // console.log("hi", name)

        // let a =prompt("enter a number")
        // console.log(Number(a)+10)  //In PROMPT it will take input as Strings. So for saferside in console we need to make variable as Number.
          
        // let arr = [[ 1,2,3] , [4,5,6] , [7,8,9] ]

        // console.log(arr[0][1])
        
//INHERITANCE(reduce duplicate functions)

//         const me={
//                 talk(){
//                         return 'Talking';
//                 }
//         }
//        console.log( me.talk())
//        const you={
//         talk(){
//                 return 'Talking'
//         }
//        }
//        console.log(you.talk())

// class person{
//         talk(){
//                 return "Talking";
//         }
// }
// const me = new person();
// const you = new person();
// console.log(me)
// console.log(you.talk())


//factory function(reduce code duplication/make mulitple task in single one then we can call my multiple object instance)
// function person(name){
//         return{
//                 talk(){
//                         return`i am ${name}`
//                 }
//         }
// }
// const me=person(`jaga`)
// console.log(me.talk())
// const ajay=person(`ajay`)
// console.log(ajay.talk())

// function family(name,age){
//         return{
//                 about(){
//                         return`hi,I am ${name},${age}years old `
//                 }
//         }
// }
// const me=family(`jaga`,`22`)
// console.log(me.about())

// let name="jaga";

// let msg = "hello, i am "+ name +" how are yoy";
// alert(msg);

// console.log(msg);

// let num1=2;
// let num2=3;
// console.log(num1+num2);
// let person={                        //objects
//         name:"jaga",
//         age:22,
//         gender:"male",
//         address:"Jolarpet,Tirupattur,Tamilnadu"
// }
// console.log(person);
// let colors=["red","green","black"]    //array
// colors[4]="green"
// console.log(colors.length);
// function person(){
//         let name="jaga";                 //function

// let msg = "hello, i am "+ name +" how are you";
// console.log(msg)
// }
// person()
        
// function person(name){
                      

// let msg = "hello, i am "+ name +" how are you";
// console.log(msg)
// }
// person("jagadheesh")

// let name="jaga";
// let age=22;
// let intrest=["front end develop"];
// let address={
//         city:"chennai",
//         state:"Tamilnadu",
// }

// let person={
//         name:"jaga",
//         age:22,
//         interest:[`front end develop`],
//         isalive:true,                                 //oop(object oriented programing)
//         address:{
//                 city:"chennai",
//                 state:"tamilnadu",
//         },


//  greeting: function () {

//         // let msg="i am "+ name +" and i love "+intrest;
//         let msg =`my name is ${this.name} and  my age is ${this.age}`;
//         console.log(msg);
//  }
// };
// person.greeting();

// function ispositive(n){
//         return n>0                      // function declaration
// }
// console.log(ispositive(-2))

// console.log(ispositive(2))                //*here console is above
// function ispositive(n){
//         return n>0                      // hoisting(wherever we call the defined function,it works only in function declaration)
// }


// function factorial(n){
//         if(n==1)                     //recursion function (function calling itself)
//         return n;
//         else
//         return n*factorial(n-1)
// }
// console.log(factorial(4));

// let iseven=function(num){
//         return num%2==0                   /*function expression(function assigned to a variable as a object)*/
// }                                         
// console.log(iseven(4));

// let arr=[1,2,3,4];
// let findsum=function(arr){
//         let sum=0
//         for(let val of arr){     //here we used *for of*
//                 sum=sum+val      
//         }
//         return sum
// }
// console.log(findsum(arr));

// let volume=function(l,b,h){     //function expression practice
//         return l*b*h
// }

// let volume = (l,b,h) =>{return l*b*h}          //arrow function
// console.log(volume(2,5,4));
// let arr=[1,2,3,4]
// let findsum=(arr)=>{
//         let sum=0
//         for(let val of arr){
//                 sum=sum+val
//         }
//         return sum
// }
// console.log(findsum(arr));

// let area=r=>Math.PI*r*r  //area of circle
// console.log(area(3));

// let prod = (...args)=>{                             //spread operator
//         let result=1
//         for(let val of args){
//                 result*=val                         
//         }
//         return result
// }
// console.log(prod(1,2,3,4));

// function* indexgenerator(){
//        let index=1
//         while(true){
//         yield index++     //yield(each value return )                      //generators(generates values many many times)
//         }
// }
// const gen=indexgenerator();
// console.log(gen.next().value);
// console.log(gen.next().value);            //callback function
// console.log(gen.next().value);

// function greetconsole(name){
//         console.log(`hello`, name);
// }
// function greetHeading(name){
//         const heading =document.querySelector('h1')
//         heading.innerHTML=`hello`+name
// }
// function greet(callback){
//         callback(`ram`);
// }
// greet(greetconsole);

// let arr=[`jaga`,`sree`,`ajay`]
// arr.forEach(print)   //it also had callback function
                                                      //for each
// function print(val){
//         console.log(val);
// }
// arr.forEach(val=>console.log(val)) //same above but arrow function

// let priceUSD=[20,30,40]
// let priceINR=priceUSD.map(x=>x*80)
// console.log(priceINR)

// const input=[ //array of objects
//         {name:`jaga`,age:22},
//         {name:`abishek`,age:18},                     //map(use when we need to changes on array)
//         {name:`ajay`,age:16}
// ]

// const ages=input.map(y=>y.age)
// console.log(ages);

// const cost=[120,20,300,25,77,800,100]                 //filter(returns new array of chcking each values)
// const greatthan100=cost.filter(x=>x>100)
// console.log(greatthan100);

// const cost=[120,20,300,25,77,800,100]
// const costtotal=cost.reduce((total/*acumulator*/,el/*elements in cost */)=>total+el) //reduce
// console.log(costtotal);

// arr=[
//         [`a`,`b`,`c`],
//         [`b`,`c`,`d`],
//         [`c`,`d`,`e`],
// ];
// let result=arr.flat().reduce((accumultor,element)=>{
//         if(accumultor[element])
//         accumultor[element]++
//         else
//         accumultor[element]=1
//         return accumultor
// },{});
// console.log(result);

// let a=100
// function f1(){
//         console.log(`a is`,a);
// }
// f1();
// a=200;
// f1()

// nums=[3,2,4];
// target=6

// var twosum=function(nums,target) {
//         let map = new Map();
//         for (let i = 0; i < nums.length; i++) {
//                 let complement = target - nums[i];
//                 if (map.has(complement))
//                         return [map.get(complement), i];
//                 map.set(nums[i], i);
//         }

// }
// console.log(twosum);

// class User{
//         constructor(name,age){
//                 this.name=name;
//                 this.age=age;
//         }                                               //class
//         loggedin(){
//                 console.log(`hi`,this.name);
//                 console.log(`you are logged in`);
//         }
//         loggedout(){
//                 console.log(`hi`,this.name);
//                 console.log(`you are logged out`);
//         }
// }
// let user1=new User(`jaga`,22)

// function sync(){
//         console.log(`step1`);
//         console.log(`step2`);
//         console.log(`step3`);

// }
// sync();
// setTimeout(()=>console.log(`step1`),4000)
// setTimeout(()=>console.log(`step2`),3000)
// setTimeout(()=>console.log(`step3`),2000)
// console.log(`bye`);

/////Error Handling
// try {
// num=prompt(`Enter the number`)
// if(num===``)
// throw`Cannot be empty`                       //Error Handling(try,throw,catch,finally)
// if(isNaN(num))
// throw`Enter a valid number`
// console.log(num**2);
// } catch (error) {
//         console.log(error);
// }
// finally{
//         console.log(`bye`);
// }
        
// async function fn(){                          //async always shows promise
//         return `hello`
// }
// console.log(fn());
let json1=
`[
        {
                "stock":"TCS",
                "price":3000            
},
{
        "stock":"ITC",
        "price":2500
}]`
let parsed=JSON.parse(json1)              //JSON(javascript object  notation)
console.log(parsed);
console.log(JSON.stringify(parsed[1]));