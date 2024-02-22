


const UpdateCardComment = () => {
    return(
        <div className="dashboard_update_display_card_details_comments_comment">
            <div className="dashboard_update_display_card_details_comments_comment_profile">
                <div className="dashboard_update_display_card_details_comments_comment_profile_image">
                    <img src={"https://placehold.co/80x80"} alt="not found" className="dashboard_update_display_card_details_comments_comment_profile_image_img" />
                </div>
            </div>
            <div className="dashboard_update_display_card_details_comments_comment_details">
                <div className="dashboard_update_display_card_details_comments_comment_details_name">
                    Jack Xerta
                </div>
                <div className="dashboard_update_display_card_details_comments_comment_details_text">
                    So beautiful, can’t wait to go there at the end of this year!!!
                </div>
                <div className="dashboard_update_display_card_details_comments_comment_details_functions">
                    <button className="dashboard_update_display_card_details_comments_comment_details_functions_button dashboard_update_display_card_details_comments_comment_details_functions_button-bold">
                        15 Likes
                    </button>
                    <button className="dashboard_update_display_card_details_comments_comment_details_functions_button dashboard_update_display_card_details_comments_comment_details_functions_button-bold">
                        15 Replies
                    </button>
                    <button className="dashboard_update_display_card_details_comments_comment_details_functions_button">
                        02/22/2024
                    </button>
                    <button className="dashboard_update_display_card_details_comments_comment_details_functions_button">
                        <i className="fa-solid fa-caret-down"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UpdateCardComment;