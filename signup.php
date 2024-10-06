<?php
include "config.php";
// Check if the form is submitted
if(isset($_POST['signup'])){
    $name=$_POST['name'];
    $email=$_POST['email'];
    $password=$_POST['password'];
    $confirmPassword=$_POST['confirmPassword'];
    
    // Check if passwords match
if ($password!==$confirmPassword) {
    // Add error to an array for better handling
    $errors[]="Passwords do not match!";
} else {
    // Hash the password for security
    $hashedPassword=password_hash($password, PASSWORD_DEFAULT);

    // Proceed with saving the hashed password or other actions
    echo "Password hashed successfully!";
}

// Display errors if any exist
if (!empty($errors)) {
    foreach ($errors as $error) {
        echo "<p>Error: $error</p>";
    }
}


    // Insert user into the database
    $sql="INSERT INTO users(name,email, password)VALUES('$name','$email','$hashedPassword')";
    
    if ($conn->query($sql)===TRUE) {
        header("location: login.html");
    } else {
        echo "Error: ".$sql."<br>".$conn->error;
    }
}

$conn->close();
?>
