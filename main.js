let toDoForm = document.querySelector('#toDoForm')
let toDoInput = document.querySelector('#toDoInput')
let addButton = document.querySelector('#addButton')
let remComplete = document.querySelector('#remComplete')
let remAll = document.querySelector('#removeAll')
let img = document.querySelector('.img')

addButton.addEventListener('click', function(event){
event.preventDefault();
    console.log('event test')
    let listItems = document.createElement('li');
    listItems.innerText = toDoInput.value;
    olItems.appendChild(listItems)
    listItems.addEventListener('click', function(){
        console.log('event test')
if(listItems.style.textDecoration === 'line-through'){
    listItems.style.textDecoration = ''
    listItems.classList.remove('completed')
}else if(listItems.style.textDecoration === ''){
    listItems.style.textDecoration = 'line-through'
    listItems.classList.add('completed')
    }
})
    toDoInput.value = '';
   
})
//Remove completed task
remComplete.addEventListener('click', function(event){
    event.preventDefault();
    console.log('event test')
    let completed = document.querySelectorAll('.completed')
    for(let i=0; i<completed.length; i++){
            completed[i].remove();
        }
})
//Remove all
remAll.addEventListener('click',function(event){
    event.preventDefault();
    console.log('event test')
    let olItems = document.querySelectorAll('li')
    for(let i=0; i<olItems.length; i++){
    olItems[i].remove();
    }
})

// //MouseOver effect
// img.addEventListener('mouseOver', function(){
// img.src.replace(src='https://imgs.search.brave.com/IanaBmLHWlPmKPS3jmajkrc0n8x8MtPcFTOYDqfsQ_E/rs:fit:449:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5B/ZTJVUW03WFpVdWxh/WTJ0bHZla0xBSGFI/MCZwaWQ9QXBp', width = '300px')
// })
