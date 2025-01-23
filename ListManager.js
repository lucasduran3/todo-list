import List from "./List";

export default class ListManager {
  #lists;

  constructor() {
    this.#lists = new Map();
  }

  addList(listName) {
    const newList = new List(listName);
    this.#lists.set(newList.getId(), newList);
    return newList;
  }

  getLists() {
    return Array.from(this.#lists.values());
  }

  getListById(listId) {
    return this.#lists.get(listId) || null;
  }

  updateListName(listId, newName) {
    const list = this.#lists.get(listId);

    if (list) {
      list.setName(newName);
    } else {
      throw new Error("La lista no existe");
    }
  }

  removeList(listId) {
    if (this.#lists.has(listId)) {
      this.#lists.delete(listId);
    } else {
      throw new Error("La lista no existe");
    }
  }

  getListCount() {
    return this.#lists.size;
  }
}
