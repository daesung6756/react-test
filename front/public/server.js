import express from "express"
import path from "path"
const app = express()
app.use(express.static("./"));
app.get("*", function(req, res) {
    res.sendFile(path.resolve("./", "index.html"));
});
function handleListenLog() {
    console.log("Server Starting...");
}
app.listen(9090, handleListenLog);