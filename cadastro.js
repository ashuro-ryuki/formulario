function Validar(){

 let email = document.getElementById('email').value;
    
 let password = document.getElementById('senha').value;
    
 let nome = document.getElementById('nome').value;
    
 let tel = document.getElementById('telefone').value;
    
 let dtnasc = document.getElementById('dtnasc').value;
    
let cpf = document.getElementById('cpf').value;
    
 let cep = document.getElementById('cep').value;
    
let estado = document.getElementById('estado').value;
    
let cidade = document.getElementById('cidade').value;
    
let bairro = document.getElementById('bairro').value;
    
let rua = document.getElementById('rua').value;
    
    
    
    
 if(!email || !password || !nome || !tel || !dtnasc || !cpf || !cep || !estado || !cidade || !bairro || !rua){
    
alert("Você não preencheu o formulario corretamente, por favor preencha os campos restantes");
    
 }
    
 else{
    
alert("campos preenchidos com sucesso");
    
 }


    
    
    
    }