<?php
session_start();
if(!(isset($_POST["submit"]))){
    header("Location: index.php");
}
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formularz - dane</title>

    <style>
        body {
            background-color: #F4D8CD;
        }

        .gridDiv {
            background-color: #1E555C;
            border: 3px solid black;
            padding: 10px;
            display: flex;
            width: 500px;
            position: relative;
            left: 50%;
            transform: translateX(-50%);
            flex-direction: column;
            font-size: 20px;
        }

        .infoDiv {
            background-color: #ACC3A6;
            display: flex;
            align-items: center;
            text-align: center;
            justify-content: center;
            word-break: break-all;
        }

        .row {
            border: 2px solid black;
            height: auto;
            display: grid;
            grid-template-columns: 1fr 1fr;
            color: #2D080A;
        }
    </style>
</head>

<body>
    <?php
	if(isset($_POST['DrvLic'])){
		$carLicense = $_POST['DrvLic'];
	}
	else{
		$carLicense = "Nieprzypisano";
	}


	if(isset($_POST['Gender'])){
		$gender = $_POST['Gender'];
	  }
	  else{
		$gender = "Nieprzypisano";
	  }
 	$imie = $_POST['Name'] ?? "";
    $nazwisko = $_POST['Surname'] ?? "";
    $pesel = $_POST['PESEL'] ?? "";
    $phoneNumb = $_POST['PhoneNumb'] ?? "";
    $street = $_POST['Street'] ?? "";
    $houseNumb = $_POST['HouseNumb'] ?? "" ;
    $flatNumb = $_POST['FlatNumb'] ?? "";
    $city = $_POST['City'] ?? "";
    $postCode = $_POST['PostCode'] ?? "";
    $date = $_POST['Date'] ?? "";
    $comment = $_POST['Comment'] ?? "";
    ?>
	<div class="gridDiv">
        <div class="row">
            <div class="infoDiv">Imie</div>
            <div class="infoDiv">
                <?php echo "$imie"; ?>
            </div>
        </div>
        <div class="row">
            <div class="infoDiv">Nazwisko:</div>
            <div class="infoDiv">
                <?php echo "$nazwisko";?>
            </div>
        </div>
        <div class="row">
            <div class="infoDiv">Pesel:</div>
            <div class="infoDiv">
                <?php echo "$pesel";?>
            </div>
        </div>
        <div class="row">
            <div class="infoDiv">Numer telefonu:</div>
            <div class="infoDiv">
                <?php echo "$phoneNumb";?>
            </div>
        </div>
        <div class="row">
            <div class="infoDiv">Ulica:</div>
            <div class="infoDiv">
                <?php echo "$street";?>
            </div>
        </div>
        <div class="row">
            <div class="infoDiv">Numer domu:</div>
            <div class="infoDiv">
                <?php echo "$houseNumb ";?>
            </div>
        </div>
        <div class="row">
            <div class="infoDiv">Numer mieszkania:</div>
            <div class="infoDiv">
                <?php echo "$flatNumb";?>
            </div>
        </div>
        <div class="row">
            <div class="infoDiv">Miasto:</div>
            <div class="infoDiv">
                <?php echo "$city";?>
            </div>
        </div>
        <div class="row">
            <div class="infoDiv">Kod pocztowy:</div>
            <div class="infoDiv">
                <?php echo "$postCode";?>
            </div>
        </div>
        <div class="row">
            <div class="infoDiv">Płeć:</div>
            <div class="infoDiv">
                <?php echo "$gender";?>
            </div>
        </div>
        <div class="row">
            <div class="infoDiv">Data urodzenia:</div>
            <div class="infoDiv">
                <?php echo "$date";?>
            </div>
        </div>
        <div class="row">
            <div class="infoDiv">Prawo jazdy:</div>
            <div class="infoDiv">
                <?php echo "$carLicense";?>
            </div>
        </div>
        <div class="row">
            <div class="infoDiv">Dodatkowy komentarz:</div>
            <div class="infoDiv">
                <?php echo "$comment";?>
            </div>
        </div>

    </div>



</body>

</html>