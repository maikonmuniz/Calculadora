function calc(valor){
    var obj = document.getElementById("resultado").value;
    var result = 0;
    let operador = ["+", "-","/", "*"];
    var verdadeiro = true;
    var ponto = true;
    var guardaPonto = 0;
    var localiza = 0;
    var opComp = "";
    var opCompResult = true;
    var erro = false;
        if(Number.parseInt(valor) || valor == "0"){
            obj = document.getElementById("resultado").value += valor;
        }
        for(var i = 0;i < obj.length;i++){
            
            for(var op = 0;op < operador.length;op++){
            if(obj[i] == operador[op]){
                verdadeiro = false;
                guardaPonto = i;
                localiza = guardaPonto+1;
                opComp = obj[i];
                }
            }
        }
        for(var p = guardaPonto;p<obj.length;p++){
            if(obj[p] == "."){
                ponto = !ponto;
            }
        }
        if(verdadeiro){

            if(Number.parseInt(obj[0]) && ponto && valor == "." ||
             obj[0] == "0" && ponto && valor == "."){
                document.getElementById("resultado").value+=valor;
            }
        }else{
            guardaPonto += 1;
            if(Number.parseInt(obj[guardaPonto]) && ponto && valor == "."
             || obj[guardaPonto] == "0" && valor == "." && ponto){
                document.getElementById("resultado").value +=valor;
        }
        }
        if(Number.parseInt(obj[0]) && verdadeiro && valor == "+" || 
        obj[0] == "0" && verdadeiro && valor == "+" || Number.parseInt(obj[0]) 
        && verdadeiro && valor == "-" || obj[0] == "0" && verdadeiro && valor == "-" || Number.parseInt(obj[0]) 
        && verdadeiro && valor == "*" || obj[0] == "0" && verdadeiro && valor == "*" || Number.parseInt(obj[0])
        && verdadeiro && valor == "/" || obj[0] == "0" && verdadeiro && valor == "/"){

            obj = document.getElementById("resultado").value += valor;

        }
            if(!verdadeiro && opComp != "" && valor == "resultado"){
                document.getElementById("resultado").value = "erro de operação";
            }
            if(erro){
                 document.getElementById("resultado").value = "erro de operação";
                verdadeiro = true;
            }
            if(valor == "resultado" && Number.parseInt(obj[0]) ||
             valor == "resultado" && obj[0] == "0"){
                result = eval(obj);
                obj = document.getElementById("resultado").value = result;
                verdadeiro = true;
            }

        }