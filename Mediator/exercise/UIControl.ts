export abstract class UIControl {
    #listeners = [];

    addListener(listener){
        this.#listeners.push(listener);
    }

    protected notifyListeners(){
        for(const listener of this.#listeners){
            listener();
        }
    }
}