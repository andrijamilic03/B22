function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("Tabela");
  switching = true;
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length-1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[4];
      y = rows[i + 1].getElementsByTagName("TD")[4];
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
function btnBoja() {
	
var table = document.getElementById("Tabela");  
var rows = table.getElementsByTagName("tr");   
for (i = 1; i < (rows.length); i++) {
      x = rows[i].getElementsByTagName("TD")[0];
      if (x.innerHTML.toLowerCase()%2 ==1) {
		  rows[i].className="even";
      }
    }
  } 
function btnPolozio() {
var table = document.getElementById("Tabela");   
var rows = table.getElementsByTagName("tr"); 

for (i = 1; i < (rows.length ); i++) {
      x = rows[i].getElementsByTagName("TD")[4];
      if (x.innerHTML.toLowerCase()> 50) {
		  rows[i].className="even";
      }
	  else{}
    }
  } 
function btnNijePolozio() {
var table = document.getElementById("Tabela");   
var rows = table.getElementsByTagName("tr");   
for (i = 1; i < (rows.length ); i++) {
      x = rows[i].getElementsByTagName("TD")[4];
      if (x.innerHTML.toLowerCase()< 50) {
		  rows[i].className="even";
      }
	  else{}
    }
  } 
function btnIzbaci() {
var table = document.getElementById("Tabela");   
var rows = table.getElementsByTagName("tr");   
for (i = 1; i < (rows.length-1); i++) {
      x = rows[i].getElementsByTagName("TD")[4];
      if (x.innerHTML.toLowerCase()< 50) {
		 rows[i].remove();
      }
 else{}
    }
	btnIzbaci();
  } 
