function check() {
    const request = require('request');
    request("https://api.openweathermap.org/data/2.5/weather?appid=09bbdc4243d49ba72f9cfcde4484f728&q=buffalo&units=imperial", { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
        console.log(body.main.temp);
        if (body.main.temp > 68 && body.main.temp < 70) {
            var Twit = require('twit');
            var T = new Twit({
                consumer_key: 'LYoaKJyN7ObhTYcgYsj8YbNQX',
                consumer_secret: 'yiptIs7gfnvQYBRE445C6bOYIp4Vx40AquzQ8g6Hfmo1WiNzVJ',
                access_token: '1246217799694942208-IUjc295CbpgbFeM3RgT0UdrMFAN6wy',
                access_token_secret: 'dZoxRrmperpvuEwkuxv74WSGxvjhBoavssSknjFo8Yr2E'
            })
            T.post('statuses/update', {
                status: "It is 69 degrees in Buffalo."
            });
            console.log("woot")
        }
        else {
            var Twit = require('twit');
            var T = new Twit({
                consumer_key: 'LYoaKJyN7ObhTYcgYsj8YbNQX',
                consumer_secret: 'yiptIs7gfnvQYBRE445C6bOYIp4Vx40AquzQ8g6Hfmo1WiNzVJ',
                access_token: '1246217799694942208-IUjc295CbpgbFeM3RgT0UdrMFAN6wy',
                access_token_secret: 'dZoxRrmperpvuEwkuxv74WSGxvjhBoavssSknjFo8Yr2E'
            })
            T.post('statuses/update', {
                status: "It is not 69 degrees in Buffalo."
            });
            console.log("womp")
        }
    });
}
setTimeout(check, 1)
setInterval(check, 3600000)