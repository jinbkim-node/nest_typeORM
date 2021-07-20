import { Entity, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class users{

	@PrimaryGeneratedColumn()
	id: number;
	@PrimaryColumn()
	nickname: string;
}