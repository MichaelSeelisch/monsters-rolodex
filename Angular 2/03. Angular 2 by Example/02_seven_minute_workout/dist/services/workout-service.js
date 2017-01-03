System.register(['@angular/core', '@angular/http', 'rxjs/Observable', 'rxjs/add/operator/map', 'rxjs/add/operator/catch', 'rxjs/add/observable/forkJoin', 'rxjs/add/operator/toPromise', './model'], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1, model_1;
    var WorkoutService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {},
            function (model_1_1) {
                model_1 = model_1_1;
            }],
        execute: function() {
            WorkoutService = (function () {
                function WorkoutService(http) {
                    this.http = http;
                    this.workouts = [];
                    this.exercises = [];
                    this.collectionsUrl = 'https://api.mongolab.com/api/1/databases/personaltrainer/collections';
                    this.apiKey = '9xfTWt1ilKhqIqzV9Z_8jvCzo5ksjexx';
                    this.params = '?apiKey=' + this.apiKey;
                }
                WorkoutService.prototype.getExercises = function () {
                    return this.http.get(this.collectionsUrl + '/exercises' + this.params)
                        .map(function (res) { return res.json(); })
                        .catch(WorkoutService.handleError);
                };
                WorkoutService.prototype.getExercise = function (exerciseName) {
                    return this.http.get(this.collectionsUrl + '/exercises/' + exerciseName + this.params)
                        .map(function (res) { return res.json(); })
                        .catch(WorkoutService.handleError);
                };
                WorkoutService.prototype.updateExercise = function (exercise) {
                    for (var i = 0; i < this.exercises.length; i++) {
                        if (this.exercises[i].name === exercise.name) {
                            this.exercises[i] = exercise;
                        }
                    }
                    return exercise;
                };
                WorkoutService.prototype.addExercise = function (exercise) {
                    if (exercise.name) {
                        this.exercises.push(exercise);
                        return exercise;
                    }
                };
                WorkoutService.prototype.deleteExercise = function (exerciseName) {
                    var exerciseIndex;
                    for (var i = 0; i < this.exercises.length; i++) {
                        if (this.exercises[i].name === exerciseName) {
                            exerciseIndex = i;
                        }
                    }
                    if (exerciseIndex >= 0)
                        this.exercises.splice(exerciseIndex, 1);
                };
                WorkoutService.prototype.getWorkouts = function () {
                    return this.http.get(this.collectionsUrl + '/workouts' + this.params)
                        .map(function (res) { return res.json(); })
                        .map(function (workouts) {
                        var result = [];
                        if (workouts) {
                            workouts.forEach(function (workout) {
                                result.push(new model_1.WorkoutPlan(workout.name, workout.title, workout.restBetweenExercise, workout.exercises, workout.description));
                            });
                        }
                        return result;
                    })
                        .catch(WorkoutService.handleError);
                };
                WorkoutService.prototype.getWorkout = function (workoutName) {
                    return Observable_1.Observable.forkJoin(this.http.get(this.collectionsUrl + '/exercises' + this.params).map(function (res) { return res.json(); }), this.http.get(this.collectionsUrl + '/workouts/' + workoutName + this.params).map(function (res) { return res.json(); })).map(function (data) {
                        var allExercises = data[0];
                        var workout = new model_1.WorkoutPlan(data[1].name, data[1].title, data[1].restBetweenExercise, data[1].exercises, data[1].description);
                        workout.exercises.forEach(function (exercisePlan) { return exercisePlan.exercise = allExercises.find(function (x) { return x.name === exercisePlan.name; }); });
                        return workout;
                    })
                        .catch(WorkoutService.handleError);
                };
                WorkoutService.prototype.addWorkout = function (workout) {
                    var workoutExercises = [];
                    workout.exercises.forEach(function (exercisePlan) {
                        workoutExercises.push({ name: exercisePlan.exercise.name, duration: exercisePlan.duration });
                    });
                    var body = {
                        "_id": workout.name,
                        "exercises": workoutExercises,
                        "name": workout.name,
                        "title": workout.title,
                        "description": workout.description,
                        "restBetweenExercise": workout.restBetweenExercise
                    };
                    return this.http.post(this.collectionsUrl + '/workouts' + this.params, body)
                        .map(function (res) { return res.json(); })
                        .catch(WorkoutService.handleError);
                };
                WorkoutService.prototype.updateWorkout = function (workout) {
                    var workoutExercises = [];
                    workout.exercises.forEach(function (exercisePlan) {
                        workoutExercises.push({ name: exercisePlan.exercise.name, duration: exercisePlan.duration });
                    });
                    var body = {
                        "_id": workout.name,
                        "exercises": workoutExercises,
                        "name": workout.name,
                        "title": workout.title,
                        "description": workout.description,
                        "restBetweenExercise": workout.restBetweenExercise
                    };
                    return this.http.put(this.collectionsUrl + '/workouts/' + workout.name + this.params, body)
                        .map(function (res) { return res.json(); })
                        .catch(WorkoutService.handleError);
                };
                WorkoutService.prototype.deleteWorkout = function (workoutName) {
                    return this.http.delete(this.collectionsUrl + '/workouts/' + workoutName + this.params)
                        .map(function (res) { return res.json(); })
                        .catch(WorkoutService.handleError);
                };
                WorkoutService.handleError = function (error) {
                    console.log(error);
                    return Observable_1.Observable.throw(error || 'Server error');
                };
                WorkoutService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], WorkoutService);
                return WorkoutService;
            }());
            exports_1("WorkoutService", WorkoutService);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3dvcmtvdXQtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFXQTtnQkFRSSx3QkFBbUIsSUFBVTtvQkFBVixTQUFJLEdBQUosSUFBSSxDQUFNO29CQVA3QixhQUFRLEdBQXVCLEVBQUUsQ0FBQztvQkFDbEMsY0FBUyxHQUFvQixFQUFFLENBQUM7b0JBRWhDLG1CQUFjLEdBQUcsc0VBQXNFLENBQUM7b0JBQ3hGLFdBQU0sR0FBRyxrQ0FBa0MsQ0FBQztvQkFDNUMsV0FBTSxHQUFHLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO2dCQUdsQyxDQUFDO2dCQUVELHFDQUFZLEdBQVo7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7eUJBQ2pFLEdBQUcsQ0FBQyxVQUFDLEdBQWEsSUFBSyxPQUFZLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBdEIsQ0FBc0IsQ0FBQzt5QkFDOUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDM0MsQ0FBQztnQkFFRCxvQ0FBVyxHQUFYLFVBQVksWUFBb0I7b0JBQzVCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsR0FBRyxZQUFZLEdBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQzt5QkFDbEYsR0FBRyxDQUFDLFVBQUMsR0FBYSxJQUFLLE9BQVUsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFwQixDQUFvQixDQUFDO3lCQUM1QyxLQUFLLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUMzQyxDQUFDO2dCQUVELHVDQUFjLEdBQWQsVUFBZSxRQUFrQjtvQkFDN0IsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdB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QU8sQ0FBQyxtQkFBbUI7cUJBQ3JELENBQUM7b0JBRUYsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsWUFBWSxHQUFHLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUM7eUJBQ3RGLEdBQUcsQ0FBQyxVQUFDLEdBQVksSUFBSyxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7eUJBQ2pDLEtBQUssQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQzNDLENBQUM7Z0JBRUQsc0NBQWEsR0FBYixVQUFjLFdBQWtCO29CQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxZQUFZLEdBQUcsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7eUJBQ2xGLEdBQUcsQ0FBQyxVQUFDLEdBQVksSUFBSyxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7eUJBQ2pDLEtBQUssQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUE7Z0JBQzFDLENBQUM7Z0JBRU0sMEJBQVcsR0FBbEIsVUFBbUIsS0FBZTtvQkFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDbkIsTUFBTSxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxjQUFjLENBQUMsQ0FBQztnQkFDckQsQ0FBQztnQkF0Skw7b0JBQUMsaUJBQVUsRUFBRTs7a0NBQUE7Z0JBdUpiLHFCQUFDO1lBQUQsQ0F0SkEsQUFzSkMsSUFBQTtZQXRKRCwyQ0FzSkMsQ0FBQSIsImZpbGUiOiJzZXJ2aWNlcy93b3Jrb3V0LXNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0h0dHAsIFJlc3BvbnNlLCBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9uc30gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL2ZvcmtKb2luJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlJztcblxuaW1wb3J0IHsgRXhlcmNpc2UsIEV4ZXJjaXNlUGxhbiwgV29ya291dFBsYW4gfSBmcm9tICcuL21vZGVsJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFdvcmtvdXRTZXJ2aWNlIHtcbiAgICB3b3Jrb3V0czogQXJyYXk8V29ya291dFBsYW4+ID0gW107XG4gICAgZXhlcmNpc2VzOiBBcnJheTxFeGVyY2lzZT4gPSBbXTtcbiAgICB3b3Jrb3V0OiBXb3Jrb3V0UGxhbjtcbiAgICBjb2xsZWN0aW9uc1VybCA9ICdodHRwczovL2FwaS5tb25nb2xhYi5jb20vYXBpLzEvZGF0YWJhc2VzL3BlcnNvbmFsdHJhaW5lci9jb2xsZWN0aW9ucyc7XG4gICAgYXBpS2V5ID0gJzl4ZlRXdDFpbEtocUlxelY5Wl84anZDem81a3NqZXh4JztcbiAgICBwYXJhbXMgPSAnP2FwaUtleT0nICsgdGhpcy5hcGlLZXk7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDogSHR0cCkge1xuICAgIH1cblxuICAgIGdldEV4ZXJjaXNlcygpe1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmNvbGxlY3Rpb25zVXJsICsgJy9leGVyY2lzZXMnICsgdGhpcy5wYXJhbXMpXG4gICAgICAgICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiA8RXhlcmNpc2VbXT5yZXMuanNvbigpKVxuICAgICAgICAgICAgLmNhdGNoKFdvcmtvdXRTZXJ2aWNlLmhhbmRsZUVycm9yKTtcbiAgICB9XG5cbiAgICBnZXRFeGVyY2lzZShleGVyY2lzZU5hbWU6IHN0cmluZyl7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuY29sbGVjdGlvbnNVcmwgKyAnL2V4ZXJjaXNlcy8nICsgZXhlcmNpc2VOYW1lICArIHRoaXMucGFyYW1zKVxuICAgICAgICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gPEV4ZXJjaXNlPnJlcy5qc29uKCkpXG4gICAgICAgICAgICAuY2F0Y2goV29ya291dFNlcnZpY2UuaGFuZGxlRXJyb3IpO1xuICAgIH1cblxuICAgIHVwZGF0ZUV4ZXJjaXNlKGV4ZXJjaXNlOiBFeGVyY2lzZSl7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5leGVyY2lzZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmV4ZXJjaXNlc1tpXS5uYW1lID09PSBleGVyY2lzZS5uYW1lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5leGVyY2lzZXNbaV0gPSBleGVyY2lzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXhlcmNpc2U7XG4gICAgfVxuXG4gICAgYWRkRXhlcmNpc2UoZXhlcmNpc2U6IEV4ZXJjaXNlKXtcbiAgICAgICAgaWYgKGV4ZXJjaXNlLm5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuZXhlcmNpc2VzLnB1c2goZXhlcmNpc2UpO1xuICAgICAgICAgICAgcmV0dXJuIGV4ZXJjaXNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVsZXRlRXhlcmNpc2UoZXhlcmNpc2VOYW1lOiBzdHJpbmcpe1xuICAgICAgICBsZXQgZXhlcmNpc2VJbmRleDogbnVtYmVyO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZXhlcmNpc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5leGVyY2lzZXNbaV0ubmFtZSA9PT0gZXhlcmNpc2VOYW1lKSB7XG4gICAgICAgICAgICAgICAgZXhlcmNpc2VJbmRleCA9IGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV4ZXJjaXNlSW5kZXggPj0gMCkgdGhpcy5leGVyY2lzZXMuc3BsaWNlKGV4ZXJjaXNlSW5kZXgsIDEpO1xuICAgIH1cblxuICAgIGdldFdvcmtvdXRzKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuY29sbGVjdGlvbnNVcmwgKyAnL3dvcmtvdXRzJyArIHRoaXMucGFyYW1zKVxuICAgICAgICAgICAgLm1hcCgocmVzOlJlc3BvbnNlKSA9PiA8V29ya291dFBsYW5bXT5yZXMuanNvbigpKVxuICAgICAgICAgICAgLm1hcCgod29ya291dHM6QXJyYXk8YW55PikgPT4ge1xuICAgICAgICAgICAgICAgIGxldCByZXN1bHQ6QXJyYXk8V29ya291dFBsYW4+ID0gW107XG4gICAgICAgICAgICAgICAgaWYgKHdvcmtvdXRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHdvcmtvdXRzLmZvckVhY2goKHdvcmtvdXQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBXb3Jrb3V0UGxhbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya291dC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrb3V0LnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrb3V0LnJlc3RCZXR3ZWVuRXhlcmNpc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtvdXQuZXhlcmNpc2VzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrb3V0LmRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChXb3Jrb3V0U2VydmljZS5oYW5kbGVFcnJvcik7XG4gICAgfVxuXG4gICAgZ2V0V29ya291dCh3b3Jrb3V0TmFtZTpzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUuZm9ya0pvaW4oXG4gICAgICAgICAgICB0aGlzLmh0dHAuZ2V0KHRoaXMuY29sbGVjdGlvbnNVcmwgKyAnL2V4ZXJjaXNlcycgKyB0aGlzLnBhcmFtcykubWFwKChyZXM6UmVzcG9uc2UpID0+IDxFeGVyY2lzZVtdPnJlcy5qc29uKCkpLFxuICAgICAgICAgICAgdGhpcy5odHRwLmdldCh0aGlzLmNvbGxlY3Rpb25zVXJsICsgJy93b3Jrb3V0cy8nICsgd29ya291dE5hbWUgKyB0aGlzLnBhcmFtcykubWFwKChyZXM6UmVzcG9uc2UpID0+IDxXb3Jrb3V0UGxhbj5yZXMuanNvbigpKVxuICAgICAgICApLm1hcChcbiAgICAgICAgICAgIChkYXRhOmFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBhbGxFeGVyY2lzZXMgPSBkYXRhWzBdO1xuICAgICAgICAgICAgICAgIGxldCB3b3Jrb3V0ID0gbmV3IFdvcmtvdXRQbGFuKFxuICAgICAgICAgICAgICAgICAgICBkYXRhWzFdLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGRhdGFbMV0udGl0bGUsXG4gICAgICAgICAgICAgICAgICAgIGRhdGFbMV0ucmVzdEJldHdlZW5FeGVyY2lzZSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YVsxXS5leGVyY2lzZXMsXG4gICAgICAgICAgICAgICAgICAgIGRhdGFbMV0uZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgd29ya291dC5leGVyY2lzZXMuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAgICAgKGV4ZXJjaXNlUGxhbjphbnkpID0+IGV4ZXJjaXNlUGxhbi5leGVyY2lzZSA9IGFsbEV4ZXJjaXNlcy5maW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgKHg6YW55KSA9PiB4Lm5hbWUgPT09IGV4ZXJjaXNlUGxhbi5uYW1lXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgcmV0dXJuIHdvcmtvdXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgICAgLmNhdGNoKFdvcmtvdXRTZXJ2aWNlLmhhbmRsZUVycm9yKTtcbiAgICB9XG5cbiAgICBhZGRXb3Jrb3V0KHdvcmtvdXQ6YW55KSB7XG4gICAgICAgIGxldCB3b3Jrb3V0RXhlcmNpc2VzOmFueSA9IFtdO1xuICAgICAgICB3b3Jrb3V0LmV4ZXJjaXNlcy5mb3JFYWNoKFxuICAgICAgICAgICAgKGV4ZXJjaXNlUGxhbjphbnkpID0+IHtcbiAgICAgICAgICAgICAgICB3b3Jrb3V0RXhlcmNpc2VzLnB1c2goe25hbWU6IGV4ZXJjaXNlUGxhbi5leGVyY2lzZS5uYW1lLCBkdXJhdGlvbjogZXhlcmNpc2VQbGFuLmR1cmF0aW9ufSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICBsZXQgYm9keSA9IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IHdvcmtvdXQubmFtZSxcbiAgICAgICAgICAgIFwiZXhlcmNpc2VzXCI6IHdvcmtvdXRFeGVyY2lzZXMsXG4gICAgICAgICAgICBcIm5hbWVcIjogd29ya291dC5uYW1lLFxuICAgICAgICAgICAgXCJ0aXRsZVwiOiB3b3Jrb3V0LnRpdGxlLFxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiB3b3Jrb3V0LmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgXCJyZXN0QmV0d2VlbkV4ZXJjaXNlXCI6IHdvcmtvdXQucmVzdEJldHdlZW5FeGVyY2lzZVxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmNvbGxlY3Rpb25zVXJsICsgJy93b3Jrb3V0cycgKyB0aGlzLnBhcmFtcywgYm9keSlcbiAgICAgICAgICAgIC5tYXAoKHJlczpSZXNwb25zZSkgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC5jYXRjaChXb3Jrb3V0U2VydmljZS5oYW5kbGVFcnJvcilcbiAgICB9XG5cbiAgICB1cGRhdGVXb3Jrb3V0KHdvcmtvdXQ6V29ya291dFBsYW4pIHtcbiAgICAgICAgbGV0IHdvcmtvdXRFeGVyY2lzZXM6YW55ID0gW107XG4gICAgICAgIHdvcmtvdXQuZXhlcmNpc2VzLmZvckVhY2goXG4gICAgICAgICAgICAoZXhlcmNpc2VQbGFuOmFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHdvcmtvdXRFeGVyY2lzZXMucHVzaCh7bmFtZTogZXhlcmNpc2VQbGFuLmV4ZXJjaXNlLm5hbWUsIGR1cmF0aW9uOiBleGVyY2lzZVBsYW4uZHVyYXRpb259KVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIGxldCBib2R5ID0ge1xuICAgICAgICAgICAgXCJfaWRcIjogd29ya291dC5uYW1lLFxuICAgICAgICAgICAgXCJleGVyY2lzZXNcIjogd29ya291dEV4ZXJjaXNlcyxcbiAgICAgICAgICAgIFwibmFtZVwiOiB3b3Jrb3V0Lm5hbWUsXG4gICAgICAgICAgICBcInRpdGxlXCI6IHdvcmtvdXQudGl0bGUsXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IHdvcmtvdXQuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBcInJlc3RCZXR3ZWVuRXhlcmNpc2VcIjogd29ya291dC5yZXN0QmV0d2VlbkV4ZXJjaXNlXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodGhpcy5jb2xsZWN0aW9uc1VybCArICcvd29ya291dHMvJyArIHdvcmtvdXQubmFtZSArIHRoaXMucGFyYW1zLCBib2R5KVxuICAgICAgICAgICAgLm1hcCgocmVzOlJlc3BvbnNlKSA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLmNhdGNoKFdvcmtvdXRTZXJ2aWNlLmhhbmRsZUVycm9yKTtcbiAgICB9XG5cbiAgICBkZWxldGVXb3Jrb3V0KHdvcmtvdXROYW1lOnN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh0aGlzLmNvbGxlY3Rpb25zVXJsICsgJy93b3Jrb3V0cy8nICsgd29ya291dE5hbWUgKyB0aGlzLnBhcmFtcylcbiAgICAgICAgICAgIC5tYXAoKHJlczpSZXNwb25zZSkgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC5jYXRjaChXb3Jrb3V0U2VydmljZS5oYW5kbGVFcnJvcilcbiAgICB9XG5cbiAgICBzdGF0aWMgaGFuZGxlRXJyb3IoZXJyb3I6IFJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IgfHwgJ1NlcnZlciBlcnJvcicpO1xuICAgIH1cbn1cbiJdfQ==
