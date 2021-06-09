import { Aliases } from "./models-ressources/Aliases";

export class Allergene {
    public a_idAllergene: number;
    public b_libelleAllergene: string;
    public c_estActive: number;

    constructor(){}

    private options = {
        ConvivialsNames: Aliases.allergeneConvivialNames,
        CustomRoutes: Aliases.allergeneCustomRoutes,
    };
    
    public init_empty(): void{
        this.a_idAllergene = 0;
        this.b_libelleAllergene = '0';
        this.c_estActive = 0;
    }
}