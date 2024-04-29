import {
  Column,
  Model,
  Table,
  Index,
  NotNull,
  Unique,
} from 'sequelize-typescript';
import { Sequelize } from 'sequelize';

@Table
export class ChatMessage extends Model<ChatMessage> {
  @Column({ primaryKey: true })
  id: number;

  @Column
  @NotNull
  user_id: number;

  @Column
  @NotNull
  message: string;

  @Column({ defaultValue: Sequelize.fn('now') })
  @NotNull
  @Index({ name: 'message_ts_sent' })
  @Unique
  ts_sent: Date;
}
