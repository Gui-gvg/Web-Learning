
function calculaimposto(){
    var num = parseFloat(document.getElementById("salario").value);
    var salario = num.toFixed(2);
    if (salario <= 1000) {
        document.getElementById("resultado").innerHTML = ("Isento de impostos.");
        document.getElementById("sFinal").innerHTML = ("Salario final: R$ " + salario);
    } else {
        if (salario > 1000 && salario <= 2500) {
            var imposto = salario * 0.125
            document.getElementById("resultado").innerHTML = ("Valor a pagar: R$ " + imposto.toFixed(2));
            var total = (salario - (salario * 0.125));
            document.getElementById("sFinal").innerHTML = ("Salario final: R$ " + total.toFixed(2));
        } else {
            if (salario > 2500 && salario <= 5000) {
                var imposto1 = salario * 0.25
                document.getElementById("resultado").innerHTML = ("Valor a pagar: R$ " + imposto1.toFixed(2));
                var total1 = (salario - (salario * 0.25));
                document.getElementById("sFinal").innerHTML = ("Salario final: R$ " + total1.toFixed(2));
            } else {
                if (salario > 5000) {
                    var imposto2 = salario - 1300
                    document.getElementById("resultado").innerHTML = ("Valor a pagar: R$ " + imposto2.toFixed(2));
                    var total2 = (salario - 1300);
                    document.getElementById("sFinal").innerHTML = ("Salario final: R$ " + total2.toFixed(2));
                } else{
                    alert("O valor digitado é inválido.")
                }
            }
        }
    }
}