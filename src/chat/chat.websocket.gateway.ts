import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class ChatWebsocketGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server;

  handleConnection(socket: Socket): void {
    const socketId = socket.id;
    console.log(`New connecting... socket id:`, socketId);
  }

  handleDisconnect(socket: Socket): void {
    const socketId = socket.id;
    console.log(`Disconnection... socket id:`, socketId);
  }

  @SubscribeMessage('message')
  async identity(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: number,
  ): Promise<number> {
    console.log('message', data);
    this.server.emit('message', data);
    return data;
  }
}
