
function chamaConfirm(){
document.getElementById("centroLogin1").hidden = false;
document.getElementById("centroLogin").hidden = true;
}

function chamaLogin(){
    document.getElementById("centroLogin1").hidden = true;
    document.getElementById("centroLogin").hidden = false;
    }

    function chamaPerfil1(){
        window.open("PerfilAluno.php","_self")
    }



    //PERFIL ALUNO


    function chamaNotas(){
        document.getElementById("tabelaPauta").hidden = false;
        document.getElementById("tabelaPropina").hidden = true;
        document.getElementById("divVitrine").hidden = true;
        document.getElementById("divChat").hidden = true;
        document.getElementById("divPerfil").hidden = true;
        document.getElementById("perfil").hidden = true;
        document.getElementById("ulDenuncia").hidden = true;
    }

    function chamaPropina(){
        document.getElementById("divVitrine").hidden = true;
        document.getElementById("tabelaPauta").hidden = true;
        document.getElementById("perfil").hidden = true;
        document.getElementById("divChat").hidden = true;
        document.getElementById("divPerfil").hidden = true;
        document.getElementById("tabelaPropina").hidden = false;
        document.getElementById("ulDenuncia").hidden = true;
    }

    function chamaDenuncia(){
        document.getElementById("divVitrine").hidden = true;
        document.getElementById("tabelaPauta").hidden = true;
        document.getElementById("divChat").hidden = true;
        document.getElementById("divPerfil").hidden = true;
        document.getElementById("perfil").hidden = false;
        document.getElementById("tabelaPropina").hidden = true;
        document.getElementById("ulDenuncia").hidden = false;
        document.getElementById("divProf").hidden = true;
    }

    function chamaProfessor1(){
        document.getElementById("divProf").hidden = false;
        document.getElementById("ulDenuncia").hidden = true;
    }

    function chamaVitrine(){
        document.getElementById("tabelaPauta").hidden = true;
        document.getElementById("perfil").hidden = true;
        document.getElementById("tabelaPropina").hidden = true;
        document.getElementById("divChat").hidden = true;
        document.getElementById("divVitrine").hidden = false;
        document.getElementById("divPerfil").hidden = true;
        document.getElementById("ulDenuncia").hidden = true;
    }

    function chamaPerfil(){
        document.getElementById("tabelaPauta").hidden = true;
        document.getElementById("perfil").hidden = true;
        document.getElementById("tabelaPropina").hidden = true;
        document.getElementById("divVitrine").hidden = true;
        document.getElementById("divChat").hidden = true;
        document.getElementById("divPerfil").hidden = false;
        document.getElementById("ulDenuncia").hidden = true;
    }

    function chamaChat(){
        document.getElementById("tabelaPauta").hidden = true;
        document.getElementById("perfil").hidden = true;
        document.getElementById("tabelaPropina").hidden = true;
        document.getElementById("divVitrine").hidden = true;
        document.getElementById("divChat").hidden = false;
        document.getElementById("divPerfil").hidden = true;
        document.getElementById("ulDenuncia").hidden = true;
    }
