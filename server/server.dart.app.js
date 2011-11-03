// Copyright (c) 2011, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

function native_ListFactory__new(typeToken, length) {
  return RTT.setTypeInfo(
      new Array(length),
      Array.$lookupRTT(RTT.getTypeInfo(typeToken).typeArgs));
}

function native_ListImplementation__indexOperator(index) {
  return this[index];
}

function native_ListImplementation__indexAssignOperator(index, value) {
  this[index] = value;
}

function native_ListImplementation_get$length() {
  return this.length;
}

function native_ListImplementation__setLength(length) {
  this.length = length;
}

function native_ListImplementation__add(element) {
  this.push(element);
}

function $inlineArrayIndexCheck(array, index) {
  if (index >= 0 && index < array.length) {
    return index;
  }
  native__ListJsUtil__throwIndexOutOfRangeException(index);
}

function native_ListImplementation__removeRange(start, length) {
  this.splice(start, length);
}

function native_ListImplementation__insertRange(start, length, initialValue) {
  var array = [start, 0];
  for (var i = 0; i < length; i++){
    array.push(initialValue);
  }
  this.splice.apply(this, array);
}
// Copyright (c) 2011, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

function native_BoolImplementation_EQ(other) {
  return typeof other == 'boolean' && this == other;
}

function native_BoolImplementation_toString() {
  return this.toString();
}

function native_BoolImplementation_toBool() {
  return this == true;
}
// Copyright (c) 2011, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

/**
 * Helpers for lazy static initialization.
 */
var static$uninitialized = {};
var static$initializing = {};

// Optimized versions of closure bindings.
// Name convention: $bind<number-of-scopes>_<number-of-arguments>(fn, this, scopes, args)
function $bind0_0(fn, thisObj) {
  return function() {
    return fn.call(thisObj);
  }
}
function $bind0_1(fn, thisObj) {
  return function(arg) {
    return fn.call(thisObj, arg);
  }
}
function $bind0_2(fn, thisObj) {
  return function(arg1, arg2) {
    return fn.call(thisObj, arg1, arg2);
  }
}
function $bind0_3(fn, thisObj) {
  return function(arg1, arg2, arg3) {
    return fn.call(thisObj, arg1, arg2, arg3);
  }
}
function $bind0_4(fn, thisObj) {
  return function(arg1, arg2, arg3, arg4) {
    return fn.call(thisObj, arg1, arg2, arg3, arg4);
  }
}
function $bind0_5(fn, thisObj) {
  return function(arg1, arg2, arg3, arg4, arg5) {
    return fn.call(thisObj, arg1, arg2, arg3, arg4, arg5);
  }
}

function $bind1_0(fn, thisObj, scope) {
  return function() {
    return fn.call(thisObj, scope);
  }
}
function $bind1_1(fn, thisObj, scope) {
  return function(arg) {
    return fn.call(thisObj, scope, arg);
  }
}
function $bind1_2(fn, thisObj, scope) {
  return function(arg1, arg2) {
    return fn.call(thisObj, scope, arg1, arg2);
  }
}
function $bind1_3(fn, thisObj, scope) {
  return function(arg1, arg2, arg3) {
    return fn.call(thisObj, scope, arg1, arg2, arg3);
  }
}
function $bind1_4(fn, thisObj, scope) {
  return function(arg1, arg2, arg3, arg4) {
    return fn.call(thisObj, scope, arg1, arg2, arg3, arg4);
  }
}
function $bind1_5(fn, thisObj, scope) {
  return function(arg1, arg2, arg3, arg4, arg5) {
    return fn.call(thisObj, scope, arg1, arg2, arg3, arg4, arg5);
  }
}

function $bind2_0(fn, thisObj, scope1, scope2) {
  return function() {
    return fn.call(thisObj, scope1, scope2);
  }
}
function $bind2_1(fn, thisObj, scope1, scope2) {
  return function(arg) {
    return fn.call(thisObj, scope1, scope2, arg);
  }
}
function $bind2_2(fn, thisObj, scope1, scope2) {
  return function(arg1, arg2) {
    return fn.call(thisObj, scope1, scope2, arg1, arg2);
  }
}
function $bind2_3(fn, thisObj, scope1, scope2) {
  return function(arg1, arg2, arg3) {
    return fn.call(thisObj, scope1, scope2, arg1, arg2, arg3);
  }
}
function $bind2_4(fn, thisObj, scope1, scope2) {
  return function(arg1, arg2, arg3, arg4) {
    return fn.call(thisObj, scope1, scope2, arg1, arg2, arg3, arg4);
  }
}
function $bind2_5(fn, thisObj, scope1, scope2) {
  return function(arg1, arg2, arg3, arg4, arg5) {
    return fn.call(thisObj, scope1, scope2, arg1, arg2, arg3, arg4, arg5);
  }
}

function $bind3_0(fn, thisObj, scope1, scope2, scope3) {
  return function() {
    return fn.call(thisObj, scope1, scope2, scope3);
  }
}
function $bind3_1(fn, thisObj, scope1, scope2, scope3) {
  return function(arg) {
    return fn.call(thisObj, scope1, scope2, scope3, arg);
  }
}
function $bind3_2(fn, thisObj, scope1, scope2, scope3) {
  return function(arg1, arg2) {
    return fn.call(thisObj, scope1, scope2, arg1, arg2);
  }
}
function $bind3_3(fn, thisObj, scope1, scope2, scope3) {
  return function(arg1, arg2, arg3) {
    return fn.call(thisObj, scope1, scope2, scope3, arg1, arg2, arg3);
  }
}
function $bind3_4(fn, thisObj, scope1, scope2, scope3) {
  return function(arg1, arg2, arg3, arg4) {
    return fn.call(thisObj, scope1, scope2, scope3, arg1, arg2, arg3, arg4);
  }
}
function $bind3_5(fn, thisObj, scope1, scope2, scope3) {
  return function(arg1, arg2, arg3, arg4, arg5) {
    return fn.call(thisObj, scope1, scope2, scope3, arg1, arg2, arg3, arg4, arg5);
  }
}

/**
 * Implements extends for dart classes on javascript prototypes.
 * @param {Function} child
 * @param {Function} parent
 */
function $inherits(child, parent) {
  if (child.prototype.__proto__) {
    child.prototype.__proto__ = parent.prototype;
  } else {
    function tmp() {};
    tmp.prototype = parent.prototype;
    child.prototype = new tmp();
    child.prototype.constructor = child;
  }
}

/**
 * @param {Function} fn
 * @param {Object|undefined} thisObj
 * @param {...*} var_args
 */
function $bind(fn, thisObj, var_args) {
  if (arguments.length > 2) {
    var boundArgs = Array.prototype.slice.call(arguments, 2);
    return function() {
      // Prepend the bound arguments to the current arguments.
      var newArgs = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(newArgs, boundArgs);
      return fn.apply(thisObj, newArgs);
    };
  } else {
    return function() {
      return fn.apply(thisObj, arguments);
    };
  }
}

/**
 * Dart null object that should be used by JS implementation to test for
 * Dart null.
 *
 * TODO(ngeoffray): update dartc to generate this variable instead of
 *                  undefined.
 * @const
 */
var $Dart$Null = void 0;

function assert(expr) {
  var val = typeof(expr) == 'function' ? $dartcall(expr, []) : expr;
  if (val !== true) {
    $Dart$ThrowException(native_ExceptionHelper_createAssertionError());
  }
}

// TODO(jimhug): Remove these functions after updating compiler backend.
function BIT_OR$operator(val1, val2) {
  return (typeof(val1) == 'number' && typeof(val2) == 'number')
      ? val1 | val2
      : val1.BIT_OR$operator(val2);
}

function BIT_XOR$operator(val1, val2) {
  return (typeof(val1) == 'number' && typeof(val2) == 'number')
      ? val1 ^ val2
      : val1.BIT_XOR$operator(val2);
}

function BIT_AND$operator(val1, val2) {
  return (typeof(val1) == 'number' && typeof(val2) == 'number')
      ? val1 & val2
      : val1.BIT_AND$operator(val2);
}

function BIT_NOT$operator(val) {
  return (typeof(val) == 'number') ? ~val : val.BIT_NOT$operator();
}

function SHL$operator(val1, val2) {
  return (typeof(val1) == 'number' && typeof(val2) == 'number')
      ? val1 << val2
      : val1.SHL$operator(val2);
}

function SAR$operator(val1, val2) {
  return (typeof(val1) == 'number' && typeof(val2) == 'number')
      ? val1 >> val2
      : val1.SAR$operator(val2);
}

function SHR$operator(val1, val2) {
  return val1.SHR$operator(val2);
}

function ADD$operator(val1, val2) {
  return (typeof(val1) == 'number' && typeof(val2) == 'number')
      ? val1 + val2
      : val1.ADD$operator(val2);
}

function SUB$operator(val1, val2) {
  return (typeof(val1) == 'number' && typeof(val2) == 'number')
      ? val1 - val2
      : val1.SUB$operator(val2);
}

function MUL$operator(val1, val2) {
  return (typeof(val1) == 'number' && typeof(val2) == 'number')
      ? val1 * val2
      : val1.MUL$operator(val2);
}

function DIV$operator(val1, val2) {
  return (typeof(val1) == 'number' && typeof(val2) == 'number')
      ? val1 / val2
      : val1.DIV$operator(val2);
}

function MOD$operator(val1, val2) {
  return (typeof(val1) == 'number' && typeof(val2) == 'number')
      ? number$euclideanModulo(val1, val2)
      : val1.MOD$operator(val2);
}

function TRUNC$operator(val1, val2) {
  if (typeof(val1) == 'number' && typeof(val2) == 'number') {
    var tmp = val1 / val2;
    return (tmp < 0) ? Math.ceil(tmp) : Math.floor(tmp);
  } else {
    return val1.TRUNC$operator(val2);
  }
}

function negate$operator(val) {
  return (typeof(val) == 'number') ? -val : val.negate$operator();
}

function LT$operator(val1, val2) {
  return (typeof(val1) == 'number' && typeof(val2) == 'number')
      ? val1 < val2
      : val1.LT$operator(val2);
}

function GT$operator(val1, val2) {
  return (typeof(val1) == 'number' && typeof(val2) == 'number')
      ? val1 > val2
      : val1.GT$operator(val2);
}

function LTE$operator(val1, val2) {
  return (typeof(val1) == 'number' && typeof(val2) == 'number')
      ? val1 <= val2
      : val1.LTE$operator(val2);
}

function GTE$operator(val1, val2) {
  return (typeof(val1) == 'number' && typeof(val2) == 'number')
      ? val1 >= val2
      : val1.GTE$operator(val2);
}


/**
 * These operators need to work correctly with undefined
 * so must be functions.
 */
function EQ$operator(val1, val2) {
  if (val1 === $Dart$Null) {
    return val2 === $Dart$Null;
  } else if (typeof(val1) == typeof(val2) && typeof val1 != 'object') {
    // number, boolean, string
    return val1 === val2;
  } 
  return val1.EQ$operator(val2);
}

function NE$operator(val1, val2) {
  return !EQ$operator(val1, val2);
}

// The following operator-functions are not called from Dart-generated code, but
// only from handwritten JS code.
function INDEX$operator(obj, index) {
  return obj.INDEX$operator(index);
}

function ASSIGN_INDEX$operator(obj, index, newVal) {
  obj.ASSIGN_INDEX$operator(index, newVal);
}

function $Dart$ThrowException(e) {
  // If e is not a value, we can use V8's captureStackTrace utility method.
  if (e && (typeof e == "object") && Error.captureStackTrace) {
    Error.captureStackTrace(e);
  }
  throw e;
}

function $toString(x) {
  return native__StringJsUtil_toDartString(x);
}

// Translate a JavaScript exception to a Dart exception
// TODO(zundel): cross browser support.  This is Chrome specific.
function $transformBrowserException(e) {
  if (e instanceof TypeError) {
    switch(e.type) {
    case "property_not_function":
    case "called_non_callable":
      if (e.arguments[0] == "undefined") {
        return native_ExceptionHelper_createNullPointerException();
      }
      return native_ExceptionHelper_createObjectNotClosureException();
    case "non_object_property_call":
    case "non_object_property_load":
      return native_ExceptionHelper_createNullPointerException();
    case "undefined_method":
      if (e.arguments[0] == "call" || e.arguments[0] == "apply") {
        return native_ExceptionHelper_createObjectNotClosureException();
      }
      return native_ExceptionHelper_createNoSuchMethodException(
          "", e.arguments[0], []);
    }
  }
  return e;
}

// Throws a NoSuchMethodException (used by named-parameter trampolines).
function $nsme() {
  var e = native_ExceptionHelper_createNoSuchMethodException("", "", []);
  $Dart$ThrowException(e);
}

// Throws a NoSuchMethodException (used when instantiating via a non-existent class or ctor).
function $nsme2(name, args) {
  var e = native_ExceptionHelper_createNoSuchMethodException(name, name, args);
  $Dart$ThrowException(e);
}

// Shared named-argument object used by call-sites with no named arguments.
/** @const */
var $noargs = {count:0};

// Used for invoking dart functions from js.
function $dartcall(fn, args) {
  args.unshift(args.length, $noargs);
  fn.apply(null, args);
}

//
// The following methods are used to create canonical constants.
//

function native_ConstHelper_getConstId(o) {
  return $dart_const_id(o);
}

// compile time const canonicalization helpers
function $dart_const_id(o) {
   if (o === $Dart$Null) return "";
   if (typeof o === "number") return "n" + o;
   if (typeof o === "boolean") return "b" + ((o) ? 1 : 0);
   if (typeof o === "string") return $dart_const_string_id(o);
   if (typeof o === "function") throw "a function is not a constant expression";
   var result = o.$dartConstId;
   if (result === undefined) {
     throw "internal error: reference to non-canonical constant";
   }
   return result;
}

// Array ids have the form: "aID,ID,ID"
function $dart_const_array_id(o) {
  var ids = [];
  for (var i=o.length-1; i>=0; i--) {
    ids.push($dart_const_id(o[i]));
  }
  return "a" + ids.join(",");
}

var $CONST_MAP_PREFIX = ":"

// String ids have the form "sID"
var $string_id = 0;
var $string_id_cache = {};
function $dart_const_string_id(s) {
  var key = $CONST_MAP_PREFIX + s;
  var id = $string_id_cache[key];
  if (!id) {
    id = "s" + (++$string_id);
    $string_id_cache[key] = id;
  }
  return id;
}

// A place to store the canonical consts
var $consts = {};

function $isDartMap(o) {
  return !!(o && o.$implements$Map$Dart);
}

// Intern const object "o"
function $intern(o, type_args) {
  var id;
  // Maps and arrays need special handling
  // TODO(johnlenz): This array check may not be sufficient across iframes.
  if (o instanceof Array) {
    // Dart array literals are implemented as JavaScript native arrays.
    id = $dart_const_array_id(o);
  } else if ($isDartMap(o)) {
    // Dart map literals are currently implemented by a non-const Dart class.
    id = native_ConstHelper_getConstMapId(o);
  } else {
    id = "o" + o.$const_id();
  }
  if (type_args != null) {
    id += '<';
    for (var i=type_args.length-1; i >= 0; i--) {
      id += type_args[i];
      id += ","
    }
    id += '>';
  }
  var key = $CONST_MAP_PREFIX + id;
  var match = $consts[key];
  if (match != null) {
    return match;
  }
  o.$dartConstId = id;
  $consts[key] = o;
  return o;
}

function $Dart$MapLiteralFactory() {
  return native__CoreJsUtil__newMapLiteral();
}
// Copyright (c) 2011, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

// Dart core library.

function date$validateValue(value) {
  if (isNaN(value)) {
    // TODO(floitsch): Use real exception object.
    throw Error("Invalid Date");
  }
  return value;
}

function native_DateImplementation__valueFromDecomposed(
    years, month, day, hours, minutes, seconds, milliseconds, isUtc) {
  // JavaScript has 0-based months.
  var jsMonth = month - 1;
  var value = isUtc ?
              Date.UTC(years, jsMonth, day,
                       hours, minutes, seconds, milliseconds) :
              new Date(years, jsMonth, day,
                       hours, minutes, seconds, milliseconds).valueOf();
  return date$validateValue(value);
}

function native_DateImplementation__valueFromString(str) {
  return date$validateValue(Date.parse(str));
}

function native_DateImplementation__now() {
  return new Date().valueOf();
}

function date$dateFrom(dartDate, value) {
  // Lazily keep a JS Date stored in the dart object.
  var date = dartDate.date;
  if (!date) {
    date = new Date(value);
    dartDate.date = date;
  }
  return date;
}

function native_DateImplementation__getYear(value, isUtc) {
  var date = date$dateFrom(this, value);
  return isUtc ? date.getUTCFullYear() : date.getFullYear();
}

function native_DateImplementation__getMonth(value, isUtc) {
  var date = date$dateFrom(this, value);
  var jsMonth = isUtc ? date.getUTCMonth() : date.getMonth();
  // JavaScript has 0-based months.
  return jsMonth + 1;
}

function native_DateImplementation__getDay(value, isUtc) {
  var date = date$dateFrom(this, value);
  return isUtc ? date.getUTCDate() : date.getDate();
}

function native_DateImplementation__getHours(value, isUtc) {
  var date = date$dateFrom(this, value);
  return isUtc ? date.getUTCHours() : date.getHours();
}

function native_DateImplementation__getMinutes(value, isUtc) {
  var date = date$dateFrom(this, value);
  return isUtc ? date.getUTCMinutes() : date.getMinutes();
}

function native_DateImplementation__getSeconds(value, isUtc) {
  var date = date$dateFrom(this, value);
  return isUtc ? date.getUTCSeconds() : date.getSeconds();
}

function native_DateImplementation__getMilliseconds(value, isUtc) {
  var date = date$dateFrom(this, value);
  return isUtc ? date.getUTCMilliseconds() : date.getMilliseconds();
}
// Copyright (c) 2011, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

var isolate$current = null;
var isolate$rootIsolate = null;  // Will only be set in the main worker.
var isolate$inits = [];
var isolate$globalThis = this;

// These declarations are needed to avoid errors from the Closure Compiler
// optimizer. They are defined in client/dom/generated/dart_dom_wrapping.js.
var __dom_wrap;
var __dom_unwrap;

var isolate$inWorker =
    (typeof isolate$globalThis['importScripts']) != "undefined";
var isolate$supportsWorkers =
    isolate$inWorker || ((typeof isolate$globalThis['Worker']) != 'undefined');

var isolate$MAIN_WORKER_ID = 0;
// Non-main workers will update the id variable.
var isolate$thisWorkerId = isolate$MAIN_WORKER_ID;

// Whether to use web workers when implementing isolates.
var isolate$useWorkers = isolate$supportsWorkers;
// Uncomment this to not use web workers even if they're available.
//   isolate$useWorkers = false;

// Whether to use the web-worker JSON-based message serialization protocol,
// even if not using web workers.
var isolate$useWorkerSerializationProtocol = false;
// Uncomment this to always use the web-worker JSON-based message
// serialization protocol, e.g. for testing purposes.
//   isolate$useWorkerSerializationProtocol = true;


// ------- SendPort -------
function isolate$sendMessage(workerId, isolateId, receivePortId,
                             message, replyTo) {
  // Both, the message and the replyTo are already serialized.
  if (workerId == isolate$thisWorkerId) {
    var isolate = isolate$isolateRegistry.get(isolateId);
    if (!isolate) return;  // Isolate has been closed.
    var receivePort = isolate.getReceivePortForId(receivePortId);
    if (!receivePort) return;  // ReceivePort has been closed.
    isolate$receiveMessage(receivePort, isolate, message, replyTo);
  } else {
    var worker;
    if (isolate$inWorker) {
      worker = isolate$mainWorker;
    } else {
      worker = isolate$workerRegistry.get(workerId);
    }
    worker.postMessage({ command: 'message',
                         workerId: workerId,
                         isolateId: isolateId,
                         portId: receivePortId,
                         msg: message,
                         replyTo: replyTo });
  }
}

function isolate$receiveMessage(port, isolate,
                                serializedMessage, serializedReplyTo) {
  isolate$IsolateEvent.enqueue(isolate, function() {
    var message = isolate$deserializeMessage(serializedMessage);
    var replyTo = isolate$deserializeMessage(serializedReplyTo);
    native_ReceivePortImpl__invokeCallback(port, message, replyTo);
  });
}

// ------- ReceivePort -------

function native_ReceivePortImpl__register(id) {
  isolate$current.registerReceivePort(id, this);
}

function native_ReceivePortImpl__unregister(id) {
  isolate$current.unregisterReceivePort(id);
}

function native_ReceivePortImpl__currentWorkerId() {
  return isolate$thisWorkerId;
}

function native_ReceivePortImpl__currentIsolateId() {
  return isolate$current.id;
}

// -------- Registry ---------
function isolate$Registry() {
  this.map = {};
  this.count = 0;
}

isolate$Registry.prototype.register = function(id, val) {
  if (this.map[id]) {
    throw Error("Registry: Elements must be registered only once.");
  }
  this.map[id] = val;
  this.count++;
};

isolate$Registry.prototype.unregister = function(id) {
  if (id in this.map) {
    delete this.map[id];
    this.count--;
  }
};

isolate$Registry.prototype.get = function(id) {
  return this.map[id];
};

isolate$Registry.prototype.isEmpty = function() {
  return this.count === 0;
};


// ------- Worker registry -------
// Only used in the main worker.
var isolate$workerRegistry = new isolate$Registry();

// ------- Isolate registry -------
// Isolates must be registered if, and only if, receive ports are alive.
// Normally no open receive-ports means that the isolate is dead, but
// DOM callbacks could resurrect it.
var isolate$isolateRegistry = new isolate$Registry();

// ------- Debugging log function -------
function isolate$log(msg) {
  return;
  if (isolate$inWorker) {
    isolate$mainWorker.postMessage({ command: 'log', msg: msg });
  } else {
    try {
      isolate$globalThis.console.log(msg);
    } catch(e) {
      throw String(e.stack);
    }
  }
}

function isolate$initializeWorker(workerId) {
  isolate$thisWorkerId = workerId;
}

var isolate$workerPrint = false;
if (isolate$inWorker) {
  isolate$workerPrint = function(msg){
    isolate$mainWorker.postMessage({ command: 'print', msg: msg });
  }
}

// ------- Message handler -------
function isolate$processWorkerMessage(sender, e) {
  var msg = e.data;
  switch (msg.command) {
    case 'start':
      isolate$log("starting worker: " + msg.id + " " + msg.factoryName);
      isolate$initializeWorker(msg.id);
      var runnerObject = (isolate$globalThis[msg.factoryName])();
      var serializedReplyTo = msg.replyTo;
      isolate$IsolateEvent.enqueue(new isolate$Isolate(), function() {
        var replyTo = isolate$deserializeMessage(serializedReplyTo);
        native__IsolateJsUtil__startIsolate(runnerObject, replyTo);
      });
      isolate$runEventLoop();
      break;
    case 'spawn-worker':
      isolate$spawnWorker(msg.factoryName, msg.replyPort);
      break;
    case 'message':
      isolate$sendMessage(msg.workerId, msg.isolateId, msg.portId,
                          msg.msg, msg.replyTo);
      isolate$runEventLoop();
      break;
    case 'close':
      isolate$log("Closing Worker");
      isolate$workerRegistry.unregister(sender.id);
      sender.terminate();
      isolate$runEventLoop();
      break;
    case 'log':
      isolate$log(msg.msg);
      break;
    case 'print':
      native__IsolateJsUtil__print(msg.msg);
      break;
    case 'error':
      throw msg.msg;
      break;
  }
}

if (isolate$supportsWorkers) {
  isolate$globalThis.onmessage = function(e) {
    isolate$processWorkerMessage(isolate$mainWorker, e);
  };
}

// ------- Default Worker -------
function isolate$MainWorker() {
  this.id = isolate$MAIN_WORKER_ID;
}

var isolate$mainWorker = new isolate$MainWorker();
isolate$mainWorker.postMessage = function(msg) {
  isolate$globalThis.postMessage(msg);
};

var isolate$nextFreeIsolateId = 1;

// Native methods for isolate functionality.
/**
 * @constructor
 */
function isolate$Isolate() {
  // The isolate ids is only unique within the current worker and frame.
  this.id = isolate$nextFreeIsolateId++;
  // When storing information on DOM nodes the isolate's id is not enough.
  // We instead use a token with a hashcode. The token can be stored in the
  // DOM node (since it is small and will not keep much data alive).
  this.token = new Object();
  this.token.hashCode = (Math.random() * 0xFFFFFFF) >>> 0;
  this.receivePorts = new isolate$Registry();
  this.run(function() {
    // The Dart-to-JavaScript compiler builds a list of functions that
    // need to run for each isolate to setup the state of static
    // variables. Run through the list and execute each function.
    for (var i = 0, len = isolate$inits.length; i < len; i++) {
      isolate$inits[i]();
    }
  });
}

// It is allowed to stack 'run' calls. The stacked isolates can be different.
// That is Isolate1.run could call the DOM which then calls Isolate2.run.
isolate$Isolate.prototype.run = function(code) {
  var old = isolate$current;
  isolate$current = this;
  var result = null;
  try {
    result = code();
  } finally {
    isolate$current = old;
  }
  return result;
};

isolate$Isolate.prototype.registerReceivePort = function(id, port) {
  if (this.receivePorts.isEmpty()) {
    isolate$isolateRegistry.register(this.id, this);
  }
  this.receivePorts.register(id, port);
};

isolate$Isolate.prototype.unregisterReceivePort = function(id) {
  this.receivePorts.unregister(id);
  if (this.receivePorts.isEmpty()) {
    isolate$isolateRegistry.unregister(this.id);
  }
};

isolate$Isolate.prototype.getReceivePortForId = function(id) {
  return this.receivePorts.get(id);
};

var isolate$events = [];

/**
 * @constructor
 */
function isolate$IsolateEvent(isolate, fn) {
  this.isolate = isolate;
  this.fn = fn;
}

isolate$IsolateEvent.prototype.process = function() {
  this.isolate.run(this.fn);
};

isolate$IsolateEvent.enqueue = function(isolate, fn) {
  isolate$events.push(new isolate$IsolateEvent(isolate, fn));
};

isolate$IsolateEvent.dequeue = function() {
  if (isolate$events.length == 0) return $Dart$Null;
  var result = isolate$events[0];
  isolate$events.splice(0, 1);
  return result;
};

function native_IsolateNatives__spawn(runnable, light, replyPort) {
  // TODO(floitsch): throw exception if runnable's class doesn't have a
  // default constructor.
  if (isolate$useWorkers && !light) {
    isolate$startWorker(runnable, replyPort);
  } else {
    isolate$startNonWorker(runnable, replyPort);
  }
}

function isolate$startNonWorker(runnable, replyTo) {
  // Spawn a new isolate and create the receive port in it.
  var spawned = new isolate$Isolate();

  // Instead of just running the provided runnable, we create a
  // new cloned instance of it with a fresh state in the spawned
  // isolate. This way, we do not get cross-isolate references
  // through the runnable.
  var factory = runnable.getIsolateFactory();
  isolate$IsolateEvent.enqueue(spawned, function() {
    native__IsolateJsUtil__startIsolate(factory(), replyTo);
  });
}

// This field is only used by the main worker.
var isolate$nextFreeWorkerId = isolate$thisWorkerId + 1;

var isolate$thisScript = function() {
  if (!isolate$supportsWorkers || isolate$inWorker) return null;

  // TODO(5334778): Find a cross-platform non-brittle way of getting the
  // currently running script.
  var scripts = document.getElementsByTagName('script');
  // The scripts variable only contains the scripts that have already been
  // executed. The last one is the currently running script.
  var script = scripts[scripts.length - 1];
  var src = script.src;
  if (!src) {
    // TODO()
    src = "FIXME:5407062" + "_" + Math.random().toString();
    script.src = src;
  }
  return src;
}();

function isolate$startWorker(runnable, replyPort) {
  var factory = runnable.getIsolateFactory();
  var factoryName = factory.name;
  var serializedReplyPort = isolate$serializeMessage(replyPort);
  if (isolate$inWorker) {
    isolate$mainWorker.postMessage({ command: 'spawn-worker',
                                     factoryName: factoryName,
                                     replyPort: serializedReplyPort } );
  } else {
    isolate$spawnWorker(factoryName, serializedReplyPort);
  }
}

function isolate$spawnWorker(factoryName, serializedReplyPort) {
  var worker = new Worker(isolate$thisScript);
  worker.onmessage = function(e) {
    isolate$processWorkerMessage(worker, e);
  };
  var workerId = isolate$nextFreeWorkerId++;
  // We also store the id on the worker itself so that we can unregister it.
  worker.id = workerId;
  isolate$workerRegistry.register(workerId, worker);
  worker.postMessage({ command: 'start',
                       id: workerId,
                       replyTo: serializedReplyPort,
                       factoryName: factoryName });
}

function native_SendPortImpl__sendNow(message, replyTo) {
  if (replyTo !== $Dart$Null && !(replyTo instanceof SendPortImpl$Dart)) {
    throw "SendPort::send: Illegal replyTo type.";
  }
  message = isolate$serializeMessage(message);
  replyTo = isolate$serializeMessage(replyTo);
  var workerId = native_SendPortImpl__getWorkerId(this);
  var isolateId = native_SendPortImpl__getIsolateId(this);
  var receivePortId = native_SendPortImpl__getReceivePortId(this);
  isolate$sendMessage(workerId, isolateId, receivePortId, message, replyTo);
}

function isolate$closeWorkerIfNecessary() {
  if (!isolate$isolateRegistry.isEmpty()) return;
  isolate$mainWorker.postMessage( { command: 'close' } );
}

function isolate$doOneEventLoopIteration() {
  var CONTINUE_LOOP = true;
  var STOP_LOOP = false;
  var event = isolate$IsolateEvent.dequeue();
  if (!event) {
    if (isolate$inWorker) {
      isolate$closeWorkerIfNecessary();
    } else if (!isolate$isolateRegistry.isEmpty() &&
               isolate$workerRegistry.isEmpty() &&
               !isolate$supportsWorkers && (typeof(window) == 'undefined')) {
      // This should only trigger when running on the command-line.
      // We don't want this check to execute in the browser where the isolate
      // might still be alive due to DOM callbacks.
      // throw Error("Program exited with open ReceivePorts.");
    }
    return STOP_LOOP;
  } else {
    event.process();
    return CONTINUE_LOOP;
  }
}

function isolate$doRunEventLoop() {
  if (typeof window != 'undefined' && window.setTimeout) {
    (function next() {
      var continueLoop = isolate$doOneEventLoopIteration();
      if (!continueLoop) return;
      // TODO(kasperl): It might turn out to be too expensive to call
      // setTimeout for every single event. This needs more investigation.
      window.setTimeout(next, 0);
    })();
  } else {
    while (true) {
      var continueLoop = isolate$doOneEventLoopIteration();
      if (!continueLoop) break;
    }
  }
}

function isolate$runEventLoop() {
  if (!isolate$inWorker) {
    isolate$doRunEventLoop();
  } else {
    try {
      isolate$doRunEventLoop();
    } catch(e) {
      // TODO(floitsch): try to send stack-trace to the other side.
      isolate$mainWorker.postMessage({ command: 'error', msg: "" + e });
    }
  }
}

function RunEntry(entry, args) {
  // Don't start the main loop again, if we are in a worker.
  if (isolate$inWorker) return;
  var isolate = new isolate$Isolate();
  isolate$rootIsolate = isolate;
  isolate$IsolateEvent.enqueue(isolate, function() {
    entry(args);
  });
  isolate$runEventLoop();

  // BUG(5151491): This should not be necessary, but because closures
  // passed to the DOM as event handlers do not bind their isolate
  // automatically we try to give them a reasonable context to live in
  // by having a "default" isolate (the first one created).
  isolate$current = isolate;
}

// ------- Message Serializing and Deserializing -------

function native_MessageTraverser__clearAttachedInfo(o) {
  o['__MessageTraverser__attached_info__'] = (void 0);
}

function native_MessageTraverser__setAttachedInfo(o, info) {
  o['__MessageTraverser__attached_info__'] = info;
}

function native_MessageTraverser__getAttachedInfo(o) {
  return o['__MessageTraverser__attached_info__'];
}

function native_Serializer__newJsArray(len) {
  return new Array(len);
}

function native_Serializer__jsArrayIndexSet(jsArray, index, val) {
  jsArray[index] = val;
}

function native_Serializer__dartListToJsArrayNoCopy(list) {
  if (list instanceof Array) {
    RTT.removeTypeInfo(list);
    return list;
  } else {
    var len = native__ListJsUtil__listLength(list);
    var array = new Array(len);
    for (var i = 0; i < len; i++) {
      array[i] = INDEX$operator(list, i);
    }
    return array;
  }
}

function native_Deserializer__isJsArray(x) {
  return x instanceof Array;
}

function native_Deserializer__jsArrayIndex(x, index) {
  return x[index];
}

function native_Deserializer__jsArrayLength(x) {
  return x.length;
}

function isolate$serializeMessage(message) {
  if (isolate$useWorkers || isolate$useWorkerSerializationProtocol) {
    return native__IsolateJsUtil__serializeObject(message);
  } else {
    return native__IsolateJsUtil__copyObject(message);
  }
}

function isolate$deserializeMessage(message) {
  if (isolate$useWorkers || isolate$useWorkerSerializationProtocol) {
    return native__IsolateJsUtil__deserializeMessage(message);
  } else {
    // Nothing more to do.
    return message;
  }
}
// Copyright (c) 2011, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

// Native methods for Math.
var native_Math_ceil = Math.ceil;
var native_Math_floor = Math.floor;
var native_Math_max = Math.max;
var native_Math_min = Math.min;
var native_Math_round = Math.round;

// A valid integer-string is composed of:
//   optional whitespace: \s*
//   an optional sign: [+-]?
//   either digits (at least one): \d+
//       or a hex-literal: 0[xX][0-9abcdefABCDEF]+
//   optional whitespace: \s*
var math$INT_REGEXP =
    /^\s*[+-]?(:?\d+|0[xX][0-9abcdefABCDEF]+)\s*$/;

// A valid double-string is composed of:
//   optional whitespace: \s*
//   an optional sign: [+-]?
//   either:
//      digits* . digits+ exponent?
//      digits+ exponent
//      Infinity
//      NaN
//   optional whitespace: \s*
var math$DOUBLE_REGEXP =
    /^\s*[+-]?((\d*\.\d+([eE][+-]?\d+)?)|(\d+([eE][+-]?\d+))|Infinity|NaN)\s*$/;

function native_MathNatives_parseDouble(str) {
  if (math$INT_REGEXP.test(str) || math$DOUBLE_REGEXP.test(str)) return +str;
  throw native_MathNatives__newBadNumberFormat(str);
}



function native_MathNatives_parseInt(str) {
  if (math$INT_REGEXP.test(str)) return +str;
  throw native_MathNatives__newBadNumberFormat(str);
}

function native_MathNatives_random() { return Math.random(); }
function native_MathNatives_sin(x) { return Math.sin(x); }
function native_MathNatives_cos(x) { return Math.cos(x); }
function native_MathNatives_tan(x) { return Math.tan(x); }
function native_MathNatives_asin(x) { return Math.asin(x); }
function native_MathNatives_acos(x) { return Math.acos(x); }
function native_MathNatives_atan(x) { return Math.atan(x); }
function native_MathNatives_atan2(x, y) { return Math.atan2(x, y); }
function native_MathNatives_sqrt(x) { return Math.sqrt(x); }
function native_MathNatives_exp(x) { return Math.exp(x); }
function native_MathNatives_log(x) { return Math.log(x); }
function native_MathNatives_pow(x, y) { return Math.pow(x, y); }
// Copyright (c) 2011, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.



function native_NumberImplementation_BIT_OR(other) {
  return this | other;
}

function native_NumberImplementation_BIT_XOR(other) {
  return this ^ other;
}

function native_NumberImplementation_BIT_AND(other) {
  return this & other;
}

function native_NumberImplementation_SHL(other) {
  return this << other;
}

function native_NumberImplementation_SAR(other) {
  return this >> other;
}

function native_NumberImplementation_ADD(other) {
  return this + other;
}

function native_NumberImplementation_SUB(other) {
  return this - other;
}

function native_NumberImplementation_MUL(other) {
  return this * other;
}

function native_NumberImplementation_DIV(other) {
  return this / other;
}

function native_NumberImplementation_TRUNC(other) {
  var tmp = this / other;
  if (tmp < 0) {
    return Math.ceil(tmp);
  } else {
    return Math.floor(tmp);
  }
}

function number$euclideanModulo(a, b) {
  var result = a % b;
  if (result == 0) {
    return 0;  // Make sure we don't return -0.0.
  } else if (result < 0) {
    if (b < 0) {
      return result - b;
    } else {
      return result + b;
    }
  }
  return result;
}

function native_NumberImplementation_MOD(other) {
  return number$euclideanModulo(this, other);
}

function native_NumberImplementation_LT(other) {
  return this < other;
}

function native_NumberImplementation_GT(other) {
  return this > other;
}

function native_NumberImplementation_LTE(other) {
  return this <= other;
}

function native_NumberImplementation_GTE(other) {
  return this >= other;
}

function native_NumberImplementation_EQ(other) {
  return typeof other == 'number' && this == other;
}

function native_NumberImplementation_BIT_NOT() {
  return ~this;
}

function native_NumberImplementation_negate() { return -this; }

function native_NumberImplementation_remainder(other) {
  return this % other;
}

function native_NumberImplementation_abs() { return Math.abs(this); }

function native_NumberImplementation_round() { return Math.round(this); }
function native_NumberImplementation_floor() { return Math.floor(this); }
function native_NumberImplementation_ceil() { return Math.ceil(this); }
function native_NumberImplementation_truncate() {
  return (this < 0) ? Math.ceil(this) : Math.floor(this);
}
function native_NumberImplementation_isNegative() {
  // TODO(floitsch): is there a faster way to detect -0?
  if (this == 0) return (1 / this) < 0;
  return this < 0;
}
function native_NumberImplementation_isEven() { return ((this & 1) == 0); }
function native_NumberImplementation_isOdd() { return ((this & 1) == 1); }
function native_NumberImplementation_isNaN() { return isNaN(this); }
function native_NumberImplementation_isInfinite() {
  return (this == Infinity) || (this == -Infinity);
}

function native_NumberImplementation_toDouble() {
  return this.valueOf();
}

function native_NumberImplementation_toString() {
  return this.toString();
}
function native_NumberImplementation_toStringAsFixed(fractionDigits) {
  return this.toFixed(fractionDigits);
}
function native_NumberImplementation_toStringAsPrecision(precision) {
  return this.toPrecision(precision);
}
function native_NumberImplementation_toStringAsExponential(fractionDigits) {
  return this.toExponential(fractionDigits);
}
function native_NumberImplementation_toRadixString(radix) {
  return this.toString(radix);
}

function native_NumberImplementation_hashCode() {
  return this & 0xFFFFFFF;
}
// Copyright (c) 2011, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.


// Copyright (c) 2011, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

function native__Logger__printString(str) {
  if (isolate$workerPrint) {
    isolate$workerPrint(str);
  } else if (this.console) {
    this.console.log(str);
  } else if (this.write) {
    this.write(str);
    this.write('\n');
  }
}
// Copyright (c) 2011, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

function native_JSSyntaxRegExp_firstMatch(str) {
  var re = $DartRegExpToJSRegExp(this);
  var m = re.exec(str);
  if (m != null) {
    var match = native_JSSyntaxMatch__new(this, str);
    match.match_ = m;
    match.lastIndex_ = re.lastIndex;
    return match;
  }
  return $Dart$Null;
}

function native_JSSyntaxRegExp_hasMatch(str) {
  return $DartRegExpToJSRegExp(this).test(str);
}

function native_JSSyntaxRegExp_stringMatch(str) {
  var m = $DartRegExpToJSRegExp(this).exec(str);
  return (m != null ? m[0] : $Dart$Null);
}

function native_JSSyntaxMatch_group(nb) {
  return this.match_[nb];
}

function native_JSSyntaxMatch_groupCount() {
  return this.match_.length;
}

function native_JSSyntaxMatch_start() {
  return this.match_.index;
}

function native_JSSyntaxMatch_end() {
  return this.lastIndex_;
}

function native__LazyAllMatchesIterator__jsInit(regExp) {
  this.re = $DartRegExpToJSRegExp(regExp);
}

// The given RegExp is only used to initialize a new Match. We use the
// cached JS regexp to compute the next match.
function native__LazyAllMatchesIterator__computeNextMatch(regExp, str) {
  var re = this.re;
  if (re === null) return $Dart$Null;
  var m = re.exec(str);
  if (m == null) {
    this.re = null;
    return $Dart$Null;
  }
  var match = native_JSSyntaxMatch__new(regExp, str);
  match.match_ = m;
  match.lastIndex_ = re.lastIndex;
  return match;
}

function $DartRegExpToJSRegExp(exp) {
  var flags = "g";
  if (native_JSSyntaxRegExp__multiLine(exp)) flags += "m";
  if (native_JSSyntaxRegExp__ignoreCase(exp)) flags += "i";
  return new RegExp(native_JSSyntaxRegExp__pattern(exp), flags);
}
// Copyright (c) 2011, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

// The following methods are used to handle type information
//

/** 
 * @constructor
 * @param {string} classkey
 * @param {string=} typekey
 * @param {Array.<RTT>=} typeargs
 */ 
function RTT(classkey, typekey, typeargs) {
  this.classKey = classkey;
  this.typeKey = typekey ? typekey : classkey;
  this.typeArgs = typeargs;
  this.implementedTypes = {};
  // Add self
  this.implementedTypes[classkey] = this;
  // Add Object
  if (classkey != $cls('Object')) {
    this.implementedTypes[$cls('Object')] = RTT.objectType;
  }
}

/** @type {Object.<string, Object>} */
RTT.types = {};

/** @type {Array.<RTT>} */
RTT.prototype.derivedTypes = [];

/** @return {string} */
RTT.prototype.toString = function() { return this.typeKey; }

/**
 * @param {*} value 
 * @return {boolean} Whether this type is implemented by the value
 */
RTT.prototype.implementedBy = function(value){ 
  return (value == null) ? RTT.nullInstanceOf(this) :
      this.implementedByType(RTT.getTypeInfo(value)); 
};

/** 
 * A helper function for safely looking up a value
 * in a Object used as a map.
 * @param {Object.<*>} map
 * @param {srting} key
 * @return {*} the value or null;
 */
function $mapLookup(map, key) {
  return map.hasOwnProperty(key) ? map[key] : null;
}

/**
 * @param {!RTT} other
 * @return {boolean} Whether this type is implement by other
 */
RTT.prototype.implementedByType = function(otherType) { 
  if (otherType === this || otherType === RTT.dynamicType) {
    return true;
  }
  var targetTypeInfo = $mapLookup(otherType.implementedTypes, this.classKey);
  if (targetTypeInfo == null) { 
    return false; 
  }
  if (targetTypeInfo.typeArgs && this.typeArgs) {
    for(var i = this.typeArgs.length - 1; i >= 0; i--) {
      if (!this.typeArgs[i].implementedByType(targetTypeInfo.typeArgs[i])) {
        return false;
      }
    }
  }
  return true;
};

/**
 * @return {string} the class name associated with this type
 */
RTT.prototype.getClassName = function() {
  var name = this.classKey;
  if (name.substr(0, 4) == "cls:") {
    name = name.substr(4);
  }
  if (name.substr(-5) == "$Dart") {
    name = name.substr(0, name.length - 5);
  }
  return name;
}

/** 
 * @param {RTT}
 * @return {boolean} 
 */
RTT.nullInstanceOf = function(type) {
  return type === RTT.objectType || type === RTT.dynamicType;
};

/**
 * @param {*} value The value to retrieve type information for
 * @return {RTT} 
 */
RTT.getNativeTypeInfo = function(value) {
  if (value instanceof Array) return Array.$lookupRTT();
  switch (typeof value) {
    case 'string': return String.$lookupRTT();
    case 'number': return Number.$lookupRTT();
    case 'boolean': return Boolean.$lookupRTT();
  } 
  return RTT.placeholderType;
};

/**
 * @param {string} name
 * @param {function(RTT,Array.<RTT>)=} implementsSupplier 
 * @param {Array.<RTT>=} typeArgs
 * @return {RTT} The RTT information object
 */
RTT.create = function(name, implementsSupplier, typeArgs) {
  if (name == $cls("Object")) return RTT.objectType;
  var typekey = RTT.getTypeKey(name, typeArgs);
  var rtt = $mapLookup(RTT.types, typekey);
  if (rtt) {
    return rtt;
  }
  var classkey = RTT.getTypeKey(name);
  rtt = new RTT(classkey, typekey, typeArgs);
  RTT.types[typekey] = rtt;
  if (implementsSupplier) {
    implementsSupplier(rtt, typeArgs);
  }
  return rtt;
};

/**
 * @param {string} classkey
 * @param {Array.<(RTT|string)>=} typeargs
 * @return {string}
 */
RTT.getTypeKey = function(classkey, typeargs) {
  var key = classkey;
  if (typeargs) {
    key += "<" + typeargs.join(",") + ">";
  }
  return key;
};

/**
 * @return {*} value
 * @return {RTT} return the RTT information object for the value
 */
RTT.getTypeInfo = function(value) {
  return (value.$typeInfo) ? value.$typeInfo : RTT.getNativeTypeInfo(value);
};

/**
 * @param {Object} o
 * @param {RTT} rtt
 * Sets the RTT on the object and returns the object itself.
 */
RTT.setTypeInfo = function(o, rtt) {
  o.$typeInfo = rtt;
  return o;
};

/**
 * @param {Object} o
 * Removes any RTT from the object and returns the object itself.
 */
RTT.removeTypeInfo = function(o) {
  o.$typeInfo = null;
  return o;
};

/**
 * The typeArg array is optional
 * @param {Array.<RTT>=} typeArgs
 * @param {number} i
 * @return {RTT}
 */
RTT.getTypeArg = function(typeArgs, i) {
  if (typeArgs) {
    if (typeArgs.length > i) {
      return typeArgs[i];
    } else {
      throw new Error("Missing type arg");
    }
  } 
  return RTT.dynamicType; 
};

/**
 * The typeArg array is optional
 * @param {*} o
 * @param {string} classkey
 * @return {Array.<RTT>}
 */
RTT.getTypeArgsFor = function(o, classkey) {
  var rtt = $mapLookup(RTT.getTypeInfo(o).implementedTypes, classkey);
  if (!rtt) {
    throw new Error("internal error: can not find " +
        classkey + " in " + JSON.stringify(o));
  }
  return rtt.typeArgs;
};

// Base types for runtime type information

/** @type {!RTT} */
RTT.objectType = new RTT($cls('Object'));
RTT.objectType.implementedBy = function(o) {return true};
RTT.objectType.implementedByType = function(o) {return true};

/** @type {!RTT} */
RTT.dynamicType = new RTT($cls('Dynamic'));
RTT.dynamicType.implementedBy = function(o) {return true};
RTT.dynamicType.implementedByType = function(o) {return true};

/** @type {!RTT} */
RTT.placeholderType = new RTT($cls('::'));
RTT.placeholderType.implementedBy = function(o) {return true};
RTT.placeholderType.implementedByType = function(o) {return true};

/**
 * Checks that a value is assignable to an expected type, and either returns that
 * value if it is, or else throws a TypeMismatchException.
 *
 * @param {!RTT} the expected type
 * @param {*} the value to check
 * @return {*} the value
 */
function $chk(rtt, value) {
  // null can be assigned to any type
  if (value == $Dart$Null || rtt.implementedBy(value)) {
    return value;
  }
  $te(rtt, value);
}

/**
 * Throw a TypeError.  See core.dart for the ExceptionHelper class.
 *
 * @param {!RTT} the expected type
 * @param {*) the value that failed
 */
function $te(rtt, value) {
  var srcType = RTT.getTypeInfo(value).getClassName();
  var dstType = rtt.getClassName();
  var e = native_ExceptionHelper_createTypeError(srcType, dstType);
  $Dart$ThrowException(e);
}

// Setup the Function object
Function.prototype.$implements$Function$Dart = 1;
RTT.setTypeInfo(Function.prototype, RTT.create($cls('Function$Dart')));

/** 
 * @param {string} cls 
 * @return {string}
 * @consistentIdGenerator 
 */
function $cls(cls) {
  return "cls:" + cls;
}

/**
 * @param {*} o
 * @return {boolean}
 */
function $isBool(o) {
  return typeof o == 'boolean';
}

/**
 * @param {*} o
 * @return {boolean}
 */
function $isNum(o) {
  return typeof o == 'number';
}

/**
 * @param {*} o
 * @return {boolean}
 */
function $isString(o) {
  return typeof o == 'string';
}
// Copyright (c) 2011, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

function native_StringImplementation__indexOperator(index) {
  return this[index];
}

function native_StringImplementation__charCodeAt(index) {
  return this.charCodeAt(index);
}

function native_StringImplementation_get$length() {
  return this.length;
}

function native_StringImplementation_EQ(other) {
  return typeof other == 'string' && this == other;
}

function native_StringImplementation__nativeIndexOf(other, startIndex) {
  return this.indexOf(other, startIndex);
}

function native_StringImplementation__nativeLastIndexOf(other, fromIndex) {
  if (other == "") {
    return Math.min(this.length, fromIndex);
  }
  return this.lastIndexOf(other, fromIndex);
}

function native_StringImplementation_concat(other) {
  return this.concat(other);
}

function native_StringImplementation__substringUnchecked(startIndex, endIndex) {
  return this.substring(startIndex, endIndex);
}

function native_StringImplementation_trim() {
  if (this.trim) return this.trim();
  return this.replace(new RegExp("^[\s]+|[\s]+$", "g"), "");
}

function native_StringImplementation__replace(from, to) {
  if ($isString(from)) {
    return this.replace(from, to);
  } else {
    return this.replace($DartRegExpToJSRegExp(from), to);
  }
}

function native_StringImplementation__replaceAll(from, to) {
  if ($isString(from)) {
    var regexp = new RegExp(
        from.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), 'g');
    return this.replace(regexp, to);
  } else {
    var regexp = $DartRegExpToJSRegExp(from);
    return this.replace(regexp, to);
  }
}

function native_StringImplementation__split(pattern) {
  if ($isString(pattern)) {
    return this.split(pattern);
  } else {
    return this.split($DartRegExpToJSRegExp(pattern));
  }
}

function native_StringImplementation_toLowerCase() {
  return this.toLowerCase();
}

function native_StringImplementation_toUpperCase() {
  return this.toUpperCase();
}

// Inherited from Hashable.
function native_StringImplementation_hashCode() {
  if (this.hash_ === undefined) {
    for (var i = 0; i < this.length; i++) {
      var ch = this.charCodeAt(i);
      this.hash_ += ch;
      this.hash_ += this.hash_ << 10;
      this.hash_ ^= this.hash_ >> 6;
    }

    this.hash_ += this.hash_ << 3;
    this.hash_ ^= this.hash_ >> 11;
    this.hash_ += this.hash_ << 15;
    this.hash_ = this.hash_ & ((1 << 29) - 1);
  }
  return this.hash_;
}

function native_StringImplementation_toString() {
  // Return the primitive string of this String object.
  return String(this);
}

// TODO(floitsch): If we allow comparison operators on the String class we
// should move this function into dart world.
function native_StringImplementation_compareTo(other) {
  if (this == other) return 0;
  if (this < other) return -1;
  return 1;
}

function native_StringImplementation__newFromValues(array) {
  if (!(array instanceof Array)) {
    var length = native__ListJsUtil__listLength(array);
    var tmp = new Array(length);
    for (var i = 0; i < length; i++) {
      tmp[i] = INDEX$operator(array, i);
    }
    array = tmp;
  }
  return String.fromCharCode.apply(this, array);
}

// Deprecated old name of new String.fromValues(..).
function native_StringBase_createFromCharCodes(array) {
  return native_StringImplementation__newFromValues(array);
}
// Copyright (c) 2011, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

// JavaScript implementation of the native methods declared in json.dart.

// The details of this code depends intimately on how DartC represents
// Dart values in JavaScript, particularly Maps and null.

function native_JSON_parse(jsonString) {
  var obj = JSON.parse(jsonString, function(key, value) {
    return convertJsToDart(value, this);
  });
  return obj == null ? $Dart$Null : obj;
}

// Shallow-converts the parsed JavaScript value into a Dart object, and
// returns the Dart object.
// Any component values have already been converted.
// When converting null, if it's an element of a containing JS array,
// returns $Dart$Null, otherwise returns null, because returning $Dart$Null ==
// undefined would signal to JSON.parse that the field should be
// *deleted*.
function convertJsToDart(obj, container) {
  // The following kinds of JS objects have the same representation in Dart:
  //   boolean, number, string, arrays
  // Dart null is JS undefined.
  // Only generic JavaScript objects need to be converted into Dart Maps.
  // This is done by creating a $Dart$MapLiteralType object, and changing
  // any JS null values into $Dart$Null.
  switch (typeof(obj)) {
    case 'boolean':
    case 'number':
    case 'string':
      return obj;

    case 'object':
      if (obj == null) {
        if (container instanceof Array) {
          return $Dart$Null;
        } else {
          // $Dart$Null is set to undefined, which will make JSON.parse
          // delete the member. We return null here, but will fix it up
          // later.
          return null;
        }
      } else if (obj instanceof Array) {
        return obj;
      } else {
        return fixupJsObjectToDartMap(obj);
      }

    default:
      throw 'unexpected kind of JSON value';
  }
}

var $Object_keys = ('keys' in Object) ?
  function (dict) { return Object.keys(dict); } :
  function (dict) {
     var out = [];
     for (var key in dict) {
       // TODO(sigmund): remove the propertyIsEnumerable check? That check
       // ensures that this function returns the same as Object.keys, but seems
       // unnecessary because this function is only used for user-defined
       // maps/sets.
       if (dict.hasOwnProperty(key) && dict.propertyIsEnumerable(key)) {
         out.push(key);
       }
     }
     return out;
  };

// Converts the parsed JavaScript Object into a Dart Map.
function fixupJsObjectToDartMap(obj) {
  var map = $Dart$MapLiteralFactory();
  var keys = $Object_keys(obj);
  for (var i = 0; i < keys.length; i++) {
    var value = obj[keys[i]];
    value = (value === null ? $Dart$Null : value);
    map.ASSIGN_INDEX$operator(keys[i], value);
  }
  return map;
}

///////////////////////////////////////////////////////////////////////////////

function UnconvertibleException() { }

// Returns whether JSON.stringify appears to fully work.
function testBrowserHasWorkingStringify() {
  // Firefox3.6's JSON.stringify is broken; the reviver function's
  // result isn't used except within arrays.  See
  // http://skysanders.net/subtext/archive/2010/02/24/confirmed-bug-in-firefox-3.6-native-json-implementation.aspx,
  // for instance.
  return JSON.parse(JSON.stringify({works:false}, function(key, value) {
        return value == false ? true : value;
      })).works;
}
var browserHasWorkingStringify = testBrowserHasWorkingStringify();

function native_JSON_stringify(obj) {
  var jsonString;
  if (browserHasWorkingStringify) {
    jsonString = JSON.stringify(obj, function(key, value) {
      return convertDartToJs(value);
    });
  } else {
    jsonString = JSON.stringify(convertDartToJs(obj));
  }
  return jsonString;
}

// Converts the Dart object into a JavaScript value, suitable for applying
// JSON.stringify to.
// If browserHasWorkingStringify, then converts only shallowly, otherwise
// converts deeply.
// Throws UnconvertibleException if the Dart value is not convertible.
function convertDartToJs(obj) {
  // The following kinds of Dart objects have the same representation in JS:
  //   boolean, number, string, arrays
  // Dart null is JS undefined.
  // Only Dart Maps need to be converted into JavaScript objects.
  if (obj == $Dart$Null) {
    return null;
  } else if (obj == null) {
    throw 'not expecting JS-null in a Dart object';
  } else {
    switch (typeof obj) {
      case 'boolean':
      case 'number':
      case 'string':
        return obj;
      case 'object':
        if (obj instanceof Array) {
          return convertDartArrayToJsArray(obj);
        } else if ($isDartMap(obj)) {
          return convertDartMapToJsObject(obj);
        } else {
          throw new UnconvertibleException();
        }
      default:
        throw 'unexpected kind of Dart value';
    }
  }
}

// Converts the Dart Array into a JavaScript array.
// If browserHasWorkingStringify, then converts only shallowly, otherwise
// converts deeply.
function convertDartArrayToJsArray(arr) {
  if (browserHasWorkingStringify) {
    // The array elements will be (or have been) converted separately.
    return arr;
  } else {
    // Need to recursively convert all the array elements.
    var len = arr.length$getter();
    var obj = new Array(len);
    for (var i = 0; i < len; i++) {
      var elemValue = arr.INDEX$operator(i);
      obj[i] = convertDartToJs(elemValue);
    }
    return obj;
  }
}

// Converts the Dart Map into a JavaScript object.
// If browserHasWorkingStringify, then converts only shallowly, otherwise
// converts deeply.
function convertDartMapToJsObject(map) {
  var valueConverter =
      browserHasWorkingStringify ? convertDartNullToJsNull : convertDartToJs;
  var obj = {};
  var propertyNames = map.getKeys$member();
  for (var i = 0, len = propertyNames.length$getter(); i < len; i++) {
    var propertyName = propertyNames.INDEX$operator(i);
    var propertyValue = map.INDEX$operator(propertyName);
    obj[propertyName] = valueConverter(propertyValue);
  }
  return obj;
}

// Converts Dart-null to JS-null, otherwise acts like the identity.
function convertDartNullToJsNull(value) {
  return value == $Dart$Null ? null : value;
}
function jsonc5ef24$JSON$Dart(){
}

jsonc5ef24$JSON$Dart.$lookupRTT = function(){
  return RTT.create($cls('jsonc5ef24$JSON$Dart'));
}
;
jsonc5ef24$JSON$Dart.$addTo = function(target){
  var rtt = jsonc5ef24$JSON$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
}
;
jsonc5ef24$JSON$Dart.prototype.$implements$jsonc5ef24$JSON$Dart = 1;
jsonc5ef24$JSON$Dart.prototype.$implements$Object$Dart = 1;
jsonc5ef24$JSON$Dart.parse$member = function(jsonString){
  return native_JSON_parse(jsonString);
}
;
jsonc5ef24$JSON$Dart.parse$named = function($n, $o, jsonString){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return jsonc5ef24$JSON$Dart.parse$member(jsonString);
}
;
jsonc5ef24$JSON$Dart.parse$getter = function parse$getter(){
  return jsonc5ef24$JSON$Dart.parse$named;
}
;
jsonc5ef24$JSON$Dart.stringify$member = function(value){
  return native_JSON_stringify(value);
}
;
jsonc5ef24$JSON$Dart.stringify$named = function($n, $o, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return jsonc5ef24$JSON$Dart.stringify$member(value);
}
;
jsonc5ef24$JSON$Dart.stringify$getter = function stringify$getter(){
  return jsonc5ef24$JSON$Dart.stringify$named;
}
;
jsonc5ef24$JSON$Dart.$Constructor = function(){
}
;
jsonc5ef24$JSON$Dart.$Initializer = function(){
}
;
jsonc5ef24$JSON$Dart.JSON$$Factory = function(){
  var tmp$0 = new jsonc5ef24$JSON$Dart;
  tmp$0.$typeInfo = jsonc5ef24$JSON$Dart.$lookupRTT();
  jsonc5ef24$JSON$Dart.$Initializer.call(tmp$0);
  jsonc5ef24$JSON$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
// Copyright (c) 2011, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

function native__Logger__printString(message) {
  print(message + '\n');
}

function native_Fling__getArgs() {
  return argv;
}


// Fling
function native_Fling_goForth() {
  goForth();
}

function native_Fling_refresh() {
  refresh();
}

function native_Fling_getInstallPath() {
  return getInstallPath();
}


// HttpServer
function native_HttpServer__init() {
  this.$impl = new HttpServer();
}

function native_HttpServer_listen(port) {
  this.$impl.listen(port);
}

function native_HttpServer_handle(path, handler) {
  this.$impl.handle(path,
    function(req, rsp) { $dartcall(handler, [req, rsp]); });
}

// HttpResponse
function native_HttpResponse_finish() {
  this.$impl.finish();
}

function native_HttpResponse_flush() {
  this.$impl.flush();
}

function native_HttpResponse_setHeader(name, value) {
  this.$impl.setHeader(name, value);
}

function native_HttpResponse_setStatusCode(code) {
  this.$impl.setStatusCode(code);
}

function native_HttpResponse_write(data) {
  this.$impl.write(data);
}

// HttpRequest
function native_HttpRequest_get$body() {
  return this.$impl.body;
}

function native_HttpRequest_get$isKeepAlive() {
  return this.$impl.isKeepAlive;
}

function native_HttpRequest_get$method() {
  return this.$impl.method;
}

function native_HttpRequest_get$requestedPath() {
  return this.$impl.requestedPath;
}

function native_HttpRequest_get$version() {
  return this.$impl.version;
}

function native_HttpRequest_get$prefix() {
  return this.$impl.prefix;
}

// ClientApp
function native_ClientApp__init(path, apps) {
  this.$impl = new ClientApp(path, apps);
}

function native_ClientApp__handle(req, res) {
  this.$impl.handler(req, res);
}
function fling64a7bc$Fling$Dart(){
}

fling64a7bc$Fling$Dart.$lookupRTT = function(){
  return RTT.create($cls('fling64a7bc$Fling$Dart'));
}
;
fling64a7bc$Fling$Dart.$addTo = function(target){
  var rtt = fling64a7bc$Fling$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
}
;
fling64a7bc$Fling$Dart.prototype.$implements$fling64a7bc$Fling$Dart = 1;
fling64a7bc$Fling$Dart.prototype.$implements$Object$Dart = 1;
fling64a7bc$Fling$Dart.goForth$member = function(){
  return native_Fling_goForth();
}
;
fling64a7bc$Fling$Dart.goForth$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return fling64a7bc$Fling$Dart.goForth$member();
}
;
fling64a7bc$Fling$Dart.goForth$getter = function goForth$getter(){
  return fling64a7bc$Fling$Dart.goForth$named;
}
;
fling64a7bc$Fling$Dart.refresh$member = function(){
  return native_Fling_refresh();
}
;
fling64a7bc$Fling$Dart.refresh$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return fling64a7bc$Fling$Dart.refresh$member();
}
;
fling64a7bc$Fling$Dart.refresh$getter = function refresh$getter(){
  return fling64a7bc$Fling$Dart.refresh$named;
}
;
fling64a7bc$Fling$Dart.getInstallPath$member = function(){
  return native_Fling_getInstallPath();
}
;
fling64a7bc$Fling$Dart.getInstallPath$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return fling64a7bc$Fling$Dart.getInstallPath$member();
}
;
fling64a7bc$Fling$Dart.getInstallPath$getter = function getInstallPath$getter(){
  return fling64a7bc$Fling$Dart.getInstallPath$named;
}
;
fling64a7bc$Fling$Dart.$Constructor = function(){
}
;
fling64a7bc$Fling$Dart.$Initializer = function(){
}
;
fling64a7bc$Fling$Dart.Fling$$Factory = function(){
  var tmp$0 = new fling64a7bc$Fling$Dart;
  tmp$0.$typeInfo = fling64a7bc$Fling$Dart.$lookupRTT();
  fling64a7bc$Fling$Dart.$Initializer.call(tmp$0);
  fling64a7bc$Fling$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
function fling64a7bc$HttpResponse$Dart(){
}

fling64a7bc$HttpResponse$Dart.$lookupRTT = function(){
  return RTT.create($cls('fling64a7bc$HttpResponse$Dart'));
}
;
fling64a7bc$HttpResponse$Dart.$addTo = function(target){
  var rtt = fling64a7bc$HttpResponse$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
}
;
fling64a7bc$HttpResponse$Dart.prototype.$implements$fling64a7bc$HttpResponse$Dart = 1;
fling64a7bc$HttpResponse$Dart.prototype.$implements$Object$Dart = 1;
fling64a7bc$HttpResponse$Dart._internal$fling64a7bc$$Constructor_ = function(){
}
;
fling64a7bc$HttpResponse$Dart._internal$fling64a7bc$$Initializer_ = function(){
}
;
fling64a7bc$HttpResponse$Dart.HttpResponse$_internal$12$fling64a7bc$$Factory_ = function(){
  var tmp$0 = new fling64a7bc$HttpResponse$Dart;
  tmp$0.$typeInfo = fling64a7bc$HttpResponse$Dart.$lookupRTT();
  fling64a7bc$HttpResponse$Dart._internal$fling64a7bc$$Initializer_.call(tmp$0);
  fling64a7bc$HttpResponse$Dart._internal$fling64a7bc$$Constructor_.call(tmp$0);
  return tmp$0;
}
;
fling64a7bc$HttpResponse$Dart.prototype.finish$member = function(){
  return native_HttpResponse_finish.call(this);
}
;
fling64a7bc$HttpResponse$Dart.prototype.finish$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return fling64a7bc$HttpResponse$Dart.prototype.finish$member.call(this);
}
;
fling64a7bc$HttpResponse$Dart.prototype.finish$getter = function finish$getter(){
  return $bind(fling64a7bc$HttpResponse$Dart.prototype.finish$named, this);
}
;
fling64a7bc$HttpResponse$Dart.prototype.flush$member = function(){
  return native_HttpResponse_flush.call(this);
}
;
fling64a7bc$HttpResponse$Dart.prototype.flush$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return fling64a7bc$HttpResponse$Dart.prototype.flush$member.call(this);
}
;
fling64a7bc$HttpResponse$Dart.prototype.flush$getter = function flush$getter(){
  return $bind(fling64a7bc$HttpResponse$Dart.prototype.flush$named, this);
}
;
fling64a7bc$HttpResponse$Dart.prototype.setHeader$member = function(name_0, value){
  return native_HttpResponse_setHeader.call(this, name_0, value);
}
;
fling64a7bc$HttpResponse$Dart.prototype.setHeader$named = function($n, $o, name_0, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return fling64a7bc$HttpResponse$Dart.prototype.setHeader$member.call(this, name_0, value);
}
;
fling64a7bc$HttpResponse$Dart.prototype.setHeader$getter = function setHeader$getter(){
  return $bind(fling64a7bc$HttpResponse$Dart.prototype.setHeader$named, this);
}
;
fling64a7bc$HttpResponse$Dart.prototype.setStatusCode$member = function(code){
  return native_HttpResponse_setStatusCode.call(this, code);
}
;
fling64a7bc$HttpResponse$Dart.prototype.setStatusCode$named = function($n, $o, code){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return fling64a7bc$HttpResponse$Dart.prototype.setStatusCode$member.call(this, code);
}
;
fling64a7bc$HttpResponse$Dart.prototype.setStatusCode$getter = function setStatusCode$getter(){
  return $bind(fling64a7bc$HttpResponse$Dart.prototype.setStatusCode$named, this);
}
;
fling64a7bc$HttpResponse$Dart.prototype.write$member = function(data){
  return native_HttpResponse_write.call(this, data);
}
;
fling64a7bc$HttpResponse$Dart.prototype.write$named = function($n, $o, data){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return fling64a7bc$HttpResponse$Dart.prototype.write$member.call(this, data);
}
;
fling64a7bc$HttpResponse$Dart.prototype.write$getter = function write$getter(){
  return $bind(fling64a7bc$HttpResponse$Dart.prototype.write$named, this);
}
;
fling64a7bc$HttpResponse$Dart._create$fling64a7bc$$member_ = function(){
  return fling64a7bc$HttpResponse$Dart.HttpResponse$_internal$12$fling64a7bc$$Factory_();
}
;
fling64a7bc$HttpResponse$Dart._create$fling64a7bc$$named_ = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return fling64a7bc$HttpResponse$Dart._create$fling64a7bc$$member_();
}
;
function native_HttpResponse__create(){
  return fling64a7bc$HttpResponse$Dart._create$fling64a7bc$$member_();
}

fling64a7bc$HttpResponse$Dart._create$fling64a7bc$$getter_ = function _create$fling64a7bc$$getter_(){
  return fling64a7bc$HttpResponse$Dart._create$fling64a7bc$$named_;
}
;
function fling64a7bc$HttpRequest$Dart(){
}

fling64a7bc$HttpRequest$Dart.$lookupRTT = function(){
  return RTT.create($cls('fling64a7bc$HttpRequest$Dart'));
}
;
fling64a7bc$HttpRequest$Dart.$addTo = function(target){
  var rtt = fling64a7bc$HttpRequest$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
}
;
fling64a7bc$HttpRequest$Dart.prototype.$implements$fling64a7bc$HttpRequest$Dart = 1;
fling64a7bc$HttpRequest$Dart.prototype.$implements$Object$Dart = 1;
fling64a7bc$HttpRequest$Dart._internal$fling64a7bc$$Constructor_ = function(){
}
;
fling64a7bc$HttpRequest$Dart._internal$fling64a7bc$$Initializer_ = function(){
}
;
fling64a7bc$HttpRequest$Dart.HttpRequest$_internal$11$fling64a7bc$$Factory_ = function(){
  var tmp$0 = new fling64a7bc$HttpRequest$Dart;
  tmp$0.$typeInfo = fling64a7bc$HttpRequest$Dart.$lookupRTT();
  fling64a7bc$HttpRequest$Dart._internal$fling64a7bc$$Initializer_.call(tmp$0);
  fling64a7bc$HttpRequest$Dart._internal$fling64a7bc$$Constructor_.call(tmp$0);
  return tmp$0;
}
;
fling64a7bc$HttpRequest$Dart._create$fling64a7bc$$member_ = function(){
  return fling64a7bc$HttpRequest$Dart.HttpRequest$_internal$11$fling64a7bc$$Factory_();
}
;
fling64a7bc$HttpRequest$Dart._create$fling64a7bc$$named_ = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return fling64a7bc$HttpRequest$Dart._create$fling64a7bc$$member_();
}
;
function native_HttpRequest__create(){
  return fling64a7bc$HttpRequest$Dart._create$fling64a7bc$$member_();
}

fling64a7bc$HttpRequest$Dart._create$fling64a7bc$$getter_ = function _create$fling64a7bc$$getter_(){
  return fling64a7bc$HttpRequest$Dart._create$fling64a7bc$$named_;
}
;
fling64a7bc$HttpRequest$Dart.prototype.body$named = function(){
  return this.body$getter().apply(this, arguments);
}
;
fling64a7bc$HttpRequest$Dart.prototype.body$getter = function(){
  return native_HttpRequest_get$body.call(this);
}
;
fling64a7bc$HttpRequest$Dart.prototype.isKeepAlive$named = function(){
  return this.isKeepAlive$getter().apply(this, arguments);
}
;
fling64a7bc$HttpRequest$Dart.prototype.isKeepAlive$getter = function(){
  return native_HttpRequest_get$isKeepAlive.call(this);
}
;
fling64a7bc$HttpRequest$Dart.prototype.method$named = function(){
  return this.method$getter().apply(this, arguments);
}
;
fling64a7bc$HttpRequest$Dart.prototype.method$getter = function(){
  return native_HttpRequest_get$method.call(this);
}
;
fling64a7bc$HttpRequest$Dart.prototype.requestedPath$named = function(){
  return this.requestedPath$getter().apply(this, arguments);
}
;
fling64a7bc$HttpRequest$Dart.prototype.requestedPath$getter = function(){
  return native_HttpRequest_get$requestedPath.call(this);
}
;
fling64a7bc$HttpRequest$Dart.prototype.version$named = function(){
  return this.version$getter().apply(this, arguments);
}
;
fling64a7bc$HttpRequest$Dart.prototype.version$getter = function(){
  return native_HttpRequest_get$version.call(this);
}
;
fling64a7bc$HttpRequest$Dart.prototype.prefix$named = function(){
  return this.prefix$getter().apply(this, arguments);
}
;
fling64a7bc$HttpRequest$Dart.prototype.prefix$getter = function(){
  return native_HttpRequest_get$prefix.call(this);
}
;
function fling64a7bc$HttpServer$Dart(){
}

fling64a7bc$HttpServer$Dart.$lookupRTT = function(){
  return RTT.create($cls('fling64a7bc$HttpServer$Dart'));
}
;
fling64a7bc$HttpServer$Dart.$addTo = function(target){
  var rtt = fling64a7bc$HttpServer$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
}
;
fling64a7bc$HttpServer$Dart.prototype.$implements$fling64a7bc$HttpServer$Dart = 1;
fling64a7bc$HttpServer$Dart.prototype.$implements$Object$Dart = 1;
fling64a7bc$HttpServer$Dart.$Constructor = function(){
  this._init$fling64a7bc$$member_();
}
;
fling64a7bc$HttpServer$Dart.$Initializer = function(){
}
;
fling64a7bc$HttpServer$Dart.HttpServer$$Factory = function(){
  var tmp$0 = new fling64a7bc$HttpServer$Dart;
  tmp$0.$typeInfo = fling64a7bc$HttpServer$Dart.$lookupRTT();
  fling64a7bc$HttpServer$Dart.$Initializer.call(tmp$0);
  fling64a7bc$HttpServer$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
fling64a7bc$HttpServer$Dart.prototype.handle$member = function(path, handler){
  return native_HttpServer_handle.call(this, path, handler);
}
;
fling64a7bc$HttpServer$Dart.prototype.handle$named = function($n, $o, path, handler){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return fling64a7bc$HttpServer$Dart.prototype.handle$member.call(this, path, handler);
}
;
fling64a7bc$HttpServer$Dart.prototype.handle$getter = function handle$getter(){
  return $bind(fling64a7bc$HttpServer$Dart.prototype.handle$named, this);
}
;
fling64a7bc$HttpServer$Dart.prototype.listen$member = function(port){
  return native_HttpServer_listen.call(this, port);
}
;
fling64a7bc$HttpServer$Dart.prototype.listen$named = function($n, $o, port){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return fling64a7bc$HttpServer$Dart.prototype.listen$member.call(this, port);
}
;
fling64a7bc$HttpServer$Dart.prototype.listen$getter = function listen$getter(){
  return $bind(fling64a7bc$HttpServer$Dart.prototype.listen$named, this);
}
;
fling64a7bc$HttpServer$Dart.prototype._init$fling64a7bc$$member_ = function(){
  return native_HttpServer__init.call(this);
}
;
fling64a7bc$HttpServer$Dart.prototype._init$fling64a7bc$$named_ = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return fling64a7bc$HttpServer$Dart.prototype._init$fling64a7bc$$member_.call(this);
}
;
fling64a7bc$HttpServer$Dart.prototype._init$fling64a7bc$$getter_ = function _init$fling64a7bc$$getter_(){
  return $bind(fling64a7bc$HttpServer$Dart.prototype._init$fling64a7bc$$named_, this);
}
;
function fling64a7bc$ClientApp$Dart(){
}

fling64a7bc$ClientApp$Dart.$lookupRTT = function(){
  return RTT.create($cls('fling64a7bc$ClientApp$Dart'));
}
;
fling64a7bc$ClientApp$Dart.$addTo = function(target){
  var rtt = fling64a7bc$ClientApp$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
}
;
fling64a7bc$ClientApp$Dart.prototype.$implements$fling64a7bc$ClientApp$Dart = 1;
fling64a7bc$ClientApp$Dart.prototype.$implements$Object$Dart = 1;
fling64a7bc$ClientApp$Dart.$Constructor = function(path, staticApps){
  this._init$fling64a7bc$$member_(path, staticApps);
}
;
fling64a7bc$ClientApp$Dart.$Initializer = function(path, staticApps){
}
;
fling64a7bc$ClientApp$Dart.ClientApp$$Factory = function(path, staticApps){
  var tmp$0 = new fling64a7bc$ClientApp$Dart;
  tmp$0.$typeInfo = fling64a7bc$ClientApp$Dart.$lookupRTT();
  fling64a7bc$ClientApp$Dart.$Initializer.call(tmp$0, path, staticApps);
  fling64a7bc$ClientApp$Dart.$Constructor.call(tmp$0, path, staticApps);
  return tmp$0;
}
;
fling64a7bc$ClientApp$Dart.create$member = function(path, staticApps){
  return fling64a7bc$ClientApp$Dart.ClientApp$$Factory(path, staticApps).handler$getter();
}
;
fling64a7bc$ClientApp$Dart.create$named = function($n, $o, path, staticApps){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 1:
      staticApps = '$p_staticApps' in $o?(++seen , $o.$p_staticApps):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return fling64a7bc$ClientApp$Dart.create$member(path, staticApps);
}
;
fling64a7bc$ClientApp$Dart.create$getter = function create$getter(){
  return fling64a7bc$ClientApp$Dart.create$named;
}
;
fling64a7bc$ClientApp$Dart.prototype.handler$named = function(){
  return this.handler$getter().apply(this, arguments);
}
;
function fling64a7bc$ClientApp$Dart$handler$c0$26_26$Hoisted(req_0, res_0){
  return this._handle$fling64a7bc$$member_(req_0, res_0);
}

function fling64a7bc$ClientApp$Dart$handler$c0$26_26$Hoisted$named($n, $o, req, res){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return fling64a7bc$ClientApp$Dart$handler$c0$26_26$Hoisted.call(this, req, res);
}

fling64a7bc$ClientApp$Dart.prototype.handler$getter = function(){
  return $bind(fling64a7bc$ClientApp$Dart$handler$c0$26_26$Hoisted$named, this);
}
;
fling64a7bc$ClientApp$Dart.prototype._handle$fling64a7bc$$member_ = function(req_0, res_0){
  return native_ClientApp__handle.call(this, req_0, res_0);
}
;
fling64a7bc$ClientApp$Dart.prototype._handle$fling64a7bc$$named_ = function($n, $o, req, res){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return fling64a7bc$ClientApp$Dart.prototype._handle$fling64a7bc$$member_.call(this, req, res);
}
;
fling64a7bc$ClientApp$Dart.prototype._handle$fling64a7bc$$getter_ = function _handle$fling64a7bc$$getter_(){
  return $bind(fling64a7bc$ClientApp$Dart.prototype._handle$fling64a7bc$$named_, this);
}
;
fling64a7bc$ClientApp$Dart.prototype._init$fling64a7bc$$member_ = function(path, staticApps){
  return native_ClientApp__init.call(this, path, staticApps);
}
;
fling64a7bc$ClientApp$Dart.prototype._init$fling64a7bc$$named_ = function($n, $o, path, staticApps){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return fling64a7bc$ClientApp$Dart.prototype._init$fling64a7bc$$member_.call(this, path, staticApps);
}
;
fling64a7bc$ClientApp$Dart.prototype._init$fling64a7bc$$getter_ = function _init$fling64a7bc$$getter_(){
  return $bind(fling64a7bc$ClientApp$Dart.prototype._init$fling64a7bc$$named_, this);
}
;
function myserverb11750$AppServer$Dart(){
}

myserverb11750$AppServer$Dart.$lookupRTT = function(){
  return RTT.create($cls('myserverb11750$AppServer$Dart'));
}
;
myserverb11750$AppServer$Dart.$addTo = function(target){
  var rtt = myserverb11750$AppServer$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
}
;
myserverb11750$AppServer$Dart.prototype.$implements$myserverb11750$AppServer$Dart = 1;
myserverb11750$AppServer$Dart.prototype.$implements$Object$Dart = 1;
myserverb11750$AppServer$Dart.$Constructor = function(){
}
;
myserverb11750$AppServer$Dart.$Initializer = function(){
}
;
myserverb11750$AppServer$Dart.AppServer$$Factory = function(){
  var tmp$0 = new myserverb11750$AppServer$Dart;
  tmp$0.$typeInfo = myserverb11750$AppServer$Dart.$lookupRTT();
  myserverb11750$AppServer$Dart.$Initializer.call(tmp$0);
  myserverb11750$AppServer$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
function myserverb11750$$main$c0$15_15$Hoisted(req, res){
  res.setHeader$named(2, $noargs, 'Content-Type', 'text/plain');
  if (EQ$operator(req.method$getter(), 'POST')) {
    print$getter()(1, $noargs, 'Received data: ' + $toString(req.body$getter()) + '');
    var input = jsonc5ef24$JSON$Dart.parse$member(req.body$getter());
    var fname = input.INDEX$operator('forename');
    var sname = input.INDEX$operator('surname');
    print$getter()(1, $noargs, 'Parsed data: ' + $toString(fname) + ' ' + $toString(sname) + '');
    var message = 'Server says, Hi there';
    var output = '{"forename":"' + $toString(fname) + '","surname":"' + $toString(sname) + '","serverMessage":"' + $toString(message) + '"}';
    res.write$named(1, $noargs, output);
    print$getter()(1, $noargs, 'Sent Data ' + $toString(output) + '');
  }
   else {
    res.write$named(1, $noargs, 'POST only please');
  }
  res.finish$named(0, $noargs);
}

function myserverb11750$$main$c0$15_15$Hoisted$named($n, $o, req, res){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return myserverb11750$$main$c0$15_15$Hoisted.call(this, req, res);
}

function myserverb11750$main$member(){
  var server = fling64a7bc$HttpServer$Dart.HttpServer$$Factory();
  server.handle$named(2, $noargs, '/client/', fling64a7bc$ClientApp$Dart.create$member('../client/', $Dart$Null));
  server.handle$named(2, $noargs, '/app/greet', $bind(myserverb11750$$main$c0$15_15$Hoisted$named, this));
  server.listen$named(1, $noargs, 9090);
  print$getter()(1, $noargs, 'listening on port 9090');
  fling64a7bc$Fling$Dart.goForth$member();
}

function myserverb11750$main$named($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return myserverb11750$main$member();
}

RunEntry(myserverb11750$main$member, this.arguments ? (this.arguments.slice ? [].concat(this.arguments.slice()) : this.arguments) : []);