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
  sessionStorage.setItem("reservation", JSON.stringify(reservation));
    
  alert("Reservation saved successfully!");
  window.location.href = "hasilform.html";

}