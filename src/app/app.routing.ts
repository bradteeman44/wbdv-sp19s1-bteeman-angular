import { Routes, RouterModule } from '@angular/router';
import {ModuleListComponentComponent} from './module-list-component/module-list-component.component';
import {CourseGridComponentComponent} from './course-grid-component/course-grid-component.component';
import {LessonTabsComponentComponent} from './lesson-tabs-component/lesson-tabs-component.component';
import {TopicPillsComponentComponent} from './topic-pills-component/topic-pills-component.component';
import {WidgetListComponentComponent} from './widget-list-component/widget-list-component.component';
const appRoutes: Routes = [
  { path: '', redirectTo: 'course', pathMatch: 'full' },
  { path: 'course', component: CourseGridComponentComponent },
  { path: 'course/:courseId/module', component: ModuleListComponentComponent },
  { path: 'course/:courseId/module/:moduleId/lesson', component: LessonTabsComponentComponent },
  { path: 'course/:courseId/module/:moduleId/lesson/:lessonId/topic', component: TopicPillsComponentComponent },
  { path: 'course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId/widget', component: WidgetListComponentComponent },
  { path: '**', component: CourseGridComponentComponent }
];
export const routing = RouterModule.forRoot(appRoutes);
