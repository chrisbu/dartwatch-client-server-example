#library("client");

#import("dart:html");
#import("dart:json");
#import("dart:core");
//#import('../../../dart-devel/dart/client/view/view.dart',prefix:"view");

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
    sayHelloFromServer(forename.value, surname.value, (String messageText) {
      //the callback function
      output.innerHTML += messageText + "<br/>";  
    });
    
  });
  
  window.document.body.nodes.add(submit);
  window.document.body.nodes.add(output);

}

String sayHelloFromServer(String forename, String surname, callback) {
    XMLHttpRequest req = new XMLHttpRequest();
    String url = "http://localhost:9090/app/greet";
    req.open("POST",url,false);
    
    req.on.load.add((event) { //
      window.console.log("response recieved");
      String json = req.responseText;
      window.console.log(json);
      Map<String,String> result = JSON.parse(json);
      String serverMessage = result['serverMessage'];
      String messageText = "${serverMessage} ${result['forename']} ${result['surname']}";
      window.console.log("calling callback");
      callback(messageText);
    });
    
    String data = '{"forename":"${forename}","surname":"${surname}"}';
    window.console.log("sending data to server: ${data}");
    req.send(data);
  
}