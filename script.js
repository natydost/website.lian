let client = new Paho.MQTT.Client(
    'd57a0d1c39d54550b147b58411d86743.s2.eu.hivemq.cloud',
    8884,
    'printgo' + Math.random()
)

client = new Paho.MQTT.Client("d57a0d1c39d54550b147b58411d86743.s2.eu.hivemq.cloud", 8884, 'letni-skola' + Math.random())

client.onConnectionLost = onConnectionLost;
// client.onMessageArrived = onMessageArrived;

client.connect({
    onSuccess: onConnect,
    userName: "robot",
    password: "P@ssW0rd!",
    useSSL: true
});


function onConnect() {
    console.log("onConnect");
    client.subscribe("/in/queue/count/#");
}
function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
        console.log("onConnectionLost:" + responseObject.errorMessage);
    }
}

let cislo = 0 

function tiskni() {
    console.log("")
    cislo ++
    message = new Paho.MQTT.Message(String(cislo));
            message.destinationName = "/in/queue/print";
            client.send(message);
    document.getElementsByClassName("button").innerHTML = "";
  }
  function zmen(){
    document.getElementById("nadpis").innerHTML = "CHOOSE YOUR REQUESTED SERVICE";
    document.getElementById("button1").innerHTML = "pick up";
    document.getElementById("button2").innerHTML = "send parcel";
    document.getElementById("button3").innerHTML = "other service";
}
function zmenNaCs(){
    document.getElementById("nadpis").innerHTML = "VYBERTE POŽADOVANOU SLUŽBU";
    document.getElementById("button1").innerHTML = "vyzvednutí zásilky";
    document.getElementById("button2").innerHTML = "odeslat zásilku";
    document.getElementById("button3").innerHTML = "ostatní služby";
}


  /* 

function onMessageArrived(message) {
    try {
        console.log("onMessageArrived:" + message.destinationName);
        console.log("onMessageArrived:" + message.payloadString);
        
       
       if (message.destinationName === "/in/queue/count/a") {
            document.getElementById("a-butt").innerText = message.payloadString;
        } else if (message.destinationName === "/in/queue/count/b") {
            document.getElementById("b-butt").innerText = message.payloadString;
        } else if (message.destinationName === "/in/queue/count/c") {
            document.getElementById("c-butt").innerText = message.payloadString;
        }
         

    } catch (error) {
        console.error(error);
    }
}
*/

/*const char TOPIC_PUB_FIVEWAY[] = "/out/queue/fiveway";
const char TOPIC_PUB_BUTTONS[] = "/out/queue/buttons";
const char TOPIC_SUB_BUZZER[] = "/in/queue/beep";
const char TOPIC_SUB_COUNT_A[] = "/in/queue/count/a";
const char TOPIC_SUB_COUNT_B[] = "/in/queue/count/b";
const char TOPIC_SUB_COUNT_C[] = "/in/queue/count/c";
const char TOPIC_SUB_PRINT[] = "/in/queue/print";
*/