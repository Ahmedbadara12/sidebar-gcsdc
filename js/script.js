function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const content = document.getElementById("content");
  
    sidebar.classList.toggle("collapsed");
    content.classList.toggle("collapsed");
  } 
    // JavaScript to populate modal with data and calculate total inquiries
    document.addEventListener('DOMContentLoaded', function () {
      const modal = document.getElementById('complaintModal');
      modal.addEventListener('show.bs.modal', function (event) {
          const button = event.relatedTarget; // Button that triggered the modal
          const row = button.closest('tr'); // Get the closest row
          const cells = row.querySelectorAll('td'); // Get all cells in the row

          // Populate modal inputs
          document.getElementById('complaintName').value = cells[0].textContent;
          document.getElementById('complaintEmail').value = cells[5].textContent;
          document.getElementById('complaintPhone').value = cells[3].textContent;
          document.getElementById('complaintDetails').value = cells[2].textContent;
      });

      // Calculate and display total inquiries
      const tableRows = document.querySelectorAll('#example tbody tr');
      const totalInquiries = tableRows.length;
      document.getElementById('totalInquiries').textContent = totalInquiries;
  });