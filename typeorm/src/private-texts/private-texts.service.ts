import { Injectable, Post, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { privateTexts } from '../entities/PrivateTexts';

@Injectable()
export class PrivateTextsService {
	constructor(
		@InjectRepository(privateTexts)
			private privateTextsRepo: Repository<privateTexts>,
		){}

	createPrivateTexts(content: string, userId: number){
		this.privateTextsRepo.save({
			content: content,
			userId: userId,
		});
	}

	async readPrivateTexts(id: number){
		if (await this.privateTextsRepo.count({ id: id }))
			return this.privateTextsRepo.find({id: id});
		else
			Logger.log('PRIVATE TEXT does not exist');
	}
	readAllPrivateTexts(){
		return this.privateTextsRepo.find({});
	}

	async updatePrivateTexts(id: number, content: string, userId: number){
		if (await this.privateTextsRepo.count({ id: id })){
			this.privateTextsRepo.save({
				id: id,
				content: content,
				userId: userId
			})
		}
		else
			Logger.log('PRIVATE TEXT does not exist');
	}

	async deletePrivateTexts(id: number){
		if (await this.privateTextsRepo.count({ id: id }))
			this.privateTextsRepo.delete({id: id});
		else
			Logger.log('PRIVATE TEXT does not exist');
	}
}
