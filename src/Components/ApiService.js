export default class ApiService {
  static baseUrl = `http://localhost:8081/api/v1/student/`;
  //   static updateOptions(options) {
  //     const update = { ...options };
  //     update.headers = {
  //       ...update.headers,
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     };
  //     return update;
  //   }

  static async api(url, options) {
    return await fetch(url);
  }
  static async apiPost(url, options) {
    return await fetch(url, { method: "POST" });
  }

  static getStudent() {
    return ApiService.api(`${this.baseUrl}getStudent`).then((response) =>
      response.json()
    );
  }

  static addStudent(name, email, department, phone, age) {
    return ApiService.apiPost(
      `${this.baseUrl}saveStudent?name=${name}&email=${email}&department=${department}&phone=${phone}&age=${age}`
    ).then((response) => response.json());
  }
}
