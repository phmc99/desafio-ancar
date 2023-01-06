import { randomUUID } from 'node:crypto';

export interface SurveyResponseProps {
  questionCod: string;
  userCod: string;
  description: string;
  date?: Date | null;
}

export class SurveyResponse {
  private _cod: string;
  private props: SurveyResponseProps;

  constructor(props: SurveyResponseProps, cod?: string) {
    this._cod = cod ?? randomUUID();
    this.props = this.props = {
      ...props,
      date: props.date ?? new Date(),
    };
  }

  public get cod() {
    return this._cod;
  }

  public set questionCod(questionCod: string) {
    this.props.questionCod = questionCod;
  }

  public get questionCod(): string {
    return this.props.questionCod;
  }

  public set userCod(userCod: string) {
    this.props.userCod = userCod;
  }

  public get userCod(): string {
    return this.props.userCod;
  }

  public set description(description: string) {
    this.props.description = description;
  }

  public get description(): string {
    return this.props.description;
  }
}
