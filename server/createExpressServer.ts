import express from "express";

export default function createExpressServer(port = 4000) {
    const app = express();
    const server = app.listen(port, () => console.log(`App started on port ${port}`));
    app.use(express.static("public"));
    return {server, app};
}


