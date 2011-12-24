#Sencha Touch 2 Bootstrap App

Get a new [Sencha Touch] application quickly up and running. Useful for starting a new ST application or demonstrating a bug for the ST dev team.

##Bootstrap and Usage

Clone this repo into a new directory:

`$ mkdir sencha-touch-bootstrap-app && cd $_`

`$ git clone git://github.com/jeffreyiacono/Sencha-Touch-Bootstrap.git`

If you are using [rvm] the repo contains a default `/.rvmrc` file that uses a project setup of `ruby-1.9.2@st-app-gemset`. Change as needed.

Next you'll need to install [Sinatra] to serve up the app:

`$ gem install sinatra`

Now you're set to boot up the app:

`$ ruby -rubygems app.rb`

<code>
[2011-12-24 16:27:55] INFO  WEBrick 1.3.1<br>
[2011-12-24 16:27:55] INFO  ruby 1.9.2 (2011-07-09) [x86_64-darwin10.8.0]<br>
== Sinatra/1.3.1 has taken the stage on 4567 for development with backup from WEBrick<br>
[2011-12-24 16:27:55] INFO  WEBrick::HTTPServer#start: pid=12269 port=4567
</code>

Now visit http://0.0.0.0:4567 and you should be greeted by "Hello Viewport"

  [sencha touch]: http://www.sencha.com/products/touch/
  [rvm]: http://beginrescueend.com/
  [sinatra]: http://sinatrarb.com

##Notes
Application is using Sencha Touch 2, PR 3, which you can find at `./public/javascripts/touch/sencha-touch-all-debug.js`

##MIT License

Copyright (c) 2011 ElegantBuild, LLC, http://elegantbuild.com/

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
