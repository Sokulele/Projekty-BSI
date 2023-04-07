<?php
session_start();
if(!(isset($_POST["submit"]))){
    header("Location: logowanie.html");
}

$login = "admin";
$password = "admin";

if($login == $_POST["login"] && $password == $_POST["password"]){
    $_SESSION["login"] = $login;
    $_SESSION["password"] = $password;
    $_SESSION["ifLogged"] = "true";
    
    header("Location: logged.php");
}
else{
    header("Location: logowanie.html");
}
?>