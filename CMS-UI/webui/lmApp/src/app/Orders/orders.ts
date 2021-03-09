export class Orders {
   

  constructor(public ordId:string, 
    public ordQuantity:string, 
    public ordPrice:string, 
    public cusId:string, 
    public mnuID:string, 
    public ordTime:Date, 
    public ordEstTime:string, 
    public ordStatus:string, 
    public ordComments:string){}
}
