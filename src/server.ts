import { serverHttp } from "./app";

serverHttp.listen(4000, () => {
  console.log("App running on http://localhost:4000/");
});
