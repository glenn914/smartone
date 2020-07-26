import { prop } from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger'

export class UserInfo {
  @ApiProperty({ description:'用户名'})
  @prop()
  username: string
  @ApiProperty({ description:'密码'})
  @prop()
  password: string
  @ApiProperty({ description:'用户类型'})
  @prop()
  usertype: string
}
