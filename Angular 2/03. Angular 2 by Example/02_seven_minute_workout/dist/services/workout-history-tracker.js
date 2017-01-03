System.register(['./local-storage', '@angular/core'], function(exports_1, context_1) {
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
    var local_storage_1, core_1;
    var WorkoutHistoryTracker, WorkoutLogEntry;
    return {
        setters:[
            function (local_storage_1_1) {
                local_storage_1 = local_storage_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            WorkoutHistoryTracker = (function () {
                function WorkoutHistoryTracker(storage) {
                    this.storage = storage;
                    this.maxHistoryItems = 20; //We only track for last 20 exercise
                    this.currentWorkoutLog = null;
                    this.workoutHistory = [];
                    this.storageKey = "workouts";
                    this.workoutHistory = (storage.getItem(this.storageKey) || [])
                        .map(function (item) {
                        item.startedOn = new Date(item.startedOn.toString());
                        item.endedOn = item.endedOn == null ? null : new Date(item.endedOn.toString());
                        return item;
                    });
                }
                Object.defineProperty(WorkoutHistoryTracker.prototype, "tracking", {
                    get: function () {
                        return this.workoutTracked;
                    },
                    enumerable: true,
                    configurable: true
                });
                WorkoutHistoryTracker.prototype.startTracking = function () {
                    this.workoutTracked = true;
                    this.currentWorkoutLog = new WorkoutLogEntry(new Date());
                    if (this.workoutHistory.length >= this.maxHistoryItems) {
                        this.workoutHistory.shift();
                    }
                    this.workoutHistory.push(this.currentWorkoutLog);
                    this.storage.setItem(this.storageKey, this.workoutHistory);
                };
                WorkoutHistoryTracker.prototype.exerciseComplete = function (exercise) {
                    this.currentWorkoutLog.lastExercise = exercise.exercise.title;
                    ++this.currentWorkoutLog.exercisesDone;
                    this.storage.setItem(this.storageKey, this.workoutHistory);
                };
                WorkoutHistoryTracker.prototype.endTracking = function (completed) {
                    this.currentWorkoutLog.completed = completed;
                    this.currentWorkoutLog.endedOn = new Date();
                    this.currentWorkoutLog = null;
                    this.workoutTracked = false;
                    this.storage.setItem(this.storageKey, this.workoutHistory);
                };
                ;
                WorkoutHistoryTracker.prototype.getHistory = function () {
                    return this.workoutHistory;
                };
                WorkoutHistoryTracker = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [local_storage_1.LocalStorage])
                ], WorkoutHistoryTracker);
                return WorkoutHistoryTracker;
            }());
            exports_1("WorkoutHistoryTracker", WorkoutHistoryTracker);
            WorkoutLogEntry = (function () {
                function WorkoutLogEntry(startedOn, completed, exercisesDone, lastExercise, endedOn) {
                    if (completed === void 0) { completed = false; }
                    if (exercisesDone === void 0) { exercisesDone = 0; }
                    this.startedOn = startedOn;
                    this.completed = completed;
                    this.exercisesDone = exercisesDone;
                    this.lastExercise = lastExercise;
                    this.endedOn = endedOn;
                }
                return WorkoutLogEntry;
            }());
            exports_1("WorkoutLogEntry", WorkoutLogEntry);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3dvcmtvdXQtaGlzdG9yeS10cmFja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0E7Z0JBT0UsK0JBQW9CLE9BQXFCO29CQUFyQixZQUFPLEdBQVAsT0FBTyxDQUFjO29CQU5qQyxvQkFBZSxHQUFXLEVBQUUsQ0FBQyxDQUFHLG9DQUFvQztvQkFDcEUsc0JBQWlCLEdBQW9CLElBQUksQ0FBQztvQkFDMUMsbUJBQWMsR0FBMkIsRUFBRSxDQUFDO29CQUU1QyxlQUFVLEdBQVcsVUFBVSxDQUFDO29CQUd0QyxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBeUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQzt5QkFDbkYsR0FBRyxDQUFDLFVBQUMsSUFBcUI7d0JBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO3dCQUNyRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7d0JBQy9FLE1BQU0sQ0FBQyxJQUFJLENBQUM7b0JBQ2QsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQztnQkFFRCxzQkFBSSwyQ0FBUTt5QkFBWjt3QkFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztvQkFDN0IsQ0FBQzs7O21CQUFBO2dCQUVELDZDQUFhLEdBQWI7b0JBQ0UsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7b0JBQzNCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7b0JBQ3pELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO3dCQUN2RCxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUM5QixDQUFDO29CQUNELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO29CQUNqRCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztnQkFDN0QsQ0FBQztnQkFFRCxnREFBZ0IsR0FBaEIsVUFBaUIsUUFBc0I7b0JBQ3JDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7b0JBQzlELEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQztvQkFDdkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7Z0JBQzdELENBQUM7Z0JBRUQsMkNBQVcsR0FBWCxVQUFZLFNBQWtCO29CQUM1QixJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztvQkFDN0MsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO29CQUM1QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO29CQUM5QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztvQkFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7Z0JBQzdELENBQUM7O2dCQUVELDBDQUFVLEdBQVY7b0JBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7Z0JBQzdCLENBQUM7Z0JBL0NIO29CQUFDLGlCQUFVLEVBQUU7O3lDQUFBO2dCQWdEYiw0QkFBQztZQUFELENBL0NBLEFBK0NDLElBQUE7WUEvQ0QseURBK0NDLENBQUE7WUFDRDtnQkFDRSx5QkFDUyxTQUFlLEVBQ2YsU0FBMEIsRUFDMUIsYUFBeUIsRUFDekIsWUFBcUIsRUFDckIsT0FBYztvQkFIckIseUJBQWlDLEdBQWpDLGlCQUFpQztvQkFDakMsNkJBQWdDLEdBQWhDLGlCQUFnQztvQkFGekIsY0FBUyxHQUFULFNBQVMsQ0FBTTtvQkFDZixjQUFTLEdBQVQsU0FBUyxDQUFpQjtvQkFDMUIsa0JBQWEsR0FBYixhQUFhLENBQVk7b0JBQ3pCLGlCQUFZLEdBQVosWUFBWSxDQUFTO29CQUNyQixZQUFPLEdBQVAsT0FBTyxDQUFPO2dCQUFJLENBQUM7Z0JBQzlCLHNCQUFDO1lBQUQsQ0FQQSxBQU9DLElBQUE7WUFQRCw2Q0FPQyxDQUFBIiwiZmlsZSI6InNlcnZpY2VzL3dvcmtvdXQtaGlzdG9yeS10cmFja2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFeGVyY2lzZVBsYW59IGZyb20gJy4vbW9kZWwnO1xuaW1wb3J0IHtMb2NhbFN0b3JhZ2V9IGZyb20gJy4vbG9jYWwtc3RvcmFnZSc7XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgV29ya291dEhpc3RvcnlUcmFja2VyIHtcbiAgcHJpdmF0ZSBtYXhIaXN0b3J5SXRlbXM6IG51bWJlciA9IDIwOyAgIC8vV2Ugb25seSB0cmFjayBmb3IgbGFzdCAyMCBleGVyY2lzZVxuICBwcml2YXRlIGN1cnJlbnRXb3Jrb3V0TG9nOiBXb3Jrb3V0TG9nRW50cnkgPSBudWxsO1xuICBwcml2YXRlIHdvcmtvdXRIaXN0b3J5OiBBcnJheTxXb3Jrb3V0TG9nRW50cnk+ID0gW107XG4gIHByaXZhdGUgd29ya291dFRyYWNrZWQ6IGJvb2xlYW47XG4gIHByaXZhdGUgc3RvcmFnZUtleTogc3RyaW5nID0gXCJ3b3Jrb3V0c1wiO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmFnZTogTG9jYWxTdG9yYWdlKSB7XG4gICAgdGhpcy53b3Jrb3V0SGlzdG9yeSA9IChzdG9yYWdlLmdldEl0ZW08QXJyYXk8V29ya291dExvZ0VudHJ5Pj4odGhpcy5zdG9yYWdlS2V5KSB8fCBbXSlcbiAgICAgIC5tYXAoKGl0ZW06IFdvcmtvdXRMb2dFbnRyeSkgPT4ge1xuICAgICAgaXRlbS5zdGFydGVkT24gPSBuZXcgRGF0ZShpdGVtLnN0YXJ0ZWRPbi50b1N0cmluZygpKTtcbiAgICAgIGl0ZW0uZW5kZWRPbiA9IGl0ZW0uZW5kZWRPbiA9PSBudWxsID8gbnVsbCA6IG5ldyBEYXRlKGl0ZW0uZW5kZWRPbi50b1N0cmluZygpKTtcbiAgICAgIHJldHVybiBpdGVtO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0IHRyYWNraW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLndvcmtvdXRUcmFja2VkO1xuICB9XG5cbiAgc3RhcnRUcmFja2luZygpIHtcbiAgICB0aGlzLndvcmtvdXRUcmFja2VkID0gdHJ1ZTtcbiAgICB0aGlzLmN1cnJlbnRXb3Jrb3V0TG9nID0gbmV3IFdvcmtvdXRMb2dFbnRyeShuZXcgRGF0ZSgpKTtcbiAgICBpZiAodGhpcy53b3Jrb3V0SGlzdG9yeS5sZW5ndGggPj0gdGhpcy5tYXhIaXN0b3J5SXRlbXMpIHtcbiAgICAgIHRoaXMud29ya291dEhpc3Rvcnkuc2hpZnQoKTtcbiAgICB9XG4gICAgdGhpcy53b3Jrb3V0SGlzdG9yeS5wdXNoKHRoaXMuY3VycmVudFdvcmtvdXRMb2cpO1xuICAgIHRoaXMuc3RvcmFnZS5zZXRJdGVtKHRoaXMuc3RvcmFnZUtleSwgdGhpcy53b3Jrb3V0SGlzdG9yeSk7XG4gIH1cblxuICBleGVyY2lzZUNvbXBsZXRlKGV4ZXJjaXNlOiBFeGVyY2lzZVBsYW4pIHtcbiAgICB0aGlzLmN1cnJlbnRXb3Jrb3V0TG9nLmxhc3RFeGVyY2lzZSA9IGV4ZXJjaXNlLmV4ZXJjaXNlLnRpdGxlO1xuICAgICsrdGhpcy5jdXJyZW50V29ya291dExvZy5leGVyY2lzZXNEb25lO1xuICAgIHRoaXMuc3RvcmFnZS5zZXRJdGVtKHRoaXMuc3RvcmFnZUtleSwgdGhpcy53b3Jrb3V0SGlzdG9yeSk7XG4gIH1cblxuICBlbmRUcmFja2luZyhjb21wbGV0ZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmN1cnJlbnRXb3Jrb3V0TG9nLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcbiAgICB0aGlzLmN1cnJlbnRXb3Jrb3V0TG9nLmVuZGVkT24gPSBuZXcgRGF0ZSgpO1xuICAgIHRoaXMuY3VycmVudFdvcmtvdXRMb2cgPSBudWxsO1xuICAgIHRoaXMud29ya291dFRyYWNrZWQgPSBmYWxzZTtcbiAgICB0aGlzLnN0b3JhZ2Uuc2V0SXRlbSh0aGlzLnN0b3JhZ2VLZXksIHRoaXMud29ya291dEhpc3RvcnkpO1xuICB9O1xuXG4gIGdldEhpc3RvcnkoKTogQXJyYXk8V29ya291dExvZ0VudHJ5PiB7XG4gICAgcmV0dXJuIHRoaXMud29ya291dEhpc3Rvcnk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBXb3Jrb3V0TG9nRW50cnkge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgc3RhcnRlZE9uOiBEYXRlLFxuICAgIHB1YmxpYyBjb21wbGV0ZWQ6IGJvb2xlYW4gPSBmYWxzZSxcbiAgICBwdWJsaWMgZXhlcmNpc2VzRG9uZTogbnVtYmVyID0gMCxcbiAgICBwdWJsaWMgbGFzdEV4ZXJjaXNlPzogc3RyaW5nLFxuICAgIHB1YmxpYyBlbmRlZE9uPzogRGF0ZSkgeyB9XG59XG4iXX0=
