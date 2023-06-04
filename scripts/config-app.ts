
var fs = require('fs');

require('dotenv').config();

fs.readFile('./app.json.example', 'utf8', (err: any, data: any) => {
    if (err) {
        console.error(err);
        return
    }
    let targetPath = './app.json';
    let androidGoogleApiKey = process.env.ANDROID_GOOGLE_API_KEY;
    let iosGoogleApiKey = process.env.IOS_GOOGLE_API_KEY;
    let bundleIdentifier = process.env.BUNDLE_IDENTIFIER || 'com.fantaformula';
    let appName = process.env.APP_NAME || 'Fantaformula';
    let appSlug = process.env.APP_SLUG || 'Fantaformula-app';
    data = data.replace(/<APP_NAME>/g, appName);
    data = data.replace(/<APP_SLUG>/g, appSlug);
    data = data.replace(/<ANDROID_GOOGLE_API_KEY>/g, androidGoogleApiKey);
    data = data.replace(/<IOS_GOOGLE_API_KEY>/g, iosGoogleApiKey);
    data = data.replace(/<BUNDLE_IDENTIFIER>/g, bundleIdentifier);
    data = data.replace(/<WARNING>/g, '// THIS FILE IS AUTOGENERATED. EDIT app.json.example AND RUN AGAIN `yarn run setup-app` TO UPDATE THIS FILE.');

    fs.writeFile(targetPath, data, function (err: any) {
        if (err) {
            console.log(err);
        }
    });
});