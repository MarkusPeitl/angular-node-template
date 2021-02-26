import express from 'express';
import cors from 'cors';
import http from 'http';
import path from 'path';
import bodyparser from 'body-parser';
import SocketIO from 'socket.io';

const app: express.Application = express();
const server: http.Server = http.createServer(app);

const socketServer: SocketIO.Server = SocketIO(server);
socketServer.origins('*');
//socketServer.origins('http://mydomain.com:* https://www.mydomain.com:* http://localhost:* http://localhost:4200/*');

const socketroute: SocketIO.Namespace = socketServer.of('/projectconn');

const port: number = 3000;

const projects: string[] = ['pr1', 'pr2', 'pr3', 'pr4', 'pr5', 'pr6', 'pr7', 'pr8'];

//Might wanna remove in final
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyparser.json({ limit: '50mb' }));
app.use(express.static(path.join(__dirname, '/public')));

if (process.env.NODE_ENV === 'production') {
	//Join the dist dir of the angular application into the patch (serves anuglars dist directory at / )
	app.use(express.static(path.join(__dirname, '../../client/dist')));
}

app.get('/', (req: express.Request, res: express.Response) => {
	console.log('/ path requested');
});

app.post('/echo', (req: express.Request, res: express.Response) => {
	const messageBody: any = req.body;
	console.log('Received message: ' + JSON.stringify(messageBody));
	const reply: any = { message };
	res.send(reply);
});

server.listen(port, () => {
	console.log(`Node typescript server listening on: ' + ${port}`);
});
