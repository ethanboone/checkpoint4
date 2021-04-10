import { ProxyState } from "../AppState.js";
import Todo from "../Models/Todo.js";
import Task from "../Models/Task.js"
import { sandboxApi } from "./AxiosService.js";

class TodoService {

    async getAllTodo() {
        let res = await sandboxApi.get('Ethan/todos')
        ProxyState.tasks = res.data.map(task => new Task(task))
    }

    async addTodo(task) {
        let res = await sandboxApi.post(`/${task.user}/todos`, task)
        console.log(res.data)
        ProxyState.tasks = [...ProxyState.tasks, new Task(res.data)]
    }

    async removeTask(id) {
        await sandboxApi.delete('/Ethan/todos/' + id)
        ProxyState.tasks = ProxyState.tasks.filter(t => t.id !== id)
    }

    async completed(id) {
        let found = ProxyState.tasks.find(t => t.id == id)
        found.completed = !found.completed
        console.log(found)
        await sandboxApi.put('/Ethan/todos/' + id, found)
        let res = await sandboxApi.get('/Ethan/todos')
        ProxyState.tasks = res.data.map(t => new Task(t))
        console.log(ProxyState.tasks)
    }
}

export const todoService = new TodoService();