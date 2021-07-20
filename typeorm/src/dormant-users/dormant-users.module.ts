import { Module } from '@nestjs/common';
import { DormantUsersController } from './dormant-users.controller';
import { DormantUsersService } from './dormant-users.service';
import { dormantUsers } from '../entities/DormantUsers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { users } from '../entities/Users';

@Module({
	imports: [TypeOrmModule.forFeature([dormantUsers, users])],
  controllers: [DormantUsersController],
  providers: [DormantUsersService]
})
export class DormantUsersModule {}
