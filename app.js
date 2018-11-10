const ping = require('ping');
//ES6 destructuring to pull off hosts object from hosts.js. Otherwise it would be hosts.hosts
const {hosts} = require('./hosts.js')

const result = []

function print (display) {
    result.sort(function (a, b) {
        return a.avg - b.avg;
    });
    for (let i = 0; i < display; i++) {
        console.log(`${i+1}. ${result[i].avg}ms ${result[i].host.replace('.serverlocation.co', '')}`)
    }
    console.log('  ...')
    console.log(`${result.length}. ${result[result.length-1].avg}ms ${result[result.length-1].host.replace('.serverlocation.co', '')}`)    
}

async function pingServers (host, display) {
    let pingAllServers = hosts.map(async host => {

        let res = await ping.promise.probe(host, {
            min_reply: 1,
            extra: ["-i 2"],
            timeout: 1,
        });
        if(res.host != 'unknown') {
            result.push({ host: res.host, avg: parseInt(res.avg) });
        }
    });

    await Promise.all(pingAllServers);
    print(display);
}

pingServers(hosts, 6)
