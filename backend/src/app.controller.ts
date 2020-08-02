import { Controller, Get, Post,UseInterceptors, UploadedFile } from '@nestjs/common';
// import { Post } from '@typegoose/typegoose';
import { FileInterceptor} from '@nestjs/platform-express'

@Controller()
export class AppController {
  // constructor(private readonly appService: AppService) {}

  @Get()
  index(){
    return 'HomePage'
  }
}
