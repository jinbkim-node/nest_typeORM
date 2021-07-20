import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class usersPublicTexts{

	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	userId: number;
	@Column()
	publicTextId: number;	
}