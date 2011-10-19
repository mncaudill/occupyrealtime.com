var io = require('socket.io').listen(1400)
    , Conduit = require('flickr-conduit').Conduit
;

var globalEvent = 'occupy';

var conduit = new Conduit();
conduit.subscribeCallback = function(urlParts) {
    return urlParts.query.challenge == 'myspecialcallbacktoken';
}
conduit.getEventName = function() {
    return globalEvent;
}
conduit.listen(1401);

var buffer = [];
var seen = {};

io.sockets.on('connection', function(socket) {

    // Give them something fun to look at...
    for (var i in buffer) {
        socket.emit('publish', buffer[i]); 
    }

    conduit.on(globalEvent, function(img) {

        if (!seen[img.url]) {
            if (buffer.length >= 15) {
                var out = buffer.shift();
                delete seen[out.url];
            }

            buffer.push(img);
            seen[img.url] = true;
        }

        socket.emit('publish', img);    
    });
});


setInterval(function() {
    console.log('Number of clients: ' + io.sockets.clients().length); 
    conduit.heartbeat(globalEvent);
}, 10000);
