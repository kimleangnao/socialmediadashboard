
//commnet  directly under the post's comments
import { useRef } from "react";


const NewChildrenComment = () => {
    
    const textAreaRef = useRef(null);

    const handleInput = () => {
        textAreaRef.current.style.height = 'auto';
        textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px';
    }

    return(
        <div className="dashboard_update_display_card_details_comments_new ">
            <div className="dashboard_update_display_card_details_comments_new-connection">
                <div className="dashboard_update_display_card_details_comments_new-connection_box dashboard_update_display_card_details_comments_new-connection_box-1">
                    
                </div>
                <div className="dashboard_update_display_card_details_comments_new-connection_box dashboard_update_display_card_details_comments_new-connection_box-2">
                
                </div>
                <div className="dashboard_update_display_card_details_comments_new-connection_box dashboard_update_display_card_details_comments_new-connection_box-3">
                
                </div>
                <div className="dashboard_update_display_card_details_comments_new-connection_box dashboard_update_display_card_details_comments_new-connection_box-4">
                
                </div>
            </div>
            <div className="dashboard_update_display_card_details_comments_new_left">
                <div className="dashboard_update_display_card_details_comments_new_left_circle">
                    <img src={"https://placehold.co/85x85"} alt="not found" className="dashboard_update_display_card_details_comments_new_left_circle_image" />
                </div>
            </div>
            <div className="dashboard_update_display_card_details_comments_new_right">
                <div className="dashboard_update_display_card_details_comments_new_right_name">
                    Alexander De
                </div>
                <textarea placeholder="Type your comment here..." ref={textAreaRef} onInput={handleInput} className="dashboard_update_display_card_details_comments_new_right_input" >
                
                </textarea>
                <div className="dashboard_update_display_card_details_comments_new_right_button">
                    <button className="dashboard_update_display_card_details_comments_new_right_button_post">
                        POST
                    </button>
                </div>
            
        
            </div>
        </div>
    )
}

export default NewChildrenComment;