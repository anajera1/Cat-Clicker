let moves = 0;
function addMove() {
    moves++;
    let movesText = document.querySelector('.clicks');
    movesText.innerHTML = moves;
}

document.getElementById('catImg').addEventListener('click', () => {
    addMove();   
});

function addMove2() {
    moves++;
    let movesText2 = document.querySelector('.clicks2');
    movesText2.innerHTML = moves;
}

document.getElementById('catImg2').addEventListener('click', () => {
    addMove2();   
});

var title = document.createElement("H2");  
var textnode = document.createTextNode("Striped Cat"); 
var child = document.getElementById("catImg");

title.appendChild(textnode);
document.getElementById("cat1").appendChild(title);
child.parentElement.insertBefore(title,child);


var title2 = document.createElement("H2");  
var textnode2 = document.createTextNode("White Cat"); 
var child2 = document.getElementById("catImg2");

title2.appendChild(textnode2);
document.getElementById("cat2").appendChild(title2);
child2.parentElement.insertBefore(title2,child2);

