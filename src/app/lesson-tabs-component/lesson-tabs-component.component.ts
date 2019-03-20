import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LessonServiceClient} from '../services/LessonServiceClient';
import {Lesson} from '../models/lesson.model.client';

@Component({
  selector: 'app-lesson-tabs-component',
  templateUrl: './lesson-tabs-component.component.html',
  styleUrls: ['./lesson-tabs-component.component.css']
})
export class LessonTabsComponentComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private lessonService: LessonServiceClient,
    private router: Router
  ) { }
  selectedLessonId: number;
  courseId: number;
  moduleId: number;
  lessons: Lesson [];
  ngOnInit() {
    this.activatedRoute.params
      .subscribe(params => {
        this.selectedLessonId = params['lessonId']
        this.moduleId = params['moduleId'];
        this.courseId = params['courseId'];
        this.lessonService.findLessonsForModule(params['moduleId'])
          .then(lessons => {
            this.lessons = lessons;
          });
      });
  }

  selectLesson(lessonId) {
    console.log(lessonId)
    this.router.navigate(['course', this.courseId, 'module', this.moduleId, 'lesson', lessonId, 'topic']);
  }

}
