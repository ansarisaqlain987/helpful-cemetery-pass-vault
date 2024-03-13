export class CustomError {
    private status: number;
    private error: any[];

    constructor(s: number, e: any[]){
        this.status = s;
        this.error = e;
    }

    getMessage(){
        return {error: this.error}
    }

    getStatus() {
        return this.status
    }
}