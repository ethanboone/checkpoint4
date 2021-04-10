import { ProxyState } from "../AppState.js"

export default class Todo {
    constructor(title, tasks = '') {
        this.title = title
    }

    get Template() {

        return /*html*/`
        <div class="w-100 value">
            <p>${this.Tasks}</p>
        </div>
        `
    }
    get Tasks() {
        let template = ''
        ProxyState.tasks.forEach(task =>
            template += task.Template)
        return template
    }
    get CompletedTasks() {
        let complete = ProxyState.tasks.filter(t => t.completed == true)
        return `<span>${complete.length}/${ProxyState.tasks.length}</span>`
    }
}
