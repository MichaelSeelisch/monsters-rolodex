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
                        template: "\n    <div class=\"navbar navbar-default navbar-fixed-top top-navbar\">\n      <div class=\"container app-container\">\n        <div class=\"navbar-header\">\n          <h1>7 Minute Workout</h1>\n        </div>\n      </div>\n    </div>\n    <div class=\"container body-content app-container\">\n      <h1>Hello, {{name}}!</h1>\n      Say hello to: <input [value]=\"name\" (input)=\"name = $event.target.value\">\n      <workout-runner></workout-runner>\n    </div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], TrainerAppComponent);
                return TrainerAppComponent;
            }());
            exports_1("TrainerAppComponent", TrainerAppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFrQkE7Z0JBQUE7b0JBQ0ksU0FBSSxHQUFXLE9BQU8sQ0FBQztnQkFDM0IsQ0FBQztnQkFsQkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsYUFBYTt3QkFDdkIsUUFBUSxFQUFFLG1kQVlEO3FCQUNWLENBQUM7O3VDQUFBO2dCQUdGLDBCQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCxxREFFQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RyYWluZXItYXBwJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwibmF2YmFyIG5hdmJhci1kZWZhdWx0IG5hdmJhci1maXhlZC10b3AgdG9wLW5hdmJhclwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBhcHAtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJuYXZiYXItaGVhZGVyXCI+XG4gICAgICAgICAgPGgxPjcgTWludXRlIFdvcmtvdXQ8L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgYm9keS1jb250ZW50IGFwcC1jb250YWluZXJcIj5cbiAgICAgIDxoMT5IZWxsbywge3tuYW1lfX0hPC9oMT5cbiAgICAgIFNheSBoZWxsbyB0bzogPGlucHV0IFt2YWx1ZV09XCJuYW1lXCIgKGlucHV0KT1cIm5hbWUgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXCI+XG4gICAgICA8d29ya291dC1ydW5uZXI+PC93b3Jrb3V0LXJ1bm5lcj5cbiAgICA8L2Rpdj5gXG59KVxuZXhwb3J0IGNsYXNzIFRyYWluZXJBcHBDb21wb25lbnQge1xuICAgIG5hbWU6IHN0cmluZyA9ICdXb3JsZCc7XG59XG4iXX0=
