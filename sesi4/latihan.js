/*
var nama = "Rian Ariona";
var webBasic = ["HTML", "CSS", "Javascript"];

webBasic[1] = "Cascading StyleSheet";
*/


// var person = {
// 	name   : 'Rian Ariona',
// 	age    : 18,
// 	address: 'Ujung Berung – Bandung',
// 	gadgets: {
// 		laptop: 'MBP',
// 		phone : 'S6'
// 	},
// 	hobby: ['tidur', 'ngoding']
// };

// // console.log( person.name )
// // console.log( person.gadgets.laptop )
// // console.log( person.hobby[1] )

// var quran = {"code":200,"status":"OK","data":{"number":1,"name":"\u0633\u0648\u0631\u0629 \u0627\u0644\u0641\u0627\u062a\u062d\u0629","englishName":"Al-Faatiha","englishNameTranslation":"The Opening","revelationType":"Meccan","numberOfAyahs":7,"ayahs":[{"number":1,"text":"\ufeff\u0628\u0650\u0633\u0652\u0645\u0650 \u0627\u0644\u0644\u0651\u064e\u0647\u0650 \u0627\u0644\u0631\u0651\u064e\u062d\u0652\u0645\u064e\u0670\u0646\u0650 \u0627\u0644\u0631\u0651\u064e\u062d\u0650\u064a\u0645\u0650","numberInSurah":1,"juz":1,"manzil":1,"page":1,"ruku":1,"hizbQuarter":1,"sajda":false},{"number":2,"text":"\u0627\u0644\u0652\u062d\u064e\u0645\u0652\u062f\u064f \u0644\u0650\u0644\u0651\u064e\u0647\u0650 \u0631\u064e\u0628\u0651\u0650 \u0627\u0644\u0652\u0639\u064e\u0627\u0644\u064e\u0645\u0650\u064a\u0646\u064e","numberInSurah":2,"juz":1,"manzil":1,"page":1,"ruku":1,"hizbQuarter":1,"sajda":false},{"number":3,"text":"\u0627\u0644\u0631\u0651\u064e\u062d\u0652\u0645\u064e\u0670\u0646\u0650 \u0627\u0644\u0631\u0651\u064e\u062d\u0650\u064a\u0645\u0650","numberInSurah":3,"juz":1,"manzil":1,"page":1,"ruku":1,"hizbQuarter":1,"sajda":false},{"number":4,"text":"\u0645\u064e\u0627\u0644\u0650\u0643\u0650 \u064a\u064e\u0648\u0652\u0645\u0650 \u0627\u0644\u062f\u0651\u0650\u064a\u0646\u0650","numberInSurah":4,"juz":1,"manzil":1,"page":1,"ruku":1,"hizbQuarter":1,"sajda":false},{"number":5,"text":"\u0625\u0650\u064a\u0651\u064e\u0627\u0643\u064e \u0646\u064e\u0639\u0652\u0628\u064f\u062f\u064f \u0648\u064e\u0625\u0650\u064a\u0651\u064e\u0627\u0643\u064e \u0646\u064e\u0633\u0652\u062a\u064e\u0639\u0650\u064a\u0646\u064f","numberInSurah":5,"juz":1,"manzil":1,"page":1,"ruku":1,"hizbQuarter":1,"sajda":false},{"number":6,"text":"\u0627\u0647\u0652\u062f\u0650\u0646\u064e\u0627 \u0627\u0644\u0635\u0651\u0650\u0631\u064e\u0627\u0637\u064e \u0627\u0644\u0652\u0645\u064f\u0633\u0652\u062a\u064e\u0642\u0650\u064a\u0645\u064e","numberInSurah":6,"juz":1,"manzil":1,"page":1,"ruku":1,"hizbQuarter":1,"sajda":false},{"number":7,"text":"\u0635\u0650\u0631\u064e\u0627\u0637\u064e \u0627\u0644\u0651\u064e\u0630\u0650\u064a\u0646\u064e \u0623\u064e\u0646\u0652\u0639\u064e\u0645\u0652\u062a\u064e \u0639\u064e\u0644\u064e\u064a\u0652\u0647\u0650\u0645\u0652 \u063a\u064e\u064a\u0652\u0631\u0650 \u0627\u0644\u0652\u0645\u064e\u063a\u0652\u0636\u064f\u0648\u0628\u0650 \u0639\u064e\u0644\u064e\u064a\u0652\u0647\u0650\u0645\u0652 \u0648\u064e\u0644\u064e\u0627 \u0627\u0644\u0636\u0651\u064e\u0627\u0644\u0651\u0650\u064a\u0646\u064e","numberInSurah":7,"juz":1,"manzil":1,"page":1,"ruku":1,"hizbQuarter":1,"sajda":false}],"edition":{"identifier":"quran-simple","language":"ar","name":"Simple","englishName":"Simple","format":"text","type":"quran"}}};

// console.log( quran.data.name );

// for ( i=0; i < quran.data.ayahs.length ; i++ ){
// 	console.log(quran.data.ayahs[i].text);
// }

// console.log( quran.data.ayahs[0].text );
// console.log( quran.data.ayahs[1].text );
// console.log( quran.data.ayahs[2].text );
// console.log( quran.data.ayahs[3].text );
// console.log( quran.data.ayahs[4].text );
// console.log( quran.data.ayahs[5].text );
// console.log( quran.data.ayahs[6].text );

// var jam = 24;

// if ( jam >= 1 && jam <=11 ) {

// 	console.log( "Selamat Pagi" );

// } else if ( jam >= 12 && jam <= 15  ) {

// 	console.log( "Selamat Siang" );

// } else if ( jam >=16 && jam <= 18 ) {

// 	console.log( "Selamat Sore" );

// } else {

// 	console.log( "Selamat Malem" );

// }

function luasPersegiPanjang( panjang, lebar ) {
	var luas = panjang * lebar;
  return luas;
}
// contoh penggunaan
var luaspersegi = luasPersegiPanjang( 10, 5 );       // 50

// console.log(luaspersegi)


function sayHello( nama ){

	return alert( "Selamat siang "+ nama )

}

// sayHello( "Rian" );

// sayHello( "Yudi");

// var taman = document.getElementsByClassName('taman')
// for (i=0; i< taman.length; i++){
//   taman[i].style.backgroundColor="green";
// }


var btnGreet = document.getElementById('greet');
btnGreet.addEventListener('click', greet);

function greet(event){
	
	// console.log( event.target.textContent )

	var nama        = document.getElementById('nama').value;
	var alamatEmail = document.getElementById('alamat_email').value;

	alert( nama + ' ' + alamatEmail );
}