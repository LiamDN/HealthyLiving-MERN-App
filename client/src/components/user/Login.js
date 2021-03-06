import '../../public/css/index.css';

function Login() {
    return (
        <div class="form-wrapper">
            <h2 class="form-header">Welcome back!</h2>
            <form method="post" action="/user/login">
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="text" class="form-control" placeholder="Enter email" id="email" name="email" value="{{values.email}}"></input>
                    {/* {{#if validationMessages.email}}
                    <span style="color: red;">{{validationMessages.email}}</span>
                {{/if}} */}
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label" >Password</label>
                    <input type="password" class="form-control" placeholder="Enter password" id="password" name="password" value="{{values.password}}"></input>
                    {/* {{#if validationMessages.password}} */}
                    {/* <span style="color: red;">{{validationMessages.password}}</span> */}
                    {/* {{/if}} */}
                </div>
                <div class="role-radios mb-3">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="userRole" id="dataEntryClerk" value="clerk"></input>
                        <label class="form-check-label" for="flexRadioDefault1">
                            Data Entry Clerk
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="userRole" id="customer" value="customer" checked></input>
                        <label class="form-check-label" for="flexRadioDefault2">
                            Customer
                        </label>
                    </div>
                </div>

                <button type="submit" class="btn btn-primary">Log In</button>
                {/* {{#each errors}} */}
                {/* <div class="mt-3" style="color: red;">{{this}}</div> */}
                {/* {{/each}} */}
            </form>
        </div>
    );
}

export default Login;