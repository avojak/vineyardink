const express = require("express");
const app = express();

var port = process.env.PORT || 8080;

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// Home
app.get("/", function(req, res) {
    const title = "Vineyard Ink";
    res.render("pages/index", {
       title: title,
       meta: {
           title: title,
           description: "Homepage for Vineyard Ink"
       } 
    });
});

// Fallback to the 404 page
app.get("*", function(req, res) {
    const title = "Page Not Found";
    res.status(404).render("pages/404", {
        title: title,
        meta: {
            title: title,
            description: title
        }
    });
});

app.listen(port, () => console.log("Server running at http://127.0.0.1:" + port + "/"));