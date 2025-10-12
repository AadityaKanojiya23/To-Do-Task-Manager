let toDoList = [
    {item: 'Buy Sheets' ,dueDate: '2025-10-12',},
];

function toDoApp(){
    let toDoInput = document.querySelector('#workInput');
    let toDoDate = document.querySelector('#dateInput');
    toDoList.push({item:toDoInput.value ,dueDate:toDoDate.value});
    toDoInput.value ='';
    toDoDate.value ='';
    displayElements();
}


function displayElements() {
    let displayContainer = document.querySelector('#displayWork');
    let newHtml = '';
    
    for(let i = 0; i < toDoList.length; i++) {
        //De-structuring
        let {item , dueDate} = toDoList[i];
        newHtml += `
            <div class="todo-row">
                <span>${item}</span>
                <span>${dueDate}</span>
                <button onclick="toDoList.splice(${i},1); displayElements();">Delete</button>
            </div>
        `; 
    }
    displayContainer.innerHTML = newHtml;
}
