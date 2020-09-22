#!/usr/bin/env node

var argv = require('yargs')
    .usage('Usage: $0 --nr <n reocrds> --sn <schema name> --sf <schema filename>')
    .option('nr', { alias: 'number', describe: 'number of reocrds to generate' })
    .option('sn', { alias: 'sname', describe: 'name of schema' })
    .option('sf', { alias: 'sfile', describe: 'schema filename' })
    .option('fs', { alias: 'fstring', describe: 'format output to string' })
    .demandOption(['number', 'sname', 'sfile'], '--nr, --sn, --sf required')
    .help().argv;

var mocker = require('mocker-data-generator').default;
var fs = require('fs');

fs.readFile(argv.sf, 'utf-8', (err, data) => {
    if (err) {
        console.error('Error: ', err.message);
    }

    const obj = JSON.parse(data);

    mocker()
        .schema(argv.sn, obj, argv.nr)
        .build((error, objdata) => {
            if (error) {
                console.error('Error: ', error);
            }

            if (!argv.fs) {
                console.log(objdata);
            } else {
                console.log(JSON.stringify(objdata, null, 2));
            }
        });
});
