const components = {};

components.login = ` 
<div class="login-container-all">
<div class="login-container">
<div class="aside-right">
    <div class="header">
        <h2>Hello! <p>Welcome Back</p></h2>
    </div>
    <form id="login-form">
        <div class="input-name-wrapper">
            <div class="input-wrapper">
                <input type="text" placeholder="Email" name="emailLogin">
                <div class="error" id="email-login-error"></div>
            </div>
            <div class="input-wrapper">
                <input type="password" placeholder="Password" name="passwordLogin">
                <div class="error" id="password-login-error"></div>
            </div>
            <div class="form-action">
                <button class="custom-button" type="submit" id="btn">
                    Login
                </button>
            </div>
        </div>
    </form>
    <div class="test">
        <span id="redirect-to-regiser">
            Don't have an account? Register
        </span>
    </div>
</div>
</div>
</div> `

components.register = `<div class="login-container">
<div class="aside-right">
    <div class="header">
        <h2>WELCOME TO BOOKING MOVIE</h2>
    </div>
    <form id="register-form">
        <div class="input-name-wrapper">
            <div class="input-wrapper" >
                <input type="text" placeholder="First Name" name="firstName">
                <div class="error" id="first-name-error"></div>
            </div>
            <div class="input-wrapper">
                <input type="text" placeholder="Last Name" name="lastName">
                <div class="error" id="last-name-error"></div>
            </div>
            <div class="input-wrapper">
                <input type="text" placeholder="Email" name="email">
                <div class="error" id="email-error"></div>
            </div>
            <div class="input-wrapper">
                <input type="password" placeholder="Password" name="password">
                <div class="error" id="password-error"></div>
            </div>
            <div class="input-wrapper">
                <input type="password" placeholder="Confirm Password" name="confirmPassword">
                <div class="error" id="confirmPassword-error"></div>
            </div>

            <div class="form-action">
                <button class="custom-button" type="submit" id="btn">
                    Register
                </button>
            </div>
        </div>
    </form>
    <div class="test">
        <span id="redirect-to-login">
            Already have an account? Login
        </span>
    </div>  
</div>
</div>`

