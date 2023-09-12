import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ChatModule } from './chat/chat.module';
import { RoomModule } from './room/room.module';
import configuration from './config/configuration';

ConfigModule.forRoot({
  envFilePath: '.nestjs.env',
});

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    ChatModule,
    RoomModule,
  ],
  controllers: [],
})
export class AppModule {}
