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
  import { UserService } from './user.service';
  import { UserEntity } from './user.entity/user.entity';
  import { ResponseHelper } from 'helper/common/response.helper';
  import { ApiResponse } from 'helper/common/response.interface';
  import { UpdateResult } from 'typeorm/query-builder/result/UpdateResult';
  
  @Controller('user')
  export class UserController {
    constructor(private readonly services: UserService) {}
  
    @Post('register')
    async create(
      @Body() item: UserEntity,
    ): Promise<ApiResponse<UserEntity>> {
      try {
        const findUSer = await this.services.findByPhone(item.phone);
        if (findUSer.length == 0) {
          const res = await this.services.create(item);
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
    ): Promise<ApiResponse<UserEntity[]>> {
      try {
        const [res, totalCount] = await this.services.findAll(
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
  
    @Post('/login')
    async login(
      @Body('phone') phone: string,
      @Body('password') password: string,
    ): Promise<any> {
      const user = await this.services.findOneByPhonePassword(phone, password);
      if (user) {
        return ResponseHelper.success(user);
      } else {
        return ResponseHelper.error(0, "Sai số điện thoại hoặc mật khẩu!");
      }
    }
    // @Get(':id')
    // async findOne(@Param() param): Promise<ApiResponse<UserEntity[]>> {
    //   try {
    //     const res = await this.services.findOne(param.id);
    //     return ResponseHelper.success(res);
    //   } catch (error) {
    //     return ResponseHelper.error(0, error);
    //   }
    // }
    @Put()
    async update(
      @Body() item: UserEntity,
    ): Promise<ApiResponse<UpdateResult>> {
      try {
        const res = await this.services.update(item);
        return ResponseHelper.success(res);
      } catch (error) {
        return ResponseHelper.error(0, error);
      }
    }
  
    @Delete(':id')
    async remove(@Param() param) {
      try {
        const res = await this.services.remove(param.id);
        return ResponseHelper.success(res);
      } catch (error) {
        return ResponseHelper.error(0, error);
      }
    }
  }
  