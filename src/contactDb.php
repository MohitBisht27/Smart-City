<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
session_start();

include 'connect.php';

if(isset($_POST['contactUs'])) {
    // Validate and sanitize input
    $name = trim($conn->real_escape_string($_POST['name'] ?? ''));
    $email = trim($conn->real_escape_string($_POST['email'] ?? ''));
    $phone = trim($conn->real_escape_string($_POST['phone'] ?? ''));
    $message = trim($conn->real_escape_string($_POST['message'] ?? ''));

    // Basic validation
    $errors = [];
    if(empty($name)) $errors[] = "Name is required";
    if(empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = "Valid email is required";
    if(empty($message)) $errors[] = "Message is required";

    if(empty($errors)) {
        // Insert into database
        $sql = "INSERT INTO contacts (name, email, phone, message, created_at)
                VALUES (?, ?, ?, ?, NOW())";
        
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ssss", $name, $email, $phone, $message);
        
        if($stmt->execute()) {
            $_SESSION['success'] = "Thank you for contacting us! We'll get back to you soon.";
        } else {
            $_SESSION['error'] = "Error submitting form: " . $conn->error;
        }
        $stmt->close();
    } else {
        $_SESSION['error'] = implode("<br>", $errors);
    }

    // Redirect back to contact page
    header("Location: /test/frontend/html/contactUs.php");
    exit();
}

$conn->close();
?>