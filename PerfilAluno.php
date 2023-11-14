<!DOCTYPE html>
<html lang="pt-pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Home</title>
    <link rel="stylesheet" type="text/css" href="css/menuEstilo1.css" media="all">
    <link rel="stylesheet" href="css/tabelaestilo.css" type="text/css">

    <script type="text/javascript" src="js/js1.js"></script>
    
</head>
<script defer>
 var iframe;
 var article;
 var div;
 var denucia
 var home;
 var menu;

    window.onload = function() {
       iframe = document.getElementById("frame");
       article = document.getElementById("frameset") 
       div = document.getElementById("iframes"); 
       denucia = document.getElementById("iframeset");
       home = document.getElementById("info");
       menu = document.getElementById("menu");

       var bt1 = document.getElementById("ver");
       bt1.onclick = mostrarIframe;
       var bt2 = document.getElementById("perfil");
       bt2.onclick = mostrarIframe2;
       var bt3 = document.getElementById("propina");
       bt3.onclick = mostrarIframe3;
       var bt4 = document.getElementById("denucia");
       bt4.onclick = mostrarIframe4;
       var bt5 = document.getElementById("inicio");
       bt5.onclick = mostrarIframe5;
       var check = document.getElementById("menu-toggle");
       check.onclick = mostrarIframe1;
       
       article.classList.add("esconder");
       iframe.classList.add("esconder");
       div.classList.add("esconder");
       denucia.classList.add("esconder");
       home.classList.remove("esconder");
       
    }

    function mostrarIframe1(){
        article.classList.add("esconder");
       iframe.classList.add("esconder");
       div.classList.add("esconder");
       denucia.classList.add("esconder");
       home.classList.add("esconder");
       menu.classList.remove("hiden");
       }
    function mostrarIframe5(){
        article.classList.add("esconder");
       iframe.classList.add("esconder");
       div.classList.add("esconder");
       denucia.classList.add("esconder");
       home.classList.remove("esconder");
       menu.classList.add("hiden");

    }
    function mostrarIframe() {
        div.classList.add("esconder");
        iframe.classList.remove("esconder");
        article.classList.add("esconder");
        denucia.classList.add("esconder");
        menu.classList.add("hiden");
    }
    function mostrarIframe2() {
        article.classList.remove("esconder");
        iframe.classList.add("esconder");
        div.classList.add("esconder");
        denucia.classList.add("esconder");
        menu.classList.add("hiden");
    }
    
    function mostrarIframe3() {
        article.classList.add("esconder");
        iframe.classList.add("esconder");
        div.classList.remove("esconder");
        denucia.classList.add("esconder");
        menu.classList.add("hiden");
    }
    function mostrarIframe4() {
        article.classList.add("esconder");
        iframe.classList.add("esconder");
        div.classList.add("esconder");
        denucia.classList.remove("esconder");
        menu.classList.add("hiden");
    }
    
</script>
<body>
 
<div class="principal">
         <!-- Sidebar Menu -->
    <div class="responsive-nav">   
        <i class="fa fa-bars" id="menu-toggle">
            <input type="checkbox" id="btn-menu">
	        <label for="btn-menu">&#9776;</label>
        </i>
        <div id="menu" class="menu">
            <i class="fa fa-times" id="menu-close">
                <input type="checkbox" id="btn-close">
	            <label for="btn-close">&#9776;</label>
            </i>
            <div class="container">
                <div class="image">
                <a href="#"><img src="IMG/meio corpo2.jpg" alt="" /></a>
                </div>
                <div class="contem">
                <h4>Paulo Bunga</h4>
                <span>12ª Classe</span>
                </div>
                <nav class="main-nav" role="navigation">
                <ul class="main-menu">
                    <li><button class="btPerfil" id="btVitrine" onclick="chamaVitrine()">Vitrine</button></li><br>
                    <li><button class="btPerfil" id="btNotas" onclick="chamaNotas()">Ver Notas</button></li><br> 
                    <li><button class="btPerfil" id="btPropina"onclick="chamaPropina()">Situação Financeira</li></button><br>
                    <li><button class="btPerfil" id="btPerfil" onclick="chamaDenuncia()">Denunciar Professor(a)</button></li><br>
                    <li><button class="btPerfil" id="btPerfil" onclick="chamaChat()">Chat Turma</button></li><br>
                    <li><button class="btPerfil" id="btPerfil" onclick="chamaPerfil()">Alterar Perfil</button></li>
                </ul>
                </nav>

                <div class="social">
                <ul class="soial-icons">
                    <li>
                    <a href="https://fb.com/templatemo"><i class="fa fa-facebook"><img src="IMG\loading (2).gif" alt="Planos de Aulas" ></i></a>
                    </li>
                    <li>
                    <a href="#"><i class="fa fa-twitter"><img src="IMG\loading (2).gif" alt="Planos de Aulas" ></i></a>
                    </li>
                    <li>
                    <a href="#"><i class="fa fa-linkedin"><img src="IMG\loading (2).gif" alt="Planos de Aulas" ></i></a>
                    </li>
                    <li>
                    <a href="#"><i class="fa fa-dribbble"><img src="IMG\loading (2).gif" alt="Planos de Aulas" ></i></a>
                    </li>
                    <li>
                    <a href="#"><i class="fa fa-rss"><img src="IMG\loading (2).gif" alt="Planos de Aulas" ></i></a>
                    </li>
                </ul>
            </div>
                
                <div class="copyright">
              <p>Nome da Escola</p>
                <button id="botao">Terminar</button><br>  
                </div>
            </div>
        </div>
    </div>

    <div class="conteudo" id="conteudo">
        <section id="data">
            <h4 id="mostra"></h4>
            <h4 id="mostra1"></h4>
            <script>
            function tim(){
                var dt = new Date();
                var dia=dt.getDate();
	    var diaSem=dt.getDay()
	    var mes=dt.getMonth();
	    var ano=dt.getFullYear();
	
	    var horas=dt.getHours();
	    var minutos=dt.getMinutes();
	    var segundos=dt.getSeconds();

        if(horas <10){
            horas="0"+horas;
        }
        
        if(segundos <10){
            segundos="0"+segundos;
        }
        
        if(minutos <10){
            minutos="0"+minutos;
        }

        var meses=new Array("Janeiro","Fevereiro","Março","Abril","Maio","Jonho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro");
	    var semanas=new Array("Domingo","Segunda-Feira","Terça-Feira","Quarta-Feira","Quinta-Feira","Sexta-Feira","Sabado");
       
        mostra.innerHTML=horas+":"+minutos+":"+segundos+"<br>";
       mostra1.innerHTML=semanas[diaSem]+" - "+dia+" de "+meses[mes]+" de "+ano;
    }
        setInterval(tim,1000);
            </script>
        </section>
        <article id="notas" >

         <!-- TABELA NOTAS -->

    <div id="centro">
     <!--   <article id="calculo">
            <pre>
            MAC = Media de Avaliação Continua           NPT = Nota Da Prova do Trimestre             MFD = Média Final da Disciplina 
            NPP = Nota da Prova do Professor            MT = Média Trimestral
        </pre>
        </article> -->
        <div id="tabelaPauta" hidden>
      
        <table id="tabela">
            <caption id="pauta">
                <h2>Mini Pauta</h2>
            </caption>
            <tbody id="nota">
                <tr id="trTrimestre">
                    <td rowspan="2" class="displina">Disciplina</td>
                    <td colspan="4" class="trimestre">Iº Trimestre</td>
                    <td colspan="4" class="trimestre">IIº Trimestre</td>
                    <td colspan="4" class="trimestre">IIIº Trimestre</td>
                    <td rowspan="2" class="trimestre">MFD</td>
                </tr>
                <tr>
                    <td class="nota">MAC</td>
                    <td class="nota">NPP</td>
                    <td class="nota">NPT</td>
                    <td class="nota tab">MT</td>
                    <td class="nota">MAC</td>
                    <td class="nota">NPP</td>
                    <td class="nota">NPT</td>
                    <td class="nota tab">MT</td>
                    <td class="nota">MAC</td>
                    <td class="nota">NPP</td>
                    <td class="nota">NPT</td>
                    <td class="nota tab">MT</td>
                    
                    
                     
                </tr>
                <tr>
                    <td class="displina">Matemática</td>
                    <td>Nota1</td>
                    <td>Nota2</td>
                    <td>Nota3</td>
                    <td class="tab">Nota4</td>
                    <td>Nota1</td>
                    <td>Nota2</td>
                    <td>Nota3</td>
                    <td class="tab">Nota4</td>
                    <td>Nota1</td>
                    <td>Nota2</td>
                    <td>Nota3</td>
                    <td class="tab">Nota4</td>
                    <td>Final</td>
                </tr>
                <tr>
                    <td class="displina">Fisíca</td>
                    <td>Nota1</td>
                    <td>Nota2</td>
                    <td>Nota3</td>
                    <td class="tab">Nota4</td>
                    <td>Nota1</td>
                    <td>Nota2</td>
                    <td>Nota3</td>
                    <td class="tab">Nota4</td>
                    <td>Nota1</td>
                    <td>Nota2</td>
                    <td>Nota3</td>
                    <td class="tab">Nota4</td>
                    <td>Final</td>
                </tr>
                <tr>
                    <td class="displina">Química</td>
                    <td>Nota1</td>
                    <td>Nota2</td>
                    <td>Nota3</td>
                    <td class="tab">Nota4</td>
                    <td>Nota1</td>
                    <td>Nota2</td>
                    <td>Nota3</td>
                    <td class="tab">Nota4</td>
                    <td>Nota1</td>
                    <td>Nota2</td>
                    <td>Nota3</td>
                    <td class="tab">Nota4</td>
                    <td>Final</td>
                </tr>
                <tr>
                    <td class="displina">Informática</td>
                    <td>Nota1</td>
                    <td>Nota2</td>
                    <td>Nota3</td>
                    <td class="tab">Nota4</td>
                    <td>Nota1</td>
                    <td>Nota2</td>
                    <td>Nota3</td>
                    <td class="tab">Nota4</td>
                    <td>Nota1</td>
                    <td>Nota2</td>
                    <td>Nota3</td>
                    <td class="tab">Nota4</td>
                    <td>Final</td>
                </tr>
                <tr>
                    <td class="displina">Comportamento</td>
                
                    <td colspan="4" class="tab"></td>
                    
                    <td colspan="4" class="tab"></td>
                    
                    <td colspan="4" class="tab"></td>
                    <td colspan="4" class="tab"></td>
                </tr>
                <tr>
                    <td class="displina">Falta</td>
                    <td colspan="4" class="tab"></td>
                    <td colspan="4" class="tab"></td>
                    <td colspan="4" class="tab"></td>
                    <td colspan="4" class="tab"></td>
                </tr>
                
            </tbody>
        </table>
        <button>Ver o Gráfico comportamental</button>
</div>


<!-- TABELA PROPINAS -->
<div id="tabelaPropina" hidden>
    <table id="tabela" >
    <caption id="pauta">
        <h2>Propinas</h2>
    </caption>
    <tbody id="nota">
        <tr id="trTrimestre">
            <td rowspan="2" class="displina">Mês</td>
            <td colspan="3" class="trimestre">Valor Pago</td>
            <td colspan="3" class="trimestre">Valor multa</td>
            <td colspan="3" class="trimestre">Total Pago</td>
        </tr>
        <tr>
            <td class="nota">PROPINA</td>
            <td class="nota">15.000</td>
            <td class="nota">KZ</td>
            <td class="nota">PRESTAÇÃO/3</td>
            <td class="nota">5.000</td>
            <td class="nota">KZ</td>
            <td class="nota">PAGO</td>
            <td class="nota">RESTO</td>
            <td class="nota">TOTAL</td>
             
        </tr>
        <tr>
            <td class="displina">Fevereiro</td>
            <td>PAGO</td>
            <td>15.000</td>
            <td>00</td>
            <td>NULA</td>
            <td>000</td>
            <td>00</td>
            <td>15.000</td>
            <td>0</td>
            <td>15.000.00</td>
        </tr>
        <tr>
            <td class="displina">Março</td>
            <td>PAGO</td>
            <td>15.000</td>
            <td>00</td>
            <td>A PAGAR</td>
            <td>5.000</td>
            <td>00</td>
            <td>20.000</td>
            <td>0.0.0</td>
            <td>20.000.00</td>
        </tr>
        <tr>
            <td class="displina">Abril</td>
            <td>PAGO</td>
            <td>15.000</td>
            <td>00</td>
            <td>A PAGA</td>
            <td>5.000</td>
            <td>00</td>
            <td>15.000</td>
            <td>5.000</td>
            <td>20.000.00</td>
        </tr>
        <tr>
            <td class="displina">Maio</td>
            <td>PAGO</td>
            <td>15.000</td>
            <td>00</td>
            <td>NULA</td>
            <td>000</td>
            <td>00</td>
            <td>TOTAL</td>
            <td>15.000</td>
            <td>00</td>
        </tr>
        
    </tbody>
</table>

</div>   

<!-- TABELA DENUNCIA PROFESSOR -->

<div  id="perfil" class="denucia"hidden> 

<ul id="ulDenuncia"hidden >   
<li><button id="btDenuncia" onclick="chamaProfessor1()">Matematica1</button></li>
<li><button id="btDenuncia">Matematica2</button></li>
<li><button>Matematica3</button></li>
<li><button>Matematica4</button></li>
<li><button>Matematica5</button></li>
<li><button>Matematica6</button></li>
</ul><br><br>
<div id="divProf" hidden>
    <label for="">Disciplina</label><br>
    <img src="IMG/meio corpo2.jpg" alt="" id="imgProf"><br>
    <label for="">Nome Professor</label><br><br><br>
<ul id="ulChek">
        
  <li><p><input type="checkbox">-Professor(a) é faltoso(a) ou não é pontual</p> </li>
  <li><p><input type="checkbox">-Professor(a) é autoritário(a)</p> </li>
  <li><p><input type="checkbox">-Professor(a) não tem boa comunicação</p> </li>
  <li><p><input type="checkbox">-Professor(a) não tem domínio da matéria</p> </li>
  <li><p><input type="checkbox">-Professor(a) se apresenta mal</p> </li>
  <li><p><input type="checkbox">-Professor(a) elabora prova com perguntas que não ensinou</p></li>

</ul>
<br><br>

<button>Denunciar</button>  <button>Cancelar</button>

</div>

    
</div>

<!-- TABELA VITRINE  -->

<div id="divVitrine">

<a href="" class="linkPrev"><img class="imgPrev" src="imagem/prev.png"></a>
   <img class="imgSlide" id="imgSlide" src="imagem/book.png">

   <a href="" class="linkNext"><img class="imgNext" src="imagem/next.png"></a>  
    
</div>

<!-- TABELA CHAT  -->

<div id="divChat" hidden>

<form id="formChat">

<input type="file" id="inputFile" ><textarea id="textArea" cols="50" rows="3"></textarea><button id="btarea">Enviar</button><br>


<label id="labelChat"><img id ="imgChat"src="imagem/chat.png" >angola e um pais grande e belo</label>

</form>

</div>

<!-- TABELA ALTERAR PERFIL  --> 

<div id="divPerfil" hidden>


<form action="#" method="POST" id="formPerfil">
       <fieldset id="usuario">
           <legend>Alterar Perfil do usuario</legend><br>
           <p><label for="cNome">Nome:</label><input type="text" name="tNome" id="cNome" size="30" maxlength="30" placeholder="Nome Completo"></p><br>
           <p><label for="cSenha">Senha:</label><input type="password" name="tSenha" id="cSenha" size="20" maxlength="15" placeholder="Digite sua antiga senha" class="pass"></p><br>
           <p><label for="vSenha">Senha nova:</label><input type="password" name="tSenha" id="vSenha" size="20" maxlength="15" placeholder="Digite sua nova senha" class="pass"></p><br>
           <p><label for="pic">Foto de Perfil:</label><input type="file" name="fileArquivo" id="pic" class="img"></p>
       </fieldset>

       <fieldset id="tema">
        <legend>Alterar designer da Pagina</legend><br>
        <p><label for="phot">Alterar imagem do fundo da pagina:</label><input type="file" name="fileArquivo" id="phot" class="img"></p><br>
        <p><label for="cCor">Alterar cor do fundo da pagina:</label><input type="color" name="tCor" id="cCor" value="#fafafa" class="color"></p><br>
        <p><label for="vCor">Alterar cor do layout:</label><input type="color" name="tCor" id="vCor" value="#0000ff" class="color"></p><br>
    </fieldset>

    <button>Salvar</button>  <button>Cancelar</button>

   </form>

</div>


    

    
            
        </article> 
        <main class="info" id="info">
         
        </main>
            
    </div>

   

</div>

</body>
</html>