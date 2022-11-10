let toDoForm = document.querySelector('#toDoForm')
let toDoInput = document.querySelector('#toDoInput')
let addButton = document.querySelector('#addButton')
let remComplete = document.querySelector('#remComplete')
let remAll = document.querySelector('#removeAll')
let img = document.querySelector('.img')

//Add button with line-through
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
//outset to inset
addButton.addEventListener('mousedown', function(event){
    let addButton = event.target;
    addButton.style.border-style === 'inlet'
})