// Q2 Find all users staying in Germany.
function getGermanyUsers(users){
    try {
        let germanyUsers = []
        Object.keys(users).forEach( user => {
            if(users[user].nationality == "Germany"){
                germanyUsers.push(user);
            }
        })
        console.log(`Germany users are: ${germanyUsers}`);
    } catch (error) {
        console.log(`Invalid input. ${error}`);
    }
}

module.exports.getGermanyUsers = getGermanyUsers;