import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-gallery-small',
  templateUrl: './gallery-small.component.html',
  styleUrls: ['./gallery-small.component.css']
})
export class GallerySmallComponent implements OnInit {
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
