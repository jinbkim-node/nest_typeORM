import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, } from 'typeorm';
import { usersPublicTexts } from './UsersPublicTexts';

@Entity()
export class publicTexts{
	
	@PrimaryGeneratedColumn()
	id: number;
	@Column()
	content: string;

	@OneToMany(() => usersPublicTexts, (upt) => upt.publicTextId)
	publicTexts: publicTexts[];
}