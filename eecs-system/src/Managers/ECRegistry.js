class ECRegistry {
    constructor(){
        if(!ECRegistry.instance) {
            this.data = []
            ECRegistry.instance = this;
        }
        return ECRegistry.instance
    }

   
}