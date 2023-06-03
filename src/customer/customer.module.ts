import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { CustomerEntity } from './customer.entity/customer.entity';
import { MainStoreEntity } from 'src/main-store/entities/main-store.entity';
import { MainStoreService } from 'src/main-store/main-store.service';

@Module({
  imports: [TypeOrmModule.forFeature([CustomerEntity,MainStoreEntity])],
  providers: [CustomerService,MainStoreService],
  controllers: [CustomerController]
})
export class CustomerModule {}
