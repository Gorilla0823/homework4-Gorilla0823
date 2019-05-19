// This class will represent the menu screen that you see when you first load
// the music visualizer.
//
// See HW4 writeup for more hints and details.
class MenuScreen {
  	constructor(menu,backtheme) {
    	// TODO(you): Implement the constructor and add fields as necessary.
    	console.log('MenuScreen');
    	this.menu=menu;
    	this.backtheme=backtheme;
    	//console.log(this.menu);
    	//this.fetchselector=this.fetchselector.bind(this);
    	this.go=this.go.bind(this);
    	//this.select=this.select.bind(this);
    	const selector=this.menu.querySelector("#song-selector");
    	this.fetchselector(selector);
    	const theme=this.menu.querySelector("#query-input");
    	this.themeselector(theme);
    	const gogo=this.menu.querySelectorAll('input');
    	gogo[1].addEventListener('click',this.go);
	}
  	// TODO(you): Add methods as necessary.
  	fetchselector(selector){
		console.log('MenuScreen : fetchselector');
  		//console.log(selector);
  		fetch('https://fullstackccu.github.io/homeworks/hw4/songs.json', {})
  		.then((response) => {
    	//console.log(response);
    		return response.json(); 
  		})
  		.then((jsonData) => {
    		//console.log(jsonData);
    		this.data=jsonData;
    		//console.log(this.data['夫妻']);
    		for(let innerdata in this.data){
    			//console.log(this.data[innerdata].title);
    			const newoption=document.createElement('option');
    			newoption.setAttribute("value",this.data[innerdata].songUrl);
    			newoption.innerText=this.data[innerdata].title;
    			selector.appendChild(newoption);
    		}
  		})
  		.catch((err) => {
		});
  	}

  	themeselector(theme){
  		console.log('MenuScreen : themeselector');
  		//console.log(theme);
  		var words=['candy', 'charlie brown', 'computers', 'dance', 'donuts', 'hello kitty', 'flowers', 'nature', 'turtles', 'space'];
  		this.topic=words[Math.floor(Math.random()*words.length)];
  		theme.value=this.topic;
  	}
  	go(gogo){
  		console.log('MenuScreen : go ');
  		gogo.preventDefault();
  		document.querySelector('#menu').classList.add('inactive');
  		const theme=document.querySelector("#query-input");
  		this.backtheme(theme.value);
  		//const selector=document.getElementById("song-selector");
  		//console.log(selector[selector.selectedIndex].value);
  	}
}
