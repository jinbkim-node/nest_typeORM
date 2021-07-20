import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class privateTexts{
	
	@PrimaryGeneratedColumn()
	id: number;
	@Column()
	content: string;

	@Column({nullable: true})
	userId: number;
}