/**
 * chrome-remote-interface doesn't launch Chrome for you, so you'll have to take care of that yourself.
 * @chrome-remote-interface
 */
const { launchChrome } = require('./launchChrome');
const CDP = require('chrome-remote-interface');

launchChrome().then(async chrome => {
    console.log(`Launch Chrome ...\n`);
    console.log(`Chrome debuggable on port: ${chrome.port}\n`);
    const version = await CDP.Version({ port: chrome.port });
    const protocol = await CDP({ port: chrome.port });

    console.log('version : ', version);
    console.log('\n')

    const { Page } = protocol;
    await Page.enable();

    Page.navigate({ url: 'https://www.chromestatus.com/' });

    // Wait for window.onload before doing stuff.
    Page.loadEventFired(async () => {
        console.log('loadEventFired .... \n')
        const manifest = await Page.getAppManifest();

        if (manifest.url) {
            console.log('Manifest: ' + manifest.url);
            console.log(manifest.data);
        } else {
            console.log('Site has no app manifest');
        }

        protocol.close();
        chrome.kill(); // Kill Chrome.
    });
    // chrome.kill();
});