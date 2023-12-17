let ampm = document.getElementById('ampm');
function time(){
let timedate = new Date()
let hr = timedate.getHours();
let min = padzero(timedate.getMinutes());
let sec = padzero(timedate.getSeconds());
if(hr>12){
    hr = hr-12;
    ampm.innerHTML ="PM"
}
hr = padzero(hr)
document.getElementById('hours').innerHTML = hr;
document.getElementById('mins').innerHTML = min;
document.getElementById('secs').innerHTML = sec;
}
setInterval(time,500)
function padzero(num){
    
        return num<10?"0"+num : num
    
}