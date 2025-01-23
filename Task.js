export default class Task {
  #id;
  #name;
  #dueDate;
  #time;
  #isDone;

  constructor(name, dueDate, time) {
    this.#id = crypto.randomUUID();
    this.#name = name;
    this.#dueDate = dueDate;
    this.#time = time;
    this.#isDone = false;
  }

  // Getters
  getId() {
    return this.#id;
  }

  getName() {
    return this.#name;
  }

  getDueDate() {
    return this.#dueDate;
  }

  getTime() {
    return this.#time;
  }

  isDone() {
    return this.#isDone;
  }

  // Setters
  setName(name) {
    this.#name = name;
  }

  setDueDate(dueDate) {
    this.#dueDate = dueDate;
  }

  setTime(time) {
    this.#time = time;
  }

  toggleDone() {
    this.#isDone = !this.#isDone;
  }
}
