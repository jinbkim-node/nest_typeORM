import { Entity, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class dormantUsers{
	
	@PrimaryGeneratedColumn()
	id: number;

	@PrimaryColumn()
	userId: number;
}