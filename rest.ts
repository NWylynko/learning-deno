import {
  Denzo,
  listenAndServe,
  printRoutes,
} from "https://deno.land/x/denzo@v0.1.1/mod.ts";

const app = new Denzo();

interface RouteTypes {
  Response: {
    hello: string;
  };
}

app.route<RouteTypes>({
  method: "GET",
  url: "/hi",
  handler() {
    return { hello: "world!" };
  },
});

listenAndServe(3000, app);
printRoutes(app);

console.log("listening on port 3000");