import {
  IsString,
  IsArray,
  IsNotEmpty,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { SurveyQuestion } from 'src/survey-questions/entities/survey-question.entity';

export class UpdateSurveyDto {
  @IsOptional()
  @IsString()
  public name: string;

  @IsOptional()
  @IsString()
  public description: string;

  @IsNotEmpty()
  @IsArray()
  @ValidateNested()
  public questions: SurveyQuestion[];
}
