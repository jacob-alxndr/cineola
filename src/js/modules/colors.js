// 1. Selectors
import { elements } from './DOMelements';

// 2. Actions
// function changeColor(){
//  const root = document.documentElement;
//     const colors = [['27c0ca', 'd19563'], ['1175b7', 'b7a37e'], ['ac72d6', 'ddb54f'], ['e9aee2', 'cfca57'], ['f3604b', '7aab5b']]
//     const randomNumber = Math.floor(Math.random() * colors.length)
//     const [color1, color2] = colors[randomNumber]
//     root.style.setProperty('--color-primary', `#${color1}`)
//     root.style.setProperty('--color-secondary', `#${color2}`)
// }

var color1;
var color2;

setInterval(changeColor(), 3000);

function changeColor(){
  const root = document.documentElement;
  const colors = ['27c0ca', 'd19563', '1175b7', 'b7a37e', 'ac72d6', 'ddb54f', 'e9aee2', 'cfca57', 'f3604b', '7aab5b']

  randomNumbers()
  function randomNumbers() {
    const randomNumber1 = Math.floor(Math.random() * colors.length)
    const randomNumber2 = Math.floor(Math.random() * colors.length)
    if (randomNumber1 == randomNumber2) {
      randomNumbers()
    }
    else {
      color1 = colors[randomNumber1]
      color2 = colors[randomNumber2]
    }
  }
  root.style.setProperty('--color-primary', `#${color1}`)
  root.style.setProperty('--color-secondary', `#${color2}`)
}
// 3. Events
window.setInterval(function(){
  changeColor()
}, 10000);

window.addEventListener('load', changeColor)
