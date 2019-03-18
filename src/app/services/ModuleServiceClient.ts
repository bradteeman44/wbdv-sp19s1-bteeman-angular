export class ModuleServiceClient {
  MODULE_API_URL = 'https://wbdv-sp19s1-bteeman-db-service.herokuapp.com/api/modules/';
  COURSE_API_URL = 'https://wbdv-sp19s1-bteeman-db-service.herokuapp.com/api/courses/';

  findAllModules = () =>
    fetch(this.MODULE_API_URL)
      .then(response => response.json())

  findModulesForCourse = courseId =>
    fetch(this.COURSE_API_URL + courseId + '/modules')
      .then(response => response.json())

  findModuleById = moduleId =>
    fetch(this.MODULE_API_URL + moduleId)
      .then(response => response.json())
}
