
import { Entity, Column, PrimaryGeneratedColumn, Long } from 'typeorm';

@Entity()
export class MainStoreEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    storeName: string;

    @Column({ length: 15, unique: true })
    phone: string;

    @Column()
    address: string;
    
    @Column({length: 10})
    bankCode: string;
    
    @Column({length: 30})
    accountNumber: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    status: number;

    @Column({type: 'bigint'})
    createAt: string;
    

    @Column({type: 'bigint'})
    updateAt: string;

}