var items = [];
function loopItem(){
    var i, len, text;
    for (i = 0, len = items.length, text = ""; i < len; i++) {
        text += 
        `<div class='box-out' id='${i}'>
                <p class='output' id='out'>${items[i]}</p>
                <button class='edit-btn' onClick='editItem(${i})'>Edit</button>
                <button class='delete-btn' onClick='deleteItem(${i})'>Delete</button>
            </div>`;
    }
    return text;
}
function updateItem(newItem){
        textNewItem = 
            `<p class='output' id='out'>${items[newItem]}</p>
            <button class='edit-btn' onClick='editItem(${newItem})'>Edit</button>
            <button class='delete-btn' onClick='deleteItem(${newItem})'>Delete</button>`;
    return textNewItem;
}
function addItems() { 

    if(document.getElementById('inputText').value == "")
    {
        alert('PLEASE INPUT');
        return false;
    }
    else{
        var x = document.getElementById("inputText").value;
        items.push(x);
        // document.getElementById("output").innerHTML = items; 
        console.log(items);
        document.getElementById("show-output").innerHTML = loopItem();
        document.getElementById("inputText").value ="";
    }
}

function editItem(edit_id){
    var inputEdit =
    `<div id = 'e${edit_id}'>
        <input id='inputNewEdit${edit_id}' type='text' value='${items[edit_id]}'/>
        <button class='done-btn' id='editbtn' onClick='editItemDone(${edit_id})'>Done</button>
    </div>`;
    document.getElementById(edit_id).innerHTML = inputEdit;
}
function editItemDone(edit_done){

    if(document.getElementById("inputNewEdit"+edit_done.toString()).value == "")
    {
        alert('PLEASE INPUT');
        return false;
    }
    else{
        var y = document.getElementById("inputNewEdit"+edit_done.toString()).value;
        items.splice(edit_done, 1, y);
        console.log(items);
        document.getElementById(edit_done.toString()).innerHTML = updateItem(edit_done);
    } 
}

function deleteItem(delete_id) {
    items.splice(delete_id, 1);
    console.log(items);
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
    });