// Q1 Find all users who are interested in playing video games.
function getVideoGameUsers(users){
    try {
        let videoGameUsers = [];

        for(let user in users){
            for(let interest of users[user].interests){
                if(interest.includes("Video Games")){
                    videoGameUsers.push(user);
                };
            };   
        }
        
        console.log(`Users interested in video games are: ${videoGameUsers}`);
    } catch (error) {
        console.log(`Invalid input. ${error}`);
    }
}

module.exports.getVideoGameUsers = getVideoGameUsers;