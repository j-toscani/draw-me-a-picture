import express from "express";

const app = express();
const staticServer = express.static("public");

app.use(staticServer);

app.listen(3000, () => console.log("App started on port 3000"));
