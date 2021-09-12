import { Command } from "./generics/Command.js";

export class AddCustomerCommand implements Command {

    #customerService;

    constructor(customerService){
        this.#customerService = customerService;
    }
    execute() {
        this.#customerService.addCustomer();
    }
}