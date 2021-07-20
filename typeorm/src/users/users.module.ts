import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { users } from '../entities/Users';
import { privateTexts } from '../entities/PrivateTexts';
import { usersPublicTexts } from '../entities/UsersPublicTexts';
import { publicTexts } from '../entities/PublicTexts';
import { dormantUsers } from '../entities/DormantUsers';

@Module({
	imports: [TypeOrmModule.forFeature([users, privateTexts, usersPublicTexts, publicTexts, dormantUsers])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
