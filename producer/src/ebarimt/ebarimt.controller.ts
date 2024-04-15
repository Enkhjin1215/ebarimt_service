import { BadRequestException, Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { EbarimtRequest } from './model';
import { EbarimtService } from './ebarimt.service';

@Controller('ebarimt')
export class EbarimtController {
    constructor(private ebarimtService: EbarimtService){

    }

    @Post('create')
    @UsePipes(ValidationPipe)
    async createRequest(
        @Body()
        ebarimtRequest: EbarimtService
    ):Promise<EbarimtRequest> {
        //TODO
        //DB deer save()
        if(ebarimtRequest['usermail'] == undefined ||ebarimtRequest['usermail'] == '' ){
            throw new BadRequestException('Харилцагчын цахим шууданг илгээнэ үү');
 
        }else{
            return this.ebarimtService.createReceipt(ebarimtRequest)

        }
    }


    @Get('queue/list')
    getOrders() {
      return this.ebarimtService.getQueue();
    }

    @Get('request/list')
    getList(){
        return this.ebarimtService.getList();
    }
    
}
