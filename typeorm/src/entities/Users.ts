import { Entity, PrimaryGeneratedColumn, PrimaryColumn, OneToMany, OneToOne, ManyToOne } from 'typeorm';
import { privateTexts } from './PrivateTexts';
import { dormantUsers } from './DormantUsers';
import { usersPublicTexts } from './UsersPublicTexts';

@Entity()
export class users{

	@PrimaryGeneratedColumn()
	id: number;
	@PrimaryColumn()
	nickname: string;

	@OneToMany(() => privateTexts, (pt) => pt.user)
	privateTexts: privateTexts[];

	@OneToOne(() => dormantUsers, (du) => du.user)
	dormantUser: dormantUsers;

	@OneToMany(() => usersPublicTexts, (upt) => upt.userId)
	users: users[];
}