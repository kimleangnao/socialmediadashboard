


import { useState } from "react";
import UpdateCardComment from "./UpdateCardComment";
import UpdateCardCommentChildren from "./UpdateCardCommentChildren";
import UpdatePicturesStack from "./UpdatePicturesStack";

const UpdateCard = ({ commentExpand, valueOBject, images}) => {

    const [expandComments, setexpandComments] = useState(false)

    return(
        <div className="dashboard_update_display_card" >
            <div className="dashboard_update_display_card_platform" style={{ backgroundColor: (valueOBject.platform == "X" ?  "#303030" : valueOBject.platform == "Instagram"? "#E3ADAD" : "#335D84")}}>
                {valueOBject.platform}
            </div>
            <div className="dashboard_update_display_card_details" style={{ backgroundColor: (valueOBject.platform == "X" ?  "#303030" : valueOBject.platform == "Instagram"? "#E3ADAD" : "#335D84")}}>
                <div className="dashboard_update_display_card_details_profile">
                    <div className="dashboard_update_display_card_details_profile_user">
                        <div className="dashboard_update_display_card_details_profile_user_image">
                            <img src={valueOBject.userProfilePicture} alt="not found" className="dashboard_update_display_card_details_profile_user_image_url" />
                        </div>
                        <div className="dashboard_update_display_card_details_profile_user_text">
                            <p className="dashboard_update_display_card_details_profile_user_text_maintext">{valueOBject.userName}</p>
                            <p className="dashboard_update_display_card_details_profile_user_text_subtext">{valueOBject.userAbout}</p>
                        </div>
                    </div>
                    <div className="dashboard_update_display_card_details_profile_button">

                    </div>
                </div>
                <p className="dashboard_update_display_card_details_text">
                    {valueOBject.postText}
                </p>
                {/*pictures stack*/}
                <UpdatePicturesStack images={valueOBject.postImages} />

                <div className="dashboard_update_display_card_details_buttons">
                    <button className="dashboard_update_display_card_details_buttons_button">
                        {valueOBject.postLikes.length} Likes
                    </button>
                    <button onClick={() => setexpandComments(!expandComments)} className="dashboard_update_display_card_details_buttons_button">
                        {valueOBject.postComments.length} Comments
                    </button>
                    <button className="dashboard_update_display_card_details_buttons_button">
                        {valueOBject.postShares.length} Shares
                    </button>
                </div>
                <div className="dashboard_update_display_card_details_comments">
                    {
                        expandComments ? 
                            valueOBject.postComments.map((v, i) => (
                                <UpdateCardComment postId={valueOBject.postId} commentExpand={commentExpand} key={i} v={v} />
                            ))
                        : ""
                    }
                 
          
                  
            
                </div>
            </div>
        </div>
    )
}

export default UpdateCard;