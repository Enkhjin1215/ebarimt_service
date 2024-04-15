import { IsNotEmpty } from "class-validator";

export enum Types {
    B2C_RECEIPT =  'B2C_RECEIPT',
    B2B_RECEIPT = 'B2B_RECEIPT',
    B2C_INVOICE = 'B2C_INVOICE',
    B2B_INVOICE = 'B2B_INVOICE',
}

export enum VatTypes {
    VAT_ABLE = 'VAT_ABLE',
    VAT_FREE = 'VAT_FREE',
    VAT_ZERO = 'VAT_ZERO',
    NOT_VAT = 'NOT_VAT',
}

export enum BarCodeTypes{
    UNDEFINED = 'UNDEFINED',
    GS1 = 'GS1',
    ISBN = 'ISBN',
}

export enum PaymentCodes {
    CASH = 'CASH',
    PAYMENT_CARD = 'PAYMENT_CARD',
    BANK_TRANSFER = 'BANK_TRANSFER'
}


export class Items{ //Бүтээгдэхний модел 
    name : string;  
    barCode:string; 
    barCodeType : BarCodeTypes;
    classificationCode : string;
    taxProductCode : string;
    measureUnit : string;
    qty : number;
    unitPrice : number;
    totalVAT : number;
    totalCityTax : number;
    totalAmount : number;

}

export class Receipt{//Дэд баримт
    @IsNotEmpty() 
    totalAmount: number;

    @IsNotEmpty()
    totalVAT: number;

    @IsNotEmpty()
    totalCityTax: number;

    @IsNotEmpty()
    taxType: VatTypes;

    @IsNotEmpty()
    merchantTin: string;

    bankAccountNo: string;
    items : Items[];

}


export class PaymentData{ 
    approvalCode : string;
    rrn : string;
    date: string;
}

export class Payment{ 
    code : PaymentCodes
    status : string;
    paidAmount : number;
    bonusAmount : number;
    data : PaymentData
}

export class Ebarimt{ 
    
    @IsNotEmpty()
    id: string;

    version: string;

    @IsNotEmpty()
    totalAmount: number;

    @IsNotEmpty()
    totalVAT: number;

    @IsNotEmpty()
    totalCityTax: number;

    @IsNotEmpty()
    districtCode: string;

    @IsNotEmpty()
    merchantTin: string;

    @IsNotEmpty()
    branchNo : string;

    @IsNotEmpty()
    posNo : string;

    @IsNotEmpty()
    type: Types;

    inactiveId: string;

    reportMonth: string;

    posId : number;

    qrData : string;

    date : string;

    easy : boolean;

    @IsNotEmpty()
    receipts : Receipt[];

    @IsNotEmpty()
    payments : Payment
    
} 
export class EbrimtRequest {

    @IsNotEmpty()
    usermail: string;

    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    ebarimt: Ebarimt;

}