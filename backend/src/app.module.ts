import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StuinfoModule } from './stuinfo/stuinfo.module';
import { TypegooseModule } from 'nestjs-typegoose';
import { UserinfoModule } from './userinfo/userinfo.module';


@Module({
  imports: [
    TypegooseModule.forRoot("mongodb://localhost/smartone-db",{
      useNewUrlParser:true,
      useUnifiedTopology:true,
      useCreateIndex:true,
      useFindAndModify:false
    }),
    StuinfoModule,
    UserinfoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
