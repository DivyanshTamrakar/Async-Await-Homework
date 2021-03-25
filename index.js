// Async Await Live Questions and Homework
// (a)

// const getLength = (name,lengthOfName)=>{
//   const namelength = name.length;
//   lengthOfName(namelength);
// }

// getLength("Divyansh",(name)=>{console.log(`My name is ${name} length long`)})

//(b)

// const willThanosKillMe=(name,ThanosKillme,ThanosDoesntKillme)=>{
// if((name.length) % 2===0){
//   ThanosKillme();
// }
// else{
//   ThanosDoesntKillme();
// }


// }


// willThanosKillMe("Divyanshs",()=>{console.log("Yay! I am alive!")},()=>{console.log("Give my bose speakers and headphones to my sister")})

//{c}


// setTimeout(()=>console.log("Divyansh"),2);


// const printAfterDelay = (message,delay )=>{
//   setTimeout(()=>console.log(message),delay);
// }
// printAfterDelay("This is Message",10000)

//## h/w ex6: setInterval
//(a)
// const printAfterInterval = (message,delay)=>{

//   setInterval(()=>console.log(message),delay);

// }
// printAfterInterval("Divyansh",3000);

//(b)

// const countdown = (num) => {
//   const countdown = setInterval(() => {
//     console.log(num)
//     num = num - 1
//     if (num === 0) {
//       console.log("bang Bang");
//       clearInterval(countdown);
//     }
//   }, 1000);
// }
// countdown(10)


function fakeFetch(msg, shouldReject) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject(`error from server: ${msg}`);
      }
      resolve(`from server: ${msg}`);
    }, 3000);
  });
}

// fakeFetch("divyansh",false);


// print data on Success
// fakeFetch("divyansh",false).then((data)=>console.log(data));

// live ex11: print data on success
// fakeFetch("divyansh",true).then((data)=>console.log(data)).catch((error)=>console.log(error));


//live ex13: chaining
// function getServerResponseLength(msg){

// return fakeFetch(msg,false).
// then((data)=>console.log(data.length)).
// catch((error)=>console.log(error))
// }
// undefined
// getServerResponseLength("Divyansh").then(length => console.log(length));


// Live ex14: waterfall data

// function syncCallsToServer(msg1,msg2){
// return fakeFetch(msg1,false).then(data=>fakeFetch(data +"  "+ msg2))
// }
// syncCallsToServer("Divyansh","Tamrakar").then(data=>console.log(data));


// const printDataFromServer = async () => {
// 	try {
// 		const serverData = await fakeFetch("Divyash",false);
// 	  console.log(serverData);
// 	} catch (err) {
// 	 console.log(err)
// 	}
// }
// printDataFromServer();


// async function syncCallsToServer(msg1,msg2){
      
//       try{
//         const result = await fakeFetch(msg1,false);
//       if(result !== undefined)
//       {
//         const finalResult = await fakeFetch(result+ msg2,false)

//       console.log(finalResult);
//       }
//       }catch(error){
//         console.log(error);
//       }
     


// }
// syncCallsToServer("Divyansh","Tamrakar");
