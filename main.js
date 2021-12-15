const getEl = (element) => document.querySelector(element);

let listTask = [];

const sumbitTask = () => {
    let textValue = getEl("#text").value.trim();
    let dateValue = getEl("#date").value;
    let optionValue = getEl("#option").value;


    if (!textValue) {
        alert("Vui lòng nhập việc cần làm")
        return;
    }
    console.log(textValue, dateValue, optionValue);

    const year = parseInt(dateValue.substring(0, 4));
    const month = parseInt(dateValue.substring(5, 7));
    const day = parseInt(dateValue.substring(8, 10));

    const today = new Date();

    if (today.getFullYear() > year) return alert('Năm phải lớn hơn hoặc bằng Năm hiện tại!');
    if (today.getMonth() + 1 > month) return alert('Tháng phải lớn hơn hoặc bằng tháng hiện tại!');
    if (today.getDate() > day) return alert('Ngày phải lớn hơn hoặc bằng ngày hôm nay!');

    
    let listTask = localStorage.getItem('listTask') ? JSON.parse(localStorage.getItem('listTask')) : [];
    listTask = [...listTask, { textValue, dateValue, optionValue: optionValue === [] }];
    localStorage.setItem('listTask', JSON.stringify(listTask));

    
    displayTask();
    displayClear();
};
const displayTask = () => {

    let listTask = localStorage.getItem('listTask') ? JSON.parse(localStorage.getItem('listTask')) : [];

    if (listTask === 0) return false

    let tableTask = '';
    for (const task of listTask) {
        listTable = `<div id="listTable"> Title: ${task.textValue}<br> Deadline: ${task.dateValue} 
                <br>Level task: ${task.optionValue} 
                <button>X</button> <hr></div>`;
        tableTask = tableTask + listTable;
    }
    getEl("#table").innerHTML = tableTask;
}
const displayClear = () => {
    getEl("#text").value = ''
    getEl("#date").value = ''
    getEl("#option").value = ''

}

getEl("#submit").onclick = sumbitTask;




