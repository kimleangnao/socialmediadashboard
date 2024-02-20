



const UpdatePicturesStack = ({images}) => {
    return(
        <div className="dashboard_update_display_card_details_pictures">
            <div className="dashboard_update_display_card_details_pictures_frame">
                {
                    images.length > 1 ? images.map((v, i) => (
                        <button key={i} className="dashboard_update_display_card_details_pictures_frame_picture">
                            <img src={v.imageURL} alt="not found" className="dashboard_update_display_card_details_pictures_frame_picture_url" />
                        </button>
                    )) : ""
                }
            
             
            </div>
            <div className="dashboard_update_display_card_details_pictures_more">
                +3
            </div>
        </div>
    )
}


export default UpdatePicturesStack;