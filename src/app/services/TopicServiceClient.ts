export class TopicServiceClient {
  TOPIC_API_URL = 'https://wbdv-sp19s1-bteeman-db-service.herokuapp.com/api/topics/';
  LESSON_API_URL = 'https://wbdv-sp19s1-bteeman-db-service.herokuapp.com/api/lessons/';

  findAllTopics = () =>
    fetch(this.TOPIC_API_URL)
      .then(response => response.json())

  findTopicsForLesson = lessonId =>
    fetch(this.LESSON_API_URL + lessonId + '/topics')
      .then(response => response.json())

  findTopicById = topicId =>
    fetch(this.TOPIC_API_URL + topicId)
      .then(response => response.json())
}
