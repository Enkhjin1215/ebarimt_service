import { HttpService } from '@nestjs/axios';
import { BadRequestException, Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import axios from 'axios';
import { timeout } from 'rxjs';
import { EbarimtRequest, STATUS } from './model';
import * as mongoose from 'mongoose'
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class EbarimtService {
    constructor(
        @InjectModel(EbarimtRequest.name) private ebarimtRequest : mongoose.Model<EbarimtRequest>,
        private readonly httpService: HttpService, @Inject('EMAIL_SERVICE') private rabbitClient: ClientProxy){}
//to-do vat iig tootsooloh
//ded barimtiin interval aas hamaarah
//mail servicetei holboh
//rabbitMQ

    async createReceipt(data: EbarimtService) {
        var res =  await this.ebarimtRequest.create(data);
        const uri = 'http://103.41.112.67:7080/rest/receipt';
        //DB deer hadgalsan object oo get hiij awchirna
        try {
          const response = await axios.post(uri, data['ebarimt']);
            if(response.data['status']== 'SUCCESS'){
                //status iig ni success bolgono;
                //RabbitMQ iin queue luu hiij ogno
                var ebarimtData = {'usermail':data['usermail'], 'username':data['username'], 'ebarimt':response.data};
                this.rabbitClient.emit('email-requested', ebarimtData);
                res.ebarimt = response.data;
                res.status = STATUS.success;
                await this.ebarimtRequest.findByIdAndUpdate(res.id, res)
                var test = await this.ebarimtRequest.findById(res.id);
                console.log('-------------->',test.status)
                return response.data;
            }
            else{
              res.status = STATUS.failed;
              await this.ebarimtRequest.findByIdAndUpdate(res.id, res);
              var test = await this.ebarimtRequest.findById(res.id);
              console.log('-------------->',test.status)  

              throw new BadRequestException(response.data['message']);

            }
        } catch (error) {
            console.log(error)
            res.status = STATUS.failed;
            await this.ebarimtRequest.findByIdAndUpdate(res.id, res) 
            var test = await this.ebarimtRequest.findById(res.id);
            console.log('-------------->',test.status)  
            throw new BadRequestException(error.response.data['message']);
        }
      }
      getQueue() {
        return this.rabbitClient
          .send({ cmd: 'fetch-queue' }, {})
          .pipe(timeout(5000));
      }

      async getList(): Promise<EbarimtRequest[]>{
        const requests = await this.ebarimtRequest.find();
        return requests;

      }
}
