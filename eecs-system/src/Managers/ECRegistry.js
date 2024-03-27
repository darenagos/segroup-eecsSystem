// would be run as a singleton - serverside

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
}

class EC {
    constructor(name,userID, module, title, date, selfCertified, details){
      this.name = name;
      this.userID = userID
      this.module = module;
      this.date = date;
      this.title = title;
      this.details = details;
      this.selfCertified = selfCertified;
    }
}


//initialize default EC Registry with following ECs:
const myRegistry = new ECRegistry();
myRegistry.addEC(new EC ("Luke","ec46455", "Software Engineering", "PC Broke", "Tues 26th March","True","agadgvdafgaerderbd"))
myRegistry.addEC(new EC ("Mohammed","ec4545", "Software Engineering", "Github Broke", "Fri 12th March","True","rhsrjh  elkjhf ali"))
myRegistry.addEC(new EC ("Darena","ec12345", "Software Engineering", "Train late", "Sat 45th Arpil","True","afdshaefgvbewzrsg4a'aerderbd"))
myRegistry.addEC(new EC ("Saad","ec98765", "Software Engineering", "I hate SE", "Fri 12345th Dec","True","ro8h0awe fbui; aewj "))
myRegistry.addEC(new EC ("Isaac","ec00000", "Software Engineering", "Mustafa is lit af", "Fri 000th March","False","rhsrjh  elkjhf ali"))
myRegistry.addEC(new EC ("Finn","ec34542", "Software Engineering", "Join Ai Soc", "Wed 0.01th Arpil","False","aadsgvbewzrsg4a'aerderbd"))
myRegistry.addEC(new EC ("Yousuf","ec4555", "Software Engineering", "Yeet", "Mon -4346th Dec","True","254y bai; aewj "))

module.exports = myRegistry;