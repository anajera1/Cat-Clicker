const model = [
    {
        name: 'Striped Cat',
        img: './img/stripedcat.jpeg',
        count: 0,  
        altText: 'striped cat looking straight',
        selected: false 
    },
    {
        name: 'White Cat',
        img: './img/whitecat.jpg',
        count: 0,
        altText: 'white cat jumping',
        selected: false 
    },
    {
        name: 'Orange Cat',
        img: './img/orangecat.jpg',
        count: 0,
        altText: 'orange cat being lazy',
        selected: false      
    },
    {
        name: 'Cookie',
        img: './img/cookie.jpg',
        count: 0,
        altText: 'Cookie has her tongue out',
        selected: false      
    },
    {
        name: 'Toby',
        img: './img/toby.jpg',
        count: 0,
        altText: 'Toby is taking a nap',
        selected: false      
    }
];

const catView = (function() {
    const catDisplay = document.querySelector('.entryBody');
    
    function init(){
        catDisplay.addEventListener('click', octopus.catClicked);
    }
    
    function render(cat) {
        catDisplay.innerHTML = `
            <h2 class="catName">${cat.name} </h2>
            <img id="catImg" src="${cat.img}" alt="${cat.altText}"/>
            </div>
            <h2> Clicks: <span class="clicks">${cat.count}</span></h2>
    `; 
}
    return {
        init,
        render
    }
})();

const listView = (function(){
    const listDisplay = document.querySelector('.catList_ul');
    
    function init() {
        listDisplay.addEventListener('click', function(e){
            octopus.updateCurrentCat(e.target.textContent);
        });
    }
    
    function render(cats) {
        listDisplay.innerHTML='';
        cats.forEach((cat)=>{
            listDisplay.innerHTML += '<li class="catList_item">'+cat.name+'</li>';
        });
    }
    
    return {
        init,
        render
    }
})();

const octopus = (function() {
    selectedCat = model[0];
    
    function updateCurrentCat(name){
        selectedCat = model.find((cat) => {
            return cat.name === name;
        });
        catView.render(selectedCat);
    }
    
    function init(){
        catView.init();
        catView.render(selectedCat);
        listView.render(model);
        listView.init();
    }
    
    function catClicked() {
        selectedCat.count++;
        catView.render(selectedCat);
    }
    
    return {
        init,
        catClicked,
        updateCurrentCat
    }
})();

document.addEventListener('DOMContentLoaded', octopus.init);

