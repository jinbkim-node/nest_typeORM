import { ApiProperty } from "@nestjs/swagger";

export class UsersDto{
	@ApiProperty({
		description: '유저 아이디',
	})	
	public id: number;

	@ApiProperty({
		description: '유저 닉네임',
	})	
	public nickname: string;
}