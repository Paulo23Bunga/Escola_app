var form2 = document.getElementById("form2");
var bt = document.getElementById("button1");
var bt1 = document.getElementById("button2");
var bt2 = document.getElementById("button3");
var bt3 = document.getElementById("button4");
var bt4 = document.getElementById("button5");
var conteudo = document.getElementById("conteudo");
var linha = document.getElementById("not");
var quadro = document.getElementById("imgQuadro");


// BOTAO ADMINISTRADOR


var btsAdm = document.getElementById("btAdmi");
var btAluno = document.getElementById("aluno");
var formAluno = document.getElementById("formAluno");
var formProfessor = document.getElementById("formProfessor");
var btProfessor = document.getElementById("professor");
var formFinanca = document.getElementById("formFinanca");
var btfinanca = document.getElementById("financa");
var formAnuncio = document.getElementById("formAnuncio");
var btAnuncio = document.getElementById("anuncio");
var formFerramenta = document.getElementById("formFerramenta");
var btFerramenta = document.getElementById("ferramenta");


// BOTAO INFORMACAO 

var btsInforma = document.getElementById("btInforma");

var formInfAluno = document.getElementById("formInfAluno");
var btInfAluno = document.getElementById("btInfAluno");

var formInfProf = document.getElementById("formInfProf");
var btInfProf = document.getElementById("btInfProf");

var formInfTurma = document.getElementById("formInfTurma");
var btInfTurma = document.getElementById("btInfTurma");

var formInfFinanca = document.getElementById("formInfFinanca");
var btInfFinanca = document.getElementById("btInfFinanca");


// BOTAO ADICIONAR NOTAS 


var formAdNota = document.getElementById("formAdNota");



// BOTAO MESSAGEM 

var btsMessagem = document.getElementById("btMessagem");

var formInfAluno = document.getElementById("formInfAluno");
var btInfAluno = document.getElementById("btInfAluno");

var formInfProf = document.getElementById("formInfProf");
var btInfProf = document.getElementById("btInfProf");

var formInfTurma = document.getElementById("formInfTurma");
var btInfTurma = document.getElementById("btInfTurma");

var formInfFinanca = document.getElementById("formInfFinanca");
var btInfFinanca = document.getElementById("btInfFinanca");




// BOTAO GRAFICO

function Grafico(){
 formAdNota.hidden = 1;
formInfTurma.hidden = 1;
// formAdNotaAluno.hidden = 1;
// formAdNotaTurma.hidden = 1;
formInfFinanca.hidden = 1;
formInfProf.hidden = 1;
formFinanca.hidden = 1;
formInfAluno.hidden = 1;
formFerramenta.hidden = 1;
btsInforma.hidden = 1;
formProfessor.hidden = 1;
formAluno.hidden = 1;
formAnuncio.hidden = 1;
btsMessagem.hidden = 1;
btsAdm.hidden = 1;
quadro.hidden = 1;
linha.hidden = 1;
form2.hidden = 0;
conteudo.hidden = 0;
bt.style.background = "#1a9d3c";
bt2.style.background = "hsl(172, 88%, 35%)";
bt1.style.background = "hsl(172, 88%, 35%)";
bt3.style.background = "hsl(172, 88%, 35%)";
bt4.style.background = "hsl(172, 88%, 35%)";
btAluno.style.background = "hsl(172, 88%, 35%)";
btProfessor.style.background = "hsl(172, 88%, 35%)";
btfinanca.style.background = "hsl(172, 88%, 35%)";
btAnuncio.style.background = "hsl(172, 88%, 35%)";
btFerramenta.style.background = "hsl(172, 88%, 35%)";


 
  
}


// BOTAO ADMINISTRADOR  

function Administrador(){

formAdNota.hidden = 1;
formInfAluno.hidden = 1;
formInfFinanca.hidden = 1;
formInfTurma.hidden = 1;
formInfProf.hidden = 1;
btsAdm.hidden = 0;
btsMessagem.hidden = 1;
quadro.hidden = 0;
linha.hidden = 0;
form2.hidden = 1;
conteudo.hidden = 0;
btsInforma.hidden = 1;
bt1.style.background = "#1a9d3c";
bt.style.background = "hsl(172, 88%, 35%)";
bt2.style.background = "hsl(172, 88%, 35%)";
bt3.style.background = "hsl(172, 88%, 35%)";
bt4.style.background = "hsl(172, 88%, 35%)";
btInfAluno.style.background = "hsl(172, 88%, 35%)";
btInfProf.style.background = "hsl(172, 88%, 35%)";
btInfTurma.style.background = "hsl(172, 88%, 35%)";
btInfFinanca.style.background = "hsl(172, 88%, 35%)";

}

function BtAluno(){

formInfTurma.hidden = 1;
formInfFinanca.hidden = 1;
formInfProf.hidden = 1;
formInfAluno.hidden = 1;
formFerramenta.hidden = 1;
formFinanca.hidden = 1;
formAluno.hidden = 0;
formProfessor.hidden = 1;
formAnuncio.hidden = 1;
btAluno.style.background = "#1a9d3c";
btProfessor.style.background = "hsl(172, 88%, 35%)";
btfinanca.style.background = "hsl(172, 88%, 35%)";
btAnuncio.style.background = "hsl(172, 88%, 35%)";
btFerramenta.style.background = "hsl(172, 88%, 35%)";
btInfAluno.style.background = "hsl(172, 88%, 35%)";
btInfProf.style.background = "hsl(172, 88%, 35%)";
btInfTurma.style.background = "hsl(172, 88%, 35%)";

}

function BtProfessor(){

formInfTurma.hidden = 1;
formInfProf.hidden = 1;
formInfAluno.hidden = 1;
formFerramenta.hidden = 1;
formFinanca.hidden = 1;
formAluno.hidden = 1;
formAnuncio.hidden = 1;
formProfessor.hidden = 0;
btProfessor.style.background = "#1a9d3c";
btAluno.style.background = "hsl(172, 88%, 35%)";
btfinanca.style.background = "hsl(172, 88%, 35%)";
btAnuncio.style.background = "hsl(172, 88%, 35%)";
btFerramenta.style.background = "hsl(172, 88%, 35%)";
btInfAluno.style.background = "hsl(172, 88%, 35%)";
btInfProf.style.background = "hsl(172, 88%, 35%)";
btInfTurma.style.background = "hsl(172, 88%, 35%)";
}


function BtFinanca(){

formInfTurma.hidden = 1;   
formInfProf.hidden = 1;
formInfAluno.hidden = 1;
formFerramenta.hidden = 1;
formAluno.hidden = 1;
formFinanca.hidden = 0;
formProfessor.hidden = 1;
formAnuncio.hidden = 1;
btfinanca.style.background = "#1a9d3c";
btProfessor.style.background = "hsl(172, 88%, 35%)";
btAluno.style.background = "hsl(172, 88%, 35%)";
btAnuncio.style.background = "hsl(172, 88%, 35%)";
btFerramenta.style.background = "hsl(172, 88%, 35%)";
btInfAluno.style.background = "hsl(172, 88%, 35%)";
btInfProf.style.background = "hsl(172, 88%, 35%)";
btInfTurma.style.background = "hsl(172, 88%, 35%)";
}

function BtAnuncio(){

formInfTurma.hidden = 1;
formInfProf.hidden = 1;
formInfAluno.hidden = 1;
formFerramenta.hidden = 1;
formAnuncio.hidden = 0;
formAluno.hidden = 1;
formFinanca.hidden = 1;
formProfessor.hidden = 1;
btAnuncio.style.background ="#1a9d3c";
btfinanca.style.background = "hsl(172, 88%, 35%)";
btProfessor.style.background = "hsl(172, 88%, 35%)";
btAluno.style.background = "hsl(172, 88%, 35%)";
btFerramenta.style.background = "hsl(172, 88%, 35%)";
btInfAluno.style.background = "hsl(172, 88%, 35%)";
btInfProf.style.background = "hsl(172, 88%, 35%)";
btInfTurma.style.background = "hsl(172, 88%, 35%)";

}

function BtFerramenta(){

formInfTurma.hidden = 1;
formInfProf.hidden = 1;
formInfAluno.hidden = 1;
formFerramenta.hidden = 0;
formAnuncio.hidden = 1;
formAluno.hidden = 1;
formFinanca.hidden = 1;
formProfessor.hidden = 1;
btFerramenta.style.background ="#1a9d3c";
btfinanca.style.background = "hsl(172, 88%, 35%)";
btProfessor.style.background = "hsl(172, 88%, 35%)";
btAluno.style.background = "hsl(172, 88%, 35%)";
btAnuncio.style.background = "hsl(172, 88%, 35%)";
btInfAluno.style.background = "hsl(172, 88%, 35%)";
btInfProf.style.background = "hsl(172, 88%, 35%)";
btInfTurma.style.background = "hsl(172, 88%, 35%)";

}

// BOTAO INFORMAÇÕES

   function Informacao(){
      
    formAdNota.hidden = 1;
    conteudo.hidden = 0;
    quadro.hidden = 0;
    linha.hidden = 0;
    btsInforma.hidden = 0;
    btsMessagem.hidden = 1;
    btsAdm.hidden = 1;
    form2.hidden = 1;
    formFinanca.hidden = 1;
    formFerramenta.hidden = 1;
    formProfessor.hidden = 1;
    formAluno.hidden = 1;
    formAnuncio.hidden = 1;
    bt2.style.background = "#1a9d3c";
    bt3.style.background = "hsl(172, 88%, 35%)";
    bt1.style.background = "hsl(172, 88%, 35%)";
    bt4.style.background = "hsl(172, 88%, 35%)";
    bt.style.background = "hsl(172, 88%, 35%)";
    btAluno.style.background = "hsl(172, 88%, 35%)";
    btProfessor.style.background = "hsl(172, 88%, 35%)";
    btfinanca.style.background = "hsl(172, 88%, 35%)";
    btAnuncio.style.background = "hsl(172, 88%, 35%)";
    btFerramenta.style.background = "hsl(172, 88%, 35%)";
    btInfTurma.style.background = "hsl(172, 88%, 35%)"; 
    btInfFinanca.style.background = "hsl(172, 88%, 35%)"; 
  


}

// BT INFORMACAO ALUNO 

function InfAluno(){
   
  linha.hidden = 0; 
  formInfTurma.hidden = 1;
  formInfProf.hidden = 1;
  formInfFinanca.hidden = 1;
  formInfAluno.hidden = 0;
  quadro.hidden = 1;
  btInfAluno.style.background = "#1a9d3c";
  btInfProf.style.background = "hsl(172, 88%, 35%)";
  btInfTurma.style.background = "hsl(172, 88%, 35%)";
  btInfFinanca.style.background = "hsl(172, 88%, 35%)"; 
  

}


 // BT INFORMACAO PROFESSOR 

function InfProf(){
  
  linha.hidden = 0;
  formInfTurma.hidden = 1;  
  formInfAluno.hidden = 1;
  formInfFinanca.hidden = 1;
  quadro.hidden = 1;
  formInfProf.hidden = 0;
  btInfProf.style.background = "#1a9d3c";
  btInfAluno.style.background = "hsl(172, 88%, 35%)";
  btInfTurma.style.background = "hsl(172, 88%, 35%)";
  btInfFinanca.style.background = "hsl(172, 88%, 35%)"; 

}

 // BT INFORMACAO PROFESSOR 

  function InfTurma(){
  
  
  linha.hidden = 1;
  formInfAluno.hidden = 1;
  formInfFinanca.hidden = 1;
  formInfTurma.hidden = 0;
  quadro.hidden = 1;
  formInfProf.hidden = 1;
  btInfTurma.style.background = "#1a9d3c";
  btInfAluno.style.background = "hsl(172, 88%, 35%)";
  btInfProf.style.background = "hsl(172, 88%, 35%)";
  btInfFinanca.style.background = "hsl(172, 88%, 35%)"; 

}


 // BT INFORMACAO FINANCA 

  function InfFinanca(){
  
  
  linha.hidden = 1;
  formInfAluno.hidden = 1;
  formInfFinanca.hidden = 0;
  formInfTurma.hidden = 1;
  quadro.hidden = 1;
  formInfProf.hidden = 1;
  btInfFinanca.style.background = "#1a9d3c";
  btInfTurma.style.background = "hsl(172, 88%, 35%)";
  btInfAluno.style.background = "hsl(172, 88%, 35%)";
  btInfProf.style.background = "hsl(172, 88%, 35%)";

}



// BT INFORMACAO ALUNO 

function InfAluno(){
   
  linha.hidden = 0; 
  formInfTurma.hidden = 1;
  formInfProf.hidden = 1;
  formInfFinanca.hidden = 1;
  formInfAluno.hidden = 0;
  quadro.hidden = 1;
  btInfAluno.style.background = "#1a9d3c";
  btInfProf.style.background = "hsl(172, 88%, 35%)";
  btInfTurma.style.background = "hsl(172, 88%, 35%)";
  btInfFinanca.style.background = "hsl(172, 88%, 35%)"; 
  

}


 // BT INFORMACAO PROFESSOR 

function InfProf(){
  
  linha.hidden = 0;
  formInfTurma.hidden = 1;  
  formInfAluno.hidden = 1;
  formInfFinanca.hidden = 1;
  quadro.hidden = 1;
  formInfProf.hidden = 0;
  btInfProf.style.background = "#1a9d3c";
  btInfAluno.style.background = "hsl(172, 88%, 35%)";
  btInfTurma.style.background = "hsl(172, 88%, 35%)";
  btInfFinanca.style.background = "hsl(172, 88%, 35%)"; 

}

 // BT INFORMACAO PROFESSOR 

  function InfTurma(){
  
  
  linha.hidden = 1;
  formInfAluno.hidden = 1;
  formInfFinanca.hidden = 1;
  formInfTurma.hidden = 0;
  quadro.hidden = 1;
  formInfProf.hidden = 1;
  btInfTurma.style.background = "#1a9d3c";
  btInfAluno.style.background = "hsl(172, 88%, 35%)";
  btInfProf.style.background = "hsl(172, 88%, 35%)";
  btInfFinanca.style.background = "hsl(172, 88%, 35%)"; 

}


 // BT INFORMACAO FINANCA 

  function InfFinanca(){
  
  
  linha.hidden = 1;
  formInfAluno.hidden = 1;
  formInfFinanca.hidden = 0;
  formInfTurma.hidden = 1;
  quadro.hidden = 1;
  formInfProf.hidden = 1;
  formInfProf.hidden = 1;
  btInfFinanca.style.background = "#1a9d3c";
  btInfTurma.style.background = "hsl(172, 88%, 35%)";
  btInfAluno.style.background = "hsl(172, 88%, 35%)";
  btInfProf.style.background = "hsl(172, 88%, 35%)";

}


// BOTAO ADICIONAR NOTAS

   function AdNota(){
       
    conteudo.hidden = 0;
    quadro.hidden = 1;
    linha.hidden = 1;
    btsInforma.hidden = 1;
    btsMessagem.hidden = 1;
    btsAdm.hidden = 1;
    form2.hidden = 1;
    formInfAluno.hidden = 1;
    formAdNota.hidden = 0;
    formFinanca.hidden = 1;
    formFerramenta.hidden = 1;
    formProfessor.hidden = 1;
    formInfProf.hidden = 1;
    formAluno.hidden = 1;
    formAnuncio.hidden = 1;
    formInfFinanca.hidden = 1;
    formInfTurma.hidden = 1;
    bt3.style.background = "#1a9d3c";
    bt1.style.background = "hsl(172, 88%, 35%)";
    bt4.style.background = "hsl(172, 88%, 35%)";
    bt2.style.background = "hsl(172, 88%, 35%)";
    bt.style.background = "hsl(172, 88%, 35%)";
    btAluno.style.background = "hsl(172, 88%, 35%)";
    btProfessor.style.background = "hsl(172, 88%, 35%)";
    btfinanca.style.background = "hsl(172, 88%, 35%)";
    btAnuncio.style.background = "hsl(172, 88%, 35%)";
    btFerramenta.style.background = "hsl(172, 88%, 35%)";
    btInfTurma.style.background = "hsl(172, 88%, 35%)"; 
    btInfFinanca.style.background = "hsl(172, 88%, 35%)"; 
    btInfAluno.style.background = "hsl(172, 88%, 35%)";
    btInfProf.style.background = "hsl(172, 88%, 35%)";


}


// MESSAGEM

function Messagem(){

    btsMessagem.hidden = 0;
    formAdNota.hidden = 1;
    conteudo.hidden = 0;
    quadro.hidden = 0;
    linha.hidden = 0;
    btsInforma.hidden = 1;
    btsAdm.hidden = 1;
    form2.hidden = 1;
    formFinanca.hidden = 1;
    formFerramenta.hidden = 1;
    formProfessor.hidden = 1;
    formAluno.hidden = 1;
    formAnuncio.hidden = 1;

   bt4.style.background = "#1a9d3c";
   bt3.style.background = "hsl(172, 88%, 35%)";
    bt1.style.background = "hsl(172, 88%, 35%)";
    bt2.style.background = "hsl(172, 88%, 35%)";
    bt.style.background = "hsl(172, 88%, 35%)";
}



