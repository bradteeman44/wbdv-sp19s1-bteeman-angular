import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LessonServiceClient} from '../services/LessonServiceClient';
import {TopicServiceClient} from '../services/TopicServiceClient';
import {Topic} from '../models/topic.model.client';

@Component({
  selector: 'app-topic-pills-component',
  templateUrl: './topic-pills-component.component.html',
  styleUrls: ['./topic-pills-component.component.css']
})
export class TopicPillsComponentComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private topicService: TopicServiceClient,
    private router: Router
  ) { }
  selectedTopicId: number;
  courseId: number;
  moduleId: number;
  lessonId: number;
  topics: Topic [];
  ngOnInit() {
    this.activatedRoute.params
      .subscribe(params => {
        this.selectedTopicId = params['topicId']
        this.moduleId = params['moduleId'];
        this.courseId = params['courseId'];
        this.lessonId = params['lessonId']
        this.topicService.findTopicsForLesson(params['lessonId'])
          .then(topics => {
            this.topics = topics;
          });
      });
  }

  selectTopic(topicId) {
    console.log(topicId)
    this.router.navigate(['course', this.courseId, 'module', this.moduleId, 'lesson', this.lessonId, 'topic', topicId, 'widget']);
  }
}
