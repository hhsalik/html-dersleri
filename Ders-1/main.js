console.log("Merhaba Hasan! JavaScript başladı!");  /* Konsola bilgi yazdırır: JavaScript çalışmaya başladı. */

// Değişken tanımlamaları
let isim = "Hasan";           /* Değişken oluşturduk, başlangıç değeri 'Hasan' */
const dogumyili = 2005;       /* Değeri sabit olan doğum yılı. Değiştirilemez. */
let sehir = "Elazığ";         /* Şehir bilgisi. Değiştirilebilir. */
let yas = 17;                 /* Başlangıçta yaş 17 olarak tanımlandı */

console.log("Benim adım " + isim + " ve yaşım " + yas);  /* Konsola ad ve yaş bilgisi yazdırılır. */

// Sayfa yüklendiğinde çalışacak hoş geldin mesajı
function hosgeldin() {
  alert("Hasan'ın Web Sayfasına Hoş Geldin!");  /* Kullanıcıya açılır pencereyle mesaj gösterilir. */
}

// Yaş kontrolü
if (yas >= 18) {
  console.log("Reşitsiniz.");  /* Eğer yaş 18 veya daha büyükse bu yazı çıkar */
} else {
  console.log("Reşit değilsiniz.");  /* 18'den küçükse bu yazı çıkar */
}

// Yaş grubuna göre sınıflandırma
if (yas < 13) {
  console.log("Çocuksun.");  /* 13 yaşından küçükse çocuk */
} else if (yas < 20) {
  console.log("Gençsin.");   /* 13-19 yaş arasıysa genç */
} else {
  console.log("Yetişkinsin.");  /* 20 ve üzeriyse yetişkin */
}

// Kullanıcıdan ad alma
isim = prompt("Adınız nedir?");  /* Kullanıcıdan bir isim girmesini ister ve değişkene kaydeder */
console.log("Merhaba, " + isim);  /* Girilen ismi konsola yazar */

// HTML sayfasında "Hoş geldin, [isim]" şeklinde gösterme
document.getElementById("karsilama").textContent = "Hoş geldin, " + isim + "!";  /* Sayfadaki <h2 id="karsilama"> içine metin yerleştirilir */

// Yaş kontrolü yapan fonksiyon
function yasKontrol() {
  let yas = prompt("Kaç yaşındasın?");  /* Kullanıcıdan yaş istenir */
  yas = Number(yas);  /* Girilen yaş string olabilir, sayıya çevrilir */

  let mesaj = "";  /* Boş bir mesaj değişkeni oluşturduk */

  if (yas < 13) {
    mesaj = "Sen bir çocuksun.";  /* 13 yaşından küçükse */
  } else if (yas >= 13 && yas <= 19) {
    mesaj = "Sen bir gençsin.";  /* 13-19 arasıysa */
  } else if (yas >= 20 && yas < 65) {
    mesaj = "Sen bir yetişkinsin.";  /* 20-64 arasıysa */
  } else if (yas >= 65) {
    mesaj = "Sen bir yaşlısın.";  /* 65 ve üzeriyse */
  } else {
    mesaj = "Geçerli bir yaş girmedin.";  /* Geçersiz bir değer girildiyse */
  }

  document.getElementById("yasMesaji").textContent = mesaj;  /* Sayfada <h2 id="yasMesaji"> alanına mesaj yazılır */
}


function arkaPlanDegistir() {
  const renkler = ["#3498db", "#e74c3c", "#2ecc71", "#9b59b6", "#f39c12", "#1abc9c"];
  const rastgeleIndex = Math.floor(Math.random() * renkler.length); // 0 ile 5 arasında sayı
  const secilenRenk = renkler[rastgeleIndex]; // Diziden renk seç
  document.body.style.backgroundColor = secilenRenk; // Arka plan rengini değiştir

  console.log("Yeni arka plan rengi:", secilenRenk); // Konsola yaz
}








function saatiGoster() {
  const saatDiv = document.getElementById("saat");
  const simdi = new Date();

  let saat = simdi.getHours();
  let dakika = simdi.getMinutes();
  let saniye = simdi.getSeconds();

  // Tek haneli sayılara 0 ekle (ör: 09:05:03)
  saat = saat < 10 ? "0" + saat : saat;
  dakika = dakika < 10 ? "0" + dakika : dakika;
  saniye = saniye < 10 ? "0" + saniye : saniye;

  saatDiv.textContent = `${saat}:${dakika}:${saniye}`;
}

// İlk çalıştırma
saatiGoster();

// Her saniye güncelle
setInterval(saatiGoster, 1000);


function analogSaatiGuncelle() {
  const simdi = new Date();
  
  const saniye = simdi.getSeconds();
  const dakika = simdi.getMinutes();
  const saat = simdi.getHours() % 12;

  const saniyeDerece = saniye * 6;  // 360 derece / 60 saniye = 6 derece/saniye
  const dakikaDerece = dakika * 6 + saniye * 0.1; // dakika + saniye etkisi
  const saatDerece = saat * 30 + dakika * 0.5; // saat + dakika etkisi

  document.querySelector('.saniye').style.transform = `translateX(-50%) rotate(${saniyeDerece}deg)`;
  document.querySelector('.yelkovan').style.transform = `translateX(-50%) rotate(${dakikaDerece}deg)`;
  document.querySelector('.akrep').style.transform = `translateX(-50%) rotate(${saatDerece}deg)`;
}

// İlk çağrı
analogSaatiGuncelle();

// Her saniye güncelle
setInterval(analogSaatiGuncelle, 1000);


// Formu seç
const form = document.querySelector('form');

// Form submit olduğunda çalışacak fonksiyon
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Formun otomatik gönderilmesini engelle

  // Form alanlarını al
  const ad = document.getElementById('ad').value.trim();
  const email = document.getElementById('email').value.trim();
  const mesaj = document.getElementById('mesaj').value.trim();

  // Hata mesajlarını tutacak değişken
  let hataMesaji = '';

  // Ad kontrolü
  if (ad === '') {
    hataMesaji += 'Lütfen adınızı giriniz.\n';
  }

  // Email kontrolü (basit regex)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    hataMesaji += 'Lütfen geçerli bir e-posta adresi giriniz.\n';
  }

  // Mesaj kontrolü
  if (mesaj.length < 5) {
    hataMesaji += 'Mesajınız en az 5 karakter olmalıdır.\n';
  }

  // Eğer hata varsa alert göster, yoksa formu gönder
  if (hataMesaji) {
    alert(hataMesaji);
  } else {
    alert('Form başarıyla gönderildi!');
    form.submit(); // Formu gönder
  }
});
