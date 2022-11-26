//  const s = document.querySelector('.windspeed').value/1.609;
// // let windchill_fahr = 35.74 + 0.6215*t - 35.75*(s**0.16) + 0.4275*t*(s**0.16);
// // let windchill_cels = (windchill_fahr - 32)*5/9;
// // if (t<=50 && s>3){
// //     document.querySelector('.windchill').innerHTML = 'N/A';
// // } 
// //     else{
// //         document.querySelector('.windchill').innerHTML = windchill_cels;
// //     }

// console.log(temperature);
// console.log(s);
function calcchill(){
    let t = document.getElementById("theInputTemp").value*1.8+32;
    let s = document.getElementById("windspeed").value/1.609;
    
    console.log(t);
    
    let windchill_fahr = 35.74 + 0.6215*t - 35.75*(s**0.16) + 0.4275*t*(s**0.16);
    let windchill_cels = (windchill_fahr - 32)*5/9;
    if (t<=50 && s>3){
        document.querySelector('.windchill').innerHTML = Math.round(windchill_cels) + ' ℃';
    } 
        else{
            document.querySelector('.windchill').innerHTML = ' N/A';
        }
    }