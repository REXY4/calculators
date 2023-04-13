import { Column, ObjectIdColumn,CreateDateColumn, DeleteDateColumn, Entity, ObjectID, 
  // PrimaryGeneratedColumn
 } from 'typeorm';

@Entity()
export class User {
  @ObjectIdColumn()
  id: ObjectID

  @Column({
    nullable: false,
    default: '',
  })
  name: string;

  @Column({
    nullable: false,
    default: '',
  })
  email: string;

  @Column({
    nullable: false,
    default: '',
  })
  password: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ type: 'timestamp', nullable: true  })
  login_time: Date;

  @Column({ type: 'timestamp', nullable: true  })
  logout_time: Date;
  
  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deleted_at: Date;
}
