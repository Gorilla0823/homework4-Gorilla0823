// This class will represent the music visualizer screen, i.e. the screen that
// you see after you select a song.
//
// This class should create and own:
//   - 1 AudioPlayer
//   - 1 GifDisplay
//   - 1 PlayButton
//
// See HW4 writeup for more hints and details.
class MusicScreen {
  	constructor(music,content,apperror,flag) {
    	// TODO(you): Implement the constructor and add fields as necessary.
    	console.log('MusicScreen');
    	//this.err=false;
    	this.audio=new AudioPlayer();
    	this.stopsong=this.stopsong.bind(this);
    	this.flag=false;
   		this.apperror=apperror;
   		this.content=content;
   		this.startsong();
 	}

  	async startsong(){
  		this.displaygif=new GifDisplay(this.content,this.stopsong,this.apperror);
  		var loading=document.createElement('div');
  		loading.innerText='Loading...';
  		loading.setAttribute("class","loading");
  		document.body.appendChild(loading);
  		await this.sleep(1500);
  		if(!this.flag){
  			document.querySelector('.loading').classList.add('inactive');
    		document.querySelector('#music').classList.remove('inactive');
  			console.log('MusicScreen : Startsong');
  			var changeGIF=this.displaygif.changeGIF.bind(this);
  			const playbutton=new PlayButton(this.audio);
    		const selector=document.getElementById("song-selector");
    		this.audio.setSong(selector[selector.selectedIndex].value);
			this.audio.play();
    		this.audio.setKickCallback(function(){
    			console.log('Kick');
    			changeGIF();
  			});
  			this.flag=false;
		}	
  	}

  	stopsong(){
  		this.audio.pause();
  		this.flag=true;
  	}

  	sleep(ms) {
  		return new Promise(resolve => setTimeout(resolve, ms));
	}
}
