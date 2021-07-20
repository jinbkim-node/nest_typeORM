import { ApiProperty } from "@nestjs/swagger";

export class PrivateTextsDto1{
	@ApiProperty({
		example: '안녕하세요',
		description: '개인글 내용',
	})
	public content: string;

	@ApiProperty({
		example: 1,
		description: '유저 아이디',
	})
	public userId: number;
}

export class PrivateTextsDto2{
	@ApiProperty({
		example: 1,
		description: '개인글 아이디',
	})
	public id: number;
	
	@ApiProperty({
		example: '안녕하세요',
		description: '개인글 내용',
	})
	public content: string;

	@ApiProperty({
		example: 1,
		description: '유저 아이디',
	})
	public userId: number;
}