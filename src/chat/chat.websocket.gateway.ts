import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server } from 'ws';

@WebSocketGateway({
  path: '/chat-server',
})
export class ChatWebsocketGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server;

  handleConnection(client: any): void {
    console.log(`New connecting`);
  }

  handleDisconnect(client: any): void {
    console.log(`Disconnection`);
  }

  @SubscribeMessage('message')
  async identity(client: any, data: any): Promise<number> {
    this.server.emit('message', data);
    return data;
  }
}
