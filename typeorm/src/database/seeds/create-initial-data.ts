import { Connection } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";
import { users } from '../../entities/Users';
import { dormantUsers } from '../../entities/DormantUsers';
import { privateTexts } from '../../entities/PrivateTexts';
import { publicTexts } from '../../entities/PublicTexts';

import { usersPublicTexts } from '../../entities/UsersPublicTexts';

export class createInitialData implements Seeder {
	public async run(factory: Factory, connection: Connection): Promise<any>{
		await connection
			.createQueryBuilder().insert().into(users)
			.values([{ nickname: 'jinbkim'}, { nickname: 'hjung'}, { nickname: 'juhlee'}])
			.execute();
		await connection
			.createQueryBuilder().insert().into(privateTexts)
			.values([{'content': 'hello', userId:1}, {'content': 'my', userId:2}, {'content': 'name is', userId:3}])
			.execute();
		await connection
			.createQueryBuilder().insert().into(dormantUsers)
			.values([{userId:1}, {userId:2}])
			.execute();
		await connection
			.createQueryBuilder().insert().into(publicTexts)
			.values([{'content': 'hello2'}, {'content': 'my2'}, {'content': 'name is2'}])
			.execute();
		await connection
			.createQueryBuilder().insert().into(usersPublicTexts)
			.values([{userId: 1, publicTextId: 1}, {userId: 1, publicTextId: 2}, {userId: 2, publicTextId: 3}, {userId: 2, publicTextId: 1}])
			.execute();
	}
}