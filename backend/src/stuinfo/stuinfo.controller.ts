import { Controller } from '@nestjs/common';
import { Stuinfo } from '../libs/models/stuinfo.model';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { ApiTags } from '@nestjs/swagger';


@Crud({
  model: Stuinfo
})
@Controller('stuinfo')
@ApiTags('学生信息增删改查 ')
export class StuinfoController {
  constructor(
    @InjectModel(Stuinfo) private readonly model: ModelType<Stuinfo>
  ){}
}
