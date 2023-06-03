import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MainStoreService } from './main-store.service';
import { MainStoreController } from './main-store.controller';
import { MainStoreEntity } from './entities/main-store.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MainStoreEntity])],
  controllers: [MainStoreController],
  providers: [MainStoreService]
})
export class MainStoreModule {}
