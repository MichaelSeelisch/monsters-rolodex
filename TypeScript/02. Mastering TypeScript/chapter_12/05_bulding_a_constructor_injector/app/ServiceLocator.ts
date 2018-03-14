interface ISystemSettings {

};

interface IGmailService {

};

enum Interfaces {
    ISystemSettings,
    IGmailService
};

class ServiceLocatorTypes {
    public static register(
        interfaceName: Interfaces, instance: any) {};

    public static resolve( 
      interfaceName: Interfaces) {};
};

ServiceLocatorTypes.register(Interfaces.ISystemSettings, {})
ServiceLocatorTypes.resolve(Interfaces.ISystemSettings);

export class ServiceLocator {
    static registeredClasses : any[] = new Array(); 
    
    public static register(interfaceName: string, instance: any) {
        this.registeredClasses[interfaceName] = instance; 
    }

    public static resolve(interfaceName: string) {
        return this.registeredClasses[interfaceName]; 
    }
};