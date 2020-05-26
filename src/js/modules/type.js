// // // 1. Selectors
// import { elements } from './DOMelements';
//
// // // 2. Actions
// const wait = time => new Promise(resolve => setTimeout(resolve, time));
// function generateNumber(min= 50, max=101, _random = Math.random()){
//     const randomNumber = Math.floor(_random * (max - min) + min)
//     return randomNumber
// }
// async function type(el){
// // const el = document.querySelector('h1')
//
// const word = el.textContent
// el.textContent = ''
// const {min, max} = el.dataset
// let str = ''
//
// for (const letter of word){
//
//     str = str+letter
//     await wait(generateNumber(min, max))
//     el.textContent= str
// }
//
// }
// // 3. Events
// window.addEventListener('load', function(){
//     const h1 = document.querySelector('h1')
//     const h2 = document.querySelector('h3')
//
//     type(h1)
//     type(h2)
// })
