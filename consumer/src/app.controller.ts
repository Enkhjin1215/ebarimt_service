import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {
  Ctx,
  EventPattern,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { EbrimtRequest } from './order.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('email-requested')
  handleOrderPlaced(@Payload() order: EbrimtRequest) {
    return this.appService.handleOrderPlaced(order);
  }

  @MessagePattern({ cmd: 'fetch-queue' })
  getOrders(@Ctx() context: RmqContext) {
    console.log(context.getMessage());
    return this.appService.getOrders();
  }
}
