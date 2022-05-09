import { EventEmitter } from "events";
import { randomUUID } from "crypto";

export default class Client extends EventEmitter {
    private id: string;
    private connection: any;
    private username?: string;
    private color?: string;
    private request: any;

    constructor(request: any) {
        super();


        this.id = randomUUID();
        this.request
    }
}