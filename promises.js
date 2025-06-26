//>>>>>>>>>>>>>>>>> UNDERSTANDING HOW CALLBACK WORKS

// const callback=(err,result)=>{
//     if(err){
//         return console.log(err)
//     }
//     return console.log(result)
// }

// const doSomething=callback=>{
//     const skills=['js','Node','aws','git']
//     callback(false,skills)
// }

// console.log(doSomething(callback))



///>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// const callback=(err,res)=>{
//     if(res){
//         return console.log(res)
//     }
//     else{return console.log('errrroooorrrr')}
// }

// const functionThatWillUseCallBack=callback=>{
//     const skills=['js','Node','aws','git']
//     callback(true,false)
// }

// console.log(functionThatWillUseCallBack(callback))


//>>>>>>>>>>>>>>>>>>>PROMISES SYNTAX
//We can create a promise using the Promise constructor. We can create a new promise using the key word new followed by the word Promise and followed by a parenthesis. Inside the parenthesis, it takes a callback function. The promise callback function has two parameters which are the resolve and reject functions.

// syntax
// const promise = new Promise((resolve, reject) => {
//   resolve('success')
//   reject('failure')
// })


//>>>>checking if number is even or odd
// const doPromise=new Promise((resolve,reject)=>{
//     const num=[3,3,4,5,6]
//     num.forEach(element=>{
//         if(element%2==0){
//             resolve('its even')
//         }
//         reject('no its odd')
//     }
//     )
// })

// doPromise
//     .then(result=>{
//         console.log(result)
//     })
//     .catch(error=>console.log(error))

// A Promise resolves/rejects only once.
// Avoid using forEach inside a Promise when you need to control a single resolve or reject.
//thats why it will give result for the 1st element only

//CORRECT SOLUTION
const evenOrOdd=arr=>{
    return new promise((resolve,reject)=>{
        const num=
    })
}