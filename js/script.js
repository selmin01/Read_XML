
let url="dados/dataset.xml";

$.ajax(url)
    .done(function(xml){
        $(xml).find("contribuinte").each(function(){
            $("#cards").append(`<div class="card">
                                <img src="${ $(this).find("foto").text()}" class="image-card">
                                <p class="nome"> ${ $(this).find("nome").text()} </p>
                                <p class="cpf"> ${ $(this).find("cpf").text()} </p>
                                <p class="cidade"> ${ $(this).find("cidade").text()} </p>
                                <div class="contato">
                                    <p class="celular"> ${ $(this).find("celular").text()} </p>
                                    <p class="email"> ${ $(this).find("email").text()} </p>
                                </div>
                                </div>
                                `);
        });
    })
    .fail(function(){
        alert("Ocorreu um erro na leitura do arquivo XML.");
    });



// // Crie um objeto XMLHttpRequest
// var xhttp = new XMLHttpRequest();

// // Defina a função de callback para quando a resposta estiver pronta
// xhttp.onreadystatechange = function() {
//   if (this.readyState == 4 && this.status == 200) {
//     // Parseie a resposta XML para um objeto Document
//     var xmlDoc = this.responseXML;
    
//     // A partir daqui, você pode acessar os elementos e atributos do XML usando a API DOM
    
//     // Por exemplo, vamos supor que você tem um elemento <nome> no XML:
//     var nomeElement = xmlDoc.getElementsByTagName("nome")[0];
    
//     // Obtenha o conteúdo do elemento <nome>
//     var nome = nomeElement.textContent;
    
//     // Exiba o nome no console
//     console.log(nome);
//   }
// };

// // Especifique o método HTTP e a URL do arquivo XML
// xhttp.open("GET", "dados/dataset.xml", true);

// // Envie a solicitação
// xhttp.send();
