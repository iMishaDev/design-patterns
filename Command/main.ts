import { AddCustomerCommand } from "./AddCustomerCommand.js";
import { CustomerService } from "./CustomerService.js";
import { Button } from "./generics/Button.js";

let service = new CustomerService();
let command = new AddCustomerCommand(service);
let button = new Button('add customer', command);
button.click();