import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { publicTexts } from '../entities/PublicTexts';
import { usersPublicTexts } from '../entities/UsersPublicTexts';

@Injectable()
export class PublicTextsService {
	constructor(
		@InjectRepository(publicTexts)
			private publicTextsRepo: Repository<publicTexts>,
		@InjectRepository(usersPublicTexts)
			private usersPublicTextsRepo: Repository<usersPublicTexts>,
		){}

	async createPublicTexts(content: string, userId: number){
		const pt = new publicTexts;
		pt.content = content;
		await this.publicTextsRepo.save(pt);
		await this.usersPublicTextsRepo.save({
			userId: userId,
			publicTextId: pt.id,
		})
	}

	async readPublicTexts(id: number){
		if (await this.publicTextsRepo.count({id: id }))
			return this.publicTextsRepo.find({id: id});
		else
			Logger.log('PUBLIC TEXT does not exist');
	}
	async readUsersId(userId: number){
		if (await this.usersPublicTextsRepo.count({userId: userId }))
			return this.usersPublicTextsRepo.find({userId: userId});
		else
			Logger.log('USER ID does not exist');
	}
	async isUser(userId: number, publicTextId: number){
		if (await this.usersPublicTextsRepo.count({
			userId: userId,
			publicTextId: publicTextId,
		}))
			return true;
		else
			return false;
	}
	readAllPublicTexts(){
		return this.publicTextsRepo.find({});
	}

	async updatePublicTexts(publicTextId: number, content: string){
		if (await this.publicTextsRepo.count({id: publicTextId })){
			this.publicTextsRepo.save({
				id: publicTextId,
				content: content,
			})
		}
		else
			Logger.log('PUBLIC TEXT does not exist');
	}
	async updateUsers(publicTextId: number, userIds: number[]){
		if (await this.usersPublicTextsRepo.count({publicTextId: publicTextId})){
			this.usersPublicTextsRepo.delete({publicTextId: publicTextId});
			for (var i in userIds){
				this.usersPublicTextsRepo.save({
					userId: userIds[i],
					publicTextId: publicTextId,
				});
			}
		}
		else
			Logger.log('PUBLIC TEXT does not exist');
	}

	async deletePublicTexts(publicTextId: number){
		if (await this.usersPublicTextsRepo.count({publicTextId: publicTextId}))
			this.usersPublicTextsRepo.delete({publicTextId: publicTextId });
		else
			Logger.log('PUBLIC TEXT does not exist');
	}
}
	