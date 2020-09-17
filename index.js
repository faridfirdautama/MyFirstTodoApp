// Enter event on input
let enterKey = document.getElementById("inputName");
enterKey.addEventListener("keyup", function(e){
    if (e.keyCode === 13) {
        e.preventDefault();
        newList();
    }
});


// Show in list
function newList() {
    
    // create element Li
    let listLi = document.createElement("li");
    
    let inputValue = document.getElementById("inputName");
    // create text inputted
    let t = document.createTextNode(inputValue.value);
    listLi.appendChild(t);

    if (inputValue.value ==='') {
        alert("Please fill in the black...")
    } else {
        // Show new list
        document.getElementById("myUl").appendChild(listLi);
        let newSpan = document.createElement("span");
        let closeTxt = document.createTextNode("x");
        newSpan.classList = "close";
        newSpan.appendChild(closeTxt);
        listLi.appendChild(newSpan);
    }
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = "none";
        }
    };

    
    inputValue.value = "";
    inputValue.focus();
};

let itemClicked = document.querySelector("ul");
itemClicked.addEventListener('click', function(e){
    e.target.classList.toggle("checked");
    
});


var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
    }
};
