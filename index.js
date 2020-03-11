var Twit = require('twit')

var T = new Twit({
    consumer_key: 'MxxAz1Qiy2syu9DnepL7Cm5rm',
    consumer_secret: 'n6Wrjkzm3SU5xTM53QenVuQuvDHRPkHD3Ms8zlm8S3MqNS4Vm3',
    access_token: '1232125524035723270-qW48ORdFQCSCJ1FNlfcDT0rzZ1y6Gm',
    access_token_secret: 'I1dT9knpbsGmckVqsrpikKMM7XIAypxmtpop5MAe1nZ2L'
})

T.get('account/verify_credentials', {
    include_entities: false,
    skip_status: true,
    include_email: false
}, onAuthenticated)

function onAuthenticated(err, res) {
    if (err) {
        throw err
    }

    console.log('u did it. waking up dooskbot...\r\n')

    var stream = T.stream('user')

    stream.on('follow', onFollowed)
    stream.on('error', onError)

}

function onError(error) {
    throw error
}

function onFollowed(event) {
    var name = event.source.name
    var screenName = event.source.screen_name
    var response = '@' + screenName + 'a fart for you, ' + name

    // tweet response to user here

    console.log('I was followed by: ' + name + ' @' + screenName)
}

function onError(error) {
    throw error
}

T.post('statuses/update', {
    status: 'fart'
})


