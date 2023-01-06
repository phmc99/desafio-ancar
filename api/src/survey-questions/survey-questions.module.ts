import { Module } from '@nestjs/common';
import { SurveyQuestionsService } from './survey-questions.service';

@Module({
  providers: [SurveyQuestionsService],
})
export class SurveyQuestionsModule {}
