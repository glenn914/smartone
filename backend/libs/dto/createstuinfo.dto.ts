import { ApiProperty } from "@nestjs/swagger";

export class createStuinfoDto {
  @ApiProperty({ description:'ID'})
  id: string
  @ApiProperty({ description:'用户类型'})
  role: string
  @ApiProperty({ description:'姓名'})
  name: string
  @ApiProperty({ description:'性别'})
  gender: string
  @ApiProperty({ description:'班级'})
  class: string
  @ApiProperty({ description:'学校名称'})
  schoolName: string
  @ApiProperty({ description:'监护人名字'})
  gdName: string
  @ApiProperty({ description:'监护人关系'})
  gdRelation: string
  @ApiProperty({ description:'监护人联系电话'})
  gdContact: string
  @ApiProperty({ description:'监护人ID'})
  gdId: string
  @ApiProperty({ description:'监护人ID类型'})
  gdIdType: string
  @ApiProperty({ description:'建档时间'})
  createTime: string
  @ApiProperty({ description:'档案状态'})
  fileStatus: string
  @ApiProperty({ description:'档案进度'})
  fileProgress: string
  @ApiProperty({ description:'档案备注'})
  fileTip: string
  @ApiProperty({ description:'私钥'})
  privateKey: string
  @ApiProperty({ description:'钱包地址'})
  bnbAddress: string
}