import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { MainStoreService } from './main-store.service';
import { MainStoreEntity } from './entities/main-store.entity';
import { ResponseHelper } from 'helper/common/response.helper';
import { ApiResponse } from 'helper/common/response.interface';
import { UpdateResult } from 'typeorm/query-builder/result/UpdateResult';

@Controller('main-store')
export class MainStoreController {
  constructor(private readonly mainStoreService: MainStoreService) {}

  @Post()
  async create(
    @Body() item: MainStoreEntity,
  ): Promise<ApiResponse<MainStoreEntity>> {
    try {
      const findUSer = await this.mainStoreService.findByPhone(item.phone);
      if (findUSer.length == 0) {
        const res = await this.mainStoreService.create(item);
        return ResponseHelper.success(res);
      } else {
        return ResponseHelper.error(0, 'Số điện thoại đã tồn tại');
      }
    } catch (error) {
      return ResponseHelper.error(0, error);
    }
  }

  @Get()
  async findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ): Promise<ApiResponse<MainStoreEntity[]>> {
    try {
      const [res, totalCount] = await this.mainStoreService.findAll(
        page,
        limit,
      );
      return {
        statusCode: 200,
        message: 'Thành công!',
        data: res,
        meta: {
          totalCount,
          currentPage: page,
          totalPages: Math.ceil(totalCount / limit),
        },
      };
    } catch (error) {
      return ResponseHelper.error(0, error);
    }
  }

  @Get(':id')
  async findOne(@Param() param): Promise<ApiResponse<MainStoreEntity[]>> {
    try {
      const res = await this.mainStoreService.findOne(param.id);
      return ResponseHelper.success(res);
    } catch (error) {
      return ResponseHelper.error(0, error);
    }
  }
  @Put()
  async update(
    @Body() item: MainStoreEntity,
  ): Promise<ApiResponse<UpdateResult>> {
    try {
      const res = await this.mainStoreService.update(item);
      return ResponseHelper.success(res);
    } catch (error) {
      return ResponseHelper.error(0, error);
    }
  }

  @Delete(':id')
  async remove(@Param() param) {
    try {
      const res = await this.mainStoreService.remove(param.id);
      return ResponseHelper.success(res);
    } catch (error) {
      return ResponseHelper.error(0, error);
    }
  }
}
