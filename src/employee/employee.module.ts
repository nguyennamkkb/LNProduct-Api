import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { EmployeeEntity } from './employee.entity/employee.entity';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { MainStoreService } from 'src/main-store/main-store.service';
import { MainStoreEntity } from 'src/main-store/entities/main-store.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EmployeeEntity, MainStoreEntity])],
  providers: [EmployeeService, MainStoreService],
  controllers: [EmployeeController]
})
export class EmployeeModule {}
