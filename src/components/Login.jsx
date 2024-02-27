


const Login = () => {
    return(
        <div className="dashboard_left_login">
            <div className="dashboard_left_login_circle">
                <img src={"https://placehold.co/200x200"} alt="not found" className="dashboard_left_login_circle_image" />
            </div>
            <form className="dashboard_left_login_form">
                <label htmlFor="accoutname">Account name</label>
                <input type="text" id="accoutname" name="accoutname" className="dashboard_left_login_form_input" /> 
             
                <label htmlFor="password">Password</label>
                <input type="text" id="password" name="password" className="dashboard_left_login_form_input" />
            </form>
            <div className="dashboard_left_login_buttons">
                <button className="dashboard_left_login_buttons_button">
                    Log in
                </button>
            </div>
            <div className="dashboard_left_login_buttons">
                <button className="dashboard_left_login_buttons_button dashboard_left_login_buttons_button-signup">
                    Sign up
                </button>
            </div>
        </div>
    )
}

export default Login;