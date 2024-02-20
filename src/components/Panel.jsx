


const Panel = ({imageProfile}) => {
    return(
        <div className="dashboard_left_panel"> 
            <div className="dashboard_left_panel_user"> 
                <div className="dashboard_left_panel_user_image"> 
                    <img src={imageProfile} alt="not found" className="dashboard_left_panel_user_image_profile" />
                </div>
                <div className="dashboard_left_panel_user_identity"> 
                    <p className="dashboard_left_panel_user_identity_name"> 
                        Arthur Leywin
                    </p>
                    <p className="dashboard_left_panel_user_identity_role"> 
                        Social Media Manager
                    </p>
                    <p className="dashboard_left_panel_user_identity_company"> 
                        Manifest Express
                    </p>
                </div>
            </div>
            <div className="dashboard_left_panel_connect">
                <div className="dashboard_left_panel_connect_input">
                    <input type="text" placeholder="link to your profile" className="dashboard_left_panel_connect_input_link" />

                    <div className="dashboard_left_panel_connect_input_button dashboard_left_panel_connect_input_button-active">
                        <i className="fa-solid fa-link"></i>
                    </div>
                </div>
                <div className="dashboard_left_panel_connect_input">
                    <input type="text" value="www.instagram.com/mexpress" placeholder="link to your profile" className="dashboard_left_panel_connect_input_link" />

                    <div className="dashboard_left_panel_connect_input_button dashboard_left_panel_connect_input_button-active">
                        <i className="fa-solid fa-link"></i>
                    </div>
                </div>
                <div className="dashboard_left_panel_connect_input">
                    <input type="text" value="www.twitter.com/mexpress" placeholder="link to your profile" className="dashboard_left_panel_connect_input_link" />

                    <div className="dashboard_left_panel_connect_input_button dashboard_left_panel_connect_input_button-active">
                        <i className="fa-solid fa-link"></i>
                    </div>
                </div>
              

                <button className="dashboard_left_panel_connect_button">
                    New Line
                </button>
            </div>
        </div>
    )
}

export default Panel;