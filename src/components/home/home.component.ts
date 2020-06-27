import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loading: boolean = true;
  finishedVideo: boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handlerClickStart() {
    if(this.finishedVideo) 
      this.router.navigate(['/characters']);
  }

  onLoadedData (): void {
    this.loading = false;
    document.getElementById("video-element")['play']();    
  }

  onLoadedDataAudio (): void {
    document.getElementById("audio-element")['play']();
  }

  onTimeUpdate():void {
    const video = document.getElementById("video-element");

    if(video['currentTime'] >= 26.6) {
      console.log(video['currentTime'])
      this.finishedVideo = true;
      video['pause']();
    }
  }

}
