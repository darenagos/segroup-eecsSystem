// would be run as a singleton - serverside

const userRegistry = require ("./UserRegistry.js")
class ECRegistry {
    constructor(){
        if(!ECRegistry.instance) {
            this.data = []
            ECRegistry.instance = this;
        }
        return ECRegistry.instance
    }

    async addEC(ec){
     this.data.push(ec)
     console.log(JSON.stringify(this))
    }
   
    getLength(){
      console.log(this.data.length)
      return this.data.length;
   }

   getEC(index){
    return this.data[index];
   }
   getAllECs(){
    return this.data;
   }
}

class EC {
    constructor(user, module, title, date, selfCertified, details){
      this.user = user;
      this.module = module;
      this.date = date;
      this.title = title;
      this.details = details;
      this.selfCertified = selfCertified;
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

//initialize default EC Registry with following ECs:
const myRegistry = new ECRegistry();
myRegistry.addEC(new EC (userRegistry.findUserByUsername("isaac"), "Software Engineering", "PC Broke", "Tues 26th March",false,"agadgvdafgaerderbd"))
myRegistry.addEC(new EC (userRegistry.findUserByUsername("saad"), "GUI", "Github Broke", "Fri 12th March",true,"rhsrjh  elkjhf ali"))
myRegistry.addEC(new EC (userRegistry.findUserByUsername("luke"), "Linear Algebra", "Train late", "Sat 45th Arpil",false,"afdshaefgvbewzrsg4a'aerderbd"))
myRegistry.addEC(new EC (userRegistry.findUserByUsername("darena"), "Creative Computing Project", "I hate SE", "Fri 12345th Dec",true,"ro8h0awe fbui; aewj "))
myRegistry.addEC(new EC (userRegistry.findUserByUsername("mo"), "Operating Systems", "Mustafa is lit af", "Fri 000th March",false,"rhsrjh  elkjhf ali"))
myRegistry.addEC(new EC (userRegistry.findUserByUsername("finn"), "Object Oriented Programming", "Join Ai Soc", "Wed 0.01th Arpil",true,"aadsgvbewzrsg4a'aerderbd"))
myRegistry.addEC(new EC (userRegistry.findUserByUsername("yousuf"), "Web Technology", "Database Crashed", "Mon -4346th Dec",false,"254y bai; aewj "))

module.exports = myRegistry;