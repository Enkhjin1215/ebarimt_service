import { IsEmail, IsNotEmpty } from "class-validator";
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

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
export enum STATUS {
    new = 'NEW',
    failed = 'FAILED',
    success = 'SUCCESS'
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
    @Prop()
    id: string;

    @Prop()
    version: string;

    @Prop()
    @IsNotEmpty()
    totalAmount: number;
    
    @Prop()
    @IsNotEmpty()
    totalVAT: number;
    
    @Prop()
    @IsNotEmpty()
    totalCityTax: number;
    
    @Prop()
    @IsNotEmpty()
    districtCode: string;
    
    @Prop()
    @IsNotEmpty()
    merchantTin: string;
    
    @Prop()
    @IsNotEmpty()
    branchNo : string;
    
    @Prop()
    @IsNotEmpty()
    posNo : string;
    
    @Prop()
    @IsNotEmpty()
    type: Types;
    
    @Prop()
    inactiveId: string;
    
    @Prop()
    reportMonth: string;
    
    @Prop()
    posId : number;
    
    @Prop()
    qrData : string;
    
    @Prop()
    date : string;
    
    @Prop()
    easy : boolean;

    @IsNotEmpty()
    receipts : Receipt[];

    @IsNotEmpty()
    payments : Payment
    
} 

@Schema({
    timestamps: true,
})
export class EbarimtRequest {
    @Prop()
    @IsNotEmpty()
    @IsEmail()
    usermail: string;

    @Prop()
    @IsNotEmpty()
    username: string;
    
    @Prop()
    @IsNotEmpty()
    ebarimt: Ebarimt;

    @Prop()
    status: STATUS

}
export const EbarimtSchema = SchemaFactory.createForClass(EbarimtRequest)