
function checkBoxHandling(div){
    if(div.checked) {
        div.closest("div.unchecked").className = "tiles checked";
        div.checked = true;
    }
    else{
        div.closest("div.checked").className = "tiles unchecked";
        div.checked = false;
    }
}

function removeTile(ele){
    ele.closest("div.tiles").remove();
}

function func(){

    let x = document.getElementById("new-input");
    x.innerHTML = "<div class=\"new-tile\">" +
                "<div class=\"tile-text\"><input type=\"text\" name=\"new-to-do\" id=\"new-todo\"></div></div>";
    let txt = document.getElementById("new-todo").value;

    document.getElementById("new-todo").focus();
    document.addEventListener("keydown", (event) => {
    let kC = event.key;
    if(kC === "Enter"){
        event.preventDefault();
            // console.log(document.getElementById("new-todo").value);
        console.log(document.getElementById("new-todo"));
        let txt = document.getElementById("new-todo").value;
        
        document.getElementById("list-card").innerHTML += "<div class=\"tiles unchecked\">" + 
        "<input type=\"checkbox\" name=\"not-done\" id=\"not-done\" class=\"not-done\"> " + 
        "<div class=\"tile-text\">" + txt + "</div>" + 
        "<button class=\"cross\">X</button></div>";

            
        let unchecked = document.getElementsByClassName("not-done");
        tot = unchecked.length;
        for(let i = 0; i < tot; i++){
            let ele = unchecked[i]
            unchecked[i].addEventListener('change', () => {checkBoxHandling(ele)});
        }
        let crosses = document.getElementsByClassName("cross");
        tot = crosses.length;
        for(let i = 0; i < tot; i++){
            let ele = crosses[i];
            crosses[i].addEventListener("click", () => {removeTile(ele)});
        }
        let x = document.getElementById("new-input");
        x.innerHTML = "<button id=\"new-item\">+ Add new item</button>"
        document.getElementById("new-item").addEventListener("click", func);
    }
            
})
    
}


let newAdd = document.getElementById("new-item").addEventListener("click", func);

