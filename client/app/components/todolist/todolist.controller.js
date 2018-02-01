class todolistController {
    constructor() {
        this.todos = [
            {
                text: 'Купить мясо',
                completed: true
            },
            {
                text: 'Допилить проект',
                completed: false
            }
        ];
        this.hello = 'Hi!';
    }

    add() {
        this.todos.unshift(
            {
                text: '',
                completed: false,
                notSaved: true
            }
        )
    }
}

export default todolistController;