class ServiceRegistry{
    constructor() {
        if(!ServiceRegistry.instance){
            this.data=[]
        }
        return ServiceRegistry.instance
    }

    getServiceByName(name){
        //can be simplified tbf
        for (let i=0; i< this.data.length; i++){
            if (this.data[i].name === name){
                return this.data[i]
            }
        }
        return false
    }

    addService(service){
        this.data.push(service)
    }

    getServiceById(index){
        return this.data[index]
    }

    getAllServices(){
        return this.data
    }
    
}

class Service{
        constructor(name, details, status ){
        this.name = name
        this.status = status
        this.details = details
        //status can take full, partial or none
    }
}

const myServiceRegistry = new ServiceRegistry();
if (myServiceRegistry.data.length < 3){
    myServiceRegistry.addService(new Service("IT Service Desk System","Self-service portal, phone, FAQ","full"))
    myServiceRegistry.addService(new Service("Library Systems","Search and services","partial"))
    myServiceRegistry.addService(new Service("My Timetable","","none"))
    myServiceRegistry.addService(new Service("Printing","Central Printing Service, Student Printing","full"))
    myServiceRegistry.addService(new Service("Q-Review","Watch previously recorded lectures","full"))
    myServiceRegistry.addService(new Service("Telephone","Voicemail, staff telephones","partial"))
    myServiceRegistry.addService(new Service("Wifi","eduroam","none"))
}

export default myServiceRegistry;