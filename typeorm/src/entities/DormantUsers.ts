import { Entity, PrimaryGeneratedColumn, PrimaryColumn, OneToOne, JoinColumn } from 'typeorm';
import { users } from './Users';

@Entity()
export class dormantUsers{
	
	@PrimaryGeneratedColumn()
	id: number;

	@PrimaryColumn()
	userId: number;

	@OneToOne(() => users, (u) => u.dormantUser)
	@JoinColumn()
	user: users;
}