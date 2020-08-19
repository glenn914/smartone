import { Module,Global } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StuinfoModule } from './stuinfo/stuinfo.module';
import { TypegooseModule } from 'nestjs-typegoose';
import { UserinfoModule } from './userinfo/userinfo.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from 'libs/common/common.module';

@Global()
@Module({
  imports: [
    TypegooseModule.forRoot("mongodb://localhost/smartone-db", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }),
    StuinfoModule,
    UserinfoModule,
    ConfigModule.forRoot({
      isGlobal: true
    }),
    AuthModule,
    CommonModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [AppService],
})
export class AppModule { }
