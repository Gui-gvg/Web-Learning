var num=prompt("Digite o salário base ")
var strHTMl="";
var nLinha=0

for(i=2;i<=num;i=i+2){
    var cssLinha= "linha_"+nLinha;
     
        strHTMl +="<div class='row " +cssLinha+ "'>";
        strHTMl +="<div class='col-md-12'> "+i + " ^ " + 2 + " = "+ (i*i)+"</div>";
        strHTMl +="</div>";
    
        nLinha = (nLinha +1)%3;
        
}

document.getElementById("conteudo").innerHTML = strHTMl;