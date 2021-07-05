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
                    Đăng nhập
                </button>
            </div>
        </div>
    </form>
    <div class="test">
        <span id="redirect-to-regiser">
            Bạn chưa có tài khoản ? Đăng ký
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
                <input type="text" placeholder="Họ và Tên Đệm" name="firstName">
                <div class="error" id="first-name-error"></div>
            </div>
            <div class="input-wrapper">
                <input type="text" placeholder="Tên" name="lastName">
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
                    Đăng ký
                </button>
            </div>
        </div>
    </form>
    <div class="test">
        <span id="redirect-to-login">
            Bạn đã có tài khoản? Đăng nhập
        </span>
    </div>  
</div>
</div>`

