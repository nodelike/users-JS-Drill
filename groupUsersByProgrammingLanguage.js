// Q4 Group users based on their Programming language mentioned in their designation.
function groupUsersByProgrammingLanguage(users){
    const result = {"Python":[], "Golang":[], "Javascript":[]}
    try {
        Object.keys(users).forEach( user => {
            Object.keys(result).forEach( language => {
                if(users[user].desgination.includes(language)){
                    result[language].push(user);
                };
            });
        })
        console.log(result);
    } catch (error) {
        console.log(`Invalid input. ${error}`);
    }
}

module.exports.groupUsersByProgrammingLanguage = groupUsersByProgrammingLanguage;