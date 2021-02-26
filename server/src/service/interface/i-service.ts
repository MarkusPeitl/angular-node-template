import { Message } from 'src/models/user';

export interface IService {
	getEchoMessageFromDb(): Message;
	printEchoMessage(message: Message): void;
}
