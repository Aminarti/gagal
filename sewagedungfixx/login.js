const form = document.getElementById("form")
const nama = document.getElementById("nama");
const pass = document.getElementById("pass");


form.addEventListener("submit", function (e) {
    e.preventDefault()
    
    const loc_nama =  localStorage.getItem("Nama");
    const loc_pass = localStorage.getItem("Password");

    if (nama.value == loc_nama && pass.value == loc_pass){
        alert("Selamat Datang")
        window.location.href = "home.html";
    }else{
        alert ("Nama atau Password salah")
    }
});