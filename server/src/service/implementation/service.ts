import { Message } from 'src/models/user';
import { IService } from './../interface/i-service';
export class Service implements IService {
	public getEchoMessageFromDb(): Message {
		//throw new Error('Method not implemented.');
		const message: Message = new Message();
		message.content = 'Hello from node server';
		return message;
	}
	public printEchoMessage(message: Message): void {
		console.log(message.content);
	}
}
