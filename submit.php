<?php
    $connection = mysqli_connect("localhost", "root", "", "loginTable");
    if (!$connection) {
        die("Connection failed: " . mysqli_connect_error());
        echo("connectionlost");
    }

    $fullName=$_POST['fullName'];
    $userEmail=$_POST['userEmail'];
    $userPassword=$_POST['userPassword'];
    
    $valQuery = "INSERT INTO formElement (name, email, password) values ('$fullName', '$userEmail', '$userPassword')";
    $query = mysqli_query($connection, $valQuery);
    return { message: "Form Submitted Succesfully", code: 200 };
?>