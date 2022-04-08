// Selecionar botão
const btn = document.querySelector('.btn');

const cardSection = document.querySelector('#card');
const note = document.querySelector('#rating-note')

const thanksSection = document.querySelector('#thanks')
const notes = document.querySelectorAll('.note')

let rated = false;
let i = 0;

const submited = () => {
    cardSection.classList.add('active')
    thanksSection.classList.remove('active')
    note.innerText = i.toString()
}
btn.addEventListener('click', submited)

notes.forEach((el)=>{
    el.addEventListener('click',()=>{
        i = parseInt(el.innerText)
        notes.forEach((ee)=>{
        ee.classList.remove('note-selected')
        })
        if (i = parseInt(el.innerText)) {
            el.classList.add('note-selected');
        }
    })
    })