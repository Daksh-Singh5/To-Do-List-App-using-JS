var userfrom=document.getElementById("userfrom");
var userinput=document.getElementById("userinput");
var userlist=document.getElementById("userList");

userfrom.addEventListener("submit", function(event){
event.preventDefault();
Additem(userinput.value);
})

function Additem(userinputs){
    var Items=`<li>${userinputs}<button onclick="deletelistitem()" class="btn btn-primary">Delete</li>`;

    userlist.insertAdjacentHTML("beforeend",Items);
    userinput.value=""
    userinput.focus()

}

function deletelistitem(listtodelete){
    listtodelete.parentElement().remove();
}