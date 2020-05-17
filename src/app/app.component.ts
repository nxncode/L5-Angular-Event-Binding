import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'event-binding';
  name = '';
  kPress='';
  kUp='';
  kDown='';
  blurText = '';

  displayName(){
    this.name = 'Welcome to Angular Training';
    console.log("You have entered the displayName() function.")
  } 

  displayValue(event){
    console.log(event);
    console.log(event.key);
    this.kPress = this.kPress + event.key;
    this.kUp = this.kUp + event.key;
    this.kDown = this.kDown + event.key;
    if(event.key === 'Enter'){
      console.log('You have Pressed Enter');
    }
    
  }
  blurEvent(event){
    this.blurText = event.target.value;
  }

  mouseEnterEvent(){
    alert("Mouse Entered");
  }

  mouseLeftEvent(){
    alert("mouse Left");
  } 

}
