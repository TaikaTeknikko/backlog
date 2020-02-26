export class Task {
    id: number;
    title: string;
    text: string;

    constructor(newId: number, newTitle: string, newText: string) {
        this.id = newId;
        this.title = newTitle;
        this.text = newText;
    }
}