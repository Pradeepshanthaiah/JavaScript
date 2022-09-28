// const request = new XMLHttpRequest();
// request.onreadystatechange = function () {
//     if (this.readyState === 4){
//         console.log(this.responseText);
//         //parsing
//         const obj = JSON.parse(this.responseText);
//         obj.forEach(i => addRow(i));
//         // addRow(obj[0])
//         // console.log (obj[0].name);
//     }
// }
// request.open('GET', 'https://jsonplaceholder.typicode.com/users');
// // request.send();

fetch('https://jsonplaceholder.typicode.com/users', {method:'GET'})
.then (r => r.text()).then(res => {
    const obj = JSON.parse(res);
    obj.forEach(i => addRow(i));
});

function addRow(user){
    const tr = document.createElement('tr');
    const firstCol = document.createElement('td');
    const secondCol = document.createElement('td');
    const thirdCol = document.createElement('td');

    firstCol.innerText = user.name;
    secondCol.innerText = user.username;
    thirdCol.innerText = user.email;

    tr.appendChild(firstCol);
    tr.appendChild(secondCol);
    tr.appendChild(thirdCol);

    document.getElementById('tbl').appendChild(tr);
}

const form = document.getElementById('frm');
form.addEventListener('submit', );

function SaveData (e) {
    e.preventDefault();
    const newUser = {name: form['name'].value, username: form['username'].value, email: form['email'].value};
    PerformPostRequest(newUser);

}

function PerformPostRequest (user) {
//     const request = new XMLHttpRequest();
// request.onreadystatechange = function () {
//     if (this.readyState === 4){
//         alert('Successfully posted POST operation');
//     }
// }
// request.open('POST', 'https://jsonplaceholder.typicode.com/users');
// request.send(json.stringify (user));

fetch('https://jsonplaceholder.typicode.com/users', {method:'POST', body: user})
.then (r => r.text()).then(res => {
    alert('Successfully posted POST operation')

// fetch('https://jsonplaceholder.typicode.com/users/1', {method:'PUT', body: user})
// .then (r => r.text()).then(res => {
//     alert('Successfully posted PUT operation')

// fetch('https://jsonplaceholder.typicode.com/users/1', {method:'DELETE'})
// .then (r => r.text()).then(res => {
//     alert('Successfully posted DELETE operation')
});

}

