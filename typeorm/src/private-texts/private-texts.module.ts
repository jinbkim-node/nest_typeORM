import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { privateTexts } from '../entities/PrivateTexts';
import { PrivateTextsController } from './private-texts.controller';
import { PrivateTextsService } from './private-texts.service';
import { users } from '../entities/Users';

@Module({
	imports: [TypeOrmModule.forFeature([privateTexts, users])],
	controllers: [PrivateTextsController],
	providers: [PrivateTextsService]
})
export class PrivateTextsModule{}
