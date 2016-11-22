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
var app = {
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

};


function infoSwitch(){
        alert("Feature Not implemented yet");
}

function back(){
    history.go(-1);
    // navigator.app.backHistory();
}

function track(){
    localStorage.setItem("reason", "track");
    gotoPage("sudTrack.html");

}

function startBreathing(){
  //var durationOfExercise = document.getElementById("duration").value;
  var lengthOfInhale = document.getElementById("inhaleL").value;
  var lengthOfExhale = document.getElementById("exhaleL").value;

  if (lengthOfInhale <= 0) {
    lengthOfInhale = 1;
  }

  if (lengthOfExhale <= 0) {
    lengthOfExhale = 1;
  }

  gotoPage("breathingExercise.html?inhale=" + lengthOfInhale + '&exhale=' + lengthOfExhale);

}

function startMindfulness(){
  var video = document.getElementById("videoSelect").value;
    localStorage.setItem("video", video);

  gotoPage("mindfulnessVideo.html");

}

/*When the user accepts the ToS, they should be taken to the Home Screen*/
function accept(){
  //we may want to do some other stuff first
    gotoPage('homeScreen.html');
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

/* Opens the phone's Native messaging App, for the provided number, and prepares the passed text.
*  USAGE: <a onclick="sendSms('7325555555', 'Pretty Good')">752-555</a>
*/
function sendSms(phoneNumber,bodyText) {
window.open('sms:' + phoneNumber + '?body=' + bodyText,'_system');
}

/* Navigates to a page inside the app.
*  Use this to navigate to pages which are part of the App (internal pages)
*  USAGE: <button class = "button button-block homeB" onclick="gotoPage('resources.html')">Button Text</button>
*/
function gotoPage(page) {
  window.location.href = page;
}


function breathing(){

    localStorage.setItem("reason", "breathing");
    gotoPage("sudTrack.html");

}

function mindfulness(){

    localStorage.setItem("reason", "mindfulness");
    gotoPage("sudTrack.html");

}



function finish(reason){
   // alert("Congrats!\nYou finished x minutes of breathing exercise!\nPlease track your current SUD on the next screen");
    localStorage.setItem("reason", reason);
    gotoPage("sudTrack.html");
}


/* Set the user's "Current SUD" to the passed value
*  and add an entry to the "SUD History" */
function setCurrentSUD(sud,reason){

    /* get the current sud history, or a blank array if the SUD history is empty */
    var sudHistory = JSON.parse(localStorage.getItem('sudHistory'));

    if (sudHistory ==  null) {
      sudHistory = [];
    }

    var newEntry = {
      "SUD"    : sud,
      "date"   : new Date(), /* current date */
      "reason" : reason /* reason for tracking SUD */
    };

    /* Add new entry to the list */
    sudHistory.push(newEntry);

    /* Update the list in memory */
    localStorage.setItem("sudHistory", JSON.stringify(sudHistory));
}


/* retrieve the user's current SUD value.
*  The value most Recently added to the History
*  note: returns the History OBJECT
*  USAGE: getCurrentSUD().SUD or getCurrentSUD().date */
function getCurrentSUD(){
    var sudHistory = JSON.parse(localStorage.getItem("sudHistory"));

    if (sudHistory ==  null) {
      return null; /* if we don't have a history, return null */
    } else {
      return sudHistory[sudHistory.length-1];
    }
}


/* returns the AVERAGE SUD value for the entire SUD history */
function getAverageSUD() {
  var sudHistory = JSON.parse(localStorage.getItem("sudHistory"));
  var sudSum = 0;

  if (sudHistory ==  null) {
    return null;
  } else {
    for (var i = 0; i < sudHistory.length; i++) {
      sudSum += parseInt(sudHistory[i].SUD);
    }

    return (sudSum/sudHistory.length);
  }
}

/* returns the name (file name) of the page the user is currently on
*  i.e. returns "index.html" while on the said page */
function getCurrentPage() {
    var currentPage = window.location.href.split('/');

    return currentPage[currentPage.length-1];
}

/* clears localStorage (ALL of it)
*  erasing the SUD history and any other tracked metrics
*  useful as a "reset button" during testing
*  we might want to allow users to clear their records and start fresh */
function clearAllRecords() {
    window.localStorage.clear()
}

/* given a JSON "date string" returns
*  the corresponding JavaScript Date Object */
function getJsDateFromJSON(jsonDate){
  if (jsonDate ==  null) {
    return null;
  }

    var jsonDateString = jsonDate

    return new Date(jsonDateString);
}

/* returns the named Query Variable from the passed url
*  returns FALSE if no such value exists
*  USAGE: getQueryVariable('www.example.com?test=2', 'test') */
function getQueryVariable(url, queryVarName)
{
  var query = url.search.substring(1);
  var vars = query.split("&");

  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");

    if(pair[0] == queryVarName){
      return pair[1];
    }
  }

  return(false);
}


/* Adds support for the phone's PHYSICAL back button.
*  if we're on the homeScreen, close the App, else just go back a page */
document.addEventListener("backbutton", function(e){

  /* override default behavior */
  e.preventDefault();

  if (getCurrentPage() == 'homeScreen.html') {
    navigator.app.exitApp();
  } else {
    back();
  }

},false);
/*END Back button support Block */
