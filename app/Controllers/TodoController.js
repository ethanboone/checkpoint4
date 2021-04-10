import { ProxyState } from "../AppState.js";
import { todoService } from "../Services/TodoService.js";


//Private
function _draw() {
    let todo = ProxyState.todo;
    let template = ''
    todo.forEach(t => template += t.Template)
    document.getElementById('list').innerHTML = template
    document.getElementById('completed').innerHTML = todo[0].CompletedTasks
}


//Public
export default class todoController {
    constructor() {
        ProxyState.on("todo", _draw);
        ProxyState.on('tasks', _draw)

        this.getAllTodo()
    }

    async getAllTodo() {
        try {
            todoService.getAllTodo()
        } catch (error) {
            console.error(error)
        }
    }

    async addTodo() {
        try {
            window.event.preventDefault()
            let form = window.event.target
            let task = {
                description: form.description.value,
                user: 'Ethan'
            }
            await todoService.addTodo(task)
            form.reset()
            console.log(ProxyState.tasks)
        } catch (error) {
            console.error(error)
        }

    }

    async removeTask(id) {
        try {
            await todoService.removeTask(id)
        } catch (error) {
            console.error(error)
        }
    }

    async completed(id) {
        try {
            await todoService.completed(id)
        } catch (error) {
            console.error(error)
        }
    }
}