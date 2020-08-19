import { Controller, Get, Post, UseInterceptors, UploadedFile, Body, Param, Put, Delete, ParseIntPipe, Query, UseGuards } from '@nestjs/common';
import { Stuinfo } from '../../libs/models/stuinfo.model';
import { InjectModel } from 'nestjs-typegoose';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import * as xlsx from 'node-xlsx';
import { createStuinfoDto } from '../../libs/dto/createstuinfo.dto'
import { AuthGuard } from '@nestjs/passport';

@Controller('stuinfo')
@ApiTags('学生信息增删改查')
export class StuinfoController {
  constructor(
    @InjectModel(Stuinfo) private readonly stuInfoModel: ModelType<Stuinfo>
  ) { }

  @Get('fetch')
  @ApiOperation({ summary: '获取所有学生信息' })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async getList(@Query('query') query: string) {
    const params = JSON.parse(query);
    const totalSkip = params.limit * (params.position - 1)
    const result = await this.stuInfoModel   //根据条件筛选出想要的数据
      .find()
      .limit(params.limit)
      .skip(totalSkip)
      .where(params.where)

    const total = await this.stuInfoModel   //统计符合where语句条件的总条数
      .where(params.where)
      .countDocuments(this.stuInfoModel)
    const res = { 'total': total, 'result': result }
    return res
    // console.log(typeof(searchName))
  }

  @Get('statistic')
  @ApiOperation({ summary: '表格上面的统计图表功能' })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async getStatistic(@Query('query') query: string,) {
    const params = JSON.parse(query);
    const statistic = await this.stuInfoModel
    .aggregate([
      {$match:{'schoolName':params.where.schoolName}},
      {$group:{_id:"$fileStatus",count: { $sum: 1 }}}])

    const res = {   //返回给表格上面的统计图表功能
      columns: ['_id', 'count'],
      rows: statistic
    }
    return res
  }

  @Get('schoolCard')
  @ApiOperation({ summary: '学校卡片' })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async getSchoolList(@Query('query') query: string,) {
    const params = JSON.parse(query);
    const schoolList = await this.stuInfoModel.distinct('schoolName')
    return schoolList
  }

  @Get('test')
  @ApiOperation({ summary: 'test' })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async test(){
    return {a:"888",b:"888"}
  }


  @Post()
  @ApiOperation({ summary: '上传学生信息' })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async create(@Body() dto: createStuinfoDto) {
    await this.stuInfoModel.create(dto)
  }

  @Get(':id')
  @ApiOperation({ summary: '获取具体学生信息' })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async detail(@Param('id') id: string) {
    return await this.stuInfoModel.findById(id)
  }

  @Put(':id')
  @ApiOperation({ summary: '修改具体学生信息' })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async update(@Param('id') id: string, @Body() dto: createStuinfoDto) {
    return await this.stuInfoModel.findByIdAndUpdate(id, dto)
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除具体学生信息' })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async remove(@Param('id') id: string) {
    await this.stuInfoModel.findByIdAndDelete(id)
  }

  @Post('/upload')
  @ApiOperation({ summary: '上传CVS文档接口' })
  @UseInterceptors(FileInterceptor('file'))
  // @UseGuards(AuthGuard('jwt'))
  // @ApiBearerAuth()
  async upload(@UploadedFile('file') file) {
    const result = file.buffer
    const obj = xlsx.parse(result)    //解析完成excel

    // const excelObj = obj[0].data    //这是第一个sheet的数据

    const toMongo = {
      'id': '',
      'role': '',
      'name': '',
      'gender': '',
      'class': '',
      'schoolName': '',
      'gdName': '',
      'gdRelation': '',
      'gdContact': '',
      'gdId': '',
      'gdIdType': '',
      'createTime': '',
      'fileStatus': '',
      'fileProgress': '',
      'fileTip': '',
      'privateKey': '',
      'bnbAddress': ''
    }

    for (var j = 1; j <= obj.length; j++) {
      const excelObj = obj[j - 1].data      //[]中的数据需要通过加减操作，来表示它是数字
      for (var i = 3; i <= excelObj.length; i++) {
        const list = excelObj[i - 1]   //这是第二行数据
        toMongo['id'] = list[0]
        toMongo['role'] = list[1]
        toMongo['name'] = list[2]
        toMongo['gender'] = list[3]
        toMongo['class'] = list[4]
        toMongo['schoolName'] = list[5]
        toMongo['gdName'] = list[6]
        toMongo['gdRelation'] = list[7]
        toMongo['gdContact'] = list[8]
        toMongo['gdId'] = list[9]
        toMongo['gdIdType'] = list[10]
        toMongo['createTime'] = list[11]
        toMongo['fileStatus'] = list[12]
        toMongo['fileProgress'] = list[13]
        toMongo['fileTip'] = list[14]
        toMongo['privateKey'] = list[15]
        toMongo['bnbAddress'] = list[16]
        await this.stuInfoModel.create(toMongo)
      }
    }
    // return excelObj.length
  }


}


