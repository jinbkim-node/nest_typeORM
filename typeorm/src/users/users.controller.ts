import { Body, Controller, Delete, Get, Param, Post, Query, Logger } from '@nestjs/common';
import { ApiBody, ApiQuery, ApiTags, ApiResponse } from '@nestjs/swagger';
import { UsersDto } from './dto/users.dto';
import { UsersService } from './users.service';
import { PrivateTextsDto2 } from '../private-texts/dto/private-texts.dto';

@ApiTags('USERS')
@Controller('users')
export class UsersController {
	constructor(private usersService: UsersService){}

	@ApiResponse({ description: '유저 생성' })
	@ApiQuery({
		name: 'nickname',
		description: '유저 닉네임',
	})
	@Post('create')
	createUsers(@Query() q){
		this.usersService.createUsers(q.nickname);
	}

	@ApiResponse({type: UsersDto, description: '요청한 유저 반환' })
	@ApiQuery({
		name: 'id',
		description: '유저 아이디',
	})
	@Get('read/users')
	readUsers(@Query() q){
		return this.usersService.readUsers(q.id);
	}

	@ApiResponse({type: PrivateTextsDto2, description: '요청한 유저가 작성한 개인글 반환' })
	@ApiQuery({
		name: 'id',
		description: '유저 아이디',
	})
	@Get('read/privateTexts')
	readPrivateTexts(@Query() q){
		return this.usersService.readPrivateTexts(q.id);
	}

	@ApiResponse({type: Number, description: '요청한 유저가 작성한 공유글 아이디 배열 반환' })
	@ApiQuery({
		name: 'id',
		description: '유저 아이디',
	})
	@Get('read/publicTexts')
	async readPublicTexts(@Query() q){
		var texts = await this.usersService.readUsersPublicTexts(q.id);
		if (texts)
			return this.usersService.readPublicTexts(texts);
		else
			Logger.log('USER does not exist');
	}

	@ApiResponse({type: Boolean, description: '요청한 유저가 휴면계정 이면 true, 아니먄 false 반환' })
	@ApiQuery({
		name: 'id',
		description: '유저 아이디',
	})
	@Get('isDormant')
	isDormant(@Query() q){
		return this.usersService.isDormant(q.id);
	}

	@ApiResponse({type: UsersDto, description: '모든 유저 반환' })
	@Get('read/all')
	readAllUsers(){
		return this.usersService.readAllUsers();
	}

	@ApiResponse({ description: '요청한 유저 닉네임 변경' })
	@ApiBody({ type: UsersDto })
	@Post('update')
	updateUsers(@Body() b: UsersDto){
		this.usersService.updateUsers(b.id, b.nickname);
	}


	@ApiResponse({ description: '요청한 유저 삭제' })
	@ApiQuery({
		name: 'id',
		description: '유저 아이디',
	})
	@Delete('delete')
	deleteUsers(@Query() q){
		this.usersService.deleteUsers(q.id);
	}
}