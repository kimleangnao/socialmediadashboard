import { useState } from "react";
import UpdatePicturesStack from "./UpdatePicturesStack";


const Update = () => {

    const [images] = useState([
        {
            imageURL: "https://placehold.co/250x400"
        },
        {
            imageURL: "https://placehold.co/250x400"
        },
        {
            imageURL: "https://placehold.co/250x400"
        },
        {
            imageURL: "https://placehold.co/250x400"
        }
    ]);



    return(
        <div className="dashboard_update">
            <div className="dashboard_update_buttons">
                <div className="dashboard_update_buttons_button dashboard_update_buttons_button-active">
                    FEEDS
                </div>
                <div className="dashboard_update_buttons_button">
                    Facebook
                </div>
                <div className="dashboard_update_buttons_button">
                    X
                </div>
            </div>
            <div className="dashboard_update_display">
                <div className="dashboard_update_display_card">
                    <div className="dashboard_update_display_card_platform">
                        Facebook
                    </div>
                    <div className="dashboard_update_display_card_details">
                        <div className="dashboard_update_display_card_details_profile">
                            <div className="dashboard_update_display_card_details_profile_user">
                                <div className="dashboard_update_display_card_details_profile_user_image">

                                </div>
                                <div className="dashboard_update_display_card_details_profile_user_text">
                                    <p className="dashboard_update_display_card_details_profile_user_text_maintext">Manifest Express</p>
                                    <p className="dashboard_update_display_card_details_profile_user_text_subtext">Traveling Agency company</p>
                                </div>
                            </div>
                            <div className="dashboard_update_display_card_details_profile_button">

                            </div>
                        </div>
                        <p className="dashboard_update_display_card_details_text">
                            Look at these beautiful trees
                            #Trees #SK #Namiisland
                        </p>
                        {/*pictures stack*/}
                        <UpdatePicturesStack images={images} />

                        <div className="dashboard_update_display_card_details_buttons">
                            <button className="dashboard_update_display_card_details_buttons_button">
                                150 Likes
                            </button>
                            <button className="dashboard_update_display_card_details_buttons_button">
                               50 Comments
                            </button>
                            <button className="dashboard_update_display_card_details_buttons_button">
                                5 Shares
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Update;