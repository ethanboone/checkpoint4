export default class Task {
    constructor(data) {
        this.completed = data.completed
        this.createdAt = data.createdAt
        this.description = data.description
        this.id = data.id
        this.updatedAt = data.updatedAt
        this.user = data.user
    }

    get Template() {
        let template = ''
        return /*html*/`
            <div class="d-flex align-items-center justify-content-between">
                ${this.completed == true ? '<i class="fas fa-check"></i>' : ''}
                <button class="btn btn-sm btn-outline-success m-2" onclick="app.todoController.completed('${this.id}')">Done</button>
                    <div class="d-flex flex-column m-2">
                        <span>${this.description}</span>
                    </div>
                <button class="btn btn-sm btn-outline-danger" title='X' onclick="app.todoController.removeTask('${this.id}')">x</button>
            </div>
        `
    }
}