import Server from "./config/Server";

try {
    const server = new Server();
    server.launch();
} catch (error) {
    console.log("Error launching the server.",error);   
}
