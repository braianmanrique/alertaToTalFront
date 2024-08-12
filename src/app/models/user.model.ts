export class User{
    constructor(
        public name : string,
        public email: string,
        public document: string,
        public password?: string,
    ){}

    showUser(){
        console.log(this.name);
    }
}