/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
export declare enum Types {
    B2C_RECEIPT = "B2C_RECEIPT",
    B2B_RECEIPT = "B2B_RECEIPT",
    B2C_INVOICE = "B2C_INVOICE",
    B2B_INVOICE = "B2B_INVOICE"
}
export declare enum VatTypes {
    VAT_ABLE = "VAT_ABLE",
    VAT_FREE = "VAT_FREE",
    VAT_ZERO = "VAT_ZERO",
    NOT_VAT = "NOT_VAT"
}
export declare enum BarCodeTypes {
    UNDEFINED = "UNDEFINED",
    GS1 = "GS1",
    ISBN = "ISBN"
}
export declare enum PaymentCodes {
    CASH = "CASH",
    PAYMENT_CARD = "PAYMENT_CARD",
    BANK_TRANSFER = "BANK_TRANSFER"
}
export declare enum STATUS {
    new = "NEW",
    failed = "FAILED",
    success = "SUCCESS"
}
export declare class Items {
    name: string;
    barCode: string;
    barCodeType: BarCodeTypes;
    classificationCode: string;
    taxProductCode: string;
    measureUnit: string;
    qty: number;
    unitPrice: number;
    totalVAT: number;
    totalCityTax: number;
    totalAmount: number;
}
export declare class Receipt {
    totalAmount: number;
    totalVAT: number;
    totalCityTax: number;
    taxType: VatTypes;
    merchantTin: string;
    bankAccountNo: string;
    items: Items[];
}
export declare class PaymentData {
    approvalCode: string;
    rrn: string;
    date: string;
}
export declare class Payment {
    code: PaymentCodes;
    status: string;
    paidAmount: number;
    bonusAmount: number;
    data: PaymentData;
}
export declare class Ebarimt {
    id: string;
    version: string;
    totalAmount: number;
    totalVAT: number;
    totalCityTax: number;
    districtCode: string;
    merchantTin: string;
    branchNo: string;
    posNo: string;
    type: Types;
    inactiveId: string;
    reportMonth: string;
    posId: number;
    qrData: string;
    date: string;
    easy: boolean;
    receipts: Receipt[];
    payments: Payment;
}
export declare class EbarimtRequest {
    usermail: string;
    username: string;
    ebarimt: Ebarimt;
    status: STATUS;
}
export declare const EbarimtSchema: import("mongoose").Schema<EbarimtRequest, import("mongoose").Model<EbarimtRequest, any, any, any, import("mongoose").Document<unknown, any, EbarimtRequest> & EbarimtRequest & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, EbarimtRequest, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<EbarimtRequest>> & import("mongoose").FlatRecord<EbarimtRequest> & {
    _id: import("mongoose").Types.ObjectId;
}>;
