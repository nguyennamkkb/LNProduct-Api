import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BooksEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  store_id: number;

  @Column({ type: 'bigint' })
  start: string;

  @Column({ width: 11 })
  idEmployee: number;

  @Column({ width: 11 })
  idCustomer: number;

  @Column({ type: 'longtext', nullable: false })
  listService: string;

  @Column({ width: 11 })
  amount: number;

  @Column({ default: 1 })
  status: number;

  @Column({ type: 'bigint' })
  createAt: string;

  @Column({ type: 'bigint' })
  updateAt: string;
}
