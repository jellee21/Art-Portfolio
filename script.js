/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

//don't forget to replace the w3 fuction name
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

var form = document.forms["contact"];
form.addEventListener('submit',contact_submit,false);

function contact_submit(e) {
    // Stop Form From Submitting
    e.preventDefault();

    // Set Initial Variables
    var target = e.target || e.srcElement;
    var to = 'someone@example.com';
    var uri = 'mailto:' + to;
    var body = '';

    // Set Form Values to Variables
    var name = target.elements['name'].value;
    var subject = target.elements['subject'].value;
    var phone = target.elements['phone'].value;
    var message = target.elements['message'].value;

    // Build Body / Message with all Input Fields
    body += message + "\r\n\r\n";
    body += "Name: " + name + "\r\n";
    body += "Phone Number: " + phone + "\r\n";

    // Build final Mailto URI
    uri += '?subject=' + encodeURIComponent(subject);
    uri += '&body=' + encodeURIComponent(body);

    // Open Mailto in New Window / Tab
    window.open(uri,'_blank');
}

