const ping = require('ping');
//ES6 destructuring to pull off hosts object from hosts.js. Otherwise it would be hosts.hosts
// const {hosts} = require('./hosts.js')
const {hosts} = require('./getflix.js')
// const serverLocations = require('./hosts.json')
const result = []

// const parsedJSON = JSON.parse(serverLocations)

async function pingServers (host, display) {
    let pingAllServers = hosts.map(async host => {

        let res = await ping.promise.probe(host.address, {
            min_reply: 1,
            extra: ["-i 2"],
            timeout: 1,
        });
        if(res.host != 'unknown' && !isNaN(res.avg) ) {
            result.push({ host: res.host, avg: parseInt(res.avg), city: host.city, country: host.country });
        }
    });

    await Promise.all(pingAllServers);
    print(display);
}

function print (display) {
    result.sort(function (a, b) {
        return a.avg - b.avg;
    });
    for (let i = 0; i < display; i++) {
        console.log(`${i+1}. ${result[i].avg}ms - ${result[i].country}, ${result[i].city} - ${result[i].host}`)
    }
    console.log('  ...')
    console.log(`${result.length}. ${result[result.length-1].avg}ms - ${result[result.length-1].country}, ${result[result.length-1].city} - ${result[result.length-1].host}`)    

}

pingServers(hosts, 6)


