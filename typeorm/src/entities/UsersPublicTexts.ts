import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { publicTexts } from './PublicTexts';
import { users } from './Users';

@Entity()
export class usersPublicTexts{

	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	userId: number;
	@Column()
	publicTextId: number;

	@ManyToOne(() => publicTexts, (pt) => pt.publicTexts)
	@JoinColumn()
	publicText: usersPublicTexts;

	@ManyToOne(() => users, (u) => u.users)
	@JoinColumn()
	user: usersPublicTexts;
}