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
    
}

class Service{
    constructor(name, status){
        this.name = name
        this.status = status
    }
}

