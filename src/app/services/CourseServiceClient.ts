export class CourseServiceClient {
  COURSE_API_URL = 'https://wbdv-sp19s1-bteeman-db-service.herokuapp.com/api/courses';

  findAllCourses = () =>
    fetch(this.COURSE_API_URL)
      .then(response => response.json())

  findCourseById = courseId =>
    fetch(this.COURSE_API_URL + '/' + courseId)
      .then(response => response.json())
}
