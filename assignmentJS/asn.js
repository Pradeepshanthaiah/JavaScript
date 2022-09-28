let nametxt = document.getElementById('txt');
let salarytxt = document.getElementById('txt1');
let male = document.getElementById('male');
let female = document.getElementById('female');
let save = document.getElementById('save');
let clear = document.getElementById('clear');
let tbl = document.getElementById('tbl');
let tbody = document.getElementById('tbody');


function organize(){
    const result= document.getElementsByClassName('edit');
    if (result.length > 0){
        editRow();
    }
    else {
        addrow();
    }
    
}
function clr (){
    nametxt.value = '';
    salarytxt.value = '';
}
function DeleteRow (event) {
    console.log(event.target);
    const tr = event.target.parentElement.parentElement;
    tbody.removeChild(tr);
}

function alter(event){
    console.log(event.target);
    const tr = event.target.parentElement.parentElement;
    const result= document.getElementsByClassName('edit');
    for(let index=0; index<result.length; index++){
        console.log(result[index]);
        result[index].classList.remove ('edit');
    }
    tr.classList.add ('edit');
    salarytxt.value= tr.children.item(2).innerText;
    nametxt.value= tr.firstChild.innerText; 
}

function addrow(){
    const tr = document.createElement('tr');
const firstCol = document.createElement('td');
const secondCol = document.createElement('td');
const thirdCol = document.createElement('td');
const fourthCol = document.createElement('td');
const deleteBtn = document.createElement('button');
const editBtn = document.createElement('button');


firstCol.innerText = nametxt.value;
nametxt.value = '';
if (male.checked){ 
    secondCol.innerText = male.value;
}
if (female.checked){
    secondCol.innerText = female.value;
}
thirdCol.innerText = salarytxt.value;
salarytxt.value = '';
editBtn.innerText = 'Edit';
deleteBtn.innerText = 'Delete';
deleteBtn.addEventListener('click', DeleteRow);
editBtn.addEventListener('click', alter);


fourthCol.appendChild(editBtn);
fourthCol.appendChild(deleteBtn);

tr.appendChild(firstCol);
tr.appendChild(secondCol);
tr.appendChild(thirdCol);
tr.appendChild(fourthCol);

tbody.appendChild(tr);

}

function editRow(event){
const result= document.getElementsByClassName('edit');
const tr = result[0];
tr.firstChild.innerText = nametxt.value;
tr.children.item(2).innerText = salarytxt.value;
if (male.checked){
    tr.children.item(1).innerText = male.value;
}
if(female.checked){
    tr.children.item(1).innerText = female.value;
}

clr ();

}

save.addEventListener('click', organize);
clear.addEventListener('click', clr);



