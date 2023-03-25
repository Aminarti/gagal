tampilkanData();

function saveReservation() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const alamat = document.getElementById("alamat").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const layanan = document.getElementById("layanan").value;
  
  
    const bayar = document.querySelector('input[name="bayar"]:checked').value;
  
    let pelayanan = [];
    let ingin = document.getElementsByName("pelayanan");
      for (let z = 0; z < ingin.length; z++) {
        if (ingin[z].checked == true) {
          pelayanan.push(ingin[z].value);
        }
      }
  
  let user = [];
  user.push({ pelayanan: pelayanan  });
  
    const reservation = { name, email, phone, alamat, date, time, layanan, pelayanan, bayar};
}

function tampilkanData() {
	const data = JSON.parse(sessionStorage.getItem("reservation"));

	const hasil = document.getElementById("hasil");
	hasil.innerHTML = "<h2>Hasil Form Reservasi:</h2>";
	hasil.innerHTML += "<p>Nama: " + data.name + "</p>";
	hasil.innerHTML += "<p>Email: " + data.email + "</p>";
	hasil.innerHTML += "<p>Phone: " + data.phone + "</p>";
    hasil.innerHTML += "<p>Alamat: " + data.alamat + "</p>";
    hasil.innerHTML += "<p>Tanggal: " + data.date + "</p>";
    hasil.innerHTML += "<p>Jam: " + data.time + "</p>";
    hasil.innerHTML += "<p>Pelayanan: " + data.pelayanan + "</p>";
    hasil.innerHTML += "<p>Pembayaran: " + data.bayar + "</p>";}