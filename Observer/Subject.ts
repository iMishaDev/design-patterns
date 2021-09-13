export class Subject {
    #observers = [];


    addObserver(observer){
        this.#observers.push(observer);
    }

    removeObserver(observer){
        this.#observers.filter((ob) => ob !== observer);
    }

    notifyObservers(){
        for(const observer of this.#observers){
            observer.update();
        }
    }
}