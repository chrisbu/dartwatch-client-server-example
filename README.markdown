DART Client - Server communication
=================================

This example implements a dart server (using fling) which sends and receives 
data from the client, which is a set of static html and dart files served
from the same server.

Client/client.dart is the client side dart code
Client/client.html is the client side host html
Client/client-js.html is the output of htmlconverter (the output of the above 2 files converted to html + javascript).
Server/server.dart is the server code


1. Launch the server using /path/to/fling/out/fling/fling/fling server.dart
2. Browse to http://localhost:9090/client/client-js.html
3. Click "Submit" button
4. This will send json to the server, which will respond with more json.
