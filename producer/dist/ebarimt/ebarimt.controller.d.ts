import { EbarimtRequest } from './model';
import { EbarimtService } from './ebarimt.service';
export declare class EbarimtController {
    private ebarimtService;
    constructor(ebarimtService: EbarimtService);
    createRequest(ebarimtRequest: EbarimtService): Promise<EbarimtRequest>;
    getOrders(): import("rxjs").Observable<any>;
    getList(): Promise<EbarimtRequest[]>;
}
