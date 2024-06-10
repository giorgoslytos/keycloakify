import { containerName } from "../src/bin/shared/constants";
import child_process from "child_process";
import { SemVer } from "../src/bin/tools/SemVer";
import { join as pathJoin, relative as pathRelative } from "path";
import chalk from "chalk";
import { Deferred } from "evt/tools/Deferred";
import { assert } from "tsafe/assert";
import { is } from "tsafe/is";

(async () => {
    {
        const dCompleted = new Deferred<void>();

        const child = child_process.spawn("docker", [
            ...["exec", containerName],
            ...["/opt/keycloak/bin/kc.sh", "export"],
            ...["--dir", "/tmp"],
            ...["--realm", "myrealm"],
            ...["--users", "realm_file"]
        ]);

        let output = "";

        const onExit = (code: number | null) => {
            dCompleted.reject(new Error(`Exited with code ${code}`));
        };

        child.on("exit", onExit);

        child.stdout.on("data", data => {
            const outputStr = data.toString("utf8");

            if (outputStr.includes("Export finished successfully")) {
                child.removeListener("exit", onExit);

                child.kill();

                dCompleted.resolve();
            }

            output += outputStr;
        });

        child.stderr.on("data", data => (output += chalk.red(data.toString("utf8"))));

        try {
            await dCompleted.pr;
        } catch (error) {
            assert(is<Error>(error));

            console.log(chalk.red(error.message));

            console.log(output);

            process.exit(1);
        }
    }

    const keycloakMajorVersionNumber = SemVer.parse(
        child_process
            .execSync(`docker inspect --format '{{.Config.Image}}' ${containerName}`)
            .toString("utf8")
            .trim()
            .split(":")[1]
    ).major;

    const targetFilePath = pathRelative(
        process.cwd(),
        pathJoin(
            __dirname,
            "..",
            "src",
            "bin",
            "start-keycloak",
            `myrealm-realm-${keycloakMajorVersionNumber}.json`
        )
    );

    run(`docker cp ${containerName}:/tmp/myrealm-realm.json ${targetFilePath}`);

    console.log(`${chalk.green(`✓ Exported realm to`)} ${chalk.bold(targetFilePath)}`);
})();

function run(command: string) {
    console.log(chalk.grey(`$ ${command}`));

    return child_process.execSync(command, { stdio: "inherit" });
}
