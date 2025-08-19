const nome = prompt("Qual o seu nome?");
const idade = prompt("Quantos anos você tem?");
const linguagem = prompt(" Qual linguagem de programação você está estudando?"); 
const msg = `Olà ${nome} , você tem ${idade} anos e ja esta aprendendo  ${linguagem}`;
alert(msg);
const pergunta = `Você gosta de estudar ${linguagem} ? Responda com o número 1 para SIM ou 2 para NÃO.` ;

const resposta = prompt(`Você gosta de estudar ${linguagem} ? Responda com o número 1 para SIM ou 2 para NÃO.`)


  if (resposta == 1)  {

    alert("Muito bom! Continue estudando e você terá muito sucesso.")

  } 
if (resposta == 2)  {

    alert("Ahh que pena... Já tentou aprender outras linguagens?")
  } 

      