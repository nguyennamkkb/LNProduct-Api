import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MainStoreEntity } from 'src/main-store/entities/main-store.entity';
import { MainStoreService } from 'src/main-store/main-store.service';

@Module({
  imports: [TypeOrmModule.forFeature([MainStoreEntity])],
  providers: [MainStoreService],
  controllers: [AuthController]
})
export class AuthModule {}
