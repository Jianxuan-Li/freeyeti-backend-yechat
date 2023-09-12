export type DBConfig = {
  host: string;
  port: number;
  user: string;
  pass: string;
  name: string;
};

export interface Config {
  database: DBConfig;
}
