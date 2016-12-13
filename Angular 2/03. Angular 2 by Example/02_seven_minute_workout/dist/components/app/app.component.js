System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var TrainerAppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TrainerAppComponent = (function () {
                function TrainerAppComponent() {
                    this.name = 'World';
                }
                TrainerAppComponent = __decorate([
                    core_1.Component({
                        selector: 'trainer-app',
                        template: "<div class=\"navbar navbar-default navbar-fixed-top top-navbar\">\n                <div class=\"container app-container\">\n                  <div class=\"navbar-header\">\n                    <h1>7 Minute Workout</h1>\n                  </div>\n                </div>\n              </div>\n      <div class=\"container body-content app-container\">\n        <h1>Hello, {{name}}!</h1>\n        Say hello to: <input [value]=\"name\" (input)=\"name = $event.target.value\">\n      </div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], TrainerAppComponent);
                return TrainerAppComponent;
            }());
            exports_1("TrainerAppComponent", TrainerAppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFnQkE7Z0JBQUE7b0JBQ0ksU0FBSSxHQUFXLE9BQU8sQ0FBQztnQkFDM0IsQ0FBQztnQkFoQkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsYUFBYTt3QkFDdkIsUUFBUSxFQUFFLHdlQVVEO3FCQUNaLENBQUM7O3VDQUFBO2dCQUdGLDBCQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCxxREFFQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndHJhaW5lci1hcHAnLFxuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm5hdmJhciBuYXZiYXItZGVmYXVsdCBuYXZiYXItZml4ZWQtdG9wIHRvcC1uYXZiYXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGFwcC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYXZiYXItaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMT43IE1pbnV0ZSBXb3Jrb3V0PC9oMT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgYm9keS1jb250ZW50IGFwcC1jb250YWluZXJcIj5cbiAgICAgICAgPGgxPkhlbGxvLCB7e25hbWV9fSE8L2gxPlxuICAgICAgICBTYXkgaGVsbG8gdG86IDxpbnB1dCBbdmFsdWVdPVwibmFtZVwiIChpbnB1dCk9XCJuYW1lID0gJGV2ZW50LnRhcmdldC52YWx1ZVwiPlxuICAgICAgPC9kaXY+YFxufSlcbmV4cG9ydCBjbGFzcyBUcmFpbmVyQXBwQ29tcG9uZW50IHtcbiAgICBuYW1lOiBzdHJpbmcgPSAnV29ybGQnO1xufVxuIl19
