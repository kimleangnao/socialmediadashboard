


const Signup = () => {
    return(
        <div className="dashboard_left_signup">
            <div className="dashboard_left_signup_circle">
                <img src={"https://placehold.co/200x200"} alt="not found" className="dashboard_left_signup_circle_image" />
            </div>
            <form className="dashboard_left_signup_form">
                <label htmlFor="firstname">First name</label>
                <input type="text" name="firstname" className="" />
                <label htmlFor="lastname">Last name</label>
                <input type="text" name="lastname" className="" />
                <label htmlFor="email">Email</label>
                <input type="text" name="email" className="" />
                <label htmlFor="password">Password</label>
                <input type="text" name="password" className="" />
                <label htmlFor="repassword">Password</label>
                <input type="text" name="repassword" className="" />
            </form>
            <div className="dashboard_left_signup_buttons">
                <button className="dashboard_left_signup_buttons_button dashboard_left_signup_buttons_button-signup">CREATE</button>
            </div>
            <div className="dashboard_left_signup_back">
                <button className="dashboard_left_signup_back_login">Login</button>
            </div>
        </div>
    )
}

export default Signup;