import * as fs from "fs";
import * as glob from "glob";
import hljs from "highlight.js";
import MardownIt from "markdown-it";
import * as path from "path";
import { render_md } from "./render_md";

const path_root = path.join(__dirname, "..", "..", "..");
const path_src = path.join(path_root, "src");
const path_out = path.join(__dirname, "../../out/md-html");
const path_articles_index = path.join(path_root, "src/articles-index.md");

const cmd = process.argv.length > 2 ? process.argv[2] : "";
if (cmd === "clean") {
    if (fs.existsSync(path_out)) {
        fs.rmSync(path_out, { recursive: true });
    }
    process.exit();
}

if (!fs.existsSync(path_out)) {
    fs.mkdirSync(path_out);
}

// Compile all markdown files.
if (cmd !== "watch") {
    console.log("Compiling...");
} else {
    console.log("Watching...");
}

function scan_once() {
    // process.stdout.write("\r\x1b[K");

    const articles_index_src = fs.readFileSync(path_articles_index, { encoding: "utf8" });
    const extra_info = { articles_index_src };

    for (const path_md of glob.sync(`*.md`, {
        cwd: path_src,
        absolute: true,
    })) {
        // Read md
        let md_name = path.basename(path_md);
        md_name = md_name.substring(0, md_name.length - 3);

        // process.stdout.write(`${md_name.padEnd(80)}`);
        const md = fs.readFileSync(path_md, { encoding: "utf-8" });
        const utf8 = new TextEncoder();
        const md_hex = Buffer.from(utf8.encode(md)).toString("hex").toUpperCase();

        // Check if need to rebuild html
        const rendered_path = path.join(path_out, `${md_name}.xml`);
        if (!fs.existsSync(rendered_path) || fs.readFileSync(rendered_path, { encoding: "utf-8" }).split("\n", 1)[0] !== md_hex) {
            const render_result = render_md(md, md_name, extra_info);

            // Write
            fs.writeFileSync(path.join(path_out, `${md_name}.xml`), `${md_hex}\n${render_result}`);
        }

        // process.stdout.write("\r\x1b[K");
    }

    if (cmd === "watch") {
        setTimeout(scan_once, 1000);
    }
}

scan_once();

if (cmd !== "watch") {
    console.log("Complete");
}
