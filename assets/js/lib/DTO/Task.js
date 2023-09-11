export class Task
{
    #id;
    #text;
    #createdAt;
    #doneAt;

    constructor(id, text) {
        this.#id = id;
        this.#text = text;
        this.#createdAt = Date.now();
        this.#doneAt = null;
    }

    getId() {
        return this.#id;
    }

    getText() {
        return this.#text;
    }

    getCreatedAt() {
        return this.#createdAt;
    }

    getDoneAt() {
        return this.#doneAt;
    }
}

let task = new Task(id, text, createdAt, doneAt);
task