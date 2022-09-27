const switchBtn = document.getElementsByClassName("switch-btn")[0];

switchBtn.addEventListener("click", function(){

	switchBtn.style.right = "0";

	switchBtn.innerHTML = "&leftarrow; Restore";

	switchBtn.classList.add("switch-btn-off");

	switchBtn.setAttribute("onclick", "switchOff()");



	//Remove the background image..
	const heightContainer = document.getElementsByClassName("height2")[0];
	heightContainer.style.backgroundColor = "transparent";

})



function switchOff(){
	
	switchBtn.style.right = "50%";
	switchBtn.innerHTML = "Remove &rightarrow;";

	switchBtn.classList.remove("switch-btn-off");
	switchBtn.classList.add("switch-btn");
	switchBtn.removeAttribute("onclick");

	const heightContainer = document.getElementsByClassName("height2")[0];
	heightContainer.style.backgroundColor = "orange";



}


/**
 * Start the selection
 */

const stacks = document.getElementsByClassName("items")[0];
stacks_children = stacks.children;
//let counter = 0;
//get the end of the cyclobold_stacks..
nth_item = stacks_children.length;
last_item = nth_item - 1;

let counter = 0;
const carousel = setInterval(startCarousel, 3000);

startCarousel();//start the loop from here
function startCarousel(){
	let active_div = stacks_children[counter];
		for(let i = 0; i < stacks_children.length; i++){
		if(i !== counter){
			inactive_div = stacks_children[i];
			inactive_div.style.backgroundColor = "transparent";
			inactive_div.style.transition = "all 2s linear";
			inactive_div.style.transform = "translateX(-20rem)";
			
		}else{
			    inactive_div = stacks_children[i];
				//highlight the active div
				active_div.style.backgroundColor = "black";
				inactive_div.style.transition = "all 2s linear";
			    inactive_div.style.transform = "translateX(0)";
		}
	}

	counter = counter + 1;

	if(counter == nth_item + 1){
		counter = 0;
		startCarousel();
	}



}

