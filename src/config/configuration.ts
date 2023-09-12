import { Config } from '@/interfaces/config.interface';

export default (): Config => ({
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    user: process.env.DATABASE_USERNAME,
    pass: process.env.DATABASE_PASSWORD,
    name: process.env.DATABASE_NAME,
  },
});
