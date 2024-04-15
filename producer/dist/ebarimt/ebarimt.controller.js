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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EbarimtController = void 0;
const common_1 = require("@nestjs/common");
const ebarimt_service_1 = require("./ebarimt.service");
let EbarimtController = class EbarimtController {
    constructor(ebarimtService) {
        this.ebarimtService = ebarimtService;
    }
    async createRequest(ebarimtRequest) {
        if (ebarimtRequest['usermail'] == undefined || ebarimtRequest['usermail'] == '') {
            throw new common_1.BadRequestException('Харилцагчын цахим шууданг илгээнэ үү');
        }
        else {
            return this.ebarimtService.createReceipt(ebarimtRequest);
        }
    }
    getOrders() {
        return this.ebarimtService.getQueue();
    }
    getList() {
        return this.ebarimtService.getList();
    }
};
exports.EbarimtController = EbarimtController;
__decorate([
    (0, common_1.Post)('create'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ebarimt_service_1.EbarimtService]),
    __metadata("design:returntype", Promise)
], EbarimtController.prototype, "createRequest", null);
__decorate([
    (0, common_1.Get)('queue/list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EbarimtController.prototype, "getOrders", null);
__decorate([
    (0, common_1.Get)('request/list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EbarimtController.prototype, "getList", null);
exports.EbarimtController = EbarimtController = __decorate([
    (0, common_1.Controller)('ebarimt'),
    __metadata("design:paramtypes", [ebarimt_service_1.EbarimtService])
], EbarimtController);
//# sourceMappingURL=ebarimt.controller.js.map