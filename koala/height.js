let toggle = document.getElementsByClassName('switch')[0];
toggle.addEventListener('click', function(){
    toggle.style.right = '0';
    toggle.style.left = '3em';
    toggle.innerHTML = "remove &rightarrow;";
    toggle.setAttribute("onclick", "switchOff()");
    
    const height = document.getElementsByClassName('height2')[0];
    height.style.backgroundColor = 'transparent';
})

function switchOff(){
    toggle.style.right = '3em';
    toggle.style.left = '0';
    toggle.innerHTML = "off &leftarrow;";
    toggle.classList.add('switchBtn');
    toggle.classList.remove('toggle');
    toggle.removeAttribute('onclick');

    const height = document.getElementsByClassName('height2')[0];
    height.style.backgroundColor = 'orange';
}

const products = document.getElementsByClassName('products')[0];
let products_children = products.children;
nth_product = products_children.length;
last_product = nth_product - 1;
let counter = 0;
const playItem = setInterval(startPlayItem, 3000);
startPlayItem();
function startPlayItem(){
    let active = products_children[counter];
    for(let i = 0; i < products_children.length; i++){
        if(i !==counter){
            inactive = products_children[i];
            inactive.style.backgroundColor = 'transparent';
        }else{
            active.style.backgroundColor = 'black';
        }
    }
    counter = counter + 1;
    if(counter == nth_product + 1){
        counter = 0;
        startPlayItem();
    }
}