import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { users } from './Users';

@Entity()
export class privateTexts{
	
	@PrimaryGeneratedColumn()
	id: number;
	@Column()
	content: string;

	@Column({nullable: true})
	userId: number;

	@ManyToOne(() => users, (u) => u.privateTexts)
	@JoinColumn()
	user: users;
}