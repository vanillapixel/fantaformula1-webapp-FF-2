

var fs = require('fs');

require('dotenv').config();
const environment = process.env.ENVIRONMENT;

let targetPath;
let envFileName;
let webEnvFileName;
let debugRoom = process.env.DEBUG_ROOM;
let apiURL = process.env.API_URL;
let sentryDsn = process.env.SENTRY_DSN;
let sentryEnableDevelopment = process.env.SENTRY_ENABLE_DEVELOPMENT;
let disableLoader = process.env.DISABLE_LOADER || false;

const isProduction = environment === 'production';

targetPath = `./app/environments/`;

if (isProduction) {
    envFileName = `environment.prod.ts`;
    webEnvFileName = `webEnvironment.prod.js`;
} else {
    envFileName = `environment.ts`;
    webEnvFileName = `webEnvironment.js`;
    apiURL = process.env.API_URL;
}

const envConfigFile = `
export const environment = {
    debugRoom: ${debugRoom},
    production: ${isProduction},
    apiUrl: '${apiURL}',
    sentryDsn: '${sentryDsn}',
    sentryEnableDevelopment: ${sentryEnableDevelopment},
    disableLoader: ${disableLoader},
};`;


const webEnvConfigFile = `
const web_environment = {
    
};

module.exports = web_environment;
`;

fs.writeFile(targetPath + envFileName, envConfigFile, function (err: any) {
    if (err) {
        console.log(err);
    }
});

fs.writeFile(targetPath + webEnvFileName, webEnvConfigFile, function (err: any) {
    if (err) {
        console.log(err);
    }
});