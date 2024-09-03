//sekil secmemize yarayan kod
function sekilsecim() {
	var sdikdortgen = document.getElementById('secim').checked;
	var sucgen = document.getElementById('secimB').checked;
	var sdaire = document.getElementById('secimC').checked;

	if (sdikdortgen || sucgen) {
		document.getElementById('li_taban').style.cssText = 'display:list-item;display:flex;';
		document.getElementById('li_yukseklik').style.cssText = 'display:list-item;display:flex;';
		document.getElementById('li_yaricap').style.display = 'none';
	} else {
		document.getElementById('li_taban').style.display = 'none';
		document.getElementById('li_yukseklik').style.display = 'none';
		document.getElementById('li_yaricap').style.cssText = 'display:list-item;display:flex;';
	}
}
const pi = 3.14;
function alanhesap(){
	var sdikdortgen = document.getElementById('secim').checked;
	var sucgen = document.getElementById('secimB').checked;
	var sdaire = document.getElementById('secimC').checked;
	
	var taban_degeri = document.getElementById('taban').value;
	var yukseklik_degeri = document.getElementById('yukseklik').value;
	var yaricap_degeri = document.getElementById('yaricap').value;
	var sonuc;
	
	if (sdikdortgen) {
		if (taban_degeri > 0 && yukseklik_degeri > 0) {
			document.getElementById('bos-deger').style.display='none';
			sonuc = taban_degeri * yukseklik_degeri;
			document.querySelector('.alan-sonuc').innerHTML = "<span style='font-weight:bold;'>Ölçülerini Girdiğiniz dikdörtgenin alanı: </span>" + sonuc  + " cm²";
			document.getElementById('cevap').style.display='block';
		}
		else{
			document.getElementById('bos-deger').style.display='block';
		}
	}
	else if (sucgen){
		if (taban_degeri > 0 && yukseklik_degeri > 0){
			document.getElementById('bos-deger').style.display='none';
			sonuc = taban_degeri * yukseklik_degeri  / 2;
			document.querySelector('.alan-sonuc').innerHTML = "<span style='font-weight:bold;'>Ölçülerini Girdiğiniz üçgenin alanı: </span>" + sonuc + " cm²";
			document.getElementById('cevap').style.display='block';
		}
		else{
			document.getElementById('bos-deger').style.display='block';
		}
	}
	else {
		if (yaricap_degeri > 0){
			document.getElementById('bos-deger').style.display='none';
			sonuc = yaricap_degeri * yaricap_degeri * pi;
			document.querySelector('.alan-sonuc').innerHTML = "<span style='font-weight:bold;'>Ölçülerini Girdiğiniz dairenin alanı: </span>" + sonuc  + " cm²";
			document.getElementById('cevap').style.display='block';
		}
		else{
			document.getElementById('bos-deger').style.display='block';
		}
		
	}
}

function temizle(){
	document.getElementById('taban').value = ''
	document.getElementById('yukseklik').value = ''
	document.getElementById('yaricap').value = ''
}

