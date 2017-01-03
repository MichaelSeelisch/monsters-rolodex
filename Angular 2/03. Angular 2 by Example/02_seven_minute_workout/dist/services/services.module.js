System.register(['@angular/core', './local-storage', './workout-history-tracker', './workout-service'], function(exports_1, context_1) {
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
    var core_1, local_storage_1, workout_history_tracker_1, workout_service_1;
    var ServicesModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (local_storage_1_1) {
                local_storage_1 = local_storage_1_1;
            },
            function (workout_history_tracker_1_1) {
                workout_history_tracker_1 = workout_history_tracker_1_1;
            },
            function (workout_service_1_1) {
                workout_service_1 = workout_service_1_1;
            }],
        execute: function() {
            ServicesModule = (function () {
                function ServicesModule() {
                }
                ServicesModule = __decorate([
                    core_1.NgModule({
                        imports: [],
                        declarations: [],
                        providers: [
                            local_storage_1.LocalStorage,
                            workout_history_tracker_1.WorkoutHistoryTracker,
                            workout_service_1.WorkoutService],
                    }), 
                    __metadata('design:paramtypes', [])
                ], ServicesModule);
                return ServicesModule;
            }());
            exports_1("ServicesModule", ServicesModule);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3NlcnZpY2VzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWVBO2dCQUFBO2dCQUE4QixDQUFDO2dCQVIvQjtvQkFBQyxlQUFRLENBQUM7d0JBQ04sT0FBTyxFQUFFLEVBQUU7d0JBQ1gsWUFBWSxFQUFFLEVBQUU7d0JBQ2hCLFNBQVMsRUFBRTs0QkFDUCw0QkFBWTs0QkFDWiwrQ0FBcUI7NEJBQ3JCLGdDQUFjLENBQUM7cUJBQ3RCLENBQUM7O2tDQUFBO2dCQUM0QixxQkFBQztZQUFELENBQTlCLEFBQStCLElBQUE7WUFBL0IsMkNBQStCLENBQUEiLCJmaWxlIjoic2VydmljZXMvc2VydmljZXMubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2UgfSBmcm9tICcuL2xvY2FsLXN0b3JhZ2UnO1xuaW1wb3J0IHsgV29ya291dEhpc3RvcnlUcmFja2VyIH0gZnJvbSAnLi93b3Jrb3V0LWhpc3RvcnktdHJhY2tlcic7XG5pbXBvcnQgeyBXb3Jrb3V0U2VydmljZSB9IGZyb20gJy4vd29ya291dC1zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBMb2NhbFN0b3JhZ2UsXG4gICAgICAgIFdvcmtvdXRIaXN0b3J5VHJhY2tlcixcbiAgICAgICAgV29ya291dFNlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBTZXJ2aWNlc01vZHVsZSB7IH0iXX0=
