"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EbarimtSchema = exports.EbarimtRequest = exports.Ebarimt = exports.Payment = exports.PaymentData = exports.Receipt = exports.Items = exports.STATUS = exports.PaymentCodes = exports.BarCodeTypes = exports.VatTypes = exports.Types = void 0;
const class_validator_1 = require("class-validator");
const mongoose_1 = require("@nestjs/mongoose");
var Types;
(function (Types) {
    Types["B2C_RECEIPT"] = "B2C_RECEIPT";
    Types["B2B_RECEIPT"] = "B2B_RECEIPT";
    Types["B2C_INVOICE"] = "B2C_INVOICE";
    Types["B2B_INVOICE"] = "B2B_INVOICE";
})(Types || (exports.Types = Types = {}));
var VatTypes;
(function (VatTypes) {
    VatTypes["VAT_ABLE"] = "VAT_ABLE";
    VatTypes["VAT_FREE"] = "VAT_FREE";
    VatTypes["VAT_ZERO"] = "VAT_ZERO";
    VatTypes["NOT_VAT"] = "NOT_VAT";
})(VatTypes || (exports.VatTypes = VatTypes = {}));
var BarCodeTypes;
(function (BarCodeTypes) {
    BarCodeTypes["UNDEFINED"] = "UNDEFINED";
    BarCodeTypes["GS1"] = "GS1";
    BarCodeTypes["ISBN"] = "ISBN";
})(BarCodeTypes || (exports.BarCodeTypes = BarCodeTypes = {}));
var PaymentCodes;
(function (PaymentCodes) {
    PaymentCodes["CASH"] = "CASH";
    PaymentCodes["PAYMENT_CARD"] = "PAYMENT_CARD";
    PaymentCodes["BANK_TRANSFER"] = "BANK_TRANSFER";
})(PaymentCodes || (exports.PaymentCodes = PaymentCodes = {}));
var STATUS;
(function (STATUS) {
    STATUS["new"] = "NEW";
    STATUS["failed"] = "FAILED";
    STATUS["success"] = "SUCCESS";
})(STATUS || (exports.STATUS = STATUS = {}));
class Items {
}
exports.Items = Items;
class Receipt {
}
exports.Receipt = Receipt;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], Receipt.prototype, "totalAmount", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], Receipt.prototype, "totalVAT", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], Receipt.prototype, "totalCityTax", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Receipt.prototype, "taxType", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Receipt.prototype, "merchantTin", void 0);
class PaymentData {
}
exports.PaymentData = PaymentData;
class Payment {
}
exports.Payment = Payment;
class Ebarimt {
}
exports.Ebarimt = Ebarimt;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Ebarimt.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Ebarimt.prototype, "version", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], Ebarimt.prototype, "totalAmount", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], Ebarimt.prototype, "totalVAT", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], Ebarimt.prototype, "totalCityTax", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Ebarimt.prototype, "districtCode", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Ebarimt.prototype, "merchantTin", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Ebarimt.prototype, "branchNo", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Ebarimt.prototype, "posNo", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Ebarimt.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Ebarimt.prototype, "inactiveId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Ebarimt.prototype, "reportMonth", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Ebarimt.prototype, "posId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Ebarimt.prototype, "qrData", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Ebarimt.prototype, "date", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], Ebarimt.prototype, "easy", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Array)
], Ebarimt.prototype, "receipts", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Payment)
], Ebarimt.prototype, "payments", void 0);
let EbarimtRequest = class EbarimtRequest {
};
exports.EbarimtRequest = EbarimtRequest;
__decorate([
    (0, mongoose_1.Prop)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], EbarimtRequest.prototype, "usermail", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], EbarimtRequest.prototype, "username", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Ebarimt)
], EbarimtRequest.prototype, "ebarimt", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], EbarimtRequest.prototype, "status", void 0);
exports.EbarimtRequest = EbarimtRequest = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
    })
], EbarimtRequest);
exports.EbarimtSchema = mongoose_1.SchemaFactory.createForClass(EbarimtRequest);
//# sourceMappingURL=model.js.map