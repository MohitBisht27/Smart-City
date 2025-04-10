<?php
// Start session
session_start();

// Include database connection
require_once 'db_connect.php';

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data and sanitize inputs
    $email = htmlspecialchars(trim($_POST['email']));
    $password = trim($_POST['password']);
    
    // Validate inputs
    $errors = [];
    
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
    
    // If no validation errors, verify credentials
    if (empty($errors)) {
        // Check if user exists with matching email and password
        $query = "SELECT * FROM users WHERE email = ? AND password = ?";
        $stmt = $conn->prepare($query);
        $stmt->bind_param("ss", $email, $password);
        $stmt->execute();
        $result = $stmt->get_result();
        
        if ($result->num_rows === 1) {
            $user = $result->fetch_assoc();
            
            // Login successful, start session
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['user_name'] = $user['name'];
            $_SESSION['user_email'] = $user['email'];
            
            echo json_encode(["success" => true, "message" => "Login successful"]);
            exit();
        } else {
            // Invalid credentials
            echo json_encode(["success" => false, "message" => "Invalid email or password"]);
            exit();
        }
    } else {
        // Return validation errors
        echo json_encode(["success" => false, "message" => implode(", ", $errors)]);
        exit();
    }
}
?>