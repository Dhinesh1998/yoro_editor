import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  VERSION,
} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  name = 'Angular ' + VERSION.major;

  ngAfterViewChecked(): void {
    //  console.log(document.getElementById('editor').innerHTML.toString());
  }

  ngAfterViewInit(): void {
    document.getElementById('editor').addEventListener('input', function () {
      console.log(document.getElementById('editor').innerHTML);
    });
  }
}
