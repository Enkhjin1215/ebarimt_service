import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
    MailerModule.forRoot({
      transport:{
        host: 'smtp.gmail.com',
        auth: {
          user: 'enkhjin@mongolnft.com',
          pass : 'wnpw tpbj xzsf xewr'
        }
      }
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
