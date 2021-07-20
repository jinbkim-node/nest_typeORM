import { Module } from '@nestjs/common';
import { PublicTextsService } from './public-texts.service';
import { PublicTextsController } from './public-texts.controller';
import { publicTexts } from '../entities/PublicTexts';
import { TypeOrmModule } from '@nestjs/typeorm';
import { usersPublicTexts } from '../entities/UsersPublicTexts';

@Module({
	imports: [TypeOrmModule.forFeature([publicTexts, usersPublicTexts])],
  providers: [PublicTextsService],
  controllers: [PublicTextsController]
})
export class PublicTextsModule {}
