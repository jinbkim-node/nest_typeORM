import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { users } from './src/entities/Users';
import { dormantUsers } from './src/entities/DormantUsers';
import { privateTexts } from './src/entities/PrivateTexts';
import { publicTexts } from './src/entities/PublicTexts';
import { usersPublicTexts } from './src/entities/UsersPublicTexts';

dotenv.config();
const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [
		dormantUsers,
		privateTexts,
		publicTexts,
    users,
		usersPublicTexts,
  ],
  migrations: [__dirname + '/src/migrations/*.ts'],
  cli: { migrationsDir: 'src/migrations' },
  autoLoadEntities: true,
  // charset: 'utf8mb4',
  synchronize: false,
  logging: true,
  keepConnectionAlive: true,  // 서버 재시작 할때 DB 연결을 유지시키기 위해 (핫 리로딩을 위해)
};

export = config;