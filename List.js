export default class List {
    #id;
    #name;
    #tasks;
  
    constructor(name) {
      this.#id = crypto.randomUUID();
      this.#name = name;
      this.#tasks = new Map();
    }
  
    // Getters
    getId() {
      return this.#id;
    }
  
    getName() {
      return this.#name;
    }
  
    getTasks() {
      return Array.from(this.#tasks.values());
    }
  
    getTaskById(taskId) {
      return this.#tasks.get(taskId) || null;
    }
  
    getTaskCount() {
      return this.#tasks.size;
    }
  
    // Setters
    setName(name) {
      this.#name = name;
    }
  
    // Métodos para manejar tareas
    addTask(task) {
      if (task instanceof Task) {
        this.#tasks.set(task.getId(), task);
      } else {
        throw new Error("El elemento añadido no es una instancia válida de Task.");
      }
    }
  
    removeTask(taskId) {
      if (this.#tasks.has(taskId)) {
        this.#tasks.delete(taskId);
      } else {
        throw new Error("La tarea no existe en la lista.");
      }
    }
  
    toggleTaskDone(taskId) {
      const task = this.#tasks.get(taskId);
      if (task) {
        task.toggleDone();
      } else {
        throw new Error("La tarea no existe en la lista.");
      }
    }
  }
  