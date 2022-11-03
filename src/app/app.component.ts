import {
  AfterViewChecked,
  Component,
  DoCheck,
  OnChanges,
  VERSION,
} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewChecked, DoCheck {
  name = 'Angular ' + VERSION.major;

  ngAfterViewChecked(): void {
    //  console.log(document.getElementById('editor').innerHTML.toString());
  }

  ngDoCheck(): void {
    document.getElementById('editor').addEventListener('input', function () {
      console.log(document.getElementById('editor').innerHTML);
    });
  }
}
