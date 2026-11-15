// 1. Filter table rows by search text and status dropdown
function filterReports() {
  var searchValue = document.getElementById("searchInput").value.toLowerCase();
  var filterStatus = document.getElementById("statusFilter").value;
  var rows = document.querySelectorAll("#reportsTable tbody tr");

  rows.forEach(function (row) {
    var text = row.innerText.toLowerCase();
    var status = row.querySelector(".badge").innerText.trim();

    var matchesSearch = text.indexOf(searchValue) > -1;
    var matchesStatus = (filterStatus === "All" || status === filterStatus);

    row.style.display = (matchesSearch && matchesStatus) ? "" : "none";
  });
}

// 2. Attach listeners for search typing and filter selection
document.getElementById("searchInput").addEventListener("keyup", filterReports);
document.getElementById("statusFilter").addEventListener("change", filterReports);

// 3. Click status badge to cycle: Pending -> In Progress -> Resolved
function toggleStatus(badge) {
  if (badge.innerText === "Pending") {
    badge.innerText = "In Progress";
    badge.className = "badge progress";
  } else if (badge.innerText === "In Progress") {
    badge.innerText = "Resolved";
    badge.className = "badge resolved";
  } else {
    badge.innerText = "Pending";
    badge.className = "badge pending";
  }
}

