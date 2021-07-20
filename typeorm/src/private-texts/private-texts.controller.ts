import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { ApiBody, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PrivateTextsDto1, PrivateTextsDto2 } from './dto/private-texts.dto';
import { PrivateTextsService } from './private-texts.service';

@ApiTags('PRIVATE TEXTS')
@Controller('private-texts')
export class PrivateTextsController {
	constructor(private privateTextsService:PrivateTextsService){}

	@ApiResponse({ description: '개인글 생성' })
	@Post('create')
	createPrivateTexts(@Body() b:PrivateTextsDto1){
		this.privateTextsService.createPrivateTexts(b.content, b.userId);
	}

	@ApiResponse({ type: PrivateTextsDto2, description: '요청한 개인글 반환' })
	@ApiQuery({ name: 'id', description: '개인글 아이디' })
	@Get('read')
	readPrivateTexts(@Query() q){
		return this.privateTextsService.readPrivateTexts(q.id);
	}

	@ApiResponse({ type: PrivateTextsDto2, description: '모든 개인글 반환' })
	@Get('read/all')
	readAllPrivateTexts(){
		return this.privateTextsService.readAllPrivateTexts();
	}

	@ApiResponse({ description: '개인글 수정' })
	@ApiBody({ type: PrivateTextsDto2 })
	@Post('update')
	updatePrivateTexts(@Body() b: PrivateTextsDto2){
		this.privateTextsService.updatePrivateTexts(b.id, b.content, b.userId);
	}

	@ApiResponse({ description: '개인글 삭제' })
	@ApiQuery({
		name: 'id',
		description: '개인글 아이디',
	})
	@Delete('delete')
	deletePrivateTexts(@Query() q){
		this.privateTextsService.deletePrivateTexts(q.id);
	}
	
}