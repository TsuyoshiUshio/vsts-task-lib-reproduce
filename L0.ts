
import * as path from 'path';
import * as ttm from 'vsts-task-lib/mock-test';
import * as tl from 'vsts-task-lib/task';


let chai = require('chai');
let fs = require('fs');



let parent_dir = path.normalize(path.join(__dirname, '..'));
tl.debug("parent_dir: " + parent_dir);


describe('Test Async', function () {
    before(() => {

    });

    after(() => {

    });

    it("tests async method", (done: MochaDone) => {

        let tp = path.join(__dirname, 'test-async.js');
        let tr: ttm.MockTestRunner = new ttm.MockTestRunner(tp);
        tr.run();
        tl.debug(tr.cmdlines);
        chai.expect(tr.succeeded).to.equal(true);
        chai.expect(tr.ran("/bin/bash .istioctldownloader.sh")).to.be.true;
        done();
    }); 

});
