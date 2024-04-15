import { Module } from '@nestjs/common';
import { EbarimtController } from './ebarimt.controller';
import { EbarimtService } from './ebarimt.service';
import { HttpModule } from '@nestjs/axios/dist/http.module';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MongooseModule } from '@nestjs/mongoose';
import { EbarimtSchema } from './model';

@Module({
  imports: [HttpModule, ClientsModule.register([{
    name : 'EMAIL_SERVICE',
    transport: Transport.RMQ,
    options:{
      urls:['amqp://localhost:5672'],
      queue: 'email-queue'
    }
  }]),
  MongooseModule.forFeature([{name : 'EbarimtRequest', schema: EbarimtSchema}])
],
  controllers: [EbarimtController],
  providers: [EbarimtService]
})
export class EbarimtModule {}
