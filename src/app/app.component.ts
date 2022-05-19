import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'gameD';
  cr = " ";
  imageCounter = 0;
  imageURL = '1.jpg';
  

  login(){
    const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
    this.imageCounter += 1;
    this.imageCounter = this.imageCounter%images.length;
    this.imageURL = "assets/"+images[this.imageCounter];
  }
}
