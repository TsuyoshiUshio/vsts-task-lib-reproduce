# vsts-task-lib-reproduce
A repo to reproduce an issue

I test with GitBash on Windows.

If you want to reproduce [this issue](https://github.com/Microsoft/vsts-task-lib/issues/265).

```
npm install 
npm test
```
Test fail. You can see te root cause at the [log](https://github.com/TsuyoshiUshio/vsts-task-lib-reproduce/blob/master/test-async.js.log).

```
##vso[task.issue type=error;]Error: /bin/bash failed. spawn /bin/bash ENOENT
##vso[task.complete result=Failed;]Error: /bin/bash failed. spawn /bin/bash ENOENT
```

then change https://github.com/TsuyoshiUshio/vsts-task-lib-reproduce/blob/master/downloader.ts#L9



```
bash.execSync(); // original await bash.exec();
```

```
npm test
```
Now it works. 

