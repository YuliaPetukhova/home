export class Task
{
    #id;
    #text;
    #createdAt;
    #doneAt;

    constructor(id, text, createdAt, doneAt) {
        this.#id = id;
        this.#text = text;
        this.#createdAt = createdAt;
        this.#doneAt = doneAt;
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

// let task = new Task(id, text, createdAt, doneAt);
// task