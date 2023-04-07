<?php
session_start();
if(!(isset($_SESSION["ifLogged"]))){
    header("Location: logowanie.html");
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Logged In</title>

    <style>
        body{
            background-color: #A9B18F;
        }
        .container {
            display: flex;
            flex-direction: column;
            position: relative;
            left: 50%;
            transform: translateX(-50%);
            width: 500px;
            height: 150px;
            padding: 20px;
            background-color: #5B7B7A;
            border-radius: 10px;
            box-shadow: 0 0 100px rgba(0, 0, 0, 0.6);
            text-align: center;
            align-items: center;
        }

        h2 {
            font-size: 35px;
            color: #091E05;
            margin-bottom: 20px;
        }

        button {
            background-color: #004F2D;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            font-size: 20px;
            cursor: pointer;
            transition-duration: 0.2s;
            
        }

        button:hover {
            background-color: #1B2F33;

        }
       
    </style>
</head>
<body>
    <div class="container">
        <h2>
            <?php
            echo "Witaj ".$_SESSION["login"];
            ?>
        </h2>
        <button onclick="window.location.href='loggedOut.php'">Go to Another Page</button>
    </div>
</body>
</html>
