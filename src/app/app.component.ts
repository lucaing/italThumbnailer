import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from './services/data.service';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  addImageForm: FormGroup;
  url = new FormControl('', Validators.required);

    constructor(private http: Http,
                private dataService: DataService,
                private formBuilder: FormBuilder) {}

    addImageUrl(event) {
      this.addImageForm = this.formBuilder.group({
        url: event
      });

      console.log('Url: ', this.addImageForm.value);
      this.dataService.addImageUrl(this.addImageForm.value).subscribe(
        res => {
          let newImageUrl = res.json();
          this.addImageForm.reset();
          location.reload();
        },
        error => console.log(error)
      );
    }
  }
