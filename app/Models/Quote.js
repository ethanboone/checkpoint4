export default class Quote {
    constructor(data) {
        this.quote = data.content
        this.author = data.author
    }

    get Template() {

        return /*html*/`
        <div class="p-2 text-light text-center">
            ${this.quote}
            <br>
            <a id="author">
                -
                <br>
                ${this.author}
            </a>
        </div>
        `
    }
}
