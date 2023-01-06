import { randomUUID } from 'node:crypto';
import { SurveyResponse } from 'src/survey-responses/entities/survey-response.entity';

export interface SurveyQuestionProps {
  surveyCod: string;
  description: string;
  responses: SurveyResponse[];
}

export class SurveyQuestion {
  private _cod: string;
  private props: SurveyQuestionProps;

  constructor(props: SurveyQuestionProps, cod?: string) {
    this._cod = cod ?? randomUUID();
    this.props = props;
  }

  public get cod() {
    return this._cod;
  }

  public set surveyCod(surveyCod: string) {
    this.props.surveyCod = surveyCod;
  }

  public get surveyCod(): string {
    return this.props.surveyCod;
  }

  public set description(description: string) {
    this.props.description = description;
  }

  public get description(): string {
    return this.props.description;
  }

  public set responses(responses: SurveyResponse[]) {
    this.props.responses = responses;
  }

  public get responses(): SurveyResponse[] {
    return this.props.responses;
  }
}
