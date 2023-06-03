import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Long, Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from  'typeorm';
import { MainStoreEntity } from './entities/main-store.entity';

@Injectable()
export class MainStoreService {

  constructor(@InjectRepository(MainStoreEntity) private repository: Repository<MainStoreEntity>) { }

    async findAll(page: number, limit: number): Promise<[MainStoreEntity[],number]> {
        const skip = (page - 1) * limit;
        const [res, totalCount] = await this.repository.findAndCount({
          skip,
          take: limit,
        });
    
        return [res, totalCount];
    }

    async findOne(_id: number): Promise<MainStoreEntity[]> {
        return await this.repository.find({
            where: [{ "id": _id }]
        });
    }
    async create(item: MainStoreEntity): Promise<MainStoreEntity>  {
        item.createAt = Date.now().toString()
        item.updateAt = Date.now().toString()
        return await this.repository.save(item)
    }
    async update(item: MainStoreEntity): Promise<UpdateResult> {
        item.updateAt = Date.now().toString()
        return await this.repository.update(item.id, item)
    }

    async remove(id: number): Promise<DeleteResult> {
        return await this.repository.delete(id);
    }
    async findPhonePassword(phone: string, password: string): Promise<MainStoreEntity[]> {
        return await this.repository.find({
            where: [{ "phone": phone, "password":password }]
        });
    }
    async findByPhone(phone: string): Promise<MainStoreEntity[]> {
        return await this.repository.find({
            where: [{ "phone": phone}]
        });
    }

    async findById(store_id: number): Promise<MainStoreEntity[]> {
        return await this.repository.find({
            where: [{ "id": store_id}]
        });
    }
    

}
