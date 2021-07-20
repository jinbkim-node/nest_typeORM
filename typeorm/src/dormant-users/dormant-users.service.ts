import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, Repository } from 'typeorm';
import { dormantUsers } from '../entities/DormantUsers';
import { users } from '../entities/Users';

@Injectable()
export class DormantUsersService {
	constructor(
		@InjectRepository(dormantUsers)
			private dormantUsersRepo: Repository<dormantUsers>,
		@InjectRepository(users)
			private userRepo: Repository<users>,
		){}

	async createDormantUsers(userId: number){
		if (await this.userRepo.count({ id: userId })){
			if (await this.dormantUsersRepo.count({ userId: userId }))
				Logger.log('already registered USER');
			else
				this.dormantUsersRepo.save({ userId: userId });
		}
		else
			Logger.log('USER ID does not exist');
	}

	async readDormantUsers(userId: number){
		if (await this.userRepo.count({ id: userId })){
			if (await this.dormantUsersRepo.count({ userId: userId }))
				return this.userRepo.find({id: userId});
			else
				Logger.log('USER is not dormant');
		}
		else
			Logger.log('USER ID does not exist');
	}
	async readAllDormantUsers(){
		return await this.userRepo.query(`SELECT users.* from users JOIN dormant_users on dormant_users."userId" = users.id;`);
	}

	async deleteDormantUsers(userId: number){
		if (await this.userRepo.count({ id: userId })){
			if (await this.dormantUsersRepo.count({ userId: userId }))
				this.dormantUsersRepo.delete({userId: userId});
			else
				Logger.log('USER is not dormant');
		}
		else
			Logger.log('USER ID does not exist');
	}
}
	