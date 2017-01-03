System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var WorkoutPlan, ExercisePlan, Exercise;
    return {
        setters:[],
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
                    if (!this.exercises) {
                        return 0;
                    }
                    var total = this.exercises.map(function (e) { return e.duration; }).reduce(function (previous, current) { return previous + current; });
                    return (this.restBetweenExercise ? this.restBetweenExercise : 0) * (this.exercises.length - 1) + total;
                };
                return WorkoutPlan;
            }());
            exports_1("WorkoutPlan", WorkoutPlan);
            ExercisePlan = (function () {
                function ExercisePlan(exercise, duration) {
                    this.exercise = exercise;
                    this.duration = duration;
                }
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
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvd29ya291dC1ydW5uZXIvbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztZQUFBO2dCQUVFLHFCQUNTLElBQVksRUFDWixLQUFhLEVBQ2IsbUJBQTJCLEVBQzNCLFNBQXlCLEVBQ3pCLFdBQW9CO29CQUpwQixTQUFJLEdBQUosSUFBSSxDQUFRO29CQUNaLFVBQUssR0FBTCxLQUFLLENBQVE7b0JBQ2Isd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFRO29CQUMzQixjQUFTLEdBQVQsU0FBUyxDQUFnQjtvQkFDekIsZ0JBQVcsR0FBWCxXQUFXLENBQVM7Z0JBQUksQ0FBQztnQkFFbEMsMENBQW9CLEdBQXBCO29CQUNFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7d0JBQ3BCLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQ1gsQ0FBQztvQkFFRCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxRQUFRLEVBQVYsQ0FBVSxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQUMsUUFBUSxFQUFFLE9BQU8sSUFBSyxPQUFBLFFBQVEsR0FBRyxPQUFPLEVBQWxCLENBQWtCLENBQUMsQ0FBQztvQkFFcEcsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztnQkFDekcsQ0FBQztnQkFDSCxrQkFBQztZQUFELENBbEJBLEFBa0JDLElBQUE7WUFsQkQscUNBa0JDLENBQUE7WUFFRDtnQkFDRSxzQkFDUyxRQUFrQixFQUNsQixRQUFnQjtvQkFEaEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtvQkFDbEIsYUFBUSxHQUFSLFFBQVEsQ0FBUTtnQkFBSSxDQUFDO2dCQUNoQyxtQkFBQztZQUFELENBSkEsQUFJQyxJQUFBO1lBSkQsdUNBSUMsQ0FBQTtZQUVEO2dCQUVFLGtCQUNTLElBQVksRUFDWixLQUFhLEVBQ2IsV0FBbUIsRUFDbkIsS0FBYSxFQUNiLFNBQWtCLEVBQ2xCLFNBQWtCLEVBQ2xCLE1BQXNCO29CQU50QixTQUFJLEdBQUosSUFBSSxDQUFRO29CQUNaLFVBQUssR0FBTCxLQUFLLENBQVE7b0JBQ2IsZ0JBQVcsR0FBWCxXQUFXLENBQVE7b0JBQ25CLFVBQUssR0FBTCxLQUFLLENBQVE7b0JBQ2IsY0FBUyxHQUFULFNBQVMsQ0FBUztvQkFDbEIsY0FBUyxHQUFULFNBQVMsQ0FBUztvQkFDbEIsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7Z0JBQUksQ0FBQztnQkFDdEMsZUFBQztZQUFELENBVkEsQUFVQyxJQUFBO1lBVkQsK0JBVUMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3dvcmtvdXQtcnVubmVyL21vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFdvcmtvdXRQbGFuIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nLFxuICAgIHB1YmxpYyB0aXRsZTogc3RyaW5nLFxuICAgIHB1YmxpYyByZXN0QmV0d2VlbkV4ZXJjaXNlOiBudW1iZXIsXG4gICAgcHVibGljIGV4ZXJjaXNlczogRXhlcmNpc2VQbGFuW10sXG4gICAgcHVibGljIGRlc2NyaXB0aW9uPzogc3RyaW5nKSB7IH1cblxuICB0b3RhbFdvcmtvdXREdXJhdGlvbigpOiBudW1iZXIge1xuICAgIGlmICghdGhpcy5leGVyY2lzZXMpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIGxldCB0b3RhbCA9IHRoaXMuZXhlcmNpc2VzLm1hcCgoZSkgPT4gZS5kdXJhdGlvbikucmVkdWNlKChwcmV2aW91cywgY3VycmVudCkgPT4gcHJldmlvdXMgKyBjdXJyZW50KTtcblxuICAgIHJldHVybiAodGhpcy5yZXN0QmV0d2VlbkV4ZXJjaXNlID8gdGhpcy5yZXN0QmV0d2VlbkV4ZXJjaXNlIDogMCkgKiAodGhpcy5leGVyY2lzZXMubGVuZ3RoIC0gMSkgKyB0b3RhbDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRXhlcmNpc2VQbGFuIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGV4ZXJjaXNlOiBFeGVyY2lzZSxcbiAgICBwdWJsaWMgZHVyYXRpb246IG51bWJlcikgeyB9XG59XG5cbmV4cG9ydCBjbGFzcyBFeGVyY2lzZSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIG5hbWU6IHN0cmluZyxcbiAgICBwdWJsaWMgdGl0bGU6IHN0cmluZyxcbiAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZyxcbiAgICBwdWJsaWMgaW1hZ2U6IHN0cmluZyxcbiAgICBwdWJsaWMgbmFtZVNvdW5kPzogc3RyaW5nLFxuICAgIHB1YmxpYyBwcm9jZWR1cmU/OiBzdHJpbmcsXG4gICAgcHVibGljIHZpZGVvcz86IEFycmF5PHN0cmluZz4pIHsgfVxufVxuIl19
