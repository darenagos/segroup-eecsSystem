// module.exports = TicketRegistry;

import userRegistry from "./UserRegistry.js"

class TicketRegistry {
    constructor(){
        if(!TicketRegistry.instance) {
            this.data = []
            this.load()
            TicketRegistry.instance = this;
        }
        return TicketRegistry.instance
    }

    async addTicket(ticket){
     this.data.push(ticket)
     this.save()
     console.log(ticket)
     console.log(this.data)
    }

    save(){
       localStorage.setItem("TicketRegistry", JSON.stringify(this.data))
    }

    load(){
        try {
           const data = localStorage.getItem("TicketRegistry");
            if (data) {
                this.data = JSON.parse(data);
            }
        } catch (err) {
            console.error("Error loading data:", err);
        }  
    }
   
   getLength(){
      return this.data.length;
   }

   getTicket(index){
   this.load()
    return this.data[index];
   }
   getAllTickets(){
   this.load()
    return this.data;
   }

   deleteEc(ticket){
    this.data.splice(this.data.indexOf(ticket), 1)
   this.save()
   }

   getIndex(ticket){
   this.load()
    return this.data.indexOf(ticket)
   }
}

class Ticket {
    constructor(user, date, title, type, details){
        this.user = user
        this.date = date;
        this.title = title
        this.type = type
        this.details = details
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
const myRegistry = new TicketRegistry();

if (myRegistry.getLength() < 3){
    const ticketRegistry = new TicketRegistry();
    ticketRegistry.addTicket(new Ticket(userRegistry.findUserByUsername("mo"), "69th Jan 2020", "No Internet", "Technical", "Why is the internet not working?!?!"))
    ticketRegistry.addTicket(new Ticket(userRegistry.findUserByUsername("darena"), "-4th Feb -36345 BCE", "Cavemen are speaking Klingon", "Social", "I cant understand them. are they speaking in klingon? What am I doing here anyway??!?"))
    ticketRegistry.addTicket(new Ticket(userRegistry.findUserByUsername("luke"), "0th Jan 0000", "OOP SUX", "Other", "I am moving to China, iz better there bro"))
}
export default myRegistry;