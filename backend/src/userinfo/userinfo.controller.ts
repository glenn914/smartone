import { Controller } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud'
import { UserInfo } from 'libs/models/userinfo.model';
import { ApiTags } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { ModelType } from '@typegoose/typegoose/lib/types';


@Crud({
  model: UserInfo
})
@Controller('userinfo')
@ApiTags('用户管理')
export class UserinfoController {
  constructor(
    @InjectModel(UserInfo) private readonly model: ModelType<UserInfo>
  ){}
}
