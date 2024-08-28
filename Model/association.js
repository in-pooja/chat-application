import User from "./usermodel.js";
// import bookmarks from "./Bookmarks.model.js";
import comments from "./commentmodel.js";
import posts from "./postmodel.js";
import Conversation from "./conversation.model.js";
import Message from "./MessageModel.js";
!~
//user file

User.belongsToMany(User,{as:'Followers',through:'UserFollower',foreignKey:'userid'});
User.belongsToMany(User,{as:'Following',through:'follow',foreignKey:'userid'});


// User.hasMany(posts,{as:'post',foreignKey:'userId'});
// posts.belongsTo(User,{foreignKey:'userId'});



User.belongsToMany(posts,{as:'bookmarks',through:'PostBookmark',foreignKey:'userId'});




// //postmodel


// posts.belongsTo(User,{})

// posts.belongsToMany(posts,{as:'likes',through:'postLikes',foreignKey:'id'})


posts.hasMany(comments,{as:'Comments',foreignKey:'commentid'});
comments.belongsTo(posts,{foreignkey:'commentid'})




//   //comment model

  
//   comments.belongsTo(User,{as:'author',foreignKey:'username'});
