import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

export interface Task {
  isSchool: string;
  isRegion: string;
  school: string;
  region: string;
}

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {

  targetGroup: string;
  targets: string[] = ['campus', 'region'];

  isSchool: boolean;
  isRegion: boolean;

  schools: Array<any> = [
    'All',
    'KNUST', 
    'UG', 
    'UEW', 
    'UCC', 
    'TTU', 
    'ATU', 
    'KsTU', 
    'KTU', 
    'HTU'
  ];

  regions: Array<any> = [
    'All',
    'Greater Accra',
    'Eastern',
    'Western',
    'Central',
    'Volta',
    'Northern',
    'Ashanti',
    'Brong Ahafo',
  ];

  categories: Array<any> = [
    'All', 
    'Survey', 
    'Mobile Application', 
    'Testing', 
    'Promotion', 
    'Download/Install', 
    'Write Article', 
    'Signup', 
  ];

  showSelect = new FormControl(false);

  constructor() { }

  ngOnInit() {

    console.log(this.targetGroup);
  }

  // triggerResize() {
  //   // Wait for changes to be applied, then trigger textarea resize.
  //   this._ngZone.onStable.pipe(take(1))
  //       .subscribe(() => this.autosize.resizeToFitContent(true));
  // }

}
