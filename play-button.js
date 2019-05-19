// This class will represent the play button in the MusicScreen. Clicking on
// it toggles audio playback.
//
// See HW4 writeup for more hints and details.
class PlayButton {
  	constructor(audio) {
    	// TODO(you): Implement the constructor and add fields as necessary.
    	console.log('PlayButton');
    	this.audio=audio;
 		this.toggle=this.toggle.bind(this);
    	const button=document.querySelector('#playbutton');
    	this.pausesrc=button.src;
    	//console.log(button.src);
    	button.addEventListener('click',this.toggle);
  	}
  	toggle(){
  		console.log('PlayButton : toggle');
		var play="images/play.png";
  		this.playsrc=play;
  		const button=document.querySelector('#playbutton');
  		//button.src=(button.src===this.pausesrc)?this.playsrc;:this.pausesrc;
  		if(button.src===this.pausesrc){
  			button.src=this.playsrc;
  			this.audio.pause();
  		}
  		else{
  			button.src=this.pausesrc;
  			this.audio.play();
  		}
  	}
  	// TODO(you): Add methods as necessary.
}
