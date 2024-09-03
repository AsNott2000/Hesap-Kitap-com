function kitleIndexHesap(){
    var skadin = document.getElementById('secimK').checked;
    var serkek = document.getElementById('secimE').checked;

    var boyValue = document.getElementById('boy').value;
    var kiloValue = document.getElementById('kilo').value;
    var idealKilo;
    var boyMetre = boyValue / 100;
    var BMI;
    if (serkek) {
        if (boyValue > 0) {
            document.getElementById('bos-deger').style.display='none';
            //vucu kitle indeksi
            BMI = kiloValue / (Math.pow(boyMetre, 2));
            BMI = BMI.toFixed(2);
            BMI = Number(BMI);
            document.querySelector('.bmi-sonuc').innerHTML = "<span style='font-weight:bold;'>Vücut kitle indeksiniz: </span>" + BMI  + " kg / metrekare";
            
            //ideal kilo
            idealKilo = 50 + (2.3 * ((boyValue / 2.54) - 60))
            idealKilo = idealKilo.toFixed(2);
            idealKilo = Number(idealKilo);
            document.querySelector('.ideal-kilo-sonuc').innerHTML = "<span style='font-weight:bold;'>İdeal Kilonuz: </span>" + idealKilo  + " kg";
            
            document.getElementById('cevap').style.display='block';
        }
        else{
            document.getElementById('bos-deger').style.display='block';
        }
        
    
    }
    else{
        if (boyValue > 0 && kiloValue > 0) {
            document.getElementById('bos-deger').style.display='none';
            //vucut kitle indeksi
            BMI = kiloValue / (Math.pow(boyMetre, 2));
            BMI = BMI.toFixed(2);
            BMI = Number(BMI);
            document.querySelector('.bmi-sonuc').innerHTML = "<span style='font-weight:bold;'>Vücut kitle indeksiniz: </span>" + BMI  + " kg / metrekare";
            
            //ideal kilo
            idealKilo = 45.5 + (2.3 * ((boyValue / 2.54) - 60));
            idealKilo = idealKilo.toFixed(2);
            idealKilo = Number(idealKilo);
            document.querySelector('.ideal-kilo-sonuc').innerHTML = "<span style='font-weight:bold;'>İdeal Kilonuz: </span>" + idealKilo  + " kg";

            document.getElementById('cevap').style.display='block';
        }
        else{
            document.getElementById('bos-deger').style.display='block';
        }
        
    }
}


function temizle(){
	document.getElementById('boy').value = ''
	document.getElementById('kilo').value = ''
}