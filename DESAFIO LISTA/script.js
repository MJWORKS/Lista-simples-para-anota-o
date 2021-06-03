onload = function(){

    let nome = localStorage.getItem("nome")
    let p = document.getElementById("nome");
    p.innerHTML = nome;

    }

    function atualizar(element){
    let valor = element.value;
    console.log(valor)

    let p = document.getElementById("nome");
    p.innerHTML = valor;
           localStorage.setItem("nome",valor);
    }
