function updateDate(){
    let date  = new Date();
    let setTime = document.getElementById('setTime');
    setTime.innerHTML = date.getHours() + ':' + date.getMinutes() +':' + date.getSeconds();
    let setDate = document.getElementById('setDate');
    setDate.innerHTML = date.getDate() +'-' + (date.getMonth()+1) + '-' + date.getFullYear();
}
onload = setInterval(updateDate,100);

function getColor(){
    let getColor = document.getElementById('setColor').value;
    localStorage.setItem('Color',getColor);
    document.getElementById('time').style.background = localStorage.getItem('Color');
    document.getElementById('body').style.background = localStorage.getItem('Color');
}

let change = document.getElementById('setColor');
change.addEventListener('change',getColor);


function setColor(){
    document.getElementById('setColor').value = localStorage.getItem('Color');
    document.getElementById('time').style.background = localStorage.getItem('Color');
    document.getElementById('body').style.background = localStorage.getItem('Color');
}
onload = setColor();