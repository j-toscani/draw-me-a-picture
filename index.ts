import createExpressServer from "./server/createExpressServer";
import createSocketIo from "./server/createSocketIo";

const { server } = createExpressServer(4000);
createSocketIo(server);
