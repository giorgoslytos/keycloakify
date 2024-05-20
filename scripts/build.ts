import * as child_process from "child_process";
import * as fs from "fs";
import { join, relative } from "path";
import { assert } from "tsafe/assert";
import { transformCodebase } from "../src/bin/tools/transformCodebase";
import chalk from "chalk";

console.log(chalk.cyan("Building Keycloakify..."));

const startTime = Date.now();

if (fs.existsSync(join("dist", "bin", "main.original.js"))) {
    fs.renameSync(
        join("dist", "bin", "main.original.js"),
        join("dist", "bin", "main.js")
    );

    fs.readdirSync(join("dist", "bin")).forEach(fileBasename => {
        if (/[0-9]\.index.js/.test(fileBasename)) {
            fs.rmSync(join("dist", "bin", fileBasename));
        }
    });
}

run(`npx tsc -p ${join("src", "bin", "tsconfig.json")}`);

if (
    !fs
        .readFileSync(join("dist", "bin", "main.js"))
        .toString("utf8")
        .includes("__nccwpck_require__")
) {
    fs.cpSync(join("dist", "bin", "main.js"), join("dist", "bin", "main.original.js"));
}

run(`npx ncc build ${join("dist", "bin", "main.js")} -o ${join("dist", "ncc_out")}`);

transformCodebase({
    srcDirPath: join("dist", "ncc_out"),
    destDirPath: join("dist", "bin"),
    transformSourceCode: ({ fileRelativePath, sourceCode }) => {
        if (fileRelativePath === "index.js") {
            return {
                newFileName: "main.js",
                modifiedSourceCode: sourceCode
            };
        }

        return { modifiedSourceCode: sourceCode };
    }
});

fs.rmSync(join("dist", "ncc_out"), { recursive: true });

patchDeprecatedBufferApiUsage(join("dist", "bin", "main.js"));

fs.chmodSync(
    join("dist", "bin", "main.js"),
    fs.statSync(join("dist", "bin", "main.js")).mode |
        fs.constants.S_IXUSR |
        fs.constants.S_IXGRP |
        fs.constants.S_IXOTH
);

run(`npx tsc -p ${join("src", "tsconfig.json")}`);
run(`npx tsc-alias -p ${join("src", "tsconfig.json")}`);

if (fs.existsSync(join("dist", "vite-plugin", "index.original.js"))) {
    fs.renameSync(
        join("dist", "vite-plugin", "index.original.js"),
        join("dist", "vite-plugin", "index.js")
    );
}

run(`npx tsc -p ${join("src", "vite-plugin", "tsconfig.json")}`);

if (
    !fs
        .readFileSync(join("dist", "vite-plugin", "index.js"))
        .toString("utf8")
        .includes("__nccwpck_require__")
) {
    fs.cpSync(
        join("dist", "vite-plugin", "index.js"),
        join("dist", "vite-plugin", "index.original.js")
    );
}

run(
    `npx ncc build ${join("dist", "vite-plugin", "index.js")} -o ${join(
        "dist",
        "ncc_out"
    )}`
);

transformCodebase({
    srcDirPath: join("dist", "ncc_out"),
    destDirPath: join("dist", "vite-plugin"),
    transformSourceCode: ({ fileRelativePath, sourceCode }) => {
        assert(fileRelativePath === "index.js");

        return { modifiedSourceCode: sourceCode };
    }
});

fs.rmSync(join("dist", "ncc_out"), { recursive: true });

patchDeprecatedBufferApiUsage(join("dist", "vite-plugin", "index.js"));

console.log(chalk.green(`✓ built in ${((Date.now() - startTime) / 1000).toFixed(2)}s`));

function run(command: string) {
    console.log(chalk.grey(`$ ${command}`));

    child_process.execSync(command, { stdio: "inherit" });
}

function patchDeprecatedBufferApiUsage(filePath: string) {
    const before = fs.readFileSync(filePath).toString("utf8");

    const after = before.replace(
        `var buffer = new Buffer(toRead);`,
        `var buffer = Buffer.allocUnsafe ? Buffer.allocUnsafe(toRead) : new Buffer(toRead);`
    );

    assert(after !== before, `Patch failed for ${relative(process.cwd(), filePath)}`);

    fs.writeFileSync(filePath, Buffer.from(after, "utf8"));
}
