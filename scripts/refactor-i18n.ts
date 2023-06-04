
// TODO move generated files to app/i18n and beautify generated js code.
import { it } from '../app/i18n/i18n_it';
import { en } from '../app/i18n/i18n_en';

const fs = require('fs')

// WARNING: lists must be coherent in size and data
var targetFiles = [it, en]
var targetNames = ["it", "en"]
var targetFileNames = ["i18n_it.ts", "i18n_en.ts"]


function sort(obj: any) {
    if (typeof obj !== "object" || Array.isArray(obj))
        return obj;
    const sortedObject: any = {};
    const keys = Object.keys(obj).sort();
    keys.forEach(key => sortedObject[key] = sort(obj[key]));
    return sortedObject;
}


for (let i = 0; i < targetFiles.length; i++) {
    let element = targetFiles[i];
    element = sort(element)
    console.log(targetFileNames[i] + "======================")
    console.log(element)
    console.log("==========================================")
}
