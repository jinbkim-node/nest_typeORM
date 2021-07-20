import { ApiProperty } from "@nestjs/swagger";

export class DormantUsersDto{
	@ApiProperty({
		example: 1,
		description: '휴면유저 아이디',
	})
	public id: number;

	@ApiProperty({
		example: 1,
		description: '휴면유저 이전의 유저 아이디',
	})
	public userId: number;
}