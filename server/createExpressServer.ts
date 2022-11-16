import express, { Router } from "express";
import { getFile } from "./socketHandlers/handleConnect";

const router = Router();

router.get("/bg", (_req, res) => {
  res.send(getFile());
});

export default function createExpressServer(port = 4000) {
  const app = express();
  app.use(express.static("public"));
  app.use(router);

  const server = app.listen(port, () =>
    console.log(`App started on port ${port}`)
  );

  return { server, app };
}
