

let res= window.document.getElementById('resultado');
res.addEventListener('click', retornabtn);


function retornabtn(){ 
     let dia = document.getElementById('dias').selectedIndex;
     let mes = document.getElementById('meses').selectedIndex;
     dia = dia - 1;
     mes = mes - 1;
     let muralresultado = vetordia[dia]+ ' '+vetormes[mes];

     let m = document.getElementById('mural')
     m.setAttribute('value', muralresultado);   

     

}

let vetordia = ["AQUARIUS"
        ,"LARANJA MECÂNICA"
        ,"WOODY ALLEN"
        ,"M.NIGTH SHYAMALAN"
        ,"FILME BRASILEIRO"
        ,"MERYL STREEP"
        ,"LA LA LAND"
        ,"HUGH JACKMAN"
        ,"HARRY POTTER"
        ,"STAR WARS"
        ,"KRISTEN STEWART"
        ,"STANLEY KUBRICK"
        ,"INTERESTELAR"
        ,"TARANTINO"
        ,"CLUBE DE LUTA"
        ,"SCORSESE"
        ,"IRMÃOS COEN"
        ,"TRAINSPOTING"
        ,"LEONARDO DI CAPRIO"
        ,"X-MAN"
        ,"VIGO MORTENSEN"
        ,"RICARDO DARIN"
        ,"BOLLYWOOD"
        ,"CHRISTOFER NOLAN"
        ,"AMÉLIE POULAN"
        ,"STEVEN SPIELBERG"
        ,"FILME ARGENTINO"
        ,"CAPITÃO FANTÁSTICO"
        ,"DONNIE DARKO"
        ,"A BELA E A FERA"
        ,"VIOLA DAVIS"] 
let vetormes = ["ARRASA NAS TELAS"
        ,"É PARA TODO MUNDO"
        ,"É CLÁSSICO"
        ,"É INCOMPREENDIDO"
        ,"É A MELHOR COISA"
        ,"É MUITO AMOR"
        ,"É SÓ ZUEIRA"
        ,"MERECE OSCAR"
        ,"É PARA ASSISTIR COM O CRUSH"
        ,"NÃO É MELHOR QUE PIPOCA DOCE"
        ,"É CULT"
        ,"MEU CORAÇÃO NUM GUENTA"]
