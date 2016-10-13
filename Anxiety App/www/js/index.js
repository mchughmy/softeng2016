/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
/*var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }

};*/

function infoSwitch(){
        alert("Feature Not implemented yet");
}

function back(){
/*    history.go(-1);
*/    navigator.app.backHistory();
}

function track(){
    localStorage.setItem("reason", "track");
        window.location.href = "sudTrack.html";

}

function report(){
        //alert("Feature Not yet available");
        window.location.href = "records.html";
}

function startBreathing(){
    var duration =document.getElementById("duration").value;
    window.location.href = "breathingExercise.html";

}

/*When the user accepts the ToS, they should be taken to the Home Screen*/
function accept(){
    window.location.href = "homeScreen.html";
}


/*When the user declines the ToS, the app should close*/
function decline(){
    navigator.app.exitApp();
}

/* Opens the Cordova inApp Browser and navigates to the passed ur
*  USAGE: <a onclick="browseToURL('http://www.google.com')">Link Text</a><br>
*/
function browseToURL(url) {
var ref = cordova.InAppBrowser.open(url, '_blank', 'location=yes');
}

/* Calls up the phone's "Dialer" widget, and preloads the passed Number
*  It doesn't auto-call the number, the user still needs to click to confirm the callNumber
*  USAGE: <a onclick="callNumber('7325555555')">732-555-5555</a><br>
*/
function callNumber(phoneNumber) {
window.open('tel:' + phoneNumber,'_system');
}

/* Opens the phone's NAtive messaging App, for the provided number, and prepares the passed text.
*  USAGE: <a onclick="sendSms('7325555555', 'Pretty Good')">752-555</a>
*/
function sendSms(phoneNumber,bodyText) {
window.open('sms:' + phoneNumber + '?body=' + bodyText,'_system');
}


function breathing(){

    localStorage.setItem("reason", "breathing");
    window.location.href = "sudTrack.html";

}


function exercise(){
        window.location.href = "exerciseHome.html";

}

function tracking(){
        window.location.href = "trackingHome.html";
}
function resources(){
        window.location.href = "resources.html";

}

function gettingStarted(){
        window.location.href = "gettingStarted.html";

}

function videoTest(){
        window.location.href = "videoTest.html";

}

function finish(){
    alert("Congrats!\nYou finished x minutes of breathing exercise!\nPlease track your current SUD on the next screen");
    localStorage.setItem("reason", "breathingPost");
    window.location.href = "sudTrack.html";
}


/* Set the user's "Current SUD" to the passed value*/
function setCurrentSUD(sud){
	localStorage.setItem("currentSud", sud);
}

/*retrieve the user's current SUD value*/
function getCurrentSUD(){
	return localStorage.getItem("currentSud");
}




/*function submitAnswer=function(user){

    alert(user.answer);

  }*/
