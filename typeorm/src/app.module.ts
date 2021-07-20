import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import * as ormconfig from '../ormconfig';
import { ConfigModule } from '@nestjs/config';
import { DormantUsersModule } from './dormant-users/dormant-users.module';
import { PrivateTextsModule } from './private-texts/private-texts.module';
import { PublicTextsModule } from './public-texts/public-texts.module';

@Module({
  imports: [
		ConfigModule.forRoot(),
		TypeOrmModule.forRoot(ormconfig),
		UsersModule,
		DormantUsersModule,
		PrivateTextsModule,
		PublicTextsModule,
	],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
