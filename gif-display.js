// This class will represent the gif display area. It keeps track of which gif
// is being shown and can select a new random gif to be shown.
// 
// See HW4 writeup for more hints and details.
class GifDisplay {
  	constructor(content,stop,apperror) {
    	// TODO(you): Implement the constructor and add fields as necessary.
    	console.log('GifDisplay'); 
    	this.apperror=apperror;
    	this.stop=stop;
    	this.changeGIF=this.changeGIF.bind(this);
    	this.gif=[];
    	this.display(content);
    	this.count=0;
  	}

   	display(content){
  		console.log('GifDisplay : display');
  		fetch('https://api.giphy.com/v1/gifs/search?q='+content+'&api_key=G6TammXG7v2AGeeUQRVnN3ZrgUa4zW5x&limit=25&rating=g', {})
  		.then(response => {
    		return response.json(); 
  		})
  		.then(jsonData => {
    		if(jsonData.data.length < 2){
    			this.stop();
    			return this.apperror(this.flag);
    		}
    		for(let index in jsonData.data){
    			var gifUrl = jsonData.data[index].images.downsized.url;
				  this.gif.push(gifUrl);
    		}
    		this.changeGIF();
  		});
  	}

  	changeGIF(){
  		this.count++;
  		//for the first access , set foreground and background
  		if(this.count==1){
  			for(var i=0;i<this.gif.length;i++){
  				const background=document.createElement('div');
  				var image=new Image;
  				image.src=this.gif[i];
  				image.addEventListener('load',function(){
  					console.log('loaded');
  				})
  				background.style.backgroundImage= 'url('+image.src+')';
  				background.setAttribute("class","inactive gif");
  				document.querySelector("#gifs").appendChild(background);
  			}
  			var random=Math.floor(Math.random()*this.gif.length);
  			const gif=document.querySelectorAll('.gif');
  			if(gif[random].classList.contains('inactive')){
  				gif[random].classList.remove('inactive');
  				gif[random].classList.add('foreground');
  				gif[random].style.zIndex=2;
  			}
  			//console.log(gif[random].style.backgroundImage);
  			random=( random === (this.gif.length-1) )?random-1:random+1;
  			if(gif[random].classList.contains('inactive')){
  					gif[random].classList.remove('inactive');
  					gif[random].classList.add('background');
  					gif[random].style.zIndex=1;
  			}
  			//console.log(gif[random].style.backgroundImage);
  		}
  		//for all the next access, delete foreground ,replace it,and find a new background
  		else{
  			var index;
  			const gif=document.querySelectorAll('.gif');
  			for(var i=0;i<this.gif.length;i++){
  				if(gif[i].classList.contains('foreground')){
  					gif[i].style.zIndex=-1;
  					gif[i].classList.remove('foreground');
  					gif[i].classList.add('inactive');
  				}
  				else if(gif[i].classList.contains('background')){
  					gif[i].style.zIndex=2;
  					gif[i].classList.add('foreground');
  					gif[i].classList.remove('background');
  					index=i;
  					//console.log(gif[i].style.backgroundImage);
  				}
  			}
  			var random=Math.floor(Math.random()*this.gif.length);
  			random=( random === (this.gif.length-1) )?random-1:random+1;
  			if(random === index)
  				random=(index === (this.gif.length-1) )?index-1:index+1;
  			if(gif[random].classList.contains('inactive')){
  				gif[random].classList.remove('inactive');
  				gif[random].classList.add('background');
  				gif[random].style.zIndex=1;
  				//console.log(gif[random].style.backgroundImage);
  			}
  		}
  	}
}		
  			/*var index;
  			for(var i=0;i<this.gif.length;i++){
  				const gif=document.querySelectorAll('.gif');
  				if(!gif[i].classList.contains('inactive')){
  					gif[i].classList.add('inactive');
  					index=i;
  					break;
  				}
  			}*/
  			//var random=Math.floor(Math.random()*this.gif.length);
  			//console.log(random);
  			
  			//console.log(random);
  			/*if(random === index)
  				random=(index === (this.gif.length-1) )?index-1:index+1;*/
  			//const gif=document.querySelectorAll('.gif');
  				
  		/*if(this.count===1){
  			for(var i=0;i<this.gif.length;i++){
  				const background=document.createElement('div');
  				background.style.backgroundImage= 'url('+this.gif[i]+')';
  				background.setAttribute("class","inactive gif");
  				document.querySelector("#gifs").appendChild(background);
  			}
  			var random=Math.floor(Math.random()*this.gif.length);
  			const gif=document.querySelectorAll('.gif');
  			if(gif[random].classList.contains('inactive'))
  				gif[random].classList.remove('inactive');
  		}
  		else{
  			var index;
  			for(var i=0;i<this.gif.length;i++){
  				const gif=document.querySelectorAll('.gif');
  				if(!gif[i].classList.contains('inactive')){
  					gif[i].classList.add('inactive');
  					index=i;
  					break;
  				}
  			}
  			var random=Math.floor(Math.random()*this.gif.length);
  			//console.log(random);
  			random=( random === (this.gif.length-1) )?random-1:random+1;
  			if(random === index)
  				random=(index === (this.gif.length-1) )?index-1:index+1;
  			const gif=document.querySelectorAll('.gif');
  				if(gif[random].classList.contains('inactive'))
  					gif[random].classList.remove('inactive');
  			//console.log(random);
  		}*/

// TODO(you): Add methods as necessary.
/*var random=Math.floor(Math.random()*this.gif.length);
  	const gifs=document.querySelector("#gifs");
  	if(gifs.classList.contains('inactive'))
  		gifs.classList.remove('inactive');
  	gifs.style.backgroundImage= 'url('+this.gif[random]+')';
  	background.setAttribute("class","gif");
  	console.log('current '+ this.gif[random]);
  	const background=document.createElement('div');
  	var random2=(random===this.gif.length)?random-1:random+1;
    console.log('next '+ this.gif[random2]);
  	background.style.backgroundImage= 'url('+this.gif[random2]+')';
  	background.setAttribute("class","inactive");
  	background.setAttribute("class","gif");
  	const gifs2=document.querySelector("#music");
  	gifs2.appendChild(background);*/