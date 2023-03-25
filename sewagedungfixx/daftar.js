const daftar = document.getElementById("daftar");
daftar.onclick = regis;


function regis(e){
    e.preventDefault();
    const nama= document.getElementById("nama").value;
    const email= document.getElementById("email").value;
    const pass= document.getElementById("pass").value;

    localStorage.setItem("Nama", nama);
    localStorage.setItem("Email", email);
    localStorage.setItem("Password", pass);

    const regis = {nama, email,pass};
    localStorage.setItem("regis", JSON.stringify(regis));

    alert("Berhasil Mendaftar, Silahkan Login");
    window.location.href = "index.html";

}

  
