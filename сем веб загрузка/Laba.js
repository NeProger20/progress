function progress(){
    var load = document.getElementById('progress'); // движущая полоска
    var percent= document.getElementById('percentCount');// изменение процентов
    var counter=5;
    var progress=25;
    var id=setInterval(frame, 20);

    function frame(){
        if(progress==500 && counter==100){
            clearInterval(id);
        }else
        {
         progress =progress +5;
         counter =counter + 1;
         load.style.width=progress + 'px';
         percent.innerHTML= 'Loading ' + counter + '%';
        }
    }
}

progress();