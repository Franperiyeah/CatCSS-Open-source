document.addEventListener("DOMContentLoaded", () => {
    const accordionHeaders = document.querySelectorAll(".accordion-header");
  
    accordionHeaders.forEach(header => {
      header.addEventListener("click", () => {
        const content = header.nextElementSibling;
  
        // Toggle active class
        header.classList.toggle("active");
        content.classList.toggle("active");
  
        // Collapse other accordion items
        accordionHeaders.forEach(item => {
          if (item !== header) {
            item.classList.remove("active");
            item.nextElementSibling.classList.remove("active");
          }
        });
      });
    });
  });
  