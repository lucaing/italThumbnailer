import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DataService, } from './services/data.service';

import { ToastComponent } from './shared/toast/toast.component';
import { GallerySmallComponent } from './gallery-small/gallery-small.component';
import { GalleryLargeComponent } from './gallery-large/gallery-large.component';

const routing = RouterModule.forRoot([
    { path: '', component: GallerySmallComponent },
    { path: 'gallery-large', component: GalleryLargeComponent }
]);

@NgModule({
  declarations: [
    AppComponent,
    ToastComponent,
    GallerySmallComponent,
    GalleryLargeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  providers: [
    DataService,
    ToastComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule { }
