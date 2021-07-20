import { ConsoleLogger, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { users } from '../entities/Users';
import { privateTexts } from '../entities/PrivateTexts';
import { usersPublicTexts } from '../entities/UsersPublicTexts';
import { dormantUsers } from '../entities/DormantUsers';

@Injectable()
export class UsersService {
	constructor(
	@InjectRepository(users)
		private usersRepo: Repository<users>,
	@InjectRepository(privateTexts)
		private privateTextsRepo: Repository<privateTexts>,
	@InjectRepository(usersPublicTexts)
		private usersPublicTextsRepo: Repository<usersPublicTexts>,
		@InjectRepository(dormantUsers)
		private dormantUsersRepo: Repository<dormantUsers>,
	){}

	async createUsers(nickname: string){
		if (await this.usersRepo.count({nickname: nickname}))
			Logger.log('USER NICKNAME already exist');
		else{
			this.usersRepo.save({
				nickname: nickname,
			});
		}
	}

	async readUsers(id: number){
		if (await this.usersRepo.count({id: id}))
			return this.usersRepo.findOne({id: id});
		else
			Logger.log('USER does not exist');
	}
	async readPrivateTexts(id: number){
		if (await this.privateTextsRepo.count({userId: id}))
			return this.privateTextsRepo.find({userId: id});
		else
			Logger.log('USER does not exist');
	}
	async readUsersPublicTexts(id: number){
		if (await this.usersPublicTextsRepo.count({userId: id}))
			return this.usersPublicTextsRepo.find({userId: id});
		else
			return false;
	}
	readPublicTexts(texts){
		var arr = [];
		for (var i in texts)
			arr[i] = texts[i].publicTextId;
		return arr;
	}
	async isDormant(id: number){
		if (await this.dormantUsersRepo.count({userId: id}))
			return true;
		else
			return false;
	}
	readAllUsers(){
		return this.usersRepo.find({});
	}

	async updateUsers(id: number, nickname: string){
		if (await this.usersRepo.count({id: id})){
			this.usersRepo.save({
				id: id,
				nickname: nickname,
			})
		}
		else
			Logger.log('USER does not exist');
	}

	async deleteUsers(id: number){
		if (await this.usersRepo.count({id: id})){
			this.usersRepo.delete({id: id});
			this.privateTextsRepo.delete({userId: id});
			this.usersPublicTextsRepo.delete({userId: id});
			this.dormantUsersRepo.delete({userId: id});
		}
		else
			Logger.log('USER does not exist');
	}
}
