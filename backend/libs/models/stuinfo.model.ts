import { prop } from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger'

export class Stuinfo {
  @ApiProperty({ description:'学生姓名'})
  @prop()
  stuName: string
  @ApiProperty({ description:'学生年龄'})
  @prop()
  stuAge: string
  @ApiProperty({ description:'学生班级'})
  @prop()
  stuClass: string
}

