import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CourseServiceClient} from './services/CourseServiceClient';
import {ModuleServiceClient} from './services/ModuleServiceClient';
import {LessonServiceClient} from './services/LessonServiceClient';
import {TopicServiceClient} from './services/TopicServiceClient';
import {WidgetServiceClient} from './services/WidgetServiceClient';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CourseServiceClient,
    ModuleServiceClient,
    LessonServiceClient,
    TopicServiceClient,
    WidgetServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
