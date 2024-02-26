import { useEffect, useState } from "react";




const UpdatePicturesStack = ({images}) => {
    //split image into a pile of 3 and the rest
    const [threeSetImages, setthreeSetImages] = useState([]);
    const [restImages, setrestImages] = useState([]);

    useEffect(() => {
        let newImage = [...threeSetImages];
        let restImage = [...restImages];

        for(let i = 0 ; i < images.length; i++){
            if(i < 4){
                newImage.push(images[i]);
            }else{
                restImage.push(images[i])
            }
            
        }

        setthreeSetImages(newImage);
        setrestImages(restImage);

    }, [])

    return(
        <div className="dashboard_update_display_card_details_pictures">
            <div className="dashboard_update_display_card_details_pictures_frame">
                {
                    threeSetImages.length > 3 ? threeSetImages.map((v, i) => (
                        <button key={i} className="dashboard_update_display_card_details_pictures_frame_picture">
                            <img src={v.imageURL} alt="not found" className="dashboard_update_display_card_details_pictures_frame_picture_url" />
                        </button>
                    )) : threeSetImages.length == 1 ? 
                    (
                        <button key={1} className="dashboard_update_display_card_details_pictures_frame_picture dashboard_update_display_card_details_pictures_frame_picture-huge">
                            <img src={threeSetImages[0].imageURL} alt="not found" className="dashboard_update_display_card_details_pictures_frame_picture_url" />
                        </button>
                    ) :  threeSetImages.length == 2 ? threeSetImages.map((v, i) => (
                        <button key={i} className="dashboard_update_display_card_details_pictures_frame_picture dashboard_update_display_card_details_pictures_frame_picture-huge-2">
                        <img src={v.imageURL} alt="not found" className="dashboard_update_display_card_details_pictures_frame_picture_url" />
                    </button>
                    )) : threeSetImages.length == 3 ? threeSetImages.map((v, i) => (
                        <button key={i} className="dashboard_update_display_card_details_pictures_frame_picture dashboard_update_display_card_details_pictures_frame_picture-huge-3">
                        <img src={v.imageURL} alt="not found" className="dashboard_update_display_card_details_pictures_frame_picture_url" />
                    </button>
                    )) : ""
                }
            
             
            </div> 
            {
                restImages.length == 0 ? "" 
                :  
                <div className="dashboard_update_display_card_details_pictures_more">
                    +{restImages.length}
                </div>
            } 
           
        </div>
    )
}


export default UpdatePicturesStack;