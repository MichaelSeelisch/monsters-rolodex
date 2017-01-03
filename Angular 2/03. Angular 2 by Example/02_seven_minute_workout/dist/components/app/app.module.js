System.register(['@angular/core', '@angular/platform-browser', './app.component', '../workout-runner/workout-runner.component'], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, app_component_1, workout_runner_component_1;
    var AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (workout_runner_component_1_1) {
                workout_runner_component_1 = workout_runner_component_1_1;
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [platform_browser_1.BrowserModule],
                        declarations: [app_component_1.TrainerAppComponent, workout_runner_component_1.WorkoutRunnerComponent],
                        bootstrap: [app_component_1.TrainerAppComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXBwL2FwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFXQTtnQkFBQTtnQkFBeUIsQ0FBQztnQkFMMUI7b0JBQUMsZUFBUSxDQUFDO3dCQUNSLE9BQU8sRUFBTyxDQUFFLGdDQUFhLENBQUU7d0JBQy9CLFlBQVksRUFBRSxDQUFFLG1DQUFtQixFQUFFLGlEQUFzQixDQUFFO3dCQUM3RCxTQUFTLEVBQUssQ0FBRSxtQ0FBbUIsQ0FBRTtxQkFDdEMsQ0FBQzs7NkJBQUE7Z0JBQ3VCLGdCQUFDO1lBQUQsQ0FBekIsQUFBMEIsSUFBQTtZQUExQixpQ0FBMEIsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2FwcC9hcHAubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5pbXBvcnQgeyBUcmFpbmVyQXBwQ29tcG9uZW50IH0gIGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBXb3Jrb3V0UnVubmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vd29ya291dC1ydW5uZXIvd29ya291dC1ydW5uZXIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogICAgICBbIEJyb3dzZXJNb2R1bGUgXSxcbiAgZGVjbGFyYXRpb25zOiBbIFRyYWluZXJBcHBDb21wb25lbnQsIFdvcmtvdXRSdW5uZXJDb21wb25lbnQgXSxcbiAgYm9vdHN0cmFwOiAgICBbIFRyYWluZXJBcHBDb21wb25lbnQgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iXX0=
