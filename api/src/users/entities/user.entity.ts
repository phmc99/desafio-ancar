import { randomUUID } from 'node:crypto';

export interface UserProps {
  name: string;
  password: string;
  cpf: string;
}

export class User {
  private _cod: string;
  private props: UserProps;

  constructor(props: UserProps, cod?: string) {
    this._cod = cod ?? randomUUID();
    this.props = props;
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

  public set password(password: string) {
    this.props.password = password;
  }

  public get password(): string {
    return this.props.password;
  }

  public set cpf(cpf: string) {
    this.props.cpf = cpf;
  }

  public get cpf(): string {
    return this.props.cpf;
  }
}
