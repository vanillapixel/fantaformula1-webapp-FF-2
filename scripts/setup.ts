/*
 * Copyright (C) Luna Srl - All Rights Reserved
 *
 * @project    bfree-frontend.nosync
 * @file       setup.ts
 * @author     Christian Ascone
 * @date       10/10/19 2:40 PM
 */

const execSync = require('child_process').execSync;
var fs = require('fs');
import { exit } from 'process';

const ENVIRONMENT_DEV = 'dev';
const ENVIRONMENT_TEST = 'test';
const ENVIRONMENT_PROD = 'prod';

const env = process.argv[2];
if(!env){
    console.log("Environment is required")
    exit(1);
}
const availableEnvironments = [ENVIRONMENT_DEV, ENVIRONMENT_TEST, ENVIRONMENT_PROD];
if(!availableEnvironments.includes(env)){
    console.log("Valid environments: " + availableEnvironments);
    exit(1);
}
console.log(process.argv[2]);

fs.copyFile(`./env_files/_env.${env}`, './.env', (err: NodeJS.ErrnoException | null) => {
    if(err){
        console.log(err);
        exit(1);
    }
});
