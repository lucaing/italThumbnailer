import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-gallery-large',
  templateUrl: './gallery-large.component.html',
  styleUrls: ['./gallery-large.component.css']
})
export class GalleryLargeComponent implements OnInit {
  datasource;
  selectedImage;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getImageUlrs();
  }

  isLoading = true;

  getImageUlrs() {
    this.dataService.getImageUrls().subscribe(
      // data => console.log(data),
      data => this.datasource = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  setSelectedImage(image){
     this.selectedImage = image;
  }
}
