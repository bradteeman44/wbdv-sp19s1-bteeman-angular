export class WidgetServiceClient {
  TOPIC_API_URL = 'https://wbdv-sp19s1-bteeman-db-service.herokuapp.com/api/topics/';
  WIDGET_API_URL = 'https://wbdv-sp19s1-bteeman-db-service.herokuapp.com/api/widget/';

  findAllWidgets = () =>
    fetch(this.WIDGET_API_URL)
      .then(response => response.json())

  findWidgetsForTopic = topicId =>
    fetch(this.TOPIC_API_URL + topicId + '/widget')
      .then(response => response.json())

  findWidgetById = (widgetId) =>
    fetch(this.WIDGET_API_URL + widgetId)
      .then(response => response.json())
}
