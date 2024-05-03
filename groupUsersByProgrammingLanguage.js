// Q4 Group users based on their Programming language mentioned in their designation.
function groupUsersByProgrammingLanguage(users){
    const result = {"Python":[], "Golang":[], "Javascript":[]}
    try {
        for(let user in users){
            for(let language in result){
                if(users[user].desgination.includes(language)){
                    result[language].push(user);
                };
            }
        }
        console.log(result);
        
    } catch (error) {
        console.log(`Invalid input. ${error}`);
    }
}

module.exports.groupUsersByProgrammingLanguage = groupUsersByProgrammingLanguage;