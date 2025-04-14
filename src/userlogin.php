<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Register & Login</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
    />
    <link rel="stylesheet" href="style.css" />
    <style>
      .pass {
        position: relative;
      }

      .pass img {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        width: 20px;
        height: 20px;
        cursor: pointer;
      }
    </style>
  </head>
  <body>
    <div class="container" id="signup" style="display: none">
      <h1 class="form-title">Register</h1>
      <form method="post" action="register.php">
        <div class="input-group">
          <i class="fas fa-user"></i>
          <input type="text" name="fName" id="fName" placeholder="First Name" required />
          <label for="fname">First Name</label>
        </div>
        <div class="input-group">
          <i class="fas fa-user"></i>
          <input type="text" name="lName" id="lName" placeholder="Last Name" required />
          <label for="lName">Last Name</label>
        </div>
        <div class="input-group">
          <i class="fas fa-envelope"></i>
          <input type="email" name="email" id="signUpEmail" placeholder="Email" required />
          <label for="signUpEmail">Email</label>
        </div>
        <div class="input-group">
          <div class="pass">
            <i class="fas fa-lock"></i>
            <input
              type="password"
              name="password"
              maxlength="16"
              placeholder="Password"
              id="signUpPassword"
              required
            />
            <img
              src="../test/eye-close.svg"
              alt="Toggle Password"
              id="signUpEyeIcon"
            />
          </div>
        </div>
        <input type="submit" class="btn" value="Sign Up" name="signUp" />
      </form>
      <div class="links">
        <p>Already Have Account ?</p>
        <button id="signInButton">Sign In</button>
      </div>
    </div>

    <div class="container" id="signIn">
      <h1 class="form-title">Sign In</h1>
      <form method="post" action="register.php">
        <div class="input-group">
          <i class="fas fa-envelope"></i>
          <input type="email" name="email" id="signInEmail" placeholder="Email" required />
          <label for="signInEmail">Email</label>
        </div>
        <div class="input-group">
          <div class="pass">
            <i class="fas fa-lock"></i>
            <input
              type="password"
              name="password"
              maxlength="16"
              placeholder="Password"
              id="signInPassword"
              required
            />
            <img
              src="../test/eye-close.svg"
              alt="Toggle Password"
              id="signInEyeIcon"
            />
          </div>
        </div>
        <input type="submit" class="btn" value="Sign In" name="signIn" />
      </form>
      <div class="links">
        <p>Don't have account yet?</p>
        <button id="signUpButton">Sign Up</button>
      </div>
    </div>
    <script src="script.js"></script>
  </body>
</html>
