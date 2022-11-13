import express from "express";
import { getRoomState } from "./socketHandlers/handleCreateRoom";

const router = express.Router();

router.get("/rooms/:id", (req, res) => {
    const {id} = req.params;
    console.log(id);
    res.send(getRoomState(id)?.file);
})

export default function createExpressServer(port = 4000) {
    const app = express();
    app.use(router);
    app.use(express.static("public"));

    const server = app.listen(port, () => console.log(`App started on port ${port}`));

    return {server, app};
}


