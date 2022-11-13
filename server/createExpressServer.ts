import express from "express";
import { getRoom } from "./socketHandlers/handleRooms";

const router = express.Router();

router.get("/rooms/:id", (req, res) => {
    const {id} = req.params;
    res.send(getRoom(id)?.file);
})

export default function createExpressServer(port = 4000) {
    const app = express();
    app.use(router);
    app.use(express.static("public"));

    const server = app.listen(port, () => console.log(`App started on port ${port}`));

    return {server, app};
}


