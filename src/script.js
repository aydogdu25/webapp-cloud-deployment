	var renkler = {
		black: 0,
        brown: 1,
        red: 2,
		orange: 3,
		yellow: 4,
		green: 5,
		blue: 6,
		purple: 7,
		gray: 8,
		white: 9,
		gold: 5,
		silver: 10,
		transparent: 20
        };

function hesapla() {
  
  
  var renk1 = renkler[document.getElementById("select1").value];
  var renk2 = renkler[document.getElementById("select2").value];         
  var renk3 = renkler[document.getElementById("select3").value];
  var renk4 = renkler[document.getElementById("select4").value];
  
  var katsayi1 = renk1;
  var katsayi2 = renk2 ;
  var katsayi3 = Math.pow(10, renk3);
  var katsayi4 = renk4;

  var direnc = (katsayi1*10 + katsayi2) * katsayi3;

  var tolerans = renk4;
  if (tolerans == 1) {
    tolerans = "±1%";
  } else if (tolerans == 2) {
    tolerans = "±2%";
  } else if (tolerans == 3)	{
    tolerans = "±3%";
  }else if (tolerans == 4) {
    tolerans = "±4%";
  }else if (tolerans == 6) {
    tolerans = "±0.25%";
  }else if (tolerans == 7) {
    tolerans = "±0.10%";
  }else if (tolerans == 8) {
    tolerans = "±0.05%";
  }else if (tolerans == 5) {
    tolerans = "±5%";
  }else if (tolerans == 10) {
    tolerans = "±10%";
  }
  else {
    tolerans = "±20%";
  }
    
  var simge = "Ω";
  if (direnc >= "1000" && direnc <= "999999") {
    simge = "kΩ";	
    direnc = direnc / 1000;
  } 
  else if (direnc >= "1000000" && direnc <= 999999999){
	simge = "MΩ";
	direnc = direnc / 1000000;
  }
  else if (direnc >= "1000000000"){
	simge = "GΩ";
	direnc = direnc / 1000000000;
  
  }
   
  
  document.getElementById("goster").innerHTML = direnc + " " + simge + " " + tolerans;
  document.getElementById("goster").style.display = "block";   

  
}
function changeColor(bandId, color) {
	document.getElementById(bandId).style.backgroundColor = color;
	hesapla(); 
	 
        }