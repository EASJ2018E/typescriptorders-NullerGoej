import { IOrderLine } from 'interface';

export class OrderLinie implements IOrderLine{
    OrderQty: number;
    ProductId: number;
    UnitPrice: number;
    UnitPriceDiscount: number;
    constructor(Data: IOrderLine){
        this.OrderQty = Data.OrderQty;
        this.ProductId = Data.ProductId;
        this.UnitPrice = Data.UnitPrice;
        this.UnitPriceDiscount = Data.UnitPriceDiscount;
    }

    public BeregnSum():number{
        return this.OrderQty *(this.UnitPrice-this.UnitPriceDiscount);
    }

    public Moms():number{
        return this.BeregnSum()*0.25;
    }

    public Udregn():number{
        return this.BeregnSum()+this.Moms();
    }
}