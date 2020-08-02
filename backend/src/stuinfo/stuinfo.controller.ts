import { Controller,Get, Post,UseInterceptors, UploadedFile, Body, Param, Put, Delete } from '@nestjs/common';
import { Stuinfo } from '../../libs/models/stuinfo.model';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { ApiTags, ApiOperation, ApiProperty } from '@nestjs/swagger';
import { FileInterceptor} from '@nestjs/platform-express';
import * as csv from 'fast-csv';
import * as xlsx from 'node-xlsx';

class createStuinfoDto{
  @ApiProperty({description:'学生姓名'})
  stuName: string
  @ApiProperty({description:'学生年龄'})
  stuAge: string
  @ApiProperty({description:'学生班级'})
  stuClass: string
}

@Controller('stuinfo')
@ApiTags('学生信息增删改查')
export class StuinfoController {
  constructor(
    @InjectModel(Stuinfo) private readonly stuInfoModel:ModelType<Stuinfo>
  ){}
  
  @Get()
  @ApiOperation({summary:'获取所有学生信息'})
  async all(){
    return await this.stuInfoModel.find()
  }


  @Post()
  @ApiOperation({summary:'上传学生信息'})
  async create(@Body() createstuinfodto:createStuinfoDto ){
    await this.stuInfoModel.create(createstuinfodto)
  }

  @Get(':id')
  @ApiOperation({summary:'获取具体学生信息'})
  async detail(@Param('id') id:string){
    await this.stuInfoModel.findById(id)
  }

  @Put(':id')
  @ApiOperation({summary:'修改具体学生信息'})
  async update(@Param('id') id:string, @Body() updatestuinfodto:createStuinfoDto){
    await this.stuInfoModel.findByIdAndUpdate(id,updatestuinfodto)
  }

  @Delete(':id')
  @ApiOperation({summary:'删除具体学生信息'})
  async remove(@Param('id') id:string){
    await this.stuInfoModel.findByIdAndDelete(id)
  }

  @Post('/upload')
  @ApiOperation({summary:'上传CVS文档接口'})
  @UseInterceptors(FileInterceptor('file'))
  async upload(@UploadedFile('file') file){
    const result = file.buffer
    const obj = xlsx.parse(result)    //解析完成excel

    const excelObj = obj[0].data    //这是第一个sheet的数据

    const toMongo = {'stuName':'','stuAge':'','stuClass':''}
    // return excelObj.length
    for(var i=2; i<=excelObj.length; i++){
      const list= excelObj[i-1]   //hh这是第二行数据
      toMongo['stuName']=list[0]
      toMongo['stuAge']=list[1]
      toMongo['stuClass']=list[2]
      await this.stuInfoModel.create(toMongo)
    }
  }
}


