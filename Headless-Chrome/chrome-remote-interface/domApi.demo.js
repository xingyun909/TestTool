const { launchChrome } = require('./launchChrome');
const CDP = require('chrome-remote-interface');


(async function () {

    const chrome = await launchChrome();
    const protocol = await CDP({ port: chrome.port });

    // Extract the DevTools protocol domains we need and enable them.
    // See API docs: https://chromedevtools.github.io/devtools-protocol/
    const { Page, Runtime } = protocol;
    await Promise.all([Page.enable(), Runtime.enable()]);

    Page.navigate({ url: 'https://www.chromestatus.com/' });

    // Wait for window.onload before doing stuff.
    Page.loadEventFired(async () => {
        console.log('loadEventFired ...\n')
        const js = "document.querySelector('title').textContent";
        // Evaluate the JS expression in the page.
        const result = await Runtime.evaluate({ expression: js });

        console.log('Title of page: ' + result.result.value);

        protocol.close();
        chrome.kill(); // Kill Chrome.
    });

})();