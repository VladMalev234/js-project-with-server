<?php
    //var_dump($_COOKIE);
    if ( !isset($_COOKIE['email']) OR trim($_COOKIE['email']) ==''){
        header("Location: index.html");
        exit; 
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link  rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>
    <link rel="shortcut icon" href="favicon.png" type="image/png">
    <link  rel="stylesheet" href="css/style.css">

    <title>USER Cabinet</title>
</head>
    <body>

    <div class="container">
        <div class="row center-align">
            <div class="col l12">
                <h1 class="user-cabinet-hesder">User Cabinet</h1>
            </div>
            <div class="col l12">
                <button class="waves-effect waves-light btn blue lighten-1" id = "logout">
                    <i class="material-icons right">keyboard_tab</i>Log-out</button>
            </div>
        </div>
    </div>

    <form class="container" >
            <div class="row">
                <div class="input-field col l7">
                    <input type="text" name="name" id="signup-name" class="validate">
                    <label class="active" for="signup-name">Name</label>
                </div>
                <div class="input-field col l7">
                    <input type="text" name="pass" id="signup-pass" class="validate">
                    <label class="active" for="signup-pass">Password</label>
                </div>
                <div class="input-field col l7">
                    <input  name="birthday" id="signup-birthday" type="text" class="datepicker">
                    <label class="active" for="signup-birthday">Birthday</label>
                </div>
                <div class="col l12"> sex:
                    <label class="col l7">
                        <input type="radio" value="male" name="sex"  class="sex with-gap">
                        <span>male</span>
                    </label>
                    <label class="col l7">
                        <input type="radio" value="female" name="sex"   class="sex with-gap">
                        <span>female</span>
                    </label>
                    <label class="col l7">
                        <input type="radio" value="other" name="sex"   class="sex with-gap">
                        <span>other</span>
                    </label>
                </div>
                <div class="col l7 update right-align">
                    <input  type="submit" value="update" id="signup-submit" class="waves-effect waves-light btn blue lighten-1">
                </div>
            </div>
    </form>
            
    

        <script src="js/materialize.min.js"></script>
        <script src="script/logout.js"></script>
        <script src="script/ajaxs.js"></script>
        <script src="script/get_user_data.js"></script>

    </body>
</html>