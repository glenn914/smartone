import { Controller } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { ApiTags } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { UserInfo } from '../libs/models/userinfo.model';

@Crud({
  model: UserInfo
})
@Controller('userinfo')
@ApiTags('系统用户增删改查')
export class UserinfoController {
  constructor(
    @InjectModel(UserInfo) private readonly model: ModelType<UserInfo>
  ){}
}
