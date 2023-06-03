import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { BooksEntity } from './books.entity/books.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MainStoreEntity } from 'src/main-store/entities/main-store.entity';
import { EmployeeEntity } from 'src/employee/employee.entity/employee.entity';
import { CustomerEntity } from 'src/customer/customer.entity/customer.entity';
import { MainStoreService } from 'src/main-store/main-store.service';
import { EmployeeService } from 'src/employee/employee.service';
import { CustomerService } from 'src/customer/customer.service';

@Module({
  imports: [TypeOrmModule.forFeature([BooksEntity, MainStoreEntity, EmployeeEntity,CustomerEntity])],
  providers: [BooksService, MainStoreService, EmployeeService, CustomerService],
  controllers: [BooksController]
})
export class BooksModule {}
