export class LessonServiceClient {
  LESSON_API_URL = 'https://wbdv-sp19s1-bteeman-db-service.herokuapp.com/api/lessons/';
  MODULE_API_URL = 'https://wbdv-sp19s1-bteeman-db-service.herokuapp.com/api/modules/';

  findAllLessons = () =>
    fetch(this.LESSON_API_URL)
      .then(response => response.json())

  findLessonsForModule = moduleId =>
    fetch(this.MODULE_API_URL + moduleId + '/lessons')
      .then(response => response.json())

  findLessoneById = lessonId =>
    fetch(this.LESSON_API_URL + lessonId)
      .then(response => response.json())
}
