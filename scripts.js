//---------------Highlight Real-Time Berdasarkan Tanggal-----------------------//

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

// Eksekusi kode JavaScript setiap 1 Detik //
setInterval(highlightToday, 100);

//---------------------------------------------------------------------------//





//---------------Tombol Sticky-----------------------//

function scrollToToday() {
    const table = document.getElementById("jadwal");
    const rows = table.getElementsByTagName("tr");
    const today = new Date().getDate();
    let todayRow = null;
  
    for (let i = 0; i < rows.length; i++) {
      const cols = rows[i].getElementsByTagName("td");
      if (cols.length > 0) {
        const date = new Date(cols[2].textContent).getDate(); // ubah indeks kolom menjadi 2
        if (date === today) {
          todayRow = rows[i];
          break;
        }
      }
    }
  
    if (todayRow) {
      todayRow.scrollIntoView();
    }
  }
  
  function handleStickyBtn() {
    const stickyBtn = document.getElementById("sticky-btn");
    const table = document.getElementById("jadwal");
    const tableTop = table.getBoundingClientRect().top;
  
    window.addEventListener("scroll", () => {
      const scrollPos = window.scrollY;
      const tablePos = table.getBoundingClientRect().top;
      const isTableVisible = (tablePos - tableTop) <= 0;
  

    });
  
    stickyBtn.addEventListener("click", scrollToToday);
  }
  
  handleStickyBtn();
  



//--------------------------------------------------//