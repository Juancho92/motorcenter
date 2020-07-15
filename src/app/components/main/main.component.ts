import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { LocationStrategy } from '@angular/common';

//JS functions
declare function randomWord(): any;

var ranWordInterval = null;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  phrase: string;
  displayLogin:boolean=false;

  @ViewChild('videoPlayer') videoplayer: ElementRef;

  constructor() {}

  ngOnInit(): void {
    //Random word js function
    clearInterval(ranWordInterval);
    ranWordInterval = setInterval(()=>{    
      this.phrase = randomWord();
    }, 300);

    //Check if comes from login rul
    if(history.state.data){  
      clearInterval(ranWordInterval);
      this.phrase = 'RESPONSABLES';
      this.displayLogin = true; 
    }
  }

  //Toggle video function
  playVideo() {
    clearInterval(ranWordInterval);
    const video: HTMLVideoElement = this.videoplayer.nativeElement;
    video.muted = true;
    video.play();
  }

  pauseVideo(){
    clearInterval(ranWordInterval);
    ranWordInterval = setInterval(()=>{    
      this.phrase = randomWord();
    }, 300);
    const video: HTMLVideoElement = this.videoplayer.nativeElement;
    video.pause();
  }

  //Show login component
  showLogin(){
    clearInterval(ranWordInterval);
    this.displayLogin = true;
  }

  hideLogin(status:boolean) {
    clearInterval(ranWordInterval);     
    ranWordInterval = setInterval(()=>{   
      this.phrase = randomWord();
    }, 300);
    this.displayLogin = status;
  }

}
