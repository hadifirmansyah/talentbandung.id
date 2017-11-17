// var fruits = ['Jeruk', 'Mangga', 'Apel', 'Durian', 'Anggur', 'Nangka', 'Tomat'];
// for (var key in fruits) {
//    console.log(fruits[key]);
// }

// for (var i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }
// console.log(fruits[0]);
// console.log(fruits[4]);
// fruits[4] = 'Nanas';
// console.log(fruits[4]);
// var surah = {"code":200,"status":"OK","data":{"number":1,"name":"\u0633\u0648\u0631\u0629 \u0627\u0644\u0641\u0627\u062a\u062d\u0629","englishName":"Al-Faatiha","englishNameTranslation":"The Opening","revelationType":"Meccan","numberOfAyahs":7,"ayahs":[{"number":1,"text":"\ufeff\u0628\u0650\u0633\u0652\u0645\u0650 \u0627\u0644\u0644\u0651\u064e\u0647\u0650 \u0627\u0644\u0631\u0651\u064e\u062d\u0652\u0645\u064e\u0670\u0646\u0650 \u0627\u0644\u0631\u0651\u064e\u062d\u0650\u064a\u0645\u0650","numberInSurah":1,"juz":1,"manzil":1,"page":1,"ruku":1,"hizbQuarter":1,"sajda":false},{"number":2,"text":"\u0627\u0644\u0652\u062d\u064e\u0645\u0652\u062f\u064f \u0644\u0650\u0644\u0651\u064e\u0647\u0650 \u0631\u064e\u0628\u0651\u0650 \u0627\u0644\u0652\u0639\u064e\u0627\u0644\u064e\u0645\u0650\u064a\u0646\u064e","numberInSurah":2,"juz":1,"manzil":1,"page":1,"ruku":1,"hizbQuarter":1,"sajda":false},{"number":3,"text":"\u0627\u0644\u0631\u0651\u064e\u062d\u0652\u0645\u064e\u0670\u0646\u0650 \u0627\u0644\u0631\u0651\u064e\u062d\u0650\u064a\u0645\u0650","numberInSurah":3,"juz":1,"manzil":1,"page":1,"ruku":1,"hizbQuarter":1,"sajda":false},{"number":4,"text":"\u0645\u064e\u0627\u0644\u0650\u0643\u0650 \u064a\u064e\u0648\u0652\u0645\u0650 \u0627\u0644\u062f\u0651\u0650\u064a\u0646\u0650","numberInSurah":4,"juz":1,"manzil":1,"page":1,"ruku":1,"hizbQuarter":1,"sajda":false},{"number":5,"text":"\u0625\u0650\u064a\u0651\u064e\u0627\u0643\u064e \u0646\u064e\u0639\u0652\u0628\u064f\u062f\u064f \u0648\u064e\u0625\u0650\u064a\u0651\u064e\u0627\u0643\u064e \u0646\u064e\u0633\u0652\u062a\u064e\u0639\u0650\u064a\u0646\u064f","numberInSurah":5,"juz":1,"manzil":1,"page":1,"ruku":1,"hizbQuarter":1,"sajda":false},{"number":6,"text":"\u0627\u0647\u0652\u062f\u0650\u0646\u064e\u0627 \u0627\u0644\u0635\u0651\u0650\u0631\u064e\u0627\u0637\u064e \u0627\u0644\u0652\u0645\u064f\u0633\u0652\u062a\u064e\u0642\u0650\u064a\u0645\u064e","numberInSurah":6,"juz":1,"manzil":1,"page":1,"ruku":1,"hizbQuarter":1,"sajda":false},{"number":7,"text":"\u0635\u0650\u0631\u064e\u0627\u0637\u064e \u0627\u0644\u0651\u064e\u0630\u0650\u064a\u0646\u064e \u0623\u064e\u0646\u0652\u0639\u064e\u0645\u0652\u062a\u064e \u0639\u064e\u0644\u064e\u064a\u0652\u0647\u0650\u0645\u0652 \u063a\u064e\u064a\u0652\u0631\u0650 \u0627\u0644\u0652\u0645\u064e\u063a\u0652\u0636\u064f\u0648\u0628\u0650 \u0639\u064e\u0644\u064e\u064a\u0652\u0647\u0650\u0645\u0652 \u0648\u064e\u0644\u064e\u0627 \u0627\u0644\u0636\u0651\u064e\u0627\u0644\u0651\u0650\u064a\u0646\u064e","numberInSurah":7,"juz":1,"manzil":1,"page":1,"ruku":1,"hizbQuarter":1,"sajda":false}],"edition":{"identifier":"quran-simple","language":"ar","name":"Simple","englishName":"Simple","format":"text","type":"quran"}}};
//
// console.log(surah);
//
// console.log(surah.data.name);
//
// for (var key in surah.data.ayahs) {
//    console.log(surah.data.ayahs[key].text);
// }
//
// var jam = 25;
//
// if (jam > 24) {
//   console.log('Salah Jam');
// } else if (jam >= 19) {
//   console.log('Selamat Malam');
// } else if (jam >= 16) {
//   console.log('Selamat Sore');
// } else if (jam >= 12) {
//   console.log('Selamat Siang');
// } else {
//   console.log('Selamat Pagi');
// }
//
// var hari = 6;
//
// switch (hari) {
//   case 1:
//     console.log("Senin");
//     break;
//   case 2:
//     console.log("Selasa");
//     break;
//   case 3:
//     console.log("Rabu");
//     break;
//   case 4:
//     console.log("Kamis");
//     break;
//   case 5:
//     console.log("Jumat");
//     break;
//   case 6:
//     console.log("Sabtu");
//     break;
//   case 7:
//     console.log("Minggu");
//     break;
//   default:
//     console.log("Hari Tidak Ditemukan");
//
// }
//
// // var int num;
// function conH(num)
// {
//   switch (num) {
//     case 1:
//       console.log("Senin");
//       break;
//     case 2:
//       console.log("Selasa");
//       break;
//     case 3:
//       console.log("Rabu");
//       break;
//     case 4:
//       console.log("Kamis");
//       break;
//     case 5:
//       console.log("Jumat");
//       break;
//     case 6:
//       console.log("Sabtu");
//       break;
//     case 7:
//       console.log("Minggu");
//       break;
//     default:
//       console.log("Hari Tidak Ditemukan");
//
//   }
// }

// var nama;
// function sapa(nama) {
//   return "Selamat Siang Tuan " + nama;
// }
function greet(){
  var nama = document.getElementById("nama").value;
  var email = document.getElementById("email").value;
  alert(nama + ' ' + email)
}

var btnGreet = document.getElementById("greet");
btnGreet.addEventListener('click', greet)

function greet2(){
  content = this.textContent
  alert('Nama '+ content)
}

var buttons = document.getElementsByClassName('btn');
console.log(buttons);
for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', greet2);
}

// function greet(content){
//   console.log(content);
// }
