export class CustomError {
    private status: number;
    private error: any[];
    private code: number | undefined;

    constructor(s: number, e: any[], c?: number){
        this.status = s;
        this.error = e;
        this.code = c;
    }

    getMessage(){
        return {error: this.error, errorCode: this.code}
    }

    getStatus() {
        return this.status
    }
}