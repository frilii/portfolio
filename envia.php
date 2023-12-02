<?php

    $nome = addcslashes($_POST['nome']);
    $nome = addcslashes($_POST['email']);
    $nome = addcslashes($_POST['telefone']);
    $nome = addcslashes($_POST['mensagem']);

    $para = "devpaiola@gmail.com";
    $assunto = "Mensagens";

    $corpo = "Nome: ".$nome."\n"."Email: ".$email."\n"."Telefone: ".$telefone."\n"."Mensagem: ".$mensagem;

    $cabeca = "From: gualbertofabricio4@gmail.com"."\n"."Reply-to: ".$email."\n"."X=Mailer:PHP/".phpversion();

    if(mail($para,$assunto$,$corpo,$cabeca)){
        echo("E-mail enviado com sucesso!");
    }else{
        echo("Houve um erro ao enviar o email!");
    }

?>