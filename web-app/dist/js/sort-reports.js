// JavaScript for sorting functionality
var sortOrder = 1; // 1 for ascending, -1 for descending

function sortTable() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.querySelector(".table-vcenter");
    switching = true;

    // Run loop until no switching is needed
    while (switching) {
        switching = false;
        rows = table.rows;

        // Loop through all table rows (except the first, which contains the headers)
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;

            // Get the two elements you want to compare
            x = rows[i].getElementsByTagName("td")[1]; // Date Created column
            y = rows[i + 1].getElementsByTagName("td")[1];

            // Check if the two rows should switch place
            if (sortOrder == 1) {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            } else {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
        }

        if (shouldSwitch) {
            // If a switch has been marked, make the switch and mark the loop for another pass
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}
