import { Column, Entity, PrimaryGeneratedColumn, } from 'typeorm';

@Entity()
export class publicTexts{
	
	@PrimaryGeneratedColumn()
	id: number;
	@Column()
	content: string;
}