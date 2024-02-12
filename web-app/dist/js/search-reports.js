function searchReports() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.querySelector(".table-vcenter");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those that don't match the search query
    for (i = 0; i < tr.length; i++) {
        // Columns 0 and 1 contain Name and Date Created respectively
        tdName = tr[i].getElementsByTagName("td")[0];
        tdDate = tr[i].getElementsByTagName("td")[1];
        if (tdName || tdDate) {
            txtValueName = tdName.textContent || tdName.innerText;
            txtValueDate = tdDate.textContent || tdDate.innerText;
            if (txtValueName.toUpperCase().indexOf(filter) > -1 || txtValueDate.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
