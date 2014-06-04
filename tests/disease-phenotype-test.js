load('tests/test-common.js');
var engine;

// feel free to add more here...
var diseaseIds =
    [
        "DOID:14330", // PD
        //"OMIM:270400", // SLO
    ];

exports.testDiseasePhenotype = function() {
    diseaseIds.forEach(
        function(id) {
            var resObj = engine.fetchOmimDiseasePhenotypeAsAssocations(id);
            console.log(JSON.stringify(resObj,' ',1));
            // todo - check json
            assert.isTrue(resObj.resultCount > 100);
            assert.isTrue(resObj.results.length > 100);
            
        }
    );
}

if (require.main == module) {
    engine = new getTestEngine();

    var rtn = require("test").run(exports);
    print("Return code="+rtn);
    system.exit(rtn);
}