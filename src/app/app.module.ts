import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CourseServiceClient} from './services/CourseServiceClient';
import {ModuleServiceClient} from './services/ModuleServiceClient';
import {LessonServiceClient} from './services/LessonServiceClient';
import {TopicServiceClient} from './services/TopicServiceClient';
import {WidgetServiceClient} from './services/WidgetServiceClient';
import { CourseGridComponentComponent } from './course-grid-component/course-grid-component.component';
import { ModuleListComponentComponent } from './module-list-component/module-list-component.component';
import { LessonTabsComponentComponent } from './lesson-tabs-component/lesson-tabs-component.component';
import { TopicPillsComponentComponent } from './topic-pills-component/topic-pills-component.component';
import { WidgetListComponentComponent } from './widget-list-component/widget-list-component.component';
import {routing} from './app.routing';
import { WhiteboardComponent } from './whiteboard/whiteboard.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseGridComponentComponent,
    ModuleListComponentComponent,
    LessonTabsComponentComponent,
    TopicPillsComponentComponent,
    WidgetListComponentComponent,
    WhiteboardComponent
  ],
  imports: [
    BrowserModule,
    routing
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
