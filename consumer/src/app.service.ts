import { Injectable } from '@nestjs/common';
import { Ebarimt, EbrimtRequest } from './order.dto';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class AppService {
  constructor(private readonly mailerService : MailerService){}
  orders: EbrimtRequest[] = [];

  handleOrderPlaced(order: EbrimtRequest) {
    console.log('-----------------------------------3');
    if(order.usermail == undefined || order.usermail == ''){
      this.orders.push(order);
    }else{
      try{
        this.mailerService.sendMail({
          to: order.usermail,
          from: 'enkhjin@mongolnft.com',
          subject: 'TICKETX NOAT',
          text: 'Ebarimt ilgeelee',
          html:
          `<html>
          <head>
              <title>Testing QR code</title>
              <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
              <script type="text/javascript">
                  function generateBarCode()
                  {
                      var url = 'https://api.qrserver.com/v1/create-qr-code/?data=' +${order.ebarimt.qrData} + '&amp;size=50x50';
                      $('#barcode').attr('src', url);
                  }
              </script>
          </head>
          <body>
              
      
            <img id='barcode' 
                  src="https://api.qrserver.com/v1/create-qr-code/?data=HelloWorld&amp;size=100x100" 
                  alt="" 
                  title="HELLO" 
                  width="50" 
                  height="50" />
     </body></html>`
        })
        this.orders.push(order);
    
      }catch(err){
        console.log(err)
      }
    }

    //Send email
  }

  getOrders() {
    return this.orders;
  }
}
