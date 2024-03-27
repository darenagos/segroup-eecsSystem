class TicketRegistry {
    constructor(){
        if(!TicketRegistry.instance) {
            this.data = []
            TicketRegistry.instance = this;
        }
        return TicketRegistry.instance
    }

   addTicket(ticket){
    this.data.push(ticket)
   }
   getLength(){
    console.log(this.data.length)
    return this.data.length;
   }

   getTicket(index){
    return this.data[index];
   }
}

class Ticket {
    constructor(name, date, title, type, details){
      this.name = name;
      this.date = date;
      this.title = title
      this.details = details
      this.type = type
    }
}

const ticketRegistry = new TicketRegistry();
ticketRegistry.addTicket(new Ticket("Mustafa", "69th Jan 2020", "No Internet", "Technical", "Why is the internet not working?!?!"))
ticketRegistry.addTicket(new Ticket("Mustafa", "-4th Feb -36345 BCE", "Cavemen are speaking Klingon", "Social", "I cant understand them. are they speaking in klingon? What am I doing here anyway??!?"))
ticketRegistry.addTicket(new Ticket("Adam", "0th Jan 0000", "OOP SUX", "Other", "I am moving to China, iz better there bro"))

module.exports = ticketRegistry;