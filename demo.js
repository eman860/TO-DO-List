
var inputbox = document.getElementById("input-box")
var listbox = document.getElementById("list")

function addtask(){
    if(inputbox.value === ''){
        alert("you must write something!!")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = inputbox.value
        listbox.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
        
    }
    inputbox.value = ""
}

listbox.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
    }
}, false)