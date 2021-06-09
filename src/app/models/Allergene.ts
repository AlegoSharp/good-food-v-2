
export class Allergene {
    public a_idAllergene: number;
    public b_libelleAllergene: string;
    public c_estActive: number;

    constructor(){}

    public init_empty(): void{
        this.a_idAllergene = 0;
        this.b_libelleAllergene = '0';
        this.c_estActive = 0;
    }
}