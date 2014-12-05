var http = require('http')
var path = require('path')
var fs = require('fs')

var app = require('app')  // Module to control application life.
var BrowserWindow = require('browser-window')  // Module to create native browser window.

var ecstatic = require('ecstatic')

var clientDir = path.join(__dirname, '..', 'client')

app.on('ready', function() {
  // static file server
  var server = http.createServer(ecstatic(clientDir))

  server.listen(8765, function() {
    var win = new BrowserWindow({
      width: 500,
      height: 500,
      show : true,
      'enable-larger-than-screen' : true,
      'skip-taskbar' : true,
      'use-content-size' : true
    })

    win.loadUrl("http://localhost:8765")
  })
})
