import { IsString, IsNotEmpty, IsArray, ValidateNested } from 'class-validator';
import { SurveyQuestion } from 'src/survey-questions/entities/survey-question.entity';

export class CreateSurveyDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  @IsNotEmpty()
  public description: string;

  @IsNotEmpty()
  @IsArray()
  @ValidateNested()
  public questions: SurveyQuestion[];
}
