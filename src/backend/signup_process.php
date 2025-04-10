<?php
// Include database connection
require_once 'db_connect.php';

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data and sanitize inputs
    $fullName = htmlspecialchars(trim($_POST['fullName']));
    $email = htmlspecialchars(trim($_POST['email']));
    $password = trim($_POST['password']);
    
    // Validate inputs
    $errors = [];
    
    // Validate full name
    if (empty($fullName)) {
        $errors[] = "Full name is required";
    }
    
    // Validate email
    if (empty($email)) {
        $errors[] = "Email is required";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Invalid email format";
    }
    
    // Validate password
    if (empty($password)) {
        $errors[] = "Password is required";
    }
    
    // Check if email already exists
    $checkEmail = "SELECT * FROM users WHERE email = ?";
    $stmt = $conn->prepare($checkEmail);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();
    
    if ($result->num_rows > 0) {
        $errors[] = "Email already exists";
    }
    
    // If no errors, insert user into database
    if (empty($errors)) {
        // Insert query using the exact field names from your database
        $insertQuery = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
        $stmt = $conn->prepare($insertQuery);
        $stmt->bind_param("sss", $fullName, $email, $password);
        
        if ($stmt->execute()) {
            // Registration successful
            echo json_encode(["success" => true, "message" => "Registration successful!"]);
            exit();
        } else {
            // Registration failed
            echo json_encode(["success" => false, "message" => "Error: " . $stmt->error]);
            exit();
        }
    } else {
        // Return errors
        echo json_encode(["success" => false, "message" => implode(", ", $errors)]);
        exit();
    }
}
?>