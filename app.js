// This class will represent the music visualizer as a whole, similar to the
// role that the `App` class played in HW3.
//
// See HW4 writeup for more hints and details.
class App {
  	constructor() {
    	// TODO(you): Implement the constructor and add fields as necessary.
    	console.log('App');
    	this.theme=this.theme.bind(this);
    	this.error=this.error.bind(this);
    	const menu=document.querySelector("#menu");
    	this.menuscreen=new MenuScreen(menu,this.theme);
    	this.errorflag=false;
  	}
  	// TODO(you): Add methods as necessary.
  	theme(content){
  		console.log('App : menu to music');
  		this.content=content;
  		//console.log(content);
  		const music=document.querySelector("#music");
    	this.musicscreen=new MusicScreen(music,this.content,this.error,this.errorflag);
  	}
  	error(flag){
  		console.log('App : error');
  		//console.log(flag);
  		this.errorflag=flag;
 		if(!document.querySelector('.loading').classList.contains('inactive')){
 			document.querySelector('.loading').classList.add('inactive');
 			document.body.removeChild(document.querySelector('.loading'));
 		}
  		document.querySelector('#music').classList.add('inactive');
    	document.querySelector('#menu').classList.remove('inactive');
    	document.querySelector('#error').classList.remove('inactive');
  	}
}
