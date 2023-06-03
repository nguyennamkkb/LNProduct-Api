import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ResponseHelper } from 'helper/common/response.helper';
import { ApiResponse } from 'helper/common/response.interface';
import { MainStoreEntity } from 'src/main-store/entities/main-store.entity';
import { MainStoreService } from 'src/main-store/main-store.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly mainStoreService: MainStoreService) {}
    
    @Post()
    async Login(@Body() item: MainStoreEntity): Promise<ApiResponse<MainStoreEntity>> {
      const res =  await this.mainStoreService.findPhonePassword(item.phone, item.password);
    //   console.log(res)
      if (res.length != 0) {
        return ResponseHelper.success(res.at(0));
      }else{
        return ResponseHelper.error(0,"Kiẻm tra lại số điện thoại và mật khẩu!");
      }
      
    }
}
