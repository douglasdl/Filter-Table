function filterTable() {
    var input, filter, table, tr, td0, td1, i, txtValue0, txtValue1;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td0 = tr[i].getElementsByTagName("td")[0];
      td1 = tr[i].getElementsByTagName("td")[1];
      if (td0 || td1) {
        txtValue0 = td0.textContent || td0.innerText;
        txtValue1 = td1.textContent || td1.innerText;
        // If > -1 means the string was found
        console.log(tr[i]);
        if ((txtValue0.toUpperCase().indexOf(filter) > -1) || (txtValue1.toUpperCase().indexOf(filter) > -1)) {
            // Keep row visible
            tr[i].style.display = "";
        } else {
            // Hide row
          tr[i].style.display = "none";
        }
      }
    }
  }