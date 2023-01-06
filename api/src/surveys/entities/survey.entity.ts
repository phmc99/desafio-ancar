import { randomUUID } from 'node:crypto';
import { SurveyQuestion } from 'src/survey-questions/entities/survey-question.entity';

export interface SurveyProps {
  name: string;
  description: string;
  questions: SurveyQuestion[];
  date?: Date | null;
}

export class Survey {
  private _cod: string;
  private props: SurveyProps;

  constructor(props: SurveyProps, cod?: string) {
    this._cod = cod ?? randomUUID();
    this.props = {
      ...props,
      date: props.date ?? new Date(),
    };
  }

  public get cod() {
    return this._cod;
  }

  public set name(name: string) {
    this.props.name = name;
  }

  public get name(): string {
    return this.props.name;
  }

  public set description(description: string) {
    this.props.description = description;
  }

  public get description(): string {
    return this.props.description;
  }

  public set questions(questions: SurveyQuestion[]) {
    this.props.questions = questions;
  }

  public get questions(): SurveyQuestion[] {
    return this.props.questions;
  }
}
