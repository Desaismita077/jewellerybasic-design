document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("customerModal");
  const customerDetails = document.getElementById("customerDetails");
  const closeBtn = document.querySelector(".close");

  const data = {
    priya: {
      item: "Gold Necklace",
      weight: "45g",
      totalCost: "₹1,20,000",
      paid: "₹40,000",
      pending: "₹80,000",
      nextInstallment: "10-Nov-2025",
    },
    ramesh: {
      item: "Gold Bangles",
      weight: "30g",
      totalCost: "₹75,000",
      paid: "₹30,000",
      pending: "₹45,000",
      nextInstallment: "15-Nov-2025",
    },
  };

  document.querySelectorAll(".customer-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const id = e.target.dataset.customer;
      const c = data[id];
      if (c) {
        customerDetails.innerHTML = `
          <p><strong>Item:</strong> ${c.item}</p>
          <p><strong>Weight:</strong> ${c.weight}</p>
          <p><strong>Total Cost:</strong> ${c.totalCost}</p>
          <p><strong>Paid:</strong> ${c.paid}</p>
          <p><strong>Pending:</strong> ${c.pending}</p>
          <p><strong>Next Installment Date:</strong> ${c.nextInstallment}</p>
        `;
        modal.style.display = "block";
      }
    });
  });

  closeBtn.onclick = () => (modal.style.display = "none");
  window.onclick = (e) => {
    if (e.target === modal) modal.style.display = "none";
  };
});
