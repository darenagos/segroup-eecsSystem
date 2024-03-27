// ran as a singleton on server side


class UserRegistry {
    constructor(){
        if(!UserRegistry.instance){
            this.users = []
            UserRegistry.instance = this;
        }
        return UserRegistry.instance
    }

    findUserByUsername(username){
        //can be simplified tbf
        for (let i=0; i< this.users.length; i++){
            if (this.users[i].username === username){
                return this.users[i]
            }
        }
        return false
    }
    addUser(user){
        this.users.push(user)
    }
}

class User{
    constructor(name, id, email, username, password, userType){
        this.name = name
        this.id = id
        this.email = email
        this.username = username
        this.password = password
        this.userType = userType
    }
}

const userRegistry = new UserRegistry();
 userRegistry.addUser(new User("student1 QMUL","ec12345","student1@qmul.ac.uk","student1","student1","student"))
userRegistry.addUser(new User("student2 QMUL","ec23456","student2@qmul.ac.uk","student2","student2","student"))
userRegistry.addUser(new User("admin QMUL","ad12345","admin@qmul.ac.uk","admin","admin","admin"))
userRegistry.addUser(new User("Technician QMUL","te12345","technician@qmul.ac.uk","technician","technician","technician"))
module.exports = userRegistry;