<script language="javascript">
<!--
// Created by: assbach :: http://www.ipernity.com/home/assbach

function dummyreg() {
  var currentDate = new Date();
  var month = currentDate.getMonth() +1;
  var day = currentDate.getDate();
  var year = currentDate.getFullYear();
  var formDate = month + "-" + day + "-" + year;

  // Use whatever data you like for the items below
 	document.getElementById("name").value = "JavaScriptBank.com";
 	document.getElementById("email").value = "email@JavaScriptBank.com";
 	document.getElementById("datebox").value = formDate;
 	document.getElementById("checkbox").checked = true; // checkbox
 	document.getElementById("radiobutton").checked = true; // radiobutton
 	document.getElementById("pulldown").selectedIndex = 1; // dropdown
}

// Multiple onload function created by: Simon Willison
// http://simonwillison.net/2004/May/26/addLoadEvent/
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}

addLoadEvent(function() {
  dummyreg();
});
//-->
</script>
