class Expect {
    private received: any;
    constructor(received: any){
        this.received = received;
    }
    toEqual(expected) {
        return expected === this.received;
    }
}

export class Sujjest {
    private static instance: Sujjest;
    private constructor() {}
    public static getInstance(): Sujjest {
        if (!Sujjest.instance) {
        Sujjest.instance = new Sujjest();
        }
        return Sujjest.instance;
    }
    public expect(received: any) {
        return new Expect(received);
    }
}
