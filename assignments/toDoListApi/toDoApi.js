
completedTasks=[];
pendingTasks=[];
allTasks = [];

async function getapi(api_url){
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data);
    for(i=0;i<data.length;i++){
        allTasks.push(data[i]);
        if(data[i]['completed'] === true){
            completedTasks.push(data[i]);
        }else{
            pendingTasks.push(data[i]);
        }
    }
}


let inputTask = document.getElementById('taskStatus')
let divShowData = document.getElementById('showData');

inputTask.addEventListener('change',()=>{
    let task = inputTask.value;
    if(task === 'Completed Tasks'){
        divShowData.innerHTML = "";

        var col = [];
        for (var i = 0; i < completedTasks.length; i++) {
            for (var key in completedTasks[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        var table = document.createElement("table");

        var tr = table.insertRow(-1);                   

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");    
            th.innerHTML = col[i];
            tr.appendChild(th);
        }
        for (var i = 0; i < completedTasks.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = completedTasks[i][col[j]];
            }
        }
        divShowData.appendChild(table);

    }else if (task === 'Pending Tasks'){
        divShowData.innerHTML = "";

        var col = [];
        for (var i = 0; i < pendingTasks.length; i++) {
            for (var key in pendingTasks[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        var table = document.createElement("table");

        var tr = table.insertRow(-1);                   

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");    
            th.innerHTML = col[i];
            tr.appendChild(th);
        }
        for (var i = 0; i < pendingTasks.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = pendingTasks[i][col[j]];
            }
        }
        divShowData.appendChild(table);
        
    }else if (task === 'All Tasks'){
        divShowData.innerHTML = "";

        var col = [];
        for (var i = 0; i < allTasks.length; i++) {
            for (var key in allTasks[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        var table = document.createElement("table");

        var tr = table.insertRow(-1);                   

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");    
            th.innerHTML = col[i];
            tr.appendChild(th);
        }
        for (var i = 0; i < allTasks.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = allTasks[i][col[j]];
            }
        }divShowData.appendChild(table);
    }else{
        divShowData.innerHTML = "";
    }
})

const api_url = 'https://jsonplaceholder.typicode.com/todos';
getapi(api_url);



