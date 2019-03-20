import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetServiceClient} from '../services/WidgetServiceClient';

@Component({
  selector: 'app-widget-list-component',
  templateUrl: './widget-list-component.component.html',
  styleUrls: ['./widget-list-component.component.css']
})
export class WidgetListComponentComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private widgetService: WidgetServiceClient,
    private router: Router
  ) {
  }

  widgets: [];

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(params => {
        this.widgetService.findWidgetsForTopic(params.topicId)
          .then(widgets =>
            this.widgets = widgets);
      });
  }

}
