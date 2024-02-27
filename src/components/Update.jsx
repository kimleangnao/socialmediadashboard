import { useState } from "react";

import UpdateCard from "./UpdateCard";


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

    const [userInfo, setuserInfo] = useState({
        id: "u_0001",
        username: "Manifestexpress",
        fullName: "Arthur Leywin",
        role: "Social Media Manager",
        companyName: "Manifest Express",
        linked: [
            {
                id: "l_001",
                platform: "Facebook",
                link: "www.facebook.com/manifestexpress",
                connection: true,
                signIn : true
            },
            {
                id: "l_002",
                platform: "X",
                link: "www.twitter.com/manifestexpress",
                connection: true,
                signIn : true
            },
            {
                id: "l_003",
                platform: "Instagram",
                link: "www.instagram.com/manifestexpress",
                connection: true,
                signIn : true
            }
        ],
        updateNotification: [
            {
                id: "n_001",
                platform: "",
                postId: "",
                commentId: "",
                userName: "",
                userId: "",
                commentText: "",
            },
            {
                id: "n_002",
                platform: "",
                postId: "",
                commentId: "",
                userName: "",
                userId: "",
                commentText: "",
            },
            {
                id: "n_003",
                platform: "",
                postId: "",
                commentId: "",
                userName: "",
                userId: "",
                commentText: "",
            }
        ],
        posts: [
            {
                postId: "p_0001",
                userId: "u_0001",
                platform: "Facebook",
                userName: "Manifest Express",
                userAbout: "Travel Agency Company",
                userProfilePicture: "https://placehold.co/85x85",
                postText: "Look at these beautiful trees #Trees #SK #Namiisland",
                postImages: [
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
                    },
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
                ],
                postLikes: [
                    {
                        id: "pl_001",
                        userId: "us_001",
                        userName: "Alexa Lisa",
                        date: "2/23/2024"
                    },
                    {
                        id: "pl_002",
                        userId: "us_002",
                        userName: "Xue Xin",
                        date: "2/22/2024"
                    },
                    {
                        id: "pl_003",
                        userId: "us_003",
                        userName: "Ley Lin",
                        date: "2/21/2024"
                    },
                    {
                        id: "pl_004",
                        userId: "us_004",
                        userName: "Ken Alx",
                        date: "2/22/2024"
                    }
                ],
                postComments: [
                    {
                        id: "pc_001",
                        userId: "us_001",
                        userName: "Alexa Lisa",
                        userComment: "I want to be there right now!!!",
                        expand: false,
                        likes: [
                            {
                                id: "pl_001",
                                userId: "us_001",
                                userName: "Alexa Lisa",
                                date: "2/23/2024"
                            }
                        ],
                        comments : [
                            {
                                id: "pc_0011",
                                userId: "us_002",
                                userName: "Xue Xin",
                                userComment: "Go with me :D",
                                likes: [
                                    {
                                        id: "pl_001",
                                        userId: "us_001",
                                        userName: "Alexa Lisa",
                                        date: "2/23/2024"
                                    }
                                ],
                                date: "2/24/2024"
                            }
                        ],
                        date: "2/23/2024"
                    }
                ],
                postShares: [
                    {
                        id: "",
                        userId: "",
                        userName: "",
                        date: ""
                    }
                ]

            },
            {
                postId: "p_0002",
                userId: "u_0001",
                platform: "X",
                userName: "Manifest Express",
                userAbout: "Travel Agency Company",
                userProfilePicture: "https://placehold.co/85x85",
                postText: "Look at these beautiful trees #Trees #SK #Namiisland",
                postImages: [
                    {
                        imageURL: "https://placehold.co/250x400"
                    },
                    {
                        imageURL: "https://placehold.co/250x400"
                    },
                    {
                        imageURL: "https://placehold.co/250x400"
                    }

                ],
                postLikes: [
                    {
                        id: "pl_001",
                        userId: "us_001",
                        userName: "Alexa Lisa",
                        date: "2/23/2024"
                    },
                    {
                        id: "pl_002",
                        userId: "us_002",
                        userName: "Xue Xin",
                        date: "2/22/2024"
                    },
                    {
                        id: "pl_003",
                        userId: "us_003",
                        userName: "Ley Lin",
                        date: "2/21/2024"
                    },
                    {
                        id: "pl_004",
                        userId: "us_004",
                        userName: "Ken Alx",
                        date: "2/22/2024"
                    }
                ],
                postComments: [
                    {
                        id: "pc_001",
                        userId: "us_001",
                        userName: "Alexa Lisa",
                        userComment: "I want to be there right now!!!",
                        likes: [
                            {
                                id: "pl_001",
                                userId: "us_001",
                                userName: "Alexa Lisa",
                                date: "2/23/2024"
                            }
                        ],
                        comments : [
                            {
                                id: "pc_0011",
                                userId: "us_002",
                                userName: "Xue Xin",
                                userComment: "Go with me :D",
                                likes: [
                                    {
                                        id: "pl_001",
                                        userId: "us_001",
                                        userName: "Alexa Lisa",
                                        date: "2/23/2024"
                                    }
                                ],
                                date: "2/24/2024"
                            }
                        ],
                        date: "2/23/2024"
                    }
                ],
                postShares: [
                    {
                        id: "",
                        userId: "",
                        userName: "",
                        date: ""
                    }
                ]

            },
            {
                postId: "p_0003",
                userId: "u_0001",
                platform: "Instagram",
                userName: "Manifest Express",
                userAbout: "Travel Agency Company",
                userProfilePicture: "https://placehold.co/85x85",
                postText: "Look at these beautiful trees #Trees #SK #Namiisland",
                postImages: [
                    {
                        imageURL: "https://placehold.co/250x400"
                    }
                ],
                postLikes: [
                    {
                        id: "pl_001",
                        userId: "us_001",
                        userName: "Alexa Lisa",
                        date: "2/23/2024"
                    },
                    {
                        id: "pl_002",
                        userId: "us_002",
                        userName: "Xue Xin",
                        date: "2/22/2024"
                    },
                    {
                        id: "pl_003",
                        userId: "us_003",
                        userName: "Ley Lin",
                        date: "2/21/2024"
                    },
                    {
                        id: "pl_004",
                        userId: "us_004",
                        userName: "Ken Alx",
                        date: "2/22/2024"
                    }
                ],
                postComments: [
                    {
                        id: "pc_001",
                        userId: "us_001",
                        userName: "Alexa Lisa",
                        userComment: "I want to be there right now!!!",
                        likes: [
                            {
                                id: "pl_001",
                                userId: "us_001",
                                userName: "Alexa Lisa",
                                date: "2/23/2024"
                            }
                        ],
                        comments : [
                            {
                                id: "pc_0011",
                                userId: "us_002",
                                userName: "Xue Xin",
                                userComment: "Go with me :D",
                                likes: [
                                    {
                                        id: "pl_001",
                                        userId: "us_001",
                                        userName: "Alexa Lisa",
                                        date: "2/23/2024"
                                    }
                                ],
                                date: "2/24/2024"
                            }
                        ],
                        date: "2/23/2024"
                    }
                ],
                postShares: [
                    {
                        id: "",
                        userId: "",
                        userName: "",
                        date: ""
                    }
                ]

            }
        ]
    })


    const commentExpand = (postId, commentId) => {
        let information = {...userInfo};
        let findPost;
        console.log(postId, commentId)
        for(let i = 0; i < information.posts.length; i++){
    
            if(information.posts[i].postId == postId){
                findPost = information.posts[i];   
               
            }
        }

        for(let i = 0; i < findPost.postComments.length; i++){
            if(findPost.postComments[i].id == commentId){
                findPost.postComments[i].expand = !findPost.postComments[i].expand; 
            }
        }

        setuserInfo(information);
      
    }

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
                <div className="dashboard_update_buttons_button-absolute">
                    <i className="fa-solid fa-bell iconBell"></i>
                    <div className="dashboard_update_buttons_button_numbers">
                            999
                    </div>
                </div>

            </div>
            <div className="dashboard_update_display">
                {
                    userInfo.posts.length > 0 ? userInfo.posts.map((v, i) => (
                        <UpdateCard key={i} commentExpand={commentExpand}  valueOBject = {v} images={images} />
                    )) : "nothing"
                }
               
          
            </div>
        </div>
    )
}

export default Update;