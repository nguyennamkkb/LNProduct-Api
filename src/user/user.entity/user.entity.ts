import { Entity, Column, PrimaryGeneratedColumn, Long } from 'typeorm';

const dateNow: string = Date.now().toString();

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  password: string;

  @Column({ length: 15, unique: true })
  phone: string;

  @Column({ nullable: true, default: null })
  companyName: string;

  @Column({ nullable: true, default: null })
  address: string;

  @Column({ nullable: true, default: null })
  email: string;

  @Column({ default: 1 })
  status: number;

  @Column({ type: 'bigint', nullable: false, default: dateNow })
  createAt: string;

  @Column({ type: 'bigint', nullable: false, default: dateNow })
  updateAt: string;
}
