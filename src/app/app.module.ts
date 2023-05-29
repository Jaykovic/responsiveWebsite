import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { CoursesComponent } from './courses/courses.component';
import { GetAppComponent } from './get-app/get-app.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TestimonialComponent,
    CoursesComponent,
    GetAppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
