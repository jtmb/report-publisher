function searchReports() {
    var input, filter, table, tr, tdName, tdDate, i, txtValueName, txtValueDate;
    input = document.getElementById("searchInput");
    filter = input.value.trim().toUpperCase(); // Trim whitespace and convert to uppercase
    table = document.querySelector(".table-vcenter");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those that don't match the search query
    for (i = 0; i < tr.length; i++) {
        // Columns 0 and 1 contain Name and Date Created respectively
        tdName = tr[i].getElementsByTagName("td")[0];
        tdDate = tr[i].getElementsByTagName("td")[1];
        if (tdName && tdDate) {
            txtValueName = tdName.textContent || tdName.innerText;
            txtValueDate = tdDate.textContent || tdDate.innerText;
            // Split the search filter into individual terms
            var terms = filter.split(/\s+/);
            // Check if any term matches any part of the date
            var matches = terms.every(function(term) {
                return (
                    txtValueDate.toUpperCase().includes(term) ||
                    txtValueName.toUpperCase().includes(term)
                );
            });
            // Display or hide the row based on matching terms
            if (matches) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
