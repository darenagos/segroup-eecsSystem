// ran as a singleton on client side

class CurrentUserManager {
    constructor (){
        if (!CurrentUserManager.instance){
            this.user = []
            CurrentUserManager.instance = this;
        }
        return CurrentUserManager.instance
    }

    setUser(user){
        this.user = user
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


const currentUserManager = new CurrentUserManager();
currentUserManager.setUser(new User("","","","","","guest") )
module.exports = currentUserManager;