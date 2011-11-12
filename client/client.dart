#library("client");

#import("dart:html");
#import("dart:json");
#import("dart:core");

#source("../shared/message.dart");


void main() {
  InputElement forename = document.createElement("input");
  forename.value = "Chris";
  window.document.body.nodes.add(forename);
  
  
  InputElement surname = document.createElement("input");
  surname.value = "Buckett";
  window.document.body.nodes.add(surname);
 
  
  DivElement output = document.createElement("div");
  
  ButtonElement submit = document.createElement("button");
  submit.text = "Submit";
  submit.on.click.add((event) {
    //the event handler function
	
	Message message = new Message();
	message.forename = forename.value; //from the text box
	message.surname = surname.value; //from the text box
	message.someNumber = 99;
	
    sayHelloFromServer(message, 
	  (Message response) {
        //the callback function
        output.innerHTML += response.greeting() + "<br/>";  
      }
	);
    
  });
  
  window.document.body.nodes.add(submit);
  window.document.body.nodes.add(output);

}

void sayHelloFromServer(Message message, callback) {
    XMLHttpRequest req = new XMLHttpRequest();
    String url = "http://localhost:9090/app/greet";
    req.open("POST",url,false);
    
    req.on.load.add((event) { //
      window.console.log("response recieved");
      String json = req.responseText;
      window.console.log(json);
	  Message message = new Message.fromJson(json);
      callback(message);
    });
    
    String data = message.toJson();
    window.console.log("sending data to server: ${data}");
	try {
      req.send(data);
	}
	catch (Exception ex) {
	  window.console.log(ex.toString());
	}
  
}
