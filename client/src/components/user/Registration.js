import '../../public/css/index.css';

function Login() {
    return (
        <div class="form-wrapper">
            <h2 class="form-header">Sign Up</h2>
            <form method="post" action="/user/registration">
                <div class="mb-3">
                    <label for="firstName" class="form-label">First Name</label>
                    <input type="text" class="form-control" placeholder="Enter first name" id="firstName" name="firstName" value="{{values.firstName}}"></input>
                    {/* {{#if validationMessages.firstName}}
                <span style="color: red;">{{validationMessages.firstName}}</span>
            {{/if}} */}
                </div>
                <div class="mb-3">
                    <label for="lastName" class="form-label">Last Name</label>
                    <input type="text" class="form-control" placeholder="Enter last name" id="lastName" name="lastName" value="{{values.lastName}}"></input>
                    {/* {{#if validationMessages.lastName}}
                <span style="color: red;">{{validationMessages.lastName}}</span>
            {{/if}} */}
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="text" class="form-control" placeholder="Enter email" id="email" name="email" value="{{values.email}}"></input>
                    {/* {{#if validationMessages.email}}
                <span style="color: red;">{{validationMessages.email}}</span>
            {{/if}} */}
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="text" class="form-control" placeholder="Enter password" id="password" name="password" value="{{values.password}}"></input>
                    {/* {{#if validationMessages.passwordNull}}
                <span style="color: red;">{{validationMessages.passwordNull}}</span>
            {{/if}}
            {{#if validationMessages.passwordInvalid}}
                <span style="color: red;">Please enter a password (8 to 12 characters)<br>
                    Must constain at least: 1 lowercase, 1 uppercase, 1 number, 1 symbol</span>
            {{/if}} */}
                </div>
                <button type="submit" class="btn btn-primary">Sign up!</button>
            </form>
        </div>
    );
}

export default Login;