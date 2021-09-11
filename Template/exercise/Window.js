export class Window {
    close() {
        this.preClose();
        console.log('Removing the window from the screen');
        this.postClose();
    }
}
