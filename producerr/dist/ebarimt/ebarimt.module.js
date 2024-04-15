"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EbarimtModule = void 0;
const common_1 = require("@nestjs/common");
const ebarimt_controller_1 = require("./ebarimt.controller");
const ebarimt_service_1 = require("./ebarimt.service");
const http_module_1 = require("@nestjs/axios/dist/http.module");
const microservices_1 = require("@nestjs/microservices");
const mongoose_1 = require("@nestjs/mongoose");
const model_1 = require("./model");
let EbarimtModule = class EbarimtModule {
};
exports.EbarimtModule = EbarimtModule;
exports.EbarimtModule = EbarimtModule = __decorate([
    (0, common_1.Module)({
        imports: [http_module_1.HttpModule, microservices_1.ClientsModule.register([{
                    name: 'EMAIL_SERVICE',
                    transport: microservices_1.Transport.RMQ,
                    options: {
                        urls: ['amqp://localhost:5672'],
                        queue: 'email-queue'
                    }
                }]),
            mongoose_1.MongooseModule.forFeature([{ name: 'EbarimtRequest', schema: model_1.EbarimtSchema }])
        ],
        controllers: [ebarimt_controller_1.EbarimtController],
        providers: [ebarimt_service_1.EbarimtService]
    })
], EbarimtModule);
//# sourceMappingURL=ebarimt.module.js.map