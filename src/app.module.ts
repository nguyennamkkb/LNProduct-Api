import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MainStoreModule } from './main-store/main-store.module';
import { AuthModule } from './auth/auth.module';
import { CustomerModule } from './customer/customer.module';
import { EmployeeModule } from './employee/employee.module';
import { BooksModule } from './books/books.module';
import { ProductModule } from './product/product.module';
import {databaseConfig} from '../config/database.config'
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: databaseConfig.password,
      database: 'lnproduct_db',
      // database: 'pos-api.1A',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    MainStoreModule,
    AuthModule,
    CustomerModule,
    EmployeeModule,
    BooksModule,
    ProductModule,
    UserModule,
  ]
})
export class AppModule { }
