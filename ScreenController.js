import Task from "./Task";
import List from "./List";
import ListManager from "./ListManager";

export default class ScreenController {
    #listManager;
    #listContainer;
    #taskContainer;
    
    constructor(){
        this.#listManager = new ListManager();
        this.#listContainer = document.querySelector(".lists-nav");
        this.#taskContainer = document.querySelector(".todo-list");
    }
}