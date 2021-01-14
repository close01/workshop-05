var items = [];
function loopItem(){
    var i, len, text;
    for (i = 0, len = items.length, text = ""; i < len; i++) {
        text += 
        `<div class='box-out' id='${i}'>
                <div class='out' id='out'>${items[i]}</div>
                <button class='bg-green' onClick='editItem(${i})'>edit</button>
                <button class='bg-red' onClick='deleteItem(${i})'>delete</button>
            </div>`;
    }
    return text;
}
function updateItem(newItem){
        textNewItem = 
            `<div class='out' id='out'>${items[newItem]}</div>
            <button class='bg-green' onClick='editItem(${newItem})'>edit</button>
            <button class='bg-red' onClick='deleteItem(${newItem})'>delete</button>`;
    return textNewItem;
}
function addItems() { 

    if(document.getElementById('inputText').value == "")
    {
        alert('PLEASE INPUT DATA');
        return false;
    }
    else{
        var x = document.getElementById("inputText").value;
        items.push(x);
        // document.getElementById("output").innerHTML = items; 
        console.log(items);
        document.getElementById("show-output").innerHTML = loopItem();
    }
    
}

function editItem(edit_id){
    var inputEdit =
    `<div id = 'e${edit_id}'>
        <input id='inputNewEdit${edit_id}' type='text' value='${items[edit_id]}'/>
        <button class='bg-blue' id='editbtn' onClick='editItemDone(${edit_id})'>done</button>
    </div>`;
    document.getElementById(edit_id).innerHTML = inputEdit;
}
function editItemDone(edit_done){

    if(document.getElementById("inputNewEdit"+edit_done.toString()).value == "")
    {
        alert('PLEASE INPUT DATA');
        return false;
    }
    else{
        var y = document.getElementById("inputNewEdit"+edit_done.toString()).value;
        items.splice(edit_done, 1, y);
        // document.getElementById("output").innerHTML = items; 
        console.log(items);
        document.getElementById(edit_done.toString()).innerHTML = updateItem(edit_done);
    }
    
}


function deleteItem(delete_id) {
    items.splice(delete_id, 1);
    console.log(items);
    // document.getElementById("output").innerHTML = items;
    document.getElementById("show-output").innerHTML = loopItem();
}
var input = document.getElementById("inputText");
input.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        console.log(event.keyCode, 'keyCode');
        event.preventDefault();
        document.getElementById("addbtn").click();
    }
    console.log(event, 'event');
// event.preventDefault();
    });
// var inputNew = document.getElementById("inputNewEdit");
// inputNew.addEventListener("keyup", (event) => {
//         console.log("asdf");
//         if (event.keyCode === 13) {
//             console.log(event.keyCode, 'keyCode');
//             event.preventDefault();
//             document.getElementById("editbtn").click();
//         }
//         console.log(event, 'event');
//         // event.preventDefault();
//     });
