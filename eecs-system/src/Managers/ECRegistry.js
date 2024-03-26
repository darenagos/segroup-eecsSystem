class ECRegistry {
    constructor(){
        if(!ECRegistry.instance) {
            this.data = []
            ECRegistry.instance = this;
        }
        return ECRegistry.instance
    }

   addEC(ec){
    this.data.push(ec)
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
    constructor(name, module, title, date, details){
      this.name = name;
      this.module = module;
      this.date = date;
      this.title = title
      this.details = details
    }
  }


//initialize default EC Registry with following ECs:
const myRegistry = new ECRegistry();
myRegistry.addEC( new EC ("Luke", "Software Engineering", "PC Broke", "Tues 26th March","agadgvdafgaerderbd"))
myRegistry.addEC(new EC ("Mohammed", "Software Engineering", "Github Broke", "Fri 12th March","rhsrjh  elkjhf ali"))
myRegistry.addEC(new EC ("Darena", "Software Engineering", "Train late", "Sat 45th Arpil","afdshaefgvbewzrsg4a'aerderbd"))
myRegistry.addEC(new EC ("Saad", "Software Engineering", "I hate SE", "Fri 12345th Dec","ro8h0awe fbui; aewj "))
myRegistry.addEC(new EC ("Isaac", "Software Engineering", "Mustafa is lit af", "Fri 000th March","rhsrjh  elkjhf ali"))
myRegistry.addEC(new EC ("Finn", "Software Engineering", "Join Ai Soc", "Wed 0.01th Arpil","aadsgvbewzrsg4a'aerderbd"))
myRegistry.addEC(new EC ("Yousuf", "Software Engineering", "Yeet", "Mon -4346th Dec","254y bai; aewj "))

module.exports = myRegistry;