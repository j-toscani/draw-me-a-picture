import express from "express";

export default function createExpressServer(port = 4000) {
    const app = express();
    app.use(express.static("public"));

    const server = app.listen(port, () => console.log(`App started on port ${port}`));

    return {server, app};
}


