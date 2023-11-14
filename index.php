<!DOCTYPE html>
<html lang="pt-pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="css/style.css" media="all">
    <script type="text/javascript" src="js/js1.js"></script>
</head>
<body>
    <!--  LOGIN PRINCIPAL -->

    <div class="centroLogin" id="centroLogin">

    <div id="tudo" class="tudo">
        <figure id="img" class="img">
            <img src="IMG/User_icon-up.png" alt="" id="pic" class="pic">
            <figcaption id="legenda" class="legenda">Sing In</figcaption>
        </figure>
        <form action="" id="login" class="login">
            <div class="foto" id="pessoa">
            <input type="image" src="IMG/friends.png" alt="" id="user" class="image"> 
        </div>  
         <input type="text" id="texto" class="texto" placeholder="Username"><br><br>
         <div class="foto" id="chave">
            <input type="image" src="IMG/cadeado.JPG" alt="" id="key" class="image"> 
        </div> 
         <input type="password" id="pass" class="pass" placeholder="Password"><br><br>
            <input onclick="chamaConfirm()"  type="button" value="Entrar" id="enviar" class="enviar"><br><br>
            <input type="checkbox" name="" id="check" class="check"><label for="">Guardar dados de login</label>
        </form>
        <br>
        <hr>
    </div>
</div>

 <!--  LOGIN SECUNDARIO -->
    
 <div class="centroLogin1"  id="centroLogin1" hidden >

<div id="tudo" class="tudo">
    <figure id="img" class="img">
        <img src="IMG/User_icon-up.png" alt="" id="pic" class="pic">
        <figcaption id="legenda" class="legenda">Nome da Escola</figcaption>
    </figure>
    <form action="" id="login" class="login">
     <div id="div1">  
    <img  id="ft1" src="IMG/2.jpg" ><br><br>

    <label>Celestino Fragoso</label><br><br>
    <label>Classe: 12</label><br><br>

    

    <input type="button" value="Confirmar" id="enviar1" class="enviar" onclick="chamaPerfil1()">
    <input onclick="chamaLogin()" type="button" value="Cancelar" id="enviar1" class="enviar">
</div>
        <br><br>
        <input type="checkbox" name="" id="check" class="check"><label for="">Guardar dados de login</label>
    </form>
    <br>
    <hr>
</div>
</div>
</body>


</html>