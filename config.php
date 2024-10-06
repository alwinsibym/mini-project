<?php
$servername="localhost";
$username="root";
$password="";
$dbname="lms";
$conn=new mysqli($servername,$username,$password,$dbname);
if($conn->connect_error){
    echo "Failed to connect DB".$conn->connect_error;
}
?>