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
exports.EbarimtService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const axios_2 = require("axios");
const rxjs_1 = require("rxjs");
const model_1 = require("./model");
const mongoose = require("mongoose");
const mongoose_1 = require("@nestjs/mongoose");
let EbarimtService = class EbarimtService {
    constructor(ebarimtRequest, httpService, rabbitClient) {
        this.ebarimtRequest = ebarimtRequest;
        this.httpService = httpService;
        this.rabbitClient = rabbitClient;
    }
    async createReceipt(data) {
        var res = await this.ebarimtRequest.create(data);
        const uri = 'http://103.41.112.67:7080/rest/receipt';
        try {
            const response = await axios_2.default.post(uri, data['ebarimt']);
            if (response.data['status'] == 'SUCCESS') {
                var ebarimtData = { 'usermail': data['usermail'], 'username': data['username'], 'ebarimt': response.data };
                this.rabbitClient.emit('email-requested', ebarimtData);
                res.ebarimt = response.data;
                res.status = model_1.STATUS.success;
                await this.ebarimtRequest.findByIdAndUpdate(res.id, res);
                var test = await this.ebarimtRequest.findById(res.id);
                console.log('-------------->', test.status);
                return response.data;
            }
            else {
                res.status = model_1.STATUS.failed;
                await this.ebarimtRequest.findByIdAndUpdate(res.id, res);
                var test = await this.ebarimtRequest.findById(res.id);
                console.log('-------------->', test.status);
                throw new common_1.BadRequestException(response.data['message']);
            }
        }
        catch (error) {
            console.log(error);
            res.status = model_1.STATUS.failed;
            await this.ebarimtRequest.findByIdAndUpdate(res.id, res);
            var test = await this.ebarimtRequest.findById(res.id);
            console.log('-------------->', test.status);
            throw new common_1.BadRequestException(error.response.data['message']);
        }
    }
    getQueue() {
        return this.rabbitClient
            .send({ cmd: 'fetch-queue' }, {})
            .pipe((0, rxjs_1.timeout)(5000));
    }
    async getList() {
        const requests = await this.ebarimtRequest.find();
        return requests;
    }
};
exports.EbarimtService = EbarimtService;
exports.EbarimtService = EbarimtService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(model_1.EbarimtRequest.name)),
    __param(2, (0, common_1.Inject)('EMAIL_SERVICE')),
    __metadata("design:paramtypes", [mongoose.Model, axios_1.HttpService, microservices_1.ClientProxy])
], EbarimtService);
//# sourceMappingURL=ebarimt.service.js.map