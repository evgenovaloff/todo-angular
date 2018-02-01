class todoController {
    constructor() {
        this.name = 'todo';
        this.url = 'https://github.com/preboot/angular-webpack';
        this.txt = this.btnText();
    }

    btnText() {
        return this.obj.notSaved ? 'Сохранить' : 'Изменить';
    }

    save() {
        this.obj.notSaved = false;
        this.txt = this.btnText();
    }
}

export default todoController;