export class User {
    id: number;
    email: string;
    name: string;
    password: string;
    constructor() 
    { 

    }

    public init_empty() : void{
        this.id = 0;
        this.email = '0';
        this.name = '0';
        this.password = '0';
    }
}