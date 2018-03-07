"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
