const inputbox=document.getElementById("input-box");
console.log(inputbox);
const listcontainer=document.getElementById("list-container");
console.log(listcontainer);
const addbtn=document.getElementById("add-btn");
console.log(addbtn);

const addtask=()=>
{
if(inputbox.value==='')
{
alert("Please write something..");
}
else
{
let li=document.createElement("li");
li.innerHTML=inputbox.value;
listcontainer.appendChild(li);

savedata();

//Creating a span elements
let span = document.createElement("span");
span.innerHTML="\u00d7"
li.appendChild(span);
  savedata();

}

inputbox.value="";
}
addbtn.addEventListener("click",addtask);

listcontainer.addEventListener("click",function(e)
{
if(e.target.tagName ==="LI")
{
e.target.classList.toggle("checked");

savedata();
}
else if(e.target.tagName === "SPAN")
{
e.target.parentElement.remove();
savedata();
}
});

const savedata=()=>
{
localStorage.setItem("data", listcontainer.innerHTML);
}
const showdata=()=>
{

    listcontainer.innerHTML=localStorage.getItem("data");
}
showdata();