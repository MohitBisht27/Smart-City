<?php

include 'db_connect.php';

if(isset($_POST['submit']))
{
    $name=$_POST['fullName'];
    $email=$_POST['email'];
    $password=$_POST['password'];
    $sql="insert into info(Name,Email,Password) values('$name','$email','$password')"
    if(mysqli_query($conn,$sql)){
        echo "<script> alert('New record inserted')</script>"
    }
}
