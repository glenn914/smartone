import { prop } from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger'

export class Stuinfo {
  @ApiProperty({ description:'ID'})
  @prop()
  id: string
  @ApiProperty({ description:'用户类型'})
  @prop()
  role: string
  @ApiProperty({ description:'姓名'})
  @prop()
  name: string
  @ApiProperty({ description:'性别'})
  @prop()
  gender: string
  @ApiProperty({ description:'班级'})
  @prop()
  class: string
  @ApiProperty({ description:'学校名称'})
  @prop()
  schoolName: string
  @ApiProperty({ description:'监护人名字'})
  @prop()
  gdName: string
  @ApiProperty({ description:'监护人关系'})
  @prop()
  gdRelation: string
  @ApiProperty({ description:'监护人联系电话'})
  @prop()
  gdContact: string
  @ApiProperty({ description:'监护人ID'})
  @prop()
  gdId: string
  @ApiProperty({ description:'监护人ID类型'})
  @prop()
  gdIdType: string
  @ApiProperty({ description:'建档时间'})
  @prop()
  createTime: string
  @ApiProperty({ description:'档案状态'})
  @prop()
  fileStatus: string
  @ApiProperty({ description:'档案进度'})
  @prop()
  fileProgress: string
  @ApiProperty({ description:'档案备注'})
  @prop()
  fileTip: string
  @ApiProperty({ description:'私钥'})
  @prop()
  privateKey: string
  @ApiProperty({ description:'钱包地址'})
  @prop()
  bnbAddress: string
}

