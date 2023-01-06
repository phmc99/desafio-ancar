import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { SurveysModule } from './surveys/surveys.module';
import { SurveyResponsesModule } from './survey-responses/survey-responses.module';
import { SurveyQuestionsModule } from './survey-questions/survey-questions.module';

@Module({
  imports: [
    UsersModule,
    SurveysModule,
    SurveyResponsesModule,
    SurveyQuestionsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
