
class Message {
  
  Message() {}
  
  String forename;
  String surname;
  String messageText;
  num someNumber;
  
  Message.fromJson(String json) {
    Map<String, Object> map = JSON.parse(json);
    forename = map["forename"];
    surname = map["surname"];
	messageText = map["messageText"]; //may be null. This is OK.
    someNumber = map["someNumber"];
  }
  
  String toJson() {
    Map<String, Object> map = new Map<Object, Object>();
    map["forename"] = forename;
    map["surname"] = surname;
    map["someNumber"] = someNumber;
	map["messageText"] = messageText;
    return JSON.stringify(map);  
  }
  
  String greeting() => "${forename} ${surname} ${someNumber}";
  
  
  
}