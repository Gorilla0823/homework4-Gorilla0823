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
      this.flag=false;
      this.cycle=false;
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
  		if(this.count===this.gif.length){
        this.count=1;
        this.flag=true;
        this.cycle=true;
      }
      else if(this.count!==this.gif.length-1&&this.cycle===false){
        var init=(this.count===0)?this.count:this.count+1;
        for(var i=init;i<=this.count+1;i++){
          const background=document.createElement('div');
          var image=new Image;
          image.src=this.gif[i];
          image.addEventListener('load',function(){
            console.log('loaded');
          })
          background.style.backgroundImage= 'url('+this.gif[i]+')';
          background.setAttribute("class","inactive gif");
          document.querySelector("#gifs").appendChild(background);
        }
      }
  		if(!this.count){
  			const gif=document.querySelectorAll('.gif');
  			if(gif[this.count].classList.contains('inactive')){
  			    gif[this.count].classList.remove('inactive');
  			    gif[this.count].classList.add('foreground');
  				  gif[this.count].style.zIndex=2;
            //console.log('First access : foreground '+this.count+' backgroundImage '+ gif[this.count].style.backgroundImage );
  			}
        var back=this.count+1;
  			if(gif[back].classList.contains('inactive')){
  					gif[back].classList.remove('inactive');
  					gif[back].classList.add('background');
  					gif[back].style.zIndex=1;
            //console.log('First access : background '+back+' backgroundImage '+ gif[back].style.backgroundImage );
  			}
  		}
  		else{
  			const gif=document.querySelectorAll('.gif');
        var eliminate;
        if(this.flag===true){
          eliminate=this.gif.length-1;
          this.flag=false;
        }
        else 
          eliminate=this.count-1;
  			gif[eliminate].style.zIndex=-1;
  			gif[eliminate].classList.remove('foreground');
  			gif[eliminate].classList.add('inactive');
        //console.log('(Eliminate)foreground '+eliminate+' backgroundImage '+ gif[eliminate].style.backgroundImage );
  			gif[this.count].style.zIndex=2;
  			gif[this.count].classList.add('foreground');
  			gif[this.count].classList.remove('background');
  			//console.log('New: Foreground '+this.count+' backgroundImage '+ gif[this.count].style.backgroundImage );
        var newback=(this.count===this.gif.length-1)? 1 : this.count+1;
  			gif[newback].classList.remove('inactive');
  			gif[newback].classList.add('background');
  			gif[newback].style.zIndex=1;
        //console.log('New : Background '+newback+' backgroundImage '+ gif[newback].style.backgroundImage );
  		}
      this.count++;
  	}
}		
  		