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
                        id: "",
                        userId: "",
                        userName: "",
                        date: ""
                    },
                    {
                        id: "",
                        userId: "",
                        userName: "",
                        date: ""
                    },
                    {
                        id: "",
                        userId: "",
                        userName: "",
                        date: ""
                    },
                    {
                        id: "",
                        userId: "",
                        userName: "",
                        date: ""
                    }
                ],
                postComments: [
                    {
                        id: "",
                        userId: "",
                        userName: "",
                        userComment: "",
                        likes: [],
                        comments : [],
                        date: ""
                    },
                    {
                        id: "",
                        userId: "",
                        userName: "",
                        userComment: "",
                        likes: [],
                        comments : [],
                        date: ""
                    }
                ],
                postShares: [
                    {
                        id: "",
                        userId: "",
                        userName: "",
                        date: ""
                    },
                    {
                        id: "",
                        userId: "",
                        userName: "",
                        date: ""
                    },
                    {
                        id: "",
                        userId: "",
                        userName: "",
                        date: ""
                    },
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
                        id: "",
                        userId: "",
                        userName: "",
                        date: ""
                    },
                    {
                        id: "",
                        userId: "",
                        userName: "",
                        date: ""
                    },
                    {
                        id: "",
                        userId: "",
                        userName: "",
                        date: ""
                    },
                    {
                        id: "",
                        userId: "",
                        userName: "",
                        date: ""
                    }
                ],
                postComments: [
                    {
                        id: "",
                        userId: "",
                        userName: "",
                        userComment: "",
                        likes: [],
                        comments : [],
                        date: ""
                    },
                    {
                        id: "",
                        userId: "",
                        userName: "",
                        userComment: "",
                        likes: [],
                        comments : [],
                        date: ""
                    }
                ],
                postShares: [
                    {
                        id: "",
                        userId: "",
                        userName: "",
                        date: ""
                    },
                    {
                        id: "",
                        userId: "",
                        userName: "",
                        date: ""
                    },
                    {
                        id: "",
                        userId: "",
                        userName: "",
                        date: ""
                    },
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
                        id: "",
                        userId: "",
                        userName: "",
                        date: ""
                    },
                    {
                        id: "",
                        userId: "",
                        userName: "",
                        date: ""
                    },
                    {
                        id: "",
                        userId: "",
                        userName: "",
                        date: ""
                    },
                    {
                        id: "",
                        userId: "",
                        userName: "",
                        date: ""
                    }
                ],
                postComments: [
                    {
                        id: "",
                        userId: "",
                        userName: "",
                        userComment: "",
                        likes: [],
                        comments : [],
                        date: ""
                    },
                    {
                        id: "",
                        userId: "",
                        userName: "",
                        userComment: "",
                        likes: [],
                        comments : [],
                        date: ""
                    }
                ],
                postShares: [
                    {
                        id: "",
                        userId: "",
                        userName: "",
                        date: ""
                    },
                    {
                        id: "",
                        userId: "",
                        userName: "",
                        date: ""
                    },
                    {
                        id: "",
                        userId: "",
                        userName: "",
                        date: ""
                    },
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
                <UpdateCard images={images} />
                <UpdateCard images={images} />
                <UpdateCard images={images} />
            </div>
        </div>
    )
}

export default Update;