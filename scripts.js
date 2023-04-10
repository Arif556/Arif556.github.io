function highlightToday() {
  const table = document.getElementById("jadwal");
  const rows = table.getElementsByTagName("tr");
  const today = new Date().getDate();

  for (let i = 0; i < rows.length; i++) {
      const cols = rows[i].getElementsByTagName("td");
      if (cols.length > 0) {
          const date = new Date(cols[2].textContent).getDate();
          if (date === today) {
              rows[i].classList.add("highlight");
          } else {
              rows[i].classList.remove("highlight");
          }
      }
  }
}

// Eksekusi kode JavaScript setiap 1 menit
setInterval(highlightToday, 100);
