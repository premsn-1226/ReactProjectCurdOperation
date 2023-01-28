export default class ApiService {
  static baseUrl = `http://localhost:8081/api/v1/student/`;

  static async api(url, options ) {
    return await fetch(url, { method: options });
  }

  static getStudent() {
    return ApiService.api(`${this.baseUrl}getStudent`, "GET").then((response) =>
      response.json()
    );
  }

  static addStudent(name, email, department, phone, age) {
    return ApiService.api(
      `${this.baseUrl}saveStudent?name=${name}&email=${email}&department=${department}&phone=${phone}&age=${age}`, "POST"
    ).then((response) => response.json());
  }

  static deleteStudent(id) {
    ApiService.api(`${this.baseUrl}deleteStudent?id=${id}`, "DELETE");
  }
}
