import { Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DormantUsersService } from './dormant-users.service';
import { dormantUsers } from '../entities/DormantUsers';
import { UsersDto } from '../users/dto/users.dto';

@ApiTags('DORMANT USERS')
@Controller('dormant-users')
export class DormantUsersController {
	constructor(private dormantUsersService: DormantUsersService){}

	@ApiResponse({ description: '휴면 유저 등록' })
	@ApiQuery({
		name: 'userId',
		description: '유저 아이디',
	})
	@Post('create')
	createDormantUsers(@Query() q){
		this.dormantUsersService.createDormantUsers(q.userId);
	}


	@ApiResponse({ type: UsersDto, description: '요청한 휴면유저 반환' })
	@ApiQuery({
		name: 'userId',
		description: '유저 아이디',
	})
	@Get('read')
	readDormantUsers(@Query() q){
		return this.dormantUsersService.readDormantUsers(q.userId);
	}

	@ApiResponse({ type: UsersDto, description: '모든 휴면유저 반환' })
	@Get('read/all')
	readAllDormantUsers(){
		return this.dormantUsersService.readAllDormantUsers();
	}
	

	@ApiResponse({ description: '휴면유저 해제' })
	@ApiQuery({
		name: 'userId',
		description: '유저 아이디',
	})
	@Delete('delete')
	deleteDormantUsers(@Query() q){
		this.dormantUsersService.deleteDormantUsers(q.userId);
	}
}
