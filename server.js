const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "..", "app", "users-profile.html")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "users-profile.html"), (err) => {
    if (err) {
        res.status(500).send(err);
    }
  });
});

app.listen(port, () => console.log(`listening on port ${port}!`));
