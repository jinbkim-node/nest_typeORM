import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { PublicTextsService } from './public-texts.service';
import { PublicTextsDto1, PublicTextsDto2, PublicTextsDto3, PublicTextsDto4, PublicTextsDto5 } from './dto/public-texts.dto';
import { ApiBody, ApiQuery, ApiRequestTimeoutResponse, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('PUBLIC TEXTS')
@Controller('public-texts')
export class PublicTextsController {
	constructor(private publicTextsService: PublicTextsService){}

	@ApiResponse({ description: '공유글 생성' })
	@ApiBody({ type: PublicTextsDto1 })
	@Post('create')
	createPublicTexts(@Body() b:PublicTextsDto1){
		this.publicTextsService.createPublicTexts(b.content, b.userId);
	}


	@ApiResponse({ type: PublicTextsDto3, description: '요청한 공유글 아이디에 해당하는 공유글 반환' })
	@ApiQuery({
		name: 'id',
		description: '공용글 아이디',
	})
	@Get('read/publicTexts')
	readPublicTexts(@Query() q){
		return this.publicTextsService.readPublicTexts(q.id);
	}

	@ApiResponse({ type: PublicTextsDto5, description: '요청한 유저가 작성한 공유글 반환' })
	@ApiQuery({
		name: 'userId',
		description: '유저 아이디',
	})
	@Get('read/userId')
	readUsersId(@Query() q){
		return this.publicTextsService.readUsersId(q.userId);
	}

	@ApiResponse({ type: Boolean, description: '요청한 유저가 요청한 공유글을 작성했으면 true, 아니면 false 반환' })
	@ApiBody({ type: PublicTextsDto2 })
	@Get('isUser')
	isUser(@Body() b: PublicTextsDto2){
		return this.publicTextsService.isUser(b.userId, b.publicTextId)
	}

	@ApiResponse({ type: PublicTextsDto3, description: '모든 공유글 반환' })
	@Get('read/all')
	readAllPublicTexts(){
		return this.publicTextsService.readAllPublicTexts();
	}

	@ApiResponse({ description: '공융글 내용 수정' })
	@ApiBody({ type: PublicTextsDto3 })
	@Post('update/content')
	updatePublicTexts(@Body() b: PublicTextsDto3){
		this.publicTextsService.updatePublicTexts(b.publicTextId, b.content);
	}

	@ApiResponse({ description: '공융글 유저 수정' })
	@ApiBody({ type: PublicTextsDto4 })
	@Post('update/users')
	updateUsers(@Body() b: PublicTextsDto4){
		this.publicTextsService.updateUsers(b.publicTextId, b.userIds);
	}


	@ApiResponse({ description: '공융글 삭제' })
	@ApiQuery({
		name: 'publicTextId',
		description: '공용글 아이디',
	})
	@Delete('delete')
	deletePublicTexts(@Query() q){
		this.publicTextsService.deletePublicTexts(q.publicTextId);
	}
}