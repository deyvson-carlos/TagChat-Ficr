// function logar(){
//     var email = document.getElementById('email').value;
//     var senha = document.getElementById('senha').value;

//     var msg = ""
//     var erro = false

//     if (!email && !senha){
//         msg += "Campos de E-mail e Senha são obrigatórios!\n"
//         erro = true
//        }

//    if(!email){
//     msg += "E-mail Obrigatório!\n"
//     erro = true
//    }

//    if (!senha){
//     msg += "Senha Obrigatória!\n"
//     erro = true
//    }

//    if(email !== "deyvsoncarlos@tagchat.com" && senha !== "123"){
//     msg += "Usuário ou senha incorretos!\n"
//     erro = true   
//     }
    
//     if(!erro){
//         if(email == "deyvsoncarlos@tagchat.com" && senha == "123"){
//             alert('Usuário logado com Sucesso!');
//             location.href = ".";
//         }
//     }
//     else{
//     alert(msg)
//     }
//  }




 function logar(){
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    if(email == "deyvson@ficr.com" && senha == "123"){
        alert('Usuário logado com Sucesso!');
        location.href = "feed.html";
    }
    else{
        alert('Usuário ou senha incorretos!');
    }
 }