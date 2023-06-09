<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,400&family=Nunito:ital,wght@0,300;0,400;0,500;0,700;1,700&display=swap"
        rel="stylesheet">

    <link rel="stylesheet" href="./css/style3.css">
    <link rel="stylesheet" href="./css/btnA.css">
    <title>Formularz</title>
</head>

<body>

    <div class="formula" name="form">
        <form id="Form" method="POST" action="formData.php">
            <div class="row">
                <label for="Name">Imie:</label>
                <input type="text" name="Name" id="Name" placeholder="Imię" maxlength="25">
            </div>

            <div class="row">
                <label for="Surname">Nazwisko:</label>
                <input type="text" name="Surname" id="Surname" placeholder="Nazwisko" maxlength="25">

            </div>

            <div class="row">
                <label for="PESEL">PESEL:</label>
                <input type="number" name="PESEL" id="PESEL" placeholder="xxxxxxxxxxx"
                    onKeyPress="if(this.value.length>10) return false;" maxlength="11">
            </div>

            <div class="row">
                <label for="PhoneNumb">Numer telefonu:</label>
                <input type="number" name="PhoneNumb" id="PhoneNumb" placeholder="XXXXXXXXX"
                    onKeyPress="if(this.value.length>8) return false;" maxlength="9">
            </div>

            <div class="row">
                <label for="Street">Nazwa ulicy/osiedla:</label>
                <input type="text" name="Street" id="Street" placeholder="Ulica/Osielde" maxlength="30">

            </div>

            <div class="row">
                <label for="HouseNumb">Numer domu:</label>
                <input type="text" name="HouseNumb" id="HouseID" maxlength="10" placeholder="99 / 99A / A99"
                    maxlength="10">
            </div>

            <div class="row">
                <label for="FlatNumb">Numer mieszkania<span class="opcional">*</span>:</label>
                <input type="text" name="FlatNumb" id="FlatID" placeholder="99 / 99A / A99" maxlength="10">

            </div>

            <div class="row">
                <label for="City">Miasto:</label>
                <input type="text" name="City" id="City" placeholder="Miasto" maxlength="25">

            </div>

            <div class="row">
                <label for="PostCode">Kod pocztowy:</label>
                <input type="text" name="PostCode" id="PostCode" placeholder="xx-xxx" pattern="[0-9]{2}-{0-9}{3}"
                    onKeyPress="if(this.value.length>5) return false;" maxlength="6">

            </div>

            <div class="row">
                <label>Płeć:</label>
                <div>
                    <input type="radio" id="Mezczyzna" name="Gender" value="Mężczyzna">
                    <label for="Mezczyzna">Mężczyzna</label>
                    <input type="radio" id="Kobieta" name="Gender" value="Kobieta">
                    <label for="Kobieta">Kobieta</label>

                </div>
            </div>

            <div class="row">
                <label for="Date">Data urodzenia:<br>
                    <span id="errorDate"></span></label>
                <input type="date" name="Date" id="Date">

            </div>
            <div class="row">
                <label>Prawo jazdy: </label>
                <div>
                    <input type="radio" value="Posiadane" id="Own" name="DrvLic">
                    <label for="Own">Posiadane</label>
                    <input type="radio" value="Nieposiadane" id="NotOwn" name="DrvLic">
                    <label for="NotOwn">Brak</label>

                </div>

            </div>

            <div class="row">
                <label for="Comments">Uwagi<span class="opcional">*</span>:</label>
                <textarea id="Comments" rows="3" cols="30" name="Comment" placeholder="Wpisz swoje uwagi"></textarea>

            </div>
            <div class="submit">
                <input type="submit" name="submit">
            </div>

        </form>
    </div>





    <div class="returnDiv">
        <a href="../index.html">
            <button class="btnAnime"> Powrót na stronę główną</button>
        </a>
    </div>


</body>

</html>