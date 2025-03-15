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
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent default link behavior

      // Remove 'active' class from all links
      navLinks.forEach(link => link.classList.remove('active'));

      // Add 'active' class to the clicked link
      this.classList.add('active');

      // You can also add logic here to load content based on the clicked link
      const target = this.getAttribute('data-target');
      loadContent(target);
    });
  });

  function loadContent(target) {
    // Implement logic to load content based on the target
    console.log(`Loading content for: ${target}`);
    // Example: Fetch content from server or show/hide elements
  }
});