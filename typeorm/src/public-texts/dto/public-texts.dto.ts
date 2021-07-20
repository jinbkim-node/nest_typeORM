import { ApiProperty } from "@nestjs/swagger";

export class PublicTextsDto1{
	@ApiProperty({
		example: '안녕하세요',
		description: '공유글 내용',
	})
	public content: string;

	@ApiProperty({
		example: 1,
		description: '유저 아이디',
	})	
	public userId: number;
}

export class PublicTextsDto2{
	@ApiProperty({
		example: 1,
		description: '유저 아이디',
	})	
	public userId: number;

	@ApiProperty({
		example: 1,
		description: '공유글 아이디',
	})	
	public publicTextId: number;
}

export class PublicTextsDto3{
	@ApiProperty({
		example: 1,
		description: '공유글 아이디',
	})	
	public publicTextId: number;

	@ApiProperty({
		example: '안녕하세요',
		description: '공유글 내용',
	})
	public content: string;
}

export class PublicTextsDto4{
	@ApiProperty({
		example: 1,
		description: '공유글 아이디',
	})	
	public publicTextId: number;

	@ApiProperty({
		example: '[1, 2, 3]',
		description: '유저 아이디 배열',
	})	
	public userIds: number[];
}

export class PublicTextsDto5{

	@ApiProperty({
		example: 1,
		description: '그냥 인덱스',
	})	
	public id: number;

	@ApiProperty({
		example: 1,
		description: '유저 아이디',
	})	
	public userId: number;

	@ApiProperty({
		example: 1,
		description: '공유글 아이디',
	})	
	public publicTextId: number;
}