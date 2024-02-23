

import UpdateCardCommentChildren from "./UpdateCardCommentChildren";

const UpdateCardComment = ({postId,commentExpand, v}) => {


    return(
        <div>
            <div className="dashboard_update_display_card_details_comments_comment">
                <div className="dashboard_update_display_card_details_comments_comment_profile">
                    <div className="dashboard_update_display_card_details_comments_comment_profile_image">
                        <img src={"https://placehold.co/80x80"} alt="not found" className="dashboard_update_display_card_details_comments_comment_profile_image_img" />
                    </div>
                </div>
                <div className="dashboard_update_display_card_details_comments_comment_details">
                    <div className="dashboard_update_display_card_details_comments_comment_details_name">
                        {v.userName}
                    </div>
                    <div className="dashboard_update_display_card_details_comments_comment_details_text">
                        {v.userComment}
                    </div>
                    <div className="dashboard_update_display_card_details_comments_comment_details_functions">
                        <button className="dashboard_update_display_card_details_comments_comment_details_functions_button dashboard_update_display_card_details_comments_comment_details_functions_button-bold">
                            {v.likes.length} Likes
                        </button>
                        <button className="dashboard_update_display_card_details_comments_comment_details_functions_button dashboard_update_display_card_details_comments_comment_details_functions_button-bold">
                            {v.comments.length} Replies
                        </button>
                        <button className="dashboard_update_display_card_details_comments_comment_details_functions_button">
                            {v.date}
                        </button>
                        <button onClick={() => commentExpand(postId, v.id)} className="dashboard_update_display_card_details_comments_comment_details_functions_button">
                            <i className="fa-solid fa-caret-down"></i>
                        </button>
                    </div>
                </div>
            </div>
            {
                v.expand ? (<UpdateCardCommentChildren  />) : ""
            }
         
        </div>
    )
}

export default UpdateCardComment;