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
    var WorkoutPlan, ExercisePlan, Exercise, ExerciseProgressEvent, ExerciseChangedEvent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            WorkoutPlan = (function () {
                function WorkoutPlan(name, title, restBetweenExercise, exercises, description) {
                    this.name = name;
                    this.title = title;
                    this.restBetweenExercise = restBetweenExercise;
                    this.exercises = exercises;
                    this.description = description;
                }
                WorkoutPlan.prototype.totalWorkoutDuration = function () {
                    if (!this.exercises)
                        return 0;
                    var total = this.exercises.map(function (e) { return e.duration; }).reduce(function (previous, current) { return parseInt(previous) + parseInt(current); });
                    return ((this.restBetweenExercise ? this.restBetweenExercise : 0) * (this.exercises.length - 1)) + total;
                };
                WorkoutPlan = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [String, String, Number, Array, String])
                ], WorkoutPlan);
                return WorkoutPlan;
            }());
            exports_1("WorkoutPlan", WorkoutPlan);
            ExercisePlan = (function () {
                function ExercisePlan(exercise, duration) {
                    this.exercise = exercise;
                    this.duration = duration;
                }
                ExercisePlan = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [Exercise, Object])
                ], ExercisePlan);
                return ExercisePlan;
            }());
            exports_1("ExercisePlan", ExercisePlan);
            Exercise = (function () {
                function Exercise(name, title, description, image, nameSound, procedure, videos) {
                    this.name = name;
                    this.title = title;
                    this.description = description;
                    this.image = image;
                    this.nameSound = nameSound;
                    this.procedure = procedure;
                    this.videos = videos;
                }
                return Exercise;
            }());
            exports_1("Exercise", Exercise);
            ExerciseProgressEvent = (function () {
                function ExerciseProgressEvent(exercise, runningFor, timeRemaining, workoutTimeRemaining) {
                    this.exercise = exercise;
                    this.runningFor = runningFor;
                    this.timeRemaining = timeRemaining;
                    this.workoutTimeRemaining = workoutTimeRemaining;
                }
                return ExerciseProgressEvent;
            }());
            exports_1("ExerciseProgressEvent", ExerciseProgressEvent);
            ExerciseChangedEvent = (function () {
                function ExerciseChangedEvent(current, next) {
                    this.current = current;
                    this.next = next;
                }
                return ExerciseChangedEvent;
            }());
            exports_1("ExerciseChangedEvent", ExerciseChangedEvent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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OlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFdvcmtvdXRQbGFuIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIG5hbWU6IHN0cmluZyxcbiAgICBwdWJsaWMgdGl0bGU6IHN0cmluZyxcbiAgICBwdWJsaWMgcmVzdEJldHdlZW5FeGVyY2lzZTogbnVtYmVyLFxuICAgIHB1YmxpYyBleGVyY2lzZXM6IEV4ZXJjaXNlUGxhbltdLFxuICAgIHB1YmxpYyBkZXNjcmlwdGlvbj86IHN0cmluZykge1xuICB9XG5cbiAgdG90YWxXb3Jrb3V0RHVyYXRpb24oKTogbnVtYmVyIHtcbiAgICBpZiAoIXRoaXMuZXhlcmNpc2VzKSByZXR1cm4gMDtcblxuICAgIGxldCB0b3RhbCA9IHRoaXMuZXhlcmNpc2VzLm1hcCgoZSkgPT4gZS5kdXJhdGlvbikucmVkdWNlKChwcmV2aW91cywgY3VycmVudCkgPT4gcGFyc2VJbnQocHJldmlvdXMpICsgcGFyc2VJbnQoY3VycmVudCkpO1xuXG4gICAgcmV0dXJuICgodGhpcy5yZXN0QmV0d2VlbkV4ZXJjaXNlID8gdGhpcy5yZXN0QmV0d2VlbkV4ZXJjaXNlIDogMCkgKiAodGhpcy5leGVyY2lzZXMubGVuZ3RoIC0gMSkpICsgdG90YWw7XG4gIH1cbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEV4ZXJjaXNlUGxhbiB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBleGVyY2lzZTogRXhlcmNpc2UsIHB1YmxpYyBkdXJhdGlvbjogYW55KSB7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEV4ZXJjaXNlIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nLFxuICAgIHB1YmxpYyB0aXRsZTogc3RyaW5nLFxuICAgIHB1YmxpYyBkZXNjcmlwdGlvbjogc3RyaW5nLFxuICAgIHB1YmxpYyBpbWFnZTogc3RyaW5nLFxuICAgIHB1YmxpYyBuYW1lU291bmQ/OiBzdHJpbmcsXG4gICAgcHVibGljIHByb2NlZHVyZT86IHN0cmluZyxcbiAgICBwdWJsaWMgdmlkZW9zPzogQXJyYXk8c3RyaW5nPikgeyB9XG59XG5cbmV4cG9ydCBjbGFzcyBFeGVyY2lzZVByb2dyZXNzRXZlbnQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZXhlcmNpc2U6IEV4ZXJjaXNlUGxhbixcbiAgICBwdWJsaWMgcnVubmluZ0ZvcjogbnVtYmVyLFxuICAgIHB1YmxpYyB0aW1lUmVtYWluaW5nOiBudW1iZXIsXG4gICAgcHVibGljIHdvcmtvdXRUaW1lUmVtYWluaW5nOiBudW1iZXIpIHsgfVxufVxuXG5leHBvcnQgY2xhc3MgRXhlcmNpc2VDaGFuZ2VkRXZlbnQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgY3VycmVudDogRXhlcmNpc2VQbGFuLFxuICAgIHB1YmxpYyBuZXh0OiBFeGVyY2lzZVBsYW5cbiAgICApIHsgfVxufVxuIl19
