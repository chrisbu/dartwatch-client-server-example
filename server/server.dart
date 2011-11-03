#library("myserver");

#import("dart:json");
#import("/home/chrisbu/dart-devel/dart/client/fling/fling.dart");

void main() {
  HttpServer server = new HttpServer();
  
  //serve the static pages from the client
  server.handle("/client/", ClientApp.create("../client/"));
  
  //handle requests for data
  server.handle("/app/greet", (HttpRequest req, HttpResponse res) {
    res.setHeader("Content-Type", "text/plain");
    
    if (req.method == "POST") {
    
      print("Received data: ${req.body}");
      Map<String,String> input = JSON.parse(req.body);
      String fname = input['forename'];
      String sname = input['surname'];
      print("Parsed data: ${fname} ${sname}");  
      String message = "Server says, Hi there";
      
      String output = '{"forename":"${fname}","surname":"${sname}","serverMessage":"${message}"}'; 
      res.write(output);
      print("Sent Data ${output}");
    }
    else {
      res.write("POST only please");
    }
    
    res.finish();
  });
  server.listen(9090);
  print("listening on port 9090");
  
  // Runs the message loop.
  Fling.goForth();
  
  

}





class AppServer {



}

