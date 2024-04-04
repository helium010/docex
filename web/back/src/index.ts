import express from "express";
import * as fs from "fs";
import * as path from "path";
import * as https from "https";
import * as http from "http";
import cookie_parser from "cookie-parser";
import glob from "glob";
import moment from "moment";

const path_root = path.join(__dirname, "../../..");
const path_front_build = path.join(path_root, "web/front/build");
const path_rendered = path.join(path_root, "web/out/md-html");

let remote = false;
if (process.argv.length > 2 && process.argv[2] == "remote") {
    remote = true;
}

const app = express();

if (remote) {
    app.use((req, res, next) => {
        if (!req.secure) {
            return res.redirect("https://" + req.headers.host + req.url);
        }

        next();
    });
    app.use(cookie_parser());
    app.use((req, res, next) => {
        if (req.cookies["password"] !== "docs2887") {
            res.sendFile(path.join(__dirname, "../static/login.html"));
        } else {
            next();
        }
    });
}

if (!remote) {
    app.use((req, res, next) => {
        console.log(`${moment().format(("YYYYMMDD-hhmmss"))} ${req.hostname} ${req.url}`);
        next();
    });
}

app.set("etag", false);
app.use((req, res, next) => {
    res.set("Cache-Control", "no-store");
    next();
});
app.use(require("cors")());

app.get(/^\/((docs|music).*)?$/, function (req, res) {
    res.sendFile(path.join(path_front_build, "index.html"));
});

app.use("/static", express.static(path.join(path_front_build, "static")));

app.get("/api/docs", (req, res) => {
    const docs: string[] = [];
    fs.readdirSync(path_rendered).forEach((filename) => {
        if (filename.endsWith(".xml")) {
            docs.push(path.basename(filename, ".xml"));
        }
    });
    res.send(docs);
});

app.get("/api/docs/:doc", (req, res) => {
    const doc = req.params.doc;

    for (const filename of fs.readdirSync(path_rendered)) {
        if (filename === `${doc}.xml`) {
            res.send(
                fs.readFileSync(path.join(path_rendered, filename), {
                    encoding: "utf-8",
                })
            );
            return;
        }
    }
    res.status(404).send();
});

app.get("/api/res/:filename", (req, res) => {
    const filename = req.params.filename;
    glob(`/res-*/${filename}`, { root: path_root }, (err, files) => {
        const matched = files[0];
        if (!matched) {
            res.status(404).send();
        }
        res.sendFile(matched);
    });
});

app.use("/api/files", express.static(path_root));

if (remote) {
    const httpServer = http.createServer(app);
    const httpsServer = https.createServer(
        {
            key: fs.readFileSync(path.join(path_root, "web/cert/realzh.com.key")),
            cert: fs.readFileSync(path.join(path_root, "web/cert/realzh.com.pem")),
        },
        app
    );
    httpServer.listen(80);
    httpsServer.listen(443);
    console.log(`Listening at :443 with basic auth`);
} else {
    const httpServer = http.createServer(app);
    const local_hostname = "localhost";
    httpServer.listen(8080, local_hostname);
    console.log(`Listening at http://${local_hostname}:8080`);
}
