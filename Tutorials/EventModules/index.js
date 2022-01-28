//Event Modules:

//Node.js has a built-in module called "Events" (not Event)
//where you can create- , fire- , and listen for- your own events

//EventEmitter is a class which must be written like this only
const EventEmmiter=require('events');

//event is a object
const event=new EventEmmiter();



//ex1. event is fired only one time using 'once'-----------------------------------------------------
//event definition should be written first
event.on('sayMyName' ,()=>{
    console.log("Your name is Rosshhhh.......")
})
event.emit('sayMyName');



//ex2. Create an event emmitter instance and register a couple of callbacks---------------------------
event.on('saymyhobbies' ,()=>{
    console.log("Your hobbies are dancing.......")
})
event.on('saymyhobbies' ,()=>{
    console.log("Your hobbies are singing.......")
})
event.on('saymyhobbies' ,()=>{
    console.log("Your hobbies are learning.......")
})
event.emit('saymyhobbies');



//ex3. event with callback parameters------------------------------------------------------------------
event.on("checkpage",(sc,mess)=>{
    console.log(`status code is ${sc} and the page is ${mess}`)
})
event.emit("checkpage",200,"ok");









//
//