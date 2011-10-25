#occupyrealtime: a real-time stream of #occupywallstreet photos
======================

Author: Nolan Caudill
Date: 2011-10-18

## Description

occupyrealtime.com is a simple site that streams, in real-time, all Flickr photos that are tagged
with either "occupywallstreet" or "ows" and displays them.

This uses Flickr's [real-time push feeds](http://laughingmeme.org/2011/07/24/getting-started-with-flickr-real-time-apis-in-php/) and [flickr-conduit](https://github.com/mncaudill/flickr-conduit).

There are two files in this app: index.html and occupy.js.

Occupy.js is a little node.js app that sets up socket.io and flickr-conduit and then listens for all events that come in, buffers the last 15, and then streams them to open sockets, where the JS on the HTML file munges them a bit and renders them.

The reason for the buffer is that I want someone on arrival to the page be able to see something immediately, just in case there is a lull in updates.

## Installation

After cloning this repository, just run:

`npm install`

to pull in the requiring dependencies. 

Then to start the actual occupy app:

`npm start`

You'll need to use Flickr's API (specifically flickr.push.subscribe) to set up the subscription for Flickr to start streaming updates to your server on the port that you specified for flickr-conduit in the occupy.js app.

The index.html is hard-coded to still point to occupyrealtime.com (my server), so this page will work since my stuff is still running, but if you want to point it to your own server you'll need to update the JS.

## Thanks

Thanks to [Luiz Lopes](https://github.com/theprivileges/) for his patch to add the npm json file.

## License

MIT License

Copyright (C) 2011 by Nolan Caudill

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
