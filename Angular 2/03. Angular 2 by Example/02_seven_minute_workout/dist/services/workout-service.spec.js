System.register(['@angular/core/testing', '@angular/http', '@angular/http/testing', 'rxjs/add/observable/of', 'rxjs/add/operator/catch', 'rxjs/add/operator/do', 'rxjs/add/operator/toPromise', 'rxjs/add/operator/map', 'rxjs/add/observable/forkJoin', './workout-service', "./model"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, http_1, testing_2, workout_service_1, model_1;
    var makeWorkoutData;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (testing_2_1) {
                testing_2 = testing_2_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {},
            function (_5) {},
            function (_6) {},
            function (workout_service_1_1) {
                workout_service_1 = workout_service_1_1;
            },
            function (model_1_1) {
                model_1 = model_1_1;
            }],
        execute: function() {
            makeWorkoutData = function () { return [
                { name: "Workout1", title: "workout1" },
                { name: "Workout2", title: "workout2" },
                { name: "Workout3", title: "workout3" },
                { name: "Workout4", title: "workout4" }
            ]; };
            describe('Workout Service', function () {
                var collectionUrl = 'https://api.mongolab.com/api/1/databases/personaltrainer/collections';
                var apiKey = '9xfTWt1ilKhqIqzV9Z_8jvCzo5ksjexx';
                var params = '?apiKey=' + apiKey;
                var workoutService;
                var mockBackend;
                var fixture;
                beforeEach(testing_1.async(function () {
                    testing_1.TestBed.configureTestingModule({
                        imports: [http_1.HttpModule],
                        providers: [
                            workout_service_1.WorkoutService,
                            { provide: http_1.XHRBackend, useClass: testing_2.MockBackend }
                        ]
                    });
                }));
                it('can instantiate service when inject service', testing_1.inject([workout_service_1.WorkoutService], function (service) {
                    expect(service instanceof workout_service_1.WorkoutService).toBe(true);
                }));
                it('can instantiate service with "new"', testing_1.inject([http_1.Http], function (http) {
                    expect(http).not.toBeNull('http should be provided');
                    var service = new workout_service_1.WorkoutService(http);
                    expect(service instanceof workout_service_1.WorkoutService).toBe(true, 'new service should be ok');
                }));
                it('can provide the mockBackend as XHRBackend', testing_1.inject([http_1.XHRBackend], function (backend) {
                    expect(backend).not.toBeNull('backend should be provided');
                }));
                it("should return all workout plans", testing_1.fakeAsync((testing_1.inject([http_1.XHRBackend, workout_service_1.WorkoutService], function (backend, service) {
                    var result;
                    backend.connections.subscribe(function (connection) {
                        expect(connection.request.url).toBe(collectionUrl + "/workouts" + params);
                        var response = new http_1.ResponseOptions({ body: '[{ "name": "Workout1", "title": "workout1" }, { "name": "Workout1", "title": "workout1" }]' });
                        connection.mockRespond(new http_1.Response(response));
                    });
                    service.getWorkouts().subscribe(function (response) {
                        result = response;
                    });
                    expect(result.length).toBe(2);
                    expect(result[0] instanceof model_1.WorkoutPlan).toBe(true);
                }))));
                it("should return a workout plan with a specific name", testing_1.fakeAsync((testing_1.inject([http_1.XHRBackend, workout_service_1.WorkoutService], function (backend, service) {
                    var result;
                    backend.connections.subscribe(function (connection) {
                        if (connection.request.url === collectionUrl + "/workouts/Workout1" + params) {
                            var response = new http_1.ResponseOptions({
                                body: '{ "name" : "Workout1" , "title" : "Workout 1" , "exercises" : [ { "name" : "exercise1" , "duration" : 30}]}'
                            });
                            connection.mockRespond(new http_1.Response(response));
                        }
                        else {
                            connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({
                                body: [{ name: "exercise1", title: "exercise 1" }]
                            })));
                        }
                    });
                    service.getWorkout("Workout1").subscribe(function (response) {
                        result = response;
                    });
                    expect(result.name).toBe('Workout1');
                }))));
                it("should map exercises to workout plan correctly in getWorkout", testing_1.fakeAsync((testing_1.inject([http_1.XHRBackend, workout_service_1.WorkoutService], function (backend, service) {
                    var result;
                    backend.connections.subscribe(function (connection) {
                        if (connection.request.url === collectionUrl + "/workouts/Workout1" + params) {
                            var response = new http_1.ResponseOptions({
                                body: { name: "Workout1", title: "Workout 1", restBetweenExercise: 30, exercises: [{ name: "exercise2", duration: 31 }, { name: "exercise4", duration: 31 }] }
                            });
                            connection.mockRespond(new http_1.Response(response));
                        }
                        else {
                            connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({
                                body: [{ name: "exercise1", title: "exercise 1" }, { name: "exercise2", title: "exercise 2" }, { name: "exercise3", title: "exercise 3" }, { name: "exercise4", title: "exercise 4" }]
                            })));
                        }
                    });
                    service.getWorkout("Workout1").subscribe(function (response) {
                        result = response;
                    });
                    expect(result.name).toBe('Workout1');
                    expect(result.exercises.length).toBe(2);
                    expect(result.exercises[0].name).toBe("exercise2");
                    expect(result.exercises[1].name).toBe("exercise4");
                }))));
            });
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3dvcmtvdXQtc2VydmljZS5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7UUFlTSxlQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBQWYsZUFBZSxHQUFHLGNBQU0sT0FBQTtnQkFDMUIsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUU7Z0JBQ3ZDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFO2dCQUN2QyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRTtnQkFDdkMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUU7YUFDekIsRUFMWSxDQUtaLENBQUM7WUFFbkIsUUFBUSxDQUFDLGlCQUFpQixFQUFFO2dCQUN4QixJQUFJLGFBQWEsR0FBVSxzRUFBc0UsQ0FBQztnQkFDbEcsSUFBSSxNQUFNLEdBQVUsa0NBQWtDLENBQUM7Z0JBQ3ZELElBQUksTUFBTSxHQUFVLFVBQVUsR0FBRyxNQUFNLENBQUM7Z0JBQ3hDLElBQUksY0FBNkIsQ0FBQztnQkFDbEMsSUFBSSxXQUF1QixDQUFDO2dCQUM1QixJQUFJLE9BQVcsQ0FBQztnQkFFaEIsVUFBVSxDQUFFLGVBQUssQ0FBQztvQkFDZCxpQkFBTyxDQUFDLHNCQUFzQixDQUFDO3dCQUMzQixPQUFPLEVBQUUsQ0FBRSxpQkFBVSxDQUFFO3dCQUN2QixTQUFTLEVBQUU7NEJBQ1AsZ0NBQWM7NEJBQ2QsRUFBRSxPQUFPLEVBQUUsaUJBQVUsRUFBRSxRQUFRLEVBQUUscUJBQVcsRUFBRTt5QkFDakQ7cUJBQ0osQ0FBQyxDQUFBO2dCQUNOLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRUosRUFBRSxDQUFDLDZDQUE2QyxFQUM1QyxnQkFBTSxDQUFDLENBQUMsZ0NBQWMsQ0FBQyxFQUFFLFVBQUMsT0FBdUI7b0JBQzdDLE1BQU0sQ0FBQyxPQUFPLFlBQVks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LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0LCBmYWtlQXN5bmMsIGFzeW5jLCBUZXN0QmVkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcbmltcG9ydCB7SHR0cE1vZHVsZSwgSHR0cCwgWEhSQmFja2VuZCwgUmVzcG9uc2UsIFJlc3BvbnNlT3B0aW9uc30gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQge01vY2tCYWNrZW5kLCBNb2NrQ29ubmVjdGlvbn0gZnJvbSAnQGFuZ3VsYXIvaHR0cC90ZXN0aW5nJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvb2YnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RvJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS9mb3JrSm9pbic7XG5cbmltcG9ydCB7V29ya291dFNlcnZpY2V9IGZyb20gJy4vd29ya291dC1zZXJ2aWNlJztcbmltcG9ydCB7V29ya291dFBsYW59IGZyb20gXCIuL21vZGVsXCI7XG5cbmNvbnN0IG1ha2VXb3Jrb3V0RGF0YSA9ICgpID0+IFtcbiAgICB7IG5hbWU6IFwiV29ya291dDFcIiwgdGl0bGU6IFwid29ya291dDFcIiB9LFxuICAgIHsgbmFtZTogXCJXb3Jrb3V0MlwiLCB0aXRsZTogXCJ3b3Jrb3V0MlwiIH0sXG4gICAgeyBuYW1lOiBcIldvcmtvdXQzXCIsIHRpdGxlOiBcIndvcmtvdXQzXCIgfSxcbiAgICB7IG5hbWU6IFwiV29ya291dDRcIiwgdGl0bGU6IFwid29ya291dDRcIiB9XG5dIGFzIFdvcmtvdXRQbGFuW107XG5cbmRlc2NyaWJlKCdXb3Jrb3V0IFNlcnZpY2UnLCAoKSA9PiB7XG4gICAgbGV0IGNvbGxlY3Rpb25Vcmw6c3RyaW5nID0gJ2h0dHBzOi8vYXBpLm1vbmdvbGFiLmNvbS9hcGkvMS9kYXRhYmFzZXMvcGVyc29uYWx0cmFpbmVyL2NvbGxlY3Rpb25zJztcbiAgICBsZXQgYXBpS2V5OnN0cmluZyA9ICc5eGZUV3QxaWxLaHFJcXpWOVpfOGp2Q3pvNWtzamV4eCc7XG4gICAgbGV0IHBhcmFtczpzdHJpbmcgPSAnP2FwaUtleT0nICsgYXBpS2V5O1xuICAgIGxldCB3b3Jrb3V0U2VydmljZTpXb3Jrb3V0U2VydmljZTtcbiAgICBsZXQgbW9ja0JhY2tlbmQ6TW9ja0JhY2tlbmQ7XG4gICAgbGV0IGZpeHR1cmU6YW55O1xuXG4gICAgYmVmb3JlRWFjaCggYXN5bmMoKCkgPT4ge1xuICAgICAgICBUZXN0QmVkLmNvbmZpZ3VyZVRlc3RpbmdNb2R1bGUoe1xuICAgICAgICAgICAgaW1wb3J0czogWyBIdHRwTW9kdWxlIF0sXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgICAgICBXb3Jrb3V0U2VydmljZSxcbiAgICAgICAgICAgICAgICB7IHByb3ZpZGU6IFhIUkJhY2tlbmQsIHVzZUNsYXNzOiBNb2NrQmFja2VuZCB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0pXG4gICAgfSkpO1xuXG4gICAgaXQoJ2NhbiBpbnN0YW50aWF0ZSBzZXJ2aWNlIHdoZW4gaW5qZWN0IHNlcnZpY2UnLFxuICAgICAgICBpbmplY3QoW1dvcmtvdXRTZXJ2aWNlXSwgKHNlcnZpY2U6IFdvcmtvdXRTZXJ2aWNlKSA9PiB7XG4gICAgICAgICAgICBleHBlY3Qoc2VydmljZSBpbnN0YW5jZW9mIFdvcmtvdXRTZXJ2aWNlKS50b0JlKHRydWUpO1xuICAgICAgICB9KSk7XG5cbiAgICBpdCgnY2FuIGluc3RhbnRpYXRlIHNlcnZpY2Ugd2l0aCBcIm5ld1wiJywgaW5qZWN0KFtIdHRwXSwgKGh0dHA6IEh0dHApID0+IHtcbiAgICAgICAgZXhwZWN0KGh0dHApLm5vdC50b0JlTnVsbCgnaHR0cCBzaG91bGQgYmUgcHJvdmlkZWQnKTtcbiAgICAgICAgbGV0IHNlcnZpY2UgPSBuZXcgV29ya291dFNlcnZpY2UoaHR0cCk7XG4gICAgICAgIGV4cGVjdChzZXJ2aWNlIGluc3RhbmNlb2YgV29ya291dFNlcnZpY2UpLnRvQmUodHJ1ZSwgJ25ldyBzZXJ2aWNlIHNob3VsZCBiZSBvaycpO1xuICAgIH0pKTtcblxuXG4gICAgaXQoJ2NhbiBwcm92aWRlIHRoZSBtb2NrQmFja2VuZCBhcyBYSFJCYWNrZW5kJyxcbiAgICAgICAgaW5qZWN0KFtYSFJCYWNrZW5kXSwgKGJhY2tlbmQ6IE1vY2tCYWNrZW5kKSA9PiB7XG4gICAgICAgICAgICBleHBlY3QoYmFja2VuZCkubm90LnRvQmVOdWxsKCdiYWNrZW5kIHNob3VsZCBiZSBwcm92aWRlZCcpO1xuICAgICAgICB9KSk7XG5cbiAgICBpdChcInNob3VsZCByZXR1cm4gYWxsIHdvcmtvdXQgcGxhbnNcIiwgZmFrZUFzeW5jKChpbmplY3QoW1hIUkJhY2tlbmQsIFdvcmtvdXRTZXJ2aWNlXSwgKGJhY2tlbmQ6IE1vY2tCYWNrZW5kLCBzZXJ2aWNlOldvcmtvdXRTZXJ2aWNlKSA9PiB7XG4gICAgICAgIGxldCByZXN1bHQ6YW55O1xuICAgICAgICBiYWNrZW5kLmNvbm5lY3Rpb25zLnN1YnNjcmliZSgoY29ubmVjdGlvbjpNb2NrQ29ubmVjdGlvbikgPT4ge1xuICAgICAgICAgICAgZXhwZWN0KGNvbm5lY3Rpb24ucmVxdWVzdC51cmwpLnRvQmUoY29sbGVjdGlvblVybCArIFwiL3dvcmtvdXRzXCIgKyBwYXJhbXMpO1xuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gbmV3IFJlc3BvbnNlT3B0aW9ucyh7Ym9keTogJ1t7IFwibmFtZVwiOiBcIldvcmtvdXQxXCIsIFwidGl0bGVcIjogXCJ3b3Jrb3V0MVwiIH0sIHsgXCJuYW1lXCI6IFwiV29ya291dDFcIiwgXCJ0aXRsZVwiOiBcIndvcmtvdXQxXCIgfV0nfSk7XG4gICAgICAgICAgICBjb25uZWN0aW9uLm1vY2tSZXNwb25kKG5ldyBSZXNwb25zZShyZXNwb25zZSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgc2VydmljZS5nZXRXb3Jrb3V0cygpLnN1YnNjcmliZSgocmVzcG9uc2U6UmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3BvbnNlO1xuICAgICAgICB9KTtcbiAgICAgICAgZXhwZWN0KHJlc3VsdC5sZW5ndGgpLnRvQmUoMik7XG4gICAgICAgIGV4cGVjdChyZXN1bHRbMF0gaW5zdGFuY2VvZiBXb3Jrb3V0UGxhbikudG9CZSh0cnVlKTtcbiAgICB9KSkpKTtcblxuICAgIGl0KFwic2hvdWxkIHJldHVybiBhIHdvcmtvdXQgcGxhbiB3aXRoIGEgc3BlY2lmaWMgbmFtZVwiLCBmYWtlQXN5bmMoKGluamVjdChbWEhSQmFja2VuZCwgV29ya291dFNlcnZpY2VdLCAoYmFja2VuZDogTW9ja0JhY2tlbmQsIHNlcnZpY2U6V29ya291dFNlcnZpY2UpID0+IHtcbiAgICAgICAgbGV0IHJlc3VsdDphbnk7XG4gICAgICAgIGJhY2tlbmQuY29ubmVjdGlvbnMuc3Vic2NyaWJlKChjb25uZWN0aW9uOk1vY2tDb25uZWN0aW9uKSA9PiB7XG4gICAgICAgICAgICBpZiAoY29ubmVjdGlvbi5yZXF1ZXN0LnVybCA9PT0gY29sbGVjdGlvblVybCArIFwiL3dvcmtvdXRzL1dvcmtvdXQxXCIgKyBwYXJhbXMpIHtcbiAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBuZXcgUmVzcG9uc2VPcHRpb25zKHtcbiAgICAgICAgICAgICAgICAgICAgYm9keTogJ3sgXCJuYW1lXCIgOiBcIldvcmtvdXQxXCIgLCBcInRpdGxlXCIgOiBcIldvcmtvdXQgMVwiICwgXCJleGVyY2lzZXNcIiA6IFsgeyBcIm5hbWVcIiA6IFwiZXhlcmNpc2UxXCIgLCBcImR1cmF0aW9uXCIgOiAzMH1dfSdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb25uZWN0aW9uLm1vY2tSZXNwb25kKG5ldyBSZXNwb25zZShyZXNwb25zZSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25uZWN0aW9uLm1vY2tSZXNwb25kKG5ldyBSZXNwb25zZShcbiAgICAgICAgICAgICAgICAgICAgbmV3IFJlc3BvbnNlT3B0aW9ucyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5OiBbe25hbWU6IFwiZXhlcmNpc2UxXCIsIHRpdGxlOiBcImV4ZXJjaXNlIDFcIn1dXG4gICAgICAgICAgICAgICAgICAgIH0pKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBzZXJ2aWNlLmdldFdvcmtvdXQoXCJXb3Jrb3V0MVwiKS5zdWJzY3JpYmUoKHJlc3BvbnNlOlJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICByZXN1bHQgPSByZXNwb25zZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGV4cGVjdChyZXN1bHQubmFtZSkudG9CZSgnV29ya291dDEnKTtcbiAgICB9KSkpKTtcblxuICAgIGl0KFwic2hvdWxkIG1hcCBleGVyY2lzZXMgdG8gd29ya291dCBwbGFuIGNvcnJlY3RseSBpbiBnZXRXb3Jrb3V0XCIsIGZha2VBc3luYygoaW5qZWN0KFtYSFJCYWNrZW5kLCBXb3Jrb3V0U2VydmljZV0sIChiYWNrZW5kOiBNb2NrQmFja2VuZCwgc2VydmljZTpXb3Jrb3V0U2VydmljZSkgPT4ge1xuICAgICAgICBsZXQgcmVzdWx0OmFueTtcbiAgICAgICAgYmFja2VuZC5jb25uZWN0aW9ucy5zdWJzY3JpYmUoKGNvbm5lY3Rpb246TW9ja0Nvbm5lY3Rpb24pID0+IHtcbiAgICAgICAgICAgIGlmIChjb25uZWN0aW9uLnJlcXVlc3QudXJsID09PSBjb2xsZWN0aW9uVXJsICsgXCIvd29ya291dHMvV29ya291dDFcIiArIHBhcmFtcykge1xuICAgICAgICAgICAgICAgIGxldCByZXNwb25zZSA9IG5ldyBSZXNwb25zZU9wdGlvbnMoe1xuICAgICAgICAgICAgICAgICAgICBib2R5OiB7IG5hbWU6IFwiV29ya291dDFcIiwgdGl0bGU6IFwiV29ya291dCAxXCIsIHJlc3RCZXR3ZWVuRXhlcmNpc2U6IDMwLCBleGVyY2lzZXM6IFt7IG5hbWU6IFwiZXhlcmNpc2UyXCIsIGR1cmF0aW9uOiAzMSB9LCB7IG5hbWU6IFwiZXhlcmNpc2U0XCIsIGR1cmF0aW9uOiAzMSB9XSB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY29ubmVjdGlvbi5tb2NrUmVzcG9uZChuZXcgUmVzcG9uc2UocmVzcG9uc2UpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29ubmVjdGlvbi5tb2NrUmVzcG9uZChuZXcgUmVzcG9uc2UoXG4gICAgICAgICAgICAgICAgICAgIG5ldyBSZXNwb25zZU9wdGlvbnMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogW3sgbmFtZTogXCJleGVyY2lzZTFcIiwgdGl0bGU6IFwiZXhlcmNpc2UgMVwiIH0sIHsgbmFtZTogXCJleGVyY2lzZTJcIiwgdGl0bGU6IFwiZXhlcmNpc2UgMlwiIH0sIHsgbmFtZTogXCJleGVyY2lzZTNcIiwgdGl0bGU6IFwiZXhlcmNpc2UgM1wiIH0sIHsgbmFtZTogXCJleGVyY2lzZTRcIiwgdGl0bGU6IFwiZXhlcmNpc2UgNFwiIH1dXG4gICAgICAgICAgICAgICAgICAgIH0pKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBzZXJ2aWNlLmdldFdvcmtvdXQoXCJXb3Jrb3V0MVwiKS5zdWJzY3JpYmUoKHJlc3BvbnNlOlJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICByZXN1bHQgPSByZXNwb25zZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGV4cGVjdChyZXN1bHQubmFtZSkudG9CZSgnV29ya291dDEnKTtcbiAgICAgICAgZXhwZWN0KHJlc3VsdC5leGVyY2lzZXMubGVuZ3RoKS50b0JlKDIpO1xuICAgICAgICBleHBlY3QocmVzdWx0LmV4ZXJjaXNlc1swXS5uYW1lKS50b0JlKFwiZXhlcmNpc2UyXCIpO1xuICAgICAgICBleHBlY3QocmVzdWx0LmV4ZXJjaXNlc1sxXS5uYW1lKS50b0JlKFwiZXhlcmNpc2U0XCIpO1xuICAgIH0pKSkpO1xufSk7XG5cbiJdfQ==
