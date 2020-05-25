// 1. Selectors
import { elements } from './DOMelements';

// 2. Actions
function openAbout(e){
    e.preventDefault()
    e.currentTarget.previousElementSibling.classList.add('open')
}
// 3. Events
elements.aboutLink.addEventListener('click', openAbout)