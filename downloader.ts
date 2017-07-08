import tl = require('vsts-task-lib/task');
import { ToolRunner } from 'vsts-task-lib/toolrunner';

async function downloader() {

    let bash = new ToolRunner(tl.which('bash', true));
    bash.arg(".istioctldownloader.sh")
    try {
        await bash.exec();
        tl.setResult(tl.TaskResult.Succeeded, "bash done");
    } catch (err) {
        tl.setResult(tl.TaskResult.Failed, err);
        throw "bash error";
    }

}

downloader();