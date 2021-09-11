export abstract class Window {

    protected abstract preClose();

    protected abstract postClose();

    close() {
        this.preClose();
        console.log('Removing the window from the screen');
        this.postClose()
    }    
}