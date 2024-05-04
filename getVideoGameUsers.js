// Q1 Find all users who are interested in playing video games.
function getVideoGameUsers(users){
    try {
        let videoGameUsers = [];
        Object.keys(users).forEach( user => {
            users[user].interests.forEach( interest => {
                if(interest.includes("Video Games")){
                    videoGameUsers.push(user);
                };
            });
        })
        console.log(`Users interested in video games are: ${videoGameUsers}`);
    } catch (error) {
        console.log(`Invalid input. ${error}`);
    }
}

module.exports.getVideoGameUsers = getVideoGameUsers;