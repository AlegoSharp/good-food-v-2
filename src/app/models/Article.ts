export class Article {
    id: number
    qty: number
    ref: string
    des: string
    grp_0001: string
    grp_0002: string
    grp_0003: string
    tycode: string
    url_img: string
    constructor() 
    { 

    }
    public init_empty() : void{
        this.id = 0;
        this.qty = 0;
        this.ref = '0';
        this.grp_0001 = '0';
        this.grp_0002 = '0';
        this.grp_0003 = '0';
        this.tycode = '0';
        this.url_img = '0';
    }
}