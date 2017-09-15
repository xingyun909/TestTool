const execFile = require('child_process').execFile;

//chrome-remote-interface doesn't launch Chrome for you, so you'll have to take care of that yourself.
const chromeLauncher = require('chrome-launcher');


function launchHeadlessChrome(url, callback) {
    // Assuming MacOSx.
    const CHROME = '/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome';
    execFile(CHROME, ['--headless', '--disable-gpu', '--remote-debugging-port=9222', url], callback);
}




// Optional: set logging level of launcher to see its output.
// Install it using: yarn add lighthouse-logger
// const log = require('lighthouse-logger');
// log.setLevel('info');


// launchHeadlessChrome('https://www.chromestatus.com', (err, stdout, stderr) => {
//     console.log(stdout)
// });

/**
 * Launches a debugging instance of Chrome.
 * @param {boolean=} headless True (default) launches Chrome in headless mode.
 *     False launches a full version of Chrome.
 * @return {Promise<ChromeLauncher>}
 */
function launchChrome(headless = true) {
    console.log('start launchChrome ...\n')
    return chromeLauncher.launch({
        port: 9222, // Uncomment to force a specific port of your choice.
        chromeFlags: [
            '--window-size=412,732',
            '--disable-gpu',
            headless ? '--headless' : ''
        ]
    });
}

exports.launchChrome = launchChrome