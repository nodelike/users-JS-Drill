// Q3 Find all users with masters Degree.
function getMastersDegreeUsers(users){
    try {
        let mastersDegreeUsers = [];
        for(let user in users){
            if(users[user].qualification.includes("Masters")){
                mastersDegreeUsers.push(user);
            }
        }
        console.log(`User who have masters degree are: ${mastersDegreeUsers}`);
    } catch (error) {
        console.log(`Invalid input. ${error}`);
    }
}

module.exports.getMastersDegreeUsers = getMastersDegreeUsers;