import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import ShortUniqueId from 'short-unique-id';
import { Server } from 'ws';
import { wsmessage } from '../util/wsmessage';

@WebSocketGateway({
  path: '/chat-server',
})
export class ChatWebsocketGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server;

  private clients: Map<string, any> = new Map();

  handleConnection(client: any): void {
    const uid = new ShortUniqueId();
    client.id = uid.rnd();
    this.clients.set(client.id, client);
    console.log(`New connecting`, client.id);
    client.send(wsmessage('connection', { id: client.id }));
  }

  handleDisconnect(client: any): void {
    this.clients.delete(client.id);
    console.log(`Disconnection`);
  }

  @SubscribeMessage('message')
  async identity(client: any, data: any): Promise<number> {
    console.log(`Received message: ${data.clientId} ${data.message}`);

    this.clients.forEach((client) => {
      client.send(wsmessage('message', data));
    });

    return data;
  }
}
