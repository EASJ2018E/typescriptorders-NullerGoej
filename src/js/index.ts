import { OrderLinie } from './orderlinie';

let element: HTMLDivElement = <HTMLDivElement> document.getElementById("content");
let myClass = new OrderLinie({OrderQty: 1,ProductId: 1,UnitPrice: 100,UnitPriceDiscount: 10});
element.innerHTML = "Pris: "+ myClass.Udregn();