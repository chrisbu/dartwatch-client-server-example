#library("myserver");

#import("dart:json");

//note - please edit the following path for your machine!
#import("/home/chrisbu/dart-devel/dart/client/fling/fling.dart");

#source("../shared/message.dart");

void main() {
  HttpServer server = new HttpServer();
  
  //serve the static pages from the client
  server.handle("/client/", ClientApp.create("../client/"));
  
  //handle requests for data
  server.handle("/app/greet", (HttpRequest req, HttpResponse res) {
    res.setHeader("Content-Type", "text/plain");
    
    if (req.method == "POST") {
    
      print("Received data: ${req.body}");
	  Message message = new Message.fromJson(req.body);
      print("Parsed data: ${message.forename} ${message.surname} ${message.someNumber}");
	  message.messageText = "Server says, Hi there"; //add the message text
      
	  String output = message.toJson();
	  res.write(output);
	  print("Sent Data ${output}");
      
    }
    else {
      res.write("POST only please");
    }
    
    //close the response
    res.finish();
  });
  
  
  server.listen(9090);
  print("listening on port 9090");
  
  // Runs the message loop.
  Fling.goForth();
  
}

