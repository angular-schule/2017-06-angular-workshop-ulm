export class Test {
    
    constructor(private id: number) {
    }

    calculatedNumber() {
        return this.id + 42;
    }

    test() {

        var callback = () => this.calculatedNumber();
        
        console.log(`
        Hallo 
        TypeScript 
        ${callback()}!`);
    }
}