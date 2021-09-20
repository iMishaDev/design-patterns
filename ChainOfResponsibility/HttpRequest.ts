export class HttpRequest {
    #username;
    #password;

    constructor(username, password){
        this.#username = username;
        this.#password = password;
    }
    getUserName(){
        return this.#username;
    }

    getPassword(){
        return this.#password;
    }
}