"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
;
var Interfaces;
(function (Interfaces) {
    Interfaces[Interfaces["ISystemSettings"] = 0] = "ISystemSettings";
    Interfaces[Interfaces["IGmailService"] = 1] = "IGmailService";
})(Interfaces || (Interfaces = {}));
;
class ServiceLocatorTypes {
    static register(interfaceName, instance) { }
    ;
    static resolve(interfaceName) { }
    ;
}
;
ServiceLocatorTypes.register(Interfaces.ISystemSettings, {});
ServiceLocatorTypes.resolve(Interfaces.ISystemSettings);
class ServiceLocator {
    static register(interfaceName, instance) {
        this.registeredClasses[interfaceName] = instance;
    }
    static resolve(interfaceName) {
        return this.registeredClasses[interfaceName];
    }
}
ServiceLocator.registeredClasses = new Array();
exports.ServiceLocator = ServiceLocator;
;
