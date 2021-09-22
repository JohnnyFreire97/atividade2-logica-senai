let readlineSync = require('readline-sync');

var data_atual, data_evento, idade;
var list_usuario = 99;

data_atual = readlineSync.questionInt("Digite a data atual: Somente o dia! ");
data_evento = readlineSync.questionInt("Digite a data do Evento: Somente o dia! ");
idade = readlineSync.questionInt("Digite a idade ");



if(data_atual<data_evento){
    if(idade<=18){
        console.log("Cadastro não Permitido! Usuário menor de idade!")
    }else if(list_usuario >=100){
        console.log("Cadastro não Permitido! Capacidade Máxima permitida!")
    }
    else{
        console.log("Cadastrado com Sucesso!");
    }

}else{
    console.log("Cadastro não Permitido! Data do Evento anterior a data Atual!");
}
