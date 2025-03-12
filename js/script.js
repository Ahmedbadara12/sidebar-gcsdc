

// Add event listener to the toggle button
document.addEventListener("DOMContentLoaded", function () {
 

  // Modal and total inquiries logic
  const modal = document.getElementById("complaintModal");
  if (modal) {
    modal.addEventListener("show.bs.modal", function (event) {
      const button = event.relatedTarget;
      const row = button.closest("tr");
      const cells = row.querySelectorAll("td");

      document.getElementById("complaintName").value = cells[0].textContent;
      document.getElementById("complaintEmail").value = cells[5].textContent;
      document.getElementById("complaintPhone").value = cells[3].textContent;
      document.getElementById("complaintDetails").value = cells[2].textContent;
    });
  }

  // Calculate total inquiries
  const tableRows = document.querySelectorAll("#example tbody tr");
  const totalInquiries = tableRows.length;
  document.getElementById("totalInquiries").textContent = totalInquiries;
});