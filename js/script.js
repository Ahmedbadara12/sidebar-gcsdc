function toggleSidebar() {
  const sidebarContent = document.querySelector('.sidebar-content');
  sidebarContent.classList.toggle('d-none');
}
document.addEventListener("DOMContentLoaded", function () {
  // Modal logic
  const modal = document.getElementById("complaintModal");
  if (modal) {
    modal.addEventListener("show.bs.modal", function (event) {
      const button = event.relatedTarget;
      const row = button.closest("tr");
      if (row) {
        const cells = row.querySelectorAll("td");

        const complaintName = document.getElementById("complaintName");
        const complaintEmail = document.getElementById("complaintEmail");
        const complaintPhone = document.getElementById("complaintPhone");
        const complaintDetails = document.getElementById("complaintDetails");

        if (complaintName) complaintName.value = cells[0].textContent;
        if (complaintEmail) complaintEmail.value = cells[5].textContent;
        if (complaintPhone) complaintPhone.value = cells[3].textContent;
        if (complaintDetails) complaintDetails.value = cells[2].textContent;
      }
    });
  }

  // Calculate total inquiries
  const tableRows = document.querySelectorAll("#example tbody tr");
  const totalInquiriesElement = document.getElementById("totalInquiries");
  if (tableRows.length > 0 && totalInquiriesElement) {
    const totalInquiries = tableRows.length;
    totalInquiriesElement.textContent = totalInquiries;
  }
});