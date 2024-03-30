// ran as a singleton server side

import userRegistry from "./UserRegistry";

class TicketRegistry {
    constructor(){
        if(!TicketRegistry.instance) {
            this.data = []
            this.load()
            TicketRegistry.instance = this;
        }
        return TicketRegistry.instance
    }

   addTicket(ticket){
    this.data.push(ticket)
    this.save()
   }
   getLength(){
    console.log(this.data.length)
    return this.data.length;
   }

   getTicket(index){
    return this.data[index];
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
}

class Ticket {
    constructor(user, date, title, type, details){
      this.user = user;
      this.date = date;
      this.title = title
      this.details = details
      this.type = type
    }
}

const ticketRegistry = new TicketRegistry();
if (ticketRegistry.data.length < 3){
    ticketRegistry.data = []
    ticketRegistry.addTicket(new Ticket(userRegistry.findUserByUsername("isaac"), "69th Jan 2020", "No Internet", "Technical", "Why is the internet not working?!?!"))
    ticketRegistry.addTicket(new Ticket(userRegistry.findUserByUsername("saad"), "-4th Feb -36345 BCE", "Cavemen are speaking Klingon", "Social", "I cant understand them. are they speaking in klingon? What am I doing here anyway??!?"))
    ticketRegistry.addTicket(new Ticket(userRegistry.findUserByUsername("luke"), "0th Jan 0000", "OOP SUX", "Other", "I am moving to China, iz better there bro"))
}
export default ticketRegistry;