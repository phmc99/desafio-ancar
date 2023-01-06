import { Module } from '@nestjs/common';
import { SurveyResponsesService } from './survey-responses.service';
import { SurveyResponsesController } from './survey-responses.controller';

@Module({
  controllers: [SurveyResponsesController],
  providers: [SurveyResponsesService],
})
export class SurveyResponsesModule {}
