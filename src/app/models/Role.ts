export class Role {
    public idRole: number;
    public libelleRole: string;

    constructor(){}

    public init_empty() : void{
        this.idRole = 0;
        this.libelleRole = '0';
    }
}