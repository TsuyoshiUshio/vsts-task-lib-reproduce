import ma = require('vsts-task-lib/mock-answer');
import tmrm = require('vsts-task-lib/mock-run');
import path = require('path');


let taskPath = path.join(__dirname, 'downloader.js');
let tr: tmrm.TaskMockRunner = new tmrm.TaskMockRunner(taskPath);

let a: ma.TaskLibAnswers = <ma.TaskLibAnswers> {
    "which": {
        "bash":  "/bin/bash"
    },
    "checkPath": {
        "/bin/bash": true,
    },
    "cwd": {
        "cwd": process.cwd(),
    },
    "osType": {
        "osType": "Linux",
    },
    "exec": {
        "/bin/bash .istioctldownloader.sh": {
            "code": 0,
            "stdiout": ""
        }
    }
}

tr.setAnswers(a);

tr.run();