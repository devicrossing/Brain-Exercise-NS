"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platformModule = require("tns-core-modules/platform");
var platform_1 = require("platform");
var router_1 = require("nativescript-angular/router");
var questions_service_1 = require("../questions.service");
var enums_1 = require("ui/enums");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var router_2 = require("@angular/router");
var application = require("application");
var application_1 = require("application");
var tnsfx = require("nativescript-effects");
var orientation = require("nativescript-orientation");
var PlayComponent = /** @class */ (function () {
    function PlayComponent(modalService, viewContainerRef, ngZone, route, router, routerExtensions, questionService) {
        var _this = this;
        this.modalService = modalService;
        this.viewContainerRef = viewContainerRef;
        this.ngZone = ngZone;
        this.route = route;
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.questionService = questionService;
        this.route.params
            .forEach(function (params) {
            _this.correction = params.correction;
            _this.mode = params.mode;
        });
        switch (this.mode) {
            case "geo":
                this.questions = questionService.geoQuestions;
                break;
            case "math":
                this.questions = questionService.mathQuestions;
                break;
            case "science":
                this.questions = questionService.mathQuestions;
                break;
            default:
                break;
        }
        this.questionIndex = 0;
        this.questionCurrent = this.questions[0];
        this.score = 0;
        this.questionIndicator = "Question " + (this.questionIndex + 1);
        // init the players answers every qcm
        if (this.correction === "false") {
            console.log("answers initialized !!!!");
            this.questionService.playerAnswers = [];
        }
        console.log("corection value is : " + this.correction);
        console.dir(this.questionService.playerAnswers);
        // second way to find if correction mode
        if (this.questionService.playerAnswers.length > 0) {
            console.log("mode correcton");
        }
        else {
            console.log("mode NO correcton");
        }
        // correction debug value
    }
    PlayComponent.prototype.nextCorrection = function () {
        this.questionIndex++;
        this.questionCurrent = this.questions[this.questionIndex];
        this.animateQuestionIndicator();
        this.answerL0.className = "answer_label";
        this.answerL1.className = "answer_label";
        this.answerL2.className = "answer_label";
        this.answerL3.className = "answer_label";
        this.goodAnswer = this.questions[this.questionIndex].a;
        this.playerAnswer = this.playerAnswers[this.questionIndex];
        // switch the player answer for first question "need to be on ngInit()"
        this.testPlayerAnswer();
    };
    PlayComponent.prototype.goHome = function () {
        this.routerExtensions.navigate(["home"], { clearHistory: true });
    };
    PlayComponent.prototype.testPlayerAnswer = function () {
        // reload original images
        this.answerI0.src = "res://answer0";
        this.answerI1.src = "res://answer1";
        this.answerI2.src = "res://answer2";
        this.answerI3.src = "res://answer3";
        switch (this.playerAnswer) {
            case 0:
                if (this.playerAnswer === this.goodAnswer) {
                    this.answerL0.className = "answer_label_correct";
                    this.answerI0.src = "res://right";
                }
                else {
                    this.answerL0.className = "answer_label_incorrect";
                    this.answerI0.src = "res://wrong";
                    switch (this.goodAnswer) {
                        case 1:
                            this.answerL1.className = "answer_label_correct";
                            this.answerI1.src = "res://right";
                            break;
                        case 2:
                            this.answerL2.className = "answer_label_correct";
                            this.answerI2.src = "res://right";
                            break;
                        case 3:
                            this.answerL3.className = "answer_label_correct";
                            this.answerI3.src = "res://right";
                            break;
                        default:
                            break;
                    }
                }
                break;
            case 1:
                if (this.playerAnswer === this.goodAnswer) {
                    this.answerL1.className = "answer_label_correct";
                    this.answerI1.src = "res://right";
                }
                else {
                    this.answerL1.className = "answer_label_incorrect";
                    this.answerI1.src = "res://wrong";
                    switch (this.goodAnswer) {
                        case 0:
                            this.answerL0.className = "answer_label_correct";
                            this.answerI0.src = "res://right";
                            break;
                        case 2:
                            this.answerL2.className = "answer_label_correct";
                            this.answerI2.src = "res://right";
                            break;
                        case 3:
                            this.answerL3.className = "answer_label_correct";
                            this.answerI3.src = "res://right";
                            break;
                        default:
                            break;
                    }
                }
                break;
            case 2:
                if (this.playerAnswer === this.goodAnswer) {
                    this.answerL2.className = "answer_label_correct";
                    this.answerI2.src = "res://right";
                }
                else {
                    this.answerL2.className = "answer_label_incorrect";
                    this.answerI2.src = "res://wrong";
                    switch (this.goodAnswer) {
                        case 0:
                            this.answerL0.className = "answer_label_correct";
                            this.answerI0.src = "res://right";
                            break;
                        case 1:
                            this.answerL1.className = "answer_label_correct";
                            this.answerI1.src = "res://right";
                            break;
                        case 3:
                            this.answerL3.className = "answer_label_correct";
                            this.answerI3.src = "res://right";
                            break;
                        default:
                            break;
                    }
                }
                break;
            case 3:
                if (this.playerAnswer === this.goodAnswer) {
                    this.answerL3.className = "answer_label_correct";
                    this.answerI3.src = "res://right";
                }
                else {
                    this.answerL3.className = "answer_label_incorrect";
                    this.answerI3.src = "res://wrong";
                    switch (this.goodAnswer) {
                        case 0:
                            this.answerL0.className = "answer_label_correct";
                            this.answerI0.src = "res://right";
                            break;
                        case 1:
                            this.answerL1.className = "answer_label_correct";
                            this.answerI1.src = "res://right";
                            break;
                        case 2:
                            this.answerL2.className = "answer_label_correct";
                            this.answerI2.src = "res://right";
                            break;
                        default:
                            break;
                    }
                }
                break;
            default:
                break;
        }
    };
    PlayComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("mode is : " + this.mode);
        // if not android return
        if (!platform_1.isAndroid) {
            return;
        }
        application.android.on(application_1.AndroidApplication.activityBackPressedEvent, function (data) {
            data.cancel = true;
            _this.routerExtensions.navigate(["/home"], { clearHistory: true });
        });
        var _deviceType = platformModule.device.deviceType;
        var _gridLayout = this.gridLayout.nativeElement;
        _gridLayout.className = _deviceType.toLowerCase();
        this._questionLabel = this.questionLabel.nativeElement;
        // _question.top = screen.mainScreen.heightPixels / 4;
        var _questionImg = this.image.nativeElement;
        // const x = _questionImg.getActualSize().height;
        this.answerI0 = this.answerImg0.nativeElement;
        this.answerI1 = this.answerImg1.nativeElement;
        this.answerI2 = this.answerImg2.nativeElement;
        this.answerI3 = this.answerImg3.nativeElement;
        // console.dir(this.answerI0);
        // Quiz Logic
        this.answerL0 = this.answerLabel0.nativeElement;
        this.answerL1 = this.answerLabel1.nativeElement;
        this.answerL2 = this.answerLabel2.nativeElement;
        this.answerL3 = this.answerLabel3.nativeElement;
        orientation.disableRotation();
        if (this.correction === "true") {
            this.answerI0.removeEventListener("tap");
            this.answerI1.removeEventListener("tap");
            this.answerI2.removeEventListener("tap");
            this.answerI3.removeEventListener("tap");
            this.playerAnswers = this.questionService.playerAnswers;
            this.goodAnswer = this.questions[this.questionIndex].a;
            this.playerAnswer = this.playerAnswers[this.questionIndex];
            // switch the player answer for first question "need to be on ngInit()"
            this.testPlayerAnswer();
        }
        // this.playerAnswers[this.questionIndex].playerAnswer
    };
    PlayComponent.prototype.animateQuestionIndicator = function () {
        this.questionIndicator = "Question " + (this.questionIndex + 1);
    };
    PlayComponent.prototype.nextQuestion = function (answer) {
        // todo1
        // this.playwerAnswerTemp = { id: this.questionIndex, question: this.questionCurrent, playerAnswer: answer };
        // this.playerAnswers.push(this.playwerAnswerTemp);
        var _this = this;
        this.answerI0.removeEventListener("tap");
        this.answerI1.removeEventListener("tap");
        this.answerI2.removeEventListener("tap");
        this.answerI3.removeEventListener("tap");
        if (this.correction === "false") {
            this.questionService.playerAnswers.push(answer);
        }
        // console.dir(this.playerAnswers);
        switch (answer) {
            case 0:
                this.animateAnswer0();
                break;
            case 1:
                this.animateAnswer1();
                break;
            case 2:
                this.animateAnswer2();
                break;
            case 3:
                this.animateAnswer3();
                break;
            default:
                break;
        }
        // Change Question Information after end of animation
        setTimeout(function () {
            _this.nextQuestionLogic(answer);
        }, 1000);
    };
    PlayComponent.prototype.nextQuestionLogic = function (_answer) {
        var _this = this;
        // if there is next question
        if (this.questionIndex < this.questions.length - 1) {
            // todo finish test debug
            // if good answer
            if (this.questionCurrent.a === _answer) {
                // console.log("xxx good answer");
                this.score++;
            }
            else {
                // console.log("xxx bad answer");
            }
            // todo if was here
            // todo TextChange Animation
            setTimeout(function () {
                _this._questionLabel.animate({
                    opacity: 0,
                    duration: 200,
                    curve: enums_1.AnimationCurve.easeInOut
                });
                _this.questionIndex++;
                _this.animateQuestionIndicator();
                _this.questionCurrent = _this.questions[_this.questionIndex];
            }, 1000);
            // change the text of question and show it after fade
            setTimeout(function () {
                _this.ngZone.run(function () {
                    // Do whatever you want here
                });
                _this._questionLabel.animate({
                    opacity: 1,
                    duration: 200,
                    curve: enums_1.AnimationCurve.easeInOut
                });
                _this.answerI0.addEventListener("tap", function () {
                    _this.nextQuestion(0);
                });
                _this.answerI1.addEventListener("tap", function () {
                    _this.nextQuestion(1);
                });
                _this.answerI2.addEventListener("tap", function () {
                    _this.nextQuestion(2);
                });
                _this.answerI3.addEventListener("tap", function () {
                    _this.nextQuestion(3);
                });
            }, 1200);
            console.log("index : " + this.questionIndex + "  lenght: " + this.questions.length);
            if (this.questionIndex >= this.questions.length - 1) {
                // this.routerExtensions.navigate(['/score'])
                this.routerExtensions.navigateByUrl("/score/" + this.score + "/" + this.mode, { clearHistory: true });
            }
        }
        else {
            // todo questions finished
            this.routerExtensions.navigateByUrl("/score/" + this.score + "/" + this.mode, { clearHistory: true });
        }
    };
    PlayComponent.prototype.animateAnswer0 = function () {
        var _this = this;
        this.answerI0.className = "panel_answer animate_bigger";
        setTimeout(function () {
            _this.answerI0.className = "panel_answer";
        }, 1000);
        this.answerL0.className = "answer_label animate_bigger";
        setTimeout(function () {
            _this.answerL0.className = "answer_label";
        }, 1000);
        this.answerI1.className = "panel_answer animate_smaller";
        setTimeout(function () {
            _this.answerI1.className = "panel_answer";
        }, 1000);
        this.answerL1.className = "answer_label animate_smaller";
        setTimeout(function () {
            _this.answerL1.className = "answer_label";
        }, 1000);
        this.answerI2.className = "panel_answer animate_smaller";
        setTimeout(function () {
            _this.answerI2.className = "panel_answer";
        }, 1000);
        this.answerL2.className = "answer_label animate_smaller";
        setTimeout(function () {
            _this.answerL2.className = "answer_label";
        }, 1000);
        this.answerI3.className = "panel_answer animate_smaller";
        setTimeout(function () {
            _this.answerI3.className = "panel_answer";
        }, 1000);
        this.answerL3.className = "answer_label animate_smaller";
        setTimeout(function () {
            _this.answerL3.className = "answer_label";
        }, 1000);
    };
    PlayComponent.prototype.animateAnswer1 = function () {
        var _this = this;
        this.answerI1.className = "panel_answer animate_bigger";
        setTimeout(function () {
            _this.answerI1.className = "panel_answer";
        }, 1000);
        this.answerL1.className = "answer_label animate_bigger";
        setTimeout(function () {
            _this.answerL1.className = "answer_label";
        }, 1000);
        this.answerI0.className = "panel_answer animate_smaller";
        setTimeout(function () {
            _this.answerI0.className = "panel_answer";
        }, 1000);
        this.answerL0.className = "answer_label animate_smaller";
        setTimeout(function () {
            _this.answerL0.className = "answer_label";
        }, 1000);
        this.answerI2.className = "panel_answer animate_smaller";
        setTimeout(function () {
            _this.answerI2.className = "panel_answer";
        }, 1000);
        this.answerL2.className = "answer_label animate_smaller";
        setTimeout(function () {
            _this.answerL2.className = "answer_label";
        }, 1000);
        this.answerI3.className = "panel_answer animate_smaller";
        setTimeout(function () {
            _this.answerI3.className = "panel_answer";
        }, 1000);
        this.answerL3.className = "answer_label animate_smaller";
        setTimeout(function () {
            _this.answerL3.className = "answer_label";
        }, 1000);
    };
    PlayComponent.prototype.animateAnswer2 = function () {
        var _this = this;
        this.answerI2.className = "panel_answer animate_bigger";
        setTimeout(function () {
            _this.answerI2.className = "panel_answer";
        }, 1000);
        this.answerL2.className = "answer_label animate_bigger";
        setTimeout(function () {
            _this.answerL2.className = "answer_label";
        }, 1000);
        this.answerI0.className = "panel_answer animate_smaller";
        setTimeout(function () {
            _this.answerI0.className = "panel_answer";
        }, 1000);
        this.answerL0.className = "answer_label animate_smaller";
        setTimeout(function () {
            _this.answerL0.className = "answer_label";
        }, 1000);
        this.answerI1.className = "panel_answer animate_smaller";
        setTimeout(function () {
            _this.answerI1.className = "panel_answer";
        }, 1000);
        this.answerL1.className = "answer_label animate_smaller";
        setTimeout(function () {
            _this.answerL1.className = "answer_label";
        }, 1000);
        this.answerI3.className = "panel_answer animate_smaller";
        setTimeout(function () {
            _this.answerI3.className = "panel_answer";
        }, 1000);
        this.answerL3.className = "answer_label animate_smaller";
        setTimeout(function () {
            _this.answerL3.className = "answer_label";
        }, 1000);
    };
    PlayComponent.prototype.animateAnswer3 = function () {
        var _this = this;
        this.answerI3.className = "panel_answer animate_bigger";
        setTimeout(function () {
            _this.answerI3.className = "panel_answer";
        }, 1000);
        this.answerL3.className = "answer_label animate_bigger";
        setTimeout(function () {
            _this.answerL3.className = "answer_label";
        }, 1000);
        this.answerI0.className = "panel_answer animate_smaller";
        setTimeout(function () {
            _this.answerI0.className = "panel_answer";
        }, 1000);
        this.answerL0.className = "answer_label animate_smaller";
        setTimeout(function () {
            _this.answerL0.className = "answer_label";
        }, 1000);
        this.answerI1.className = "panel_answer animate_smaller";
        setTimeout(function () {
            _this.answerI1.className = "panel_answer";
        }, 1000);
        this.answerL1.className = "answer_label animate_smaller";
        setTimeout(function () {
            _this.answerL1.className = "answer_label";
        }, 1000);
        this.answerI2.className = "panel_answer animate_smaller";
        setTimeout(function () {
            _this.answerI2.className = "panel_answer";
        }, 1000);
        this.answerL2.className = "answer_label animate_smaller";
        setTimeout(function () {
            _this.answerL2.className = "answer_label";
        }, 1000);
    };
    __decorate([
        core_1.ViewChild("gridLayout"),
        __metadata("design:type", core_1.ElementRef)
    ], PlayComponent.prototype, "gridLayout", void 0);
    __decorate([
        core_1.ViewChild("questionLabel"),
        __metadata("design:type", core_1.ElementRef)
    ], PlayComponent.prototype, "questionLabel", void 0);
    __decorate([
        core_1.ViewChild("image"),
        __metadata("design:type", core_1.ElementRef)
    ], PlayComponent.prototype, "image", void 0);
    __decorate([
        core_1.ViewChild("answerImg0"),
        __metadata("design:type", core_1.ElementRef)
    ], PlayComponent.prototype, "answerImg0", void 0);
    __decorate([
        core_1.ViewChild("answerImg1"),
        __metadata("design:type", core_1.ElementRef)
    ], PlayComponent.prototype, "answerImg1", void 0);
    __decorate([
        core_1.ViewChild("answerImg2"),
        __metadata("design:type", core_1.ElementRef)
    ], PlayComponent.prototype, "answerImg2", void 0);
    __decorate([
        core_1.ViewChild("answerImg3"),
        __metadata("design:type", core_1.ElementRef)
    ], PlayComponent.prototype, "answerImg3", void 0);
    __decorate([
        core_1.ViewChild("answerLabel0"),
        __metadata("design:type", core_1.ElementRef)
    ], PlayComponent.prototype, "answerLabel0", void 0);
    __decorate([
        core_1.ViewChild("answerLabel1"),
        __metadata("design:type", core_1.ElementRef)
    ], PlayComponent.prototype, "answerLabel1", void 0);
    __decorate([
        core_1.ViewChild("answerLabel2"),
        __metadata("design:type", core_1.ElementRef)
    ], PlayComponent.prototype, "answerLabel2", void 0);
    __decorate([
        core_1.ViewChild("answerLabel3"),
        __metadata("design:type", core_1.ElementRef)
    ], PlayComponent.prototype, "answerLabel3", void 0);
    PlayComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "app-play",
            templateUrl: "./play.component.html",
            styleUrls: ["./play.component.scss"]
        }),
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogService,
            core_1.ViewContainerRef,
            core_1.NgZone,
            router_2.ActivatedRoute,
            router_2.Router,
            router_1.RouterExtensions,
            questions_service_1.QuestionsService])
    ], PlayComponent);
    return PlayComponent;
}());
exports.PlayComponent = PlayComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwbGF5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFvSDtBQUVwSCwwREFBNEQ7QUFFNUQscUNBQTZDO0FBRTdDLHNEQUErRDtBQVUvRCwwREFBNEU7QUFJNUUsa0NBQTBDO0FBSTFDLGtFQUEyRjtBQUkzRiwwQ0FBeUQ7QUFFekQseUNBQTJDO0FBRTNDLDJDQUFzRjtBQUl0RixJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUU5QyxJQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQVF4RDtJQW1DRSx1QkFDVSxZQUFnQyxFQUNoQyxnQkFBa0MsRUFDbEMsTUFBYyxFQUNkLEtBQXFCLEVBQ3JCLE1BQWMsRUFDZCxnQkFBa0MsRUFDbEMsZUFBaUM7UUFQM0MsaUJBcURDO1FBcERTLGlCQUFZLEdBQVosWUFBWSxDQUFvQjtRQUNoQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxvQkFBZSxHQUFmLGVBQWUsQ0FBa0I7UUFFekMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO2FBQ2QsT0FBTyxDQUFDLFVBQUMsTUFBTTtZQUNkLEtBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztZQUNwQyxLQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7UUFFTCxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNsQixLQUFLLEtBQUs7Z0JBQ1IsSUFBSSxDQUFDLFNBQVMsR0FBRyxlQUFlLENBQUMsWUFBWSxDQUFDO2dCQUM5QyxLQUFLLENBQUM7WUFDUixLQUFLLE1BQU07Z0JBQ1QsSUFBSSxDQUFDLFNBQVMsR0FBRyxlQUFlLENBQUMsYUFBYSxDQUFDO2dCQUMvQyxLQUFLLENBQUM7WUFDUixLQUFLLFNBQVM7Z0JBQ1osSUFBSSxDQUFDLFNBQVMsR0FBRyxlQUFlLENBQUMsYUFBYSxDQUFDO2dCQUMvQyxLQUFLLENBQUM7WUFFUjtnQkFDRSxLQUFLLENBQUM7UUFDVixDQUFDO1FBRUQsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGVBQVksSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUUsQ0FBQztRQUU5RCxxQ0FBcUM7UUFFckMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDMUMsQ0FBQztRQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQXdCLElBQUksQ0FBQyxVQUFZLENBQUMsQ0FBQztRQUN2RCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFaEQsd0NBQXdDO1FBQ3hDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNoQyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDbkMsQ0FBQztRQUVELHlCQUF5QjtJQUMzQixDQUFDO0lBRUQsc0NBQWMsR0FBZDtRQUNFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRTFELElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBRWhDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQztRQUN6QyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUM7UUFDekMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQztRQUV6QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzNELHVFQUF1RTtRQUV2RSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUUxQixDQUFDO0lBRUQsOEJBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRCx3Q0FBZ0IsR0FBaEI7UUFFRSx5QkFBeUI7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsZUFBZSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLGVBQWUsQ0FBQztRQUNwQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxlQUFlLENBQUM7UUFDcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsZUFBZSxDQUFDO1FBRXBDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQzFCLEtBQUssQ0FBQztnQkFFSixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO29CQUMxQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxzQkFBc0IsQ0FBQztvQkFDakQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsYUFBYSxDQUFDO2dCQUNwQyxDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLHdCQUF3QixDQUFDO29CQUNuRCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxhQUFhLENBQUM7b0JBQ2xDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO3dCQUN4QixLQUFLLENBQUM7NEJBQ0osSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsc0JBQXNCLENBQUM7NEJBQ2pELElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLGFBQWEsQ0FBQzs0QkFDbEMsS0FBSyxDQUFDO3dCQUNSLEtBQUssQ0FBQzs0QkFDSixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxzQkFBc0IsQ0FBQzs0QkFDakQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsYUFBYSxDQUFDOzRCQUNsQyxLQUFLLENBQUM7d0JBQ1IsS0FBSyxDQUFDOzRCQUNKLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLHNCQUFzQixDQUFDOzRCQUNqRCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxhQUFhLENBQUM7NEJBQ2xDLEtBQUssQ0FBQzt3QkFFUjs0QkFDRSxLQUFLLENBQUM7b0JBQ1YsQ0FBQztnQkFDSCxDQUFDO2dCQUNELEtBQUssQ0FBQztZQUNSLEtBQUssQ0FBQztnQkFDSixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO29CQUMxQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxzQkFBc0IsQ0FBQztvQkFDakQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsYUFBYSxDQUFDO2dCQUNwQyxDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLHdCQUF3QixDQUFDO29CQUNuRCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxhQUFhLENBQUM7b0JBQ2xDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO3dCQUN4QixLQUFLLENBQUM7NEJBQ0osSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsc0JBQXNCLENBQUM7NEJBQ2pELElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLGFBQWEsQ0FBQzs0QkFDbEMsS0FBSyxDQUFDO3dCQUNSLEtBQUssQ0FBQzs0QkFDSixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxzQkFBc0IsQ0FBQzs0QkFDakQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsYUFBYSxDQUFDOzRCQUNsQyxLQUFLLENBQUM7d0JBQ1IsS0FBSyxDQUFDOzRCQUNKLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLHNCQUFzQixDQUFDOzRCQUNqRCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxhQUFhLENBQUM7NEJBQ2xDLEtBQUssQ0FBQzt3QkFFUjs0QkFDRSxLQUFLLENBQUM7b0JBQ1YsQ0FBQztnQkFDSCxDQUFDO2dCQUNELEtBQUssQ0FBQztZQUNSLEtBQUssQ0FBQztnQkFDSixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO29CQUMxQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxzQkFBc0IsQ0FBQztvQkFDakQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsYUFBYSxDQUFDO2dCQUNwQyxDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLHdCQUF3QixDQUFDO29CQUNuRCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxhQUFhLENBQUM7b0JBQ2xDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO3dCQUN4QixLQUFLLENBQUM7NEJBQ0osSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsc0JBQXNCLENBQUM7NEJBQ2pELElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLGFBQWEsQ0FBQzs0QkFDbEMsS0FBSyxDQUFDO3dCQUNSLEtBQUssQ0FBQzs0QkFDSixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxzQkFBc0IsQ0FBQzs0QkFDakQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsYUFBYSxDQUFDOzRCQUNsQyxLQUFLLENBQUM7d0JBQ1IsS0FBSyxDQUFDOzRCQUNKLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLHNCQUFzQixDQUFDOzRCQUNqRCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxhQUFhLENBQUM7NEJBQ2xDLEtBQUssQ0FBQzt3QkFFUjs0QkFDRSxLQUFLLENBQUM7b0JBQ1YsQ0FBQztnQkFDSCxDQUFDO2dCQUNELEtBQUssQ0FBQztZQUNSLEtBQUssQ0FBQztnQkFDSixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO29CQUMxQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxzQkFBc0IsQ0FBQztvQkFDakQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsYUFBYSxDQUFDO2dCQUNwQyxDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLHdCQUF3QixDQUFDO29CQUNuRCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxhQUFhLENBQUM7b0JBQ2xDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO3dCQUN4QixLQUFLLENBQUM7NEJBQ0osSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsc0JBQXNCLENBQUM7NEJBQ2pELElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLGFBQWEsQ0FBQzs0QkFDbEMsS0FBSyxDQUFDO3dCQUNSLEtBQUssQ0FBQzs0QkFDSixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxzQkFBc0IsQ0FBQzs0QkFDakQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsYUFBYSxDQUFDOzRCQUNsQyxLQUFLLENBQUM7d0JBQ1IsS0FBSyxDQUFDOzRCQUNKLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLHNCQUFzQixDQUFDOzRCQUNqRCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxhQUFhLENBQUM7NEJBQ2xDLEtBQUssQ0FBQzt3QkFFUjs0QkFDRSxLQUFLLENBQUM7b0JBQ1YsQ0FBQztnQkFDSCxDQUFDO2dCQUNELEtBQUssQ0FBQztZQUVSO2dCQUNFLEtBQUssQ0FBQztRQUNWLENBQUM7SUFFSCxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUFBLGlCQW9EQztRQWxEQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWEsSUFBSSxDQUFDLElBQU0sQ0FBQyxDQUFDO1FBRXRDLHdCQUF3QjtRQUN4QixFQUFFLENBQUMsQ0FBQyxDQUFDLG9CQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2YsTUFBTSxDQUFDO1FBQ1QsQ0FBQztRQUNELFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLGdDQUFrQixDQUFDLHdCQUF3QixFQUFFLFVBQUMsSUFBeUM7WUFDNUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkIsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDcEUsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFNLFdBQVcsR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUNyRCxJQUFNLFdBQVcsR0FBZSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztRQUM5RCxXQUFXLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUVsRCxJQUFJLENBQUMsY0FBYyxHQUFVLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDO1FBQzlELHNEQUFzRDtRQUV0RCxJQUFNLFlBQVksR0FBVSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQztRQUNyRCxpREFBaUQ7UUFFakQsSUFBSSxDQUFDLFFBQVEsR0FBVSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztRQUNyRCxJQUFJLENBQUMsUUFBUSxHQUFVLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBQ3JELElBQUksQ0FBQyxRQUFRLEdBQVUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFDckQsSUFBSSxDQUFDLFFBQVEsR0FBVSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztRQUNyRCw4QkFBOEI7UUFDOUIsYUFBYTtRQUViLElBQUksQ0FBQyxRQUFRLEdBQVUsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUM7UUFDdkQsSUFBSSxDQUFDLFFBQVEsR0FBVSxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQztRQUN2RCxJQUFJLENBQUMsUUFBUSxHQUFVLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDO1FBQ3ZELElBQUksQ0FBQyxRQUFRLEdBQVUsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUM7UUFFdkQsV0FBVyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRTlCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQztZQUUvQixJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUM7WUFFeEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUMzRCx1RUFBdUU7WUFDdkUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDMUIsQ0FBQztRQUVELHNEQUFzRDtJQUN4RCxDQUFDO0lBRUQsZ0RBQXdCLEdBQXhCO1FBQ0UsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGVBQVksSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUUsQ0FBQztJQUNoRSxDQUFDO0lBRUQsb0NBQVksR0FBWixVQUFhLE1BQWM7UUFFekIsUUFBUTtRQUNSLDZHQUE2RztRQUM3RyxtREFBbUQ7UUFKckQsaUJBMkNDO1FBckNDLElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFekMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsRCxDQUFDO1FBRUQsbUNBQW1DO1FBRW5DLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDZixLQUFLLENBQUM7Z0JBQ0osSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUN0QixLQUFLLENBQUM7WUFFUixLQUFLLENBQUM7Z0JBQ0osSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUN0QixLQUFLLENBQUM7WUFFUixLQUFLLENBQUM7Z0JBQ0osSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUN0QixLQUFLLENBQUM7WUFFUixLQUFLLENBQUM7Z0JBQ0osSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUN0QixLQUFLLENBQUM7WUFFUjtnQkFDRSxLQUFLLENBQUM7UUFDVixDQUFDO1FBRUQscURBQXFEO1FBQ3JELFVBQVUsQ0FBQztZQUNULEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFWCxDQUFDO0lBRUQseUNBQWlCLEdBQWpCLFVBQWtCLE9BQWU7UUFBakMsaUJBd0VDO1FBdkVDLDRCQUE0QjtRQUM1QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFbkQseUJBQXlCO1lBQ3pCLGlCQUFpQjtZQUNqQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUN2QyxrQ0FBa0M7Z0JBQ2xDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNmLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixpQ0FBaUM7WUFDbkMsQ0FBQztZQUVELG1CQUFtQjtZQUluQiw0QkFBNEI7WUFFNUIsVUFBVSxDQUFDO2dCQUNULEtBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO29CQUMxQixPQUFPLEVBQUUsQ0FBQztvQkFDVixRQUFRLEVBQUUsR0FBRztvQkFDYixLQUFLLEVBQUUsc0JBQWMsQ0FBQyxTQUFTO2lCQUNoQyxDQUFDLENBQUM7Z0JBQ0gsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUNyQixLQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztnQkFDaEMsS0FBSSxDQUFDLGVBQWUsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUM1RCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFFVCxxREFBcUQ7WUFDckQsVUFBVSxDQUFDO2dCQUNULEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO29CQUNkLDRCQUE0QjtnQkFFOUIsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsS0FBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUM7b0JBQzFCLE9BQU8sRUFBRSxDQUFDO29CQUNWLFFBQVEsRUFBRSxHQUFHO29CQUNiLEtBQUssRUFBRSxzQkFBYyxDQUFDLFNBQVM7aUJBQ2hDLENBQUMsQ0FBQztnQkFFSCxLQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRTtvQkFDcEMsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkIsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsS0FBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUU7b0JBQ3BDLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZCLENBQUMsQ0FBQyxDQUFDO2dCQUNILEtBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFO29CQUNwQyxLQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2QixDQUFDLENBQUMsQ0FBQztnQkFDSCxLQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRTtvQkFDcEMsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkIsQ0FBQyxDQUFDLENBQUM7WUFFTCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFFVCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQVcsSUFBSSxDQUFDLGFBQWEsa0JBQWEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFRLENBQUMsQ0FBQztZQUMvRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRXBELDZDQUE2QztnQkFDN0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxZQUFVLElBQUksQ0FBQyxLQUFLLFNBQUksSUFBSSxDQUFDLElBQU0sRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ25HLENBQUM7UUFFSCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFFTiwwQkFBMEI7WUFFMUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxZQUFVLElBQUksQ0FBQyxLQUFLLFNBQUksSUFBSSxDQUFDLElBQU0sRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBRW5HLENBQUM7SUFDSCxDQUFDO0lBRUQsc0NBQWMsR0FBZDtRQUFBLGlCQXFDQztRQXBDQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyw2QkFBNkIsQ0FBQztRQUN4RCxVQUFVLENBQUM7WUFDVCxLQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUM7UUFDM0MsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsNkJBQTZCLENBQUM7UUFDeEQsVUFBVSxDQUFDO1lBQ1QsS0FBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDO1FBQzNDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVULElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLDhCQUE4QixDQUFDO1FBQ3pELFVBQVUsQ0FBQztZQUNULEtBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQztRQUMzQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyw4QkFBOEIsQ0FBQztRQUN6RCxVQUFVLENBQUM7WUFDVCxLQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUM7UUFDM0MsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRVQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsOEJBQThCLENBQUM7UUFDekQsVUFBVSxDQUFDO1lBQ1QsS0FBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDO1FBQzNDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLDhCQUE4QixDQUFDO1FBQ3pELFVBQVUsQ0FBQztZQUNULEtBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQztRQUMzQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFVCxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyw4QkFBOEIsQ0FBQztRQUN6RCxVQUFVLENBQUM7WUFDVCxLQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUM7UUFDM0MsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsOEJBQThCLENBQUM7UUFDekQsVUFBVSxDQUFDO1lBQ1QsS0FBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDO1FBQzNDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUVYLENBQUM7SUFFRCxzQ0FBYyxHQUFkO1FBQUEsaUJBcUNDO1FBcENDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLDZCQUE2QixDQUFDO1FBQ3hELFVBQVUsQ0FBQztZQUNULEtBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQztRQUMzQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyw2QkFBNkIsQ0FBQztRQUN4RCxVQUFVLENBQUM7WUFDVCxLQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUM7UUFDM0MsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRVQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsOEJBQThCLENBQUM7UUFDekQsVUFBVSxDQUFDO1lBQ1QsS0FBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDO1FBQzNDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLDhCQUE4QixDQUFDO1FBQ3pELFVBQVUsQ0FBQztZQUNULEtBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQztRQUMzQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFVCxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyw4QkFBOEIsQ0FBQztRQUN6RCxVQUFVLENBQUM7WUFDVCxLQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUM7UUFDM0MsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsOEJBQThCLENBQUM7UUFDekQsVUFBVSxDQUFDO1lBQ1QsS0FBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDO1FBQzNDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVULElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLDhCQUE4QixDQUFDO1FBQ3pELFVBQVUsQ0FBQztZQUNULEtBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQztRQUMzQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyw4QkFBOEIsQ0FBQztRQUN6RCxVQUFVLENBQUM7WUFDVCxLQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUM7UUFDM0MsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRVgsQ0FBQztJQUVELHNDQUFjLEdBQWQ7UUFBQSxpQkFxQ0M7UUFwQ0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsNkJBQTZCLENBQUM7UUFDeEQsVUFBVSxDQUFDO1lBQ1QsS0FBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDO1FBQzNDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLDZCQUE2QixDQUFDO1FBQ3hELFVBQVUsQ0FBQztZQUNULEtBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQztRQUMzQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFVCxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyw4QkFBOEIsQ0FBQztRQUN6RCxVQUFVLENBQUM7WUFDVCxLQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUM7UUFDM0MsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsOEJBQThCLENBQUM7UUFDekQsVUFBVSxDQUFDO1lBQ1QsS0FBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDO1FBQzNDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVULElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLDhCQUE4QixDQUFDO1FBQ3pELFVBQVUsQ0FBQztZQUNULEtBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQztRQUMzQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyw4QkFBOEIsQ0FBQztRQUN6RCxVQUFVLENBQUM7WUFDVCxLQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUM7UUFDM0MsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRVQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsOEJBQThCLENBQUM7UUFDekQsVUFBVSxDQUFDO1lBQ1QsS0FBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDO1FBQzNDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLDhCQUE4QixDQUFDO1FBQ3pELFVBQVUsQ0FBQztZQUNULEtBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQztRQUMzQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFWCxDQUFDO0lBRUQsc0NBQWMsR0FBZDtRQUFBLGlCQXFDQztRQXBDQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyw2QkFBNkIsQ0FBQztRQUN4RCxVQUFVLENBQUM7WUFDVCxLQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUM7UUFDM0MsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsNkJBQTZCLENBQUM7UUFDeEQsVUFBVSxDQUFDO1lBQ1QsS0FBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDO1FBQzNDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVULElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLDhCQUE4QixDQUFDO1FBQ3pELFVBQVUsQ0FBQztZQUNULEtBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQztRQUMzQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyw4QkFBOEIsQ0FBQztRQUN6RCxVQUFVLENBQUM7WUFDVCxLQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUM7UUFDM0MsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRVQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsOEJBQThCLENBQUM7UUFDekQsVUFBVSxDQUFDO1lBQ1QsS0FBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDO1FBQzNDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLDhCQUE4QixDQUFDO1FBQ3pELFVBQVUsQ0FBQztZQUNULEtBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQztRQUMzQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFVCxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyw4QkFBOEIsQ0FBQztRQUN6RCxVQUFVLENBQUM7WUFDVCxLQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUM7UUFDM0MsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsOEJBQThCLENBQUM7UUFDekQsVUFBVSxDQUFDO1lBQ1QsS0FBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDO1FBQzNDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUVYLENBQUM7SUFwakJ3QjtRQUF4QixnQkFBUyxDQUFDLFlBQVksQ0FBQztrQ0FBYSxpQkFBVTtxREFBQztJQUNwQjtRQUEzQixnQkFBUyxDQUFDLGVBQWUsQ0FBQztrQ0FBZ0IsaUJBQVU7d0RBQUM7SUFDbEM7UUFBbkIsZ0JBQVMsQ0FBQyxPQUFPLENBQUM7a0NBQVEsaUJBQVU7Z0RBQUM7SUFDYjtRQUF4QixnQkFBUyxDQUFDLFlBQVksQ0FBQztrQ0FBYSxpQkFBVTtxREFBQztJQUN2QjtRQUF4QixnQkFBUyxDQUFDLFlBQVksQ0FBQztrQ0FBYSxpQkFBVTtxREFBQztJQUN2QjtRQUF4QixnQkFBUyxDQUFDLFlBQVksQ0FBQztrQ0FBYSxpQkFBVTtxREFBQztJQUN2QjtRQUF4QixnQkFBUyxDQUFDLFlBQVksQ0FBQztrQ0FBYSxpQkFBVTtxREFBQztJQUNyQjtRQUExQixnQkFBUyxDQUFDLGNBQWMsQ0FBQztrQ0FBZSxpQkFBVTt1REFBQztJQUN6QjtRQUExQixnQkFBUyxDQUFDLGNBQWMsQ0FBQztrQ0FBZSxpQkFBVTt1REFBQztJQUN6QjtRQUExQixnQkFBUyxDQUFDLGNBQWMsQ0FBQztrQ0FBZSxpQkFBVTt1REFBQztJQUN6QjtRQUExQixnQkFBUyxDQUFDLGNBQWMsQ0FBQztrQ0FBZSxpQkFBVTt1REFBQztJQVh6QyxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztTQUNyQyxDQUFDO3lDQXFDd0IsaUNBQWtCO1lBQ2QsdUJBQWdCO1lBQzFCLGFBQU07WUFDUCx1QkFBYztZQUNiLGVBQU07WUFDSSx5QkFBZ0I7WUFDakIsb0NBQWdCO09BMUNoQyxhQUFhLENBdWpCekI7SUFBRCxvQkFBQztDQUFBLEFBdmpCRCxJQXVqQkM7QUF2akJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgTmdNb2R1bGUsIE9uSW5pdCwgTmdab25lLCBWaWV3Q29udGFpbmVyUmVmLCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgZWxlbWVudFJlZ2lzdHJ5TW9kdWxlIGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XG5pbXBvcnQgKiBhcyBwbGF0Zm9ybU1vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xuXG5pbXBvcnQgeyBpc0FuZHJvaWQsIHNjcmVlbiB9IGZyb20gXCJwbGF0Zm9ybVwiO1xuXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gXCJ1aS9pbWFnZVwiO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwidWkvbGFiZWxcIjtcbmltcG9ydCB7IEdyaWRMYXlvdXQgfSBmcm9tIFwidWkvbGF5b3V0cy9ncmlkLWxheW91dFwiO1xuaW1wb3J0IHsgUGFnZSwgUG9pbnQgfSBmcm9tIFwidWkvcGFnZVwiO1xuXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ1aS9kaWFsb2dzXCI7XG5cbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7IElBbnN3ZXIsIElRdWVzdGlvbiwgUXVlc3Rpb25zU2VydmljZSB9IGZyb20gXCIuLi9xdWVzdGlvbnMuc2VydmljZVwiO1xuXG5pbXBvcnQgeyBHZXN0dXJlRXZlbnREYXRhLCBHZXN0dXJlVHlwZXMgfSBmcm9tIFwidWkvZ2VzdHVyZXNcIjtcblxuaW1wb3J0IHsgQW5pbWF0aW9uQ3VydmUgfSBmcm9tIFwidWkvZW51bXNcIjtcblxuaW1wb3J0IHsgQW5pbWF0aW9uLCBBbmltYXRpb25EZWZpbml0aW9uIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvYW5pbWF0aW9uL2FuaW1hdGlvblwiO1xuXG5pbXBvcnQgeyBNb2RhbERpYWxvZ09wdGlvbnMsIE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi4vaG9tZS9ob21lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUmVzdWx0RGlhbG9nQ29tcG9uZW50IH0gZnJvbSBcIi4uL3Jlc3VsdC1kaWFsb2cvcmVzdWx0LWRpYWxvZy5jb21wb25lbnRcIjtcblxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0ICogYXMgYXBwbGljYXRpb24gZnJvbSBcImFwcGxpY2F0aW9uXCI7XG5cbmltcG9ydCB7IEFuZHJvaWRBcHBsaWNhdGlvbiwgQW5kcm9pZEFjdGl2aXR5QmFja1ByZXNzZWRFdmVudERhdGEgfSBmcm9tIFwiYXBwbGljYXRpb25cIjtcblxuXG5cbmNvbnN0IHRuc2Z4ID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1lZmZlY3RzXCIpO1xuXG5jb25zdCBvcmllbnRhdGlvbiA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtb3JpZW50YXRpb25cIik7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogXCJhcHAtcGxheVwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL3BsYXkuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL3BsYXkuY29tcG9uZW50LnNjc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgUGxheUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBWaWV3Q2hpbGQoXCJncmlkTGF5b3V0XCIpIGdyaWRMYXlvdXQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoXCJxdWVzdGlvbkxhYmVsXCIpIHF1ZXN0aW9uTGFiZWw6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoXCJpbWFnZVwiKSBpbWFnZTogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImFuc3dlckltZzBcIikgYW5zd2VySW1nMDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImFuc3dlckltZzFcIikgYW5zd2VySW1nMTogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImFuc3dlckltZzJcIikgYW5zd2VySW1nMjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImFuc3dlckltZzNcIikgYW5zd2VySW1nMzogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImFuc3dlckxhYmVsMFwiKSBhbnN3ZXJMYWJlbDA6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoXCJhbnN3ZXJMYWJlbDFcIikgYW5zd2VyTGFiZWwxOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwiYW5zd2VyTGFiZWwyXCIpIGFuc3dlckxhYmVsMjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImFuc3dlckxhYmVsM1wiKSBhbnN3ZXJMYWJlbDM6IEVsZW1lbnRSZWY7XG5cbiAgYW5zd2VySTA6IEltYWdlO1xuICBhbnN3ZXJJMTogSW1hZ2U7XG4gIGFuc3dlckkyOiBJbWFnZTtcbiAgYW5zd2VySTM6IEltYWdlO1xuXG4gIF9xdWVzdGlvbkxhYmVsOiBMYWJlbDtcbiAgYW5zd2VyTDA6IExhYmVsO1xuICBhbnN3ZXJMMTogTGFiZWw7XG4gIGFuc3dlckwyOiBMYWJlbDtcbiAgYW5zd2VyTDM6IExhYmVsO1xuXG4gIG1vZGU6IHN0cmluZztcbiAgcXVlc3Rpb25zOiBBcnJheTxJUXVlc3Rpb24+O1xuICBxdWVzdGlvbkN1cnJlbnQ6IElRdWVzdGlvbjtcbiAgcXVlc3Rpb25JbmRleDtcbiAgc2NvcmU7XG4gIHF1ZXN0aW9uSW5kaWNhdG9yOiBzdHJpbmc7XG4gIGNvcnJlY3Rpb247XG4gIHBsYXllckFuc3dlcnM6IEFycmF5PG51bWJlcj47XG4gIGdvb2RBbnN3ZXI6IG51bWJlcjtcbiAgcGxheWVyQW5zd2VyOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsRGlhbG9nU2VydmljZSxcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICBwcml2YXRlIHF1ZXN0aW9uU2VydmljZTogUXVlc3Rpb25zU2VydmljZSkge1xuXG4gICAgdGhpcy5yb3V0ZS5wYXJhbXNcbiAgICAgIC5mb3JFYWNoKChwYXJhbXMpID0+IHtcbiAgICAgICAgdGhpcy5jb3JyZWN0aW9uID0gcGFyYW1zLmNvcnJlY3Rpb247XG4gICAgICAgIHRoaXMubW9kZSA9IHBhcmFtcy5tb2RlO1xuICAgICAgfSk7XG5cbiAgICBzd2l0Y2ggKHRoaXMubW9kZSkge1xuICAgICAgY2FzZSBcImdlb1wiOlxuICAgICAgICB0aGlzLnF1ZXN0aW9ucyA9IHF1ZXN0aW9uU2VydmljZS5nZW9RdWVzdGlvbnM7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIm1hdGhcIjpcbiAgICAgICAgdGhpcy5xdWVzdGlvbnMgPSBxdWVzdGlvblNlcnZpY2UubWF0aFF1ZXN0aW9ucztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwic2NpZW5jZVwiOlxuICAgICAgICB0aGlzLnF1ZXN0aW9ucyA9IHF1ZXN0aW9uU2VydmljZS5tYXRoUXVlc3Rpb25zO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgdGhpcy5xdWVzdGlvbkluZGV4ID0gMDtcbiAgICB0aGlzLnF1ZXN0aW9uQ3VycmVudCA9IHRoaXMucXVlc3Rpb25zWzBdO1xuICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgIHRoaXMucXVlc3Rpb25JbmRpY2F0b3IgPSBgUXVlc3Rpb24gJHt0aGlzLnF1ZXN0aW9uSW5kZXggKyAxfWA7XG5cbiAgICAvLyBpbml0IHRoZSBwbGF5ZXJzIGFuc3dlcnMgZXZlcnkgcWNtXG5cbiAgICBpZiAodGhpcy5jb3JyZWN0aW9uID09PSBcImZhbHNlXCIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiYW5zd2VycyBpbml0aWFsaXplZCAhISEhXCIpO1xuICAgICAgdGhpcy5xdWVzdGlvblNlcnZpY2UucGxheWVyQW5zd2VycyA9IFtdO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKGBjb3JlY3Rpb24gdmFsdWUgaXMgOiAke3RoaXMuY29ycmVjdGlvbn1gKTtcbiAgICBjb25zb2xlLmRpcih0aGlzLnF1ZXN0aW9uU2VydmljZS5wbGF5ZXJBbnN3ZXJzKTtcblxuICAgIC8vIHNlY29uZCB3YXkgdG8gZmluZCBpZiBjb3JyZWN0aW9uIG1vZGVcbiAgICBpZiAodGhpcy5xdWVzdGlvblNlcnZpY2UucGxheWVyQW5zd2Vycy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIm1vZGUgY29ycmVjdG9uXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIm1vZGUgTk8gY29ycmVjdG9uXCIpO1xuICAgIH1cblxuICAgIC8vIGNvcnJlY3Rpb24gZGVidWcgdmFsdWVcbiAgfVxuXG4gIG5leHRDb3JyZWN0aW9uKCkge1xuICAgIHRoaXMucXVlc3Rpb25JbmRleCsrO1xuICAgIHRoaXMucXVlc3Rpb25DdXJyZW50ID0gdGhpcy5xdWVzdGlvbnNbdGhpcy5xdWVzdGlvbkluZGV4XTtcblxuICAgIHRoaXMuYW5pbWF0ZVF1ZXN0aW9uSW5kaWNhdG9yKCk7XG5cbiAgICB0aGlzLmFuc3dlckwwLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsXCI7XG4gICAgdGhpcy5hbnN3ZXJMMS5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbFwiO1xuICAgIHRoaXMuYW5zd2VyTDIuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcbiAgICB0aGlzLmFuc3dlckwzLmNsYXNzTmFtZSA9IFwiYW5zd2VyX2xhYmVsXCI7XG5cbiAgICB0aGlzLmdvb2RBbnN3ZXIgPSB0aGlzLnF1ZXN0aW9uc1t0aGlzLnF1ZXN0aW9uSW5kZXhdLmE7XG4gICAgdGhpcy5wbGF5ZXJBbnN3ZXIgPSB0aGlzLnBsYXllckFuc3dlcnNbdGhpcy5xdWVzdGlvbkluZGV4XTtcbiAgICAvLyBzd2l0Y2ggdGhlIHBsYXllciBhbnN3ZXIgZm9yIGZpcnN0IHF1ZXN0aW9uIFwibmVlZCB0byBiZSBvbiBuZ0luaXQoKVwiXG5cbiAgICB0aGlzLnRlc3RQbGF5ZXJBbnN3ZXIoKTtcblxuICB9XG5cbiAgZ29Ib21lKCkge1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJob21lXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgfVxuXG4gIHRlc3RQbGF5ZXJBbnN3ZXIoKSB7XG5cbiAgICAvLyByZWxvYWQgb3JpZ2luYWwgaW1hZ2VzXG4gICAgdGhpcy5hbnN3ZXJJMC5zcmMgPSBcInJlczovL2Fuc3dlcjBcIjtcbiAgICB0aGlzLmFuc3dlckkxLnNyYyA9IFwicmVzOi8vYW5zd2VyMVwiO1xuICAgIHRoaXMuYW5zd2VySTIuc3JjID0gXCJyZXM6Ly9hbnN3ZXIyXCI7XG4gICAgdGhpcy5hbnN3ZXJJMy5zcmMgPSBcInJlczovL2Fuc3dlcjNcIjtcblxuICAgIHN3aXRjaCAodGhpcy5wbGF5ZXJBbnN3ZXIpIHtcbiAgICAgIGNhc2UgMDpcblxuICAgICAgICBpZiAodGhpcy5wbGF5ZXJBbnN3ZXIgPT09IHRoaXMuZ29vZEFuc3dlcikge1xuICAgICAgICAgIHRoaXMuYW5zd2VyTDAuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxfY29ycmVjdFwiO1xuICAgICAgICAgIHRoaXMuYW5zd2VySTAuc3JjID0gXCJyZXM6Ly9yaWdodFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuYW5zd2VyTDAuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxfaW5jb3JyZWN0XCI7XG4gICAgICAgICAgdGhpcy5hbnN3ZXJJMC5zcmMgPSBcInJlczovL3dyb25nXCI7XG4gICAgICAgICAgc3dpdGNoICh0aGlzLmdvb2RBbnN3ZXIpIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJMMS5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9jb3JyZWN0XCI7XG4gICAgICAgICAgICAgIHRoaXMuYW5zd2VySTEuc3JjID0gXCJyZXM6Ly9yaWdodFwiO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJMMi5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9jb3JyZWN0XCI7XG4gICAgICAgICAgICAgIHRoaXMuYW5zd2VySTIuc3JjID0gXCJyZXM6Ly9yaWdodFwiO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJMMy5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9jb3JyZWN0XCI7XG4gICAgICAgICAgICAgIHRoaXMuYW5zd2VySTMuc3JjID0gXCJyZXM6Ly9yaWdodFwiO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxOlxuICAgICAgICBpZiAodGhpcy5wbGF5ZXJBbnN3ZXIgPT09IHRoaXMuZ29vZEFuc3dlcikge1xuICAgICAgICAgIHRoaXMuYW5zd2VyTDEuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxfY29ycmVjdFwiO1xuICAgICAgICAgIHRoaXMuYW5zd2VySTEuc3JjID0gXCJyZXM6Ly9yaWdodFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuYW5zd2VyTDEuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxfaW5jb3JyZWN0XCI7XG4gICAgICAgICAgdGhpcy5hbnN3ZXJJMS5zcmMgPSBcInJlczovL3dyb25nXCI7XG4gICAgICAgICAgc3dpdGNoICh0aGlzLmdvb2RBbnN3ZXIpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJMMC5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9jb3JyZWN0XCI7XG4gICAgICAgICAgICAgIHRoaXMuYW5zd2VySTAuc3JjID0gXCJyZXM6Ly9yaWdodFwiO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJMMi5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9jb3JyZWN0XCI7XG4gICAgICAgICAgICAgIHRoaXMuYW5zd2VySTIuc3JjID0gXCJyZXM6Ly9yaWdodFwiO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJMMy5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9jb3JyZWN0XCI7XG4gICAgICAgICAgICAgIHRoaXMuYW5zd2VySTMuc3JjID0gXCJyZXM6Ly9yaWdodFwiO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICBpZiAodGhpcy5wbGF5ZXJBbnN3ZXIgPT09IHRoaXMuZ29vZEFuc3dlcikge1xuICAgICAgICAgIHRoaXMuYW5zd2VyTDIuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxfY29ycmVjdFwiO1xuICAgICAgICAgIHRoaXMuYW5zd2VySTIuc3JjID0gXCJyZXM6Ly9yaWdodFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuYW5zd2VyTDIuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxfaW5jb3JyZWN0XCI7XG4gICAgICAgICAgdGhpcy5hbnN3ZXJJMi5zcmMgPSBcInJlczovL3dyb25nXCI7XG4gICAgICAgICAgc3dpdGNoICh0aGlzLmdvb2RBbnN3ZXIpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJMMC5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9jb3JyZWN0XCI7XG4gICAgICAgICAgICAgIHRoaXMuYW5zd2VySTAuc3JjID0gXCJyZXM6Ly9yaWdodFwiO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJMMS5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9jb3JyZWN0XCI7XG4gICAgICAgICAgICAgIHRoaXMuYW5zd2VySTEuc3JjID0gXCJyZXM6Ly9yaWdodFwiO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJMMy5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9jb3JyZWN0XCI7XG4gICAgICAgICAgICAgIHRoaXMuYW5zd2VySTMuc3JjID0gXCJyZXM6Ly9yaWdodFwiO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICBpZiAodGhpcy5wbGF5ZXJBbnN3ZXIgPT09IHRoaXMuZ29vZEFuc3dlcikge1xuICAgICAgICAgIHRoaXMuYW5zd2VyTDMuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxfY29ycmVjdFwiO1xuICAgICAgICAgIHRoaXMuYW5zd2VySTMuc3JjID0gXCJyZXM6Ly9yaWdodFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuYW5zd2VyTDMuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxfaW5jb3JyZWN0XCI7XG4gICAgICAgICAgdGhpcy5hbnN3ZXJJMy5zcmMgPSBcInJlczovL3dyb25nXCI7XG4gICAgICAgICAgc3dpdGNoICh0aGlzLmdvb2RBbnN3ZXIpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJMMC5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9jb3JyZWN0XCI7XG4gICAgICAgICAgICAgIHRoaXMuYW5zd2VySTAuc3JjID0gXCJyZXM6Ly9yaWdodFwiO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJMMS5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9jb3JyZWN0XCI7XG4gICAgICAgICAgICAgIHRoaXMuYW5zd2VySTEuc3JjID0gXCJyZXM6Ly9yaWdodFwiO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJMMi5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbF9jb3JyZWN0XCI7XG4gICAgICAgICAgICAgIHRoaXMuYW5zd2VySTIuc3JjID0gXCJyZXM6Ly9yaWdodFwiO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgY29uc29sZS5sb2coYG1vZGUgaXMgOiAke3RoaXMubW9kZX1gKTtcblxuICAgIC8vIGlmIG5vdCBhbmRyb2lkIHJldHVyblxuICAgIGlmICghaXNBbmRyb2lkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGFwcGxpY2F0aW9uLmFuZHJvaWQub24oQW5kcm9pZEFwcGxpY2F0aW9uLmFjdGl2aXR5QmFja1ByZXNzZWRFdmVudCwgKGRhdGE6IEFuZHJvaWRBY3Rpdml0eUJhY2tQcmVzc2VkRXZlbnREYXRhKSA9PiB7XG4gICAgICBkYXRhLmNhbmNlbCA9IHRydWU7XG4gICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2hvbWVcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgX2RldmljZVR5cGUgPSBwbGF0Zm9ybU1vZHVsZS5kZXZpY2UuZGV2aWNlVHlwZTtcbiAgICBjb25zdCBfZ3JpZExheW91dCA9IDxHcmlkTGF5b3V0PnRoaXMuZ3JpZExheW91dC5uYXRpdmVFbGVtZW50O1xuICAgIF9ncmlkTGF5b3V0LmNsYXNzTmFtZSA9IF9kZXZpY2VUeXBlLnRvTG93ZXJDYXNlKCk7XG5cbiAgICB0aGlzLl9xdWVzdGlvbkxhYmVsID0gPExhYmVsPnRoaXMucXVlc3Rpb25MYWJlbC5uYXRpdmVFbGVtZW50O1xuICAgIC8vIF9xdWVzdGlvbi50b3AgPSBzY3JlZW4ubWFpblNjcmVlbi5oZWlnaHRQaXhlbHMgLyA0O1xuXG4gICAgY29uc3QgX3F1ZXN0aW9uSW1nID0gPEltYWdlPnRoaXMuaW1hZ2UubmF0aXZlRWxlbWVudDtcbiAgICAvLyBjb25zdCB4ID0gX3F1ZXN0aW9uSW1nLmdldEFjdHVhbFNpemUoKS5oZWlnaHQ7XG5cbiAgICB0aGlzLmFuc3dlckkwID0gPEltYWdlPnRoaXMuYW5zd2VySW1nMC5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuYW5zd2VySTEgPSA8SW1hZ2U+dGhpcy5hbnN3ZXJJbWcxLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5hbnN3ZXJJMiA9IDxJbWFnZT50aGlzLmFuc3dlckltZzIubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLmFuc3dlckkzID0gPEltYWdlPnRoaXMuYW5zd2VySW1nMy5uYXRpdmVFbGVtZW50O1xuICAgIC8vIGNvbnNvbGUuZGlyKHRoaXMuYW5zd2VySTApO1xuICAgIC8vIFF1aXogTG9naWNcblxuICAgIHRoaXMuYW5zd2VyTDAgPSA8TGFiZWw+dGhpcy5hbnN3ZXJMYWJlbDAubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLmFuc3dlckwxID0gPExhYmVsPnRoaXMuYW5zd2VyTGFiZWwxLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5hbnN3ZXJMMiA9IDxMYWJlbD50aGlzLmFuc3dlckxhYmVsMi5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuYW5zd2VyTDMgPSA8TGFiZWw+dGhpcy5hbnN3ZXJMYWJlbDMubmF0aXZlRWxlbWVudDtcblxuICAgIG9yaWVudGF0aW9uLmRpc2FibGVSb3RhdGlvbigpO1xuXG4gICAgaWYgKHRoaXMuY29ycmVjdGlvbiA9PT0gXCJ0cnVlXCIpIHtcblxuICAgICAgdGhpcy5hbnN3ZXJJMC5yZW1vdmVFdmVudExpc3RlbmVyKFwidGFwXCIpO1xuICAgICAgdGhpcy5hbnN3ZXJJMS5yZW1vdmVFdmVudExpc3RlbmVyKFwidGFwXCIpO1xuICAgICAgdGhpcy5hbnN3ZXJJMi5yZW1vdmVFdmVudExpc3RlbmVyKFwidGFwXCIpO1xuICAgICAgdGhpcy5hbnN3ZXJJMy5yZW1vdmVFdmVudExpc3RlbmVyKFwidGFwXCIpO1xuICAgICAgdGhpcy5wbGF5ZXJBbnN3ZXJzID0gdGhpcy5xdWVzdGlvblNlcnZpY2UucGxheWVyQW5zd2VycztcblxuICAgICAgdGhpcy5nb29kQW5zd2VyID0gdGhpcy5xdWVzdGlvbnNbdGhpcy5xdWVzdGlvbkluZGV4XS5hO1xuICAgICAgdGhpcy5wbGF5ZXJBbnN3ZXIgPSB0aGlzLnBsYXllckFuc3dlcnNbdGhpcy5xdWVzdGlvbkluZGV4XTtcbiAgICAgIC8vIHN3aXRjaCB0aGUgcGxheWVyIGFuc3dlciBmb3IgZmlyc3QgcXVlc3Rpb24gXCJuZWVkIHRvIGJlIG9uIG5nSW5pdCgpXCJcbiAgICAgIHRoaXMudGVzdFBsYXllckFuc3dlcigpO1xuICAgIH1cblxuICAgIC8vIHRoaXMucGxheWVyQW5zd2Vyc1t0aGlzLnF1ZXN0aW9uSW5kZXhdLnBsYXllckFuc3dlclxuICB9XG5cbiAgYW5pbWF0ZVF1ZXN0aW9uSW5kaWNhdG9yKCkge1xuICAgIHRoaXMucXVlc3Rpb25JbmRpY2F0b3IgPSBgUXVlc3Rpb24gJHt0aGlzLnF1ZXN0aW9uSW5kZXggKyAxfWA7XG4gIH1cblxuICBuZXh0UXVlc3Rpb24oYW5zd2VyOiBudW1iZXIpOiB2b2lkIHtcblxuICAgIC8vIHRvZG8xXG4gICAgLy8gdGhpcy5wbGF5d2VyQW5zd2VyVGVtcCA9IHsgaWQ6IHRoaXMucXVlc3Rpb25JbmRleCwgcXVlc3Rpb246IHRoaXMucXVlc3Rpb25DdXJyZW50LCBwbGF5ZXJBbnN3ZXI6IGFuc3dlciB9O1xuICAgIC8vIHRoaXMucGxheWVyQW5zd2Vycy5wdXNoKHRoaXMucGxheXdlckFuc3dlclRlbXApO1xuXG4gICAgdGhpcy5hbnN3ZXJJMC5yZW1vdmVFdmVudExpc3RlbmVyKFwidGFwXCIpO1xuICAgIHRoaXMuYW5zd2VySTEucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRhcFwiKTtcbiAgICB0aGlzLmFuc3dlckkyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0YXBcIik7XG4gICAgdGhpcy5hbnN3ZXJJMy5yZW1vdmVFdmVudExpc3RlbmVyKFwidGFwXCIpO1xuXG4gICAgaWYgKHRoaXMuY29ycmVjdGlvbiA9PT0gXCJmYWxzZVwiKSB7XG4gICAgICB0aGlzLnF1ZXN0aW9uU2VydmljZS5wbGF5ZXJBbnN3ZXJzLnB1c2goYW5zd2VyKTtcbiAgICB9XG5cbiAgICAvLyBjb25zb2xlLmRpcih0aGlzLnBsYXllckFuc3dlcnMpO1xuXG4gICAgc3dpdGNoIChhbnN3ZXIpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgdGhpcy5hbmltYXRlQW5zd2VyMCgpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAxOlxuICAgICAgICB0aGlzLmFuaW1hdGVBbnN3ZXIxKCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDI6XG4gICAgICAgIHRoaXMuYW5pbWF0ZUFuc3dlcjIoKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgMzpcbiAgICAgICAgdGhpcy5hbmltYXRlQW5zd2VyMygpO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgLy8gQ2hhbmdlIFF1ZXN0aW9uIEluZm9ybWF0aW9uIGFmdGVyIGVuZCBvZiBhbmltYXRpb25cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMubmV4dFF1ZXN0aW9uTG9naWMoYW5zd2VyKTtcbiAgICB9LCAxMDAwKTtcblxuICB9XG5cbiAgbmV4dFF1ZXN0aW9uTG9naWMoX2Fuc3dlcjogbnVtYmVyKSB7XG4gICAgLy8gaWYgdGhlcmUgaXMgbmV4dCBxdWVzdGlvblxuICAgIGlmICh0aGlzLnF1ZXN0aW9uSW5kZXggPCB0aGlzLnF1ZXN0aW9ucy5sZW5ndGggLSAxKSB7XG5cbiAgICAgIC8vIHRvZG8gZmluaXNoIHRlc3QgZGVidWdcbiAgICAgIC8vIGlmIGdvb2QgYW5zd2VyXG4gICAgICBpZiAodGhpcy5xdWVzdGlvbkN1cnJlbnQuYSA9PT0gX2Fuc3dlcikge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInh4eCBnb29kIGFuc3dlclwiKTtcbiAgICAgICAgdGhpcy5zY29yZSsrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJ4eHggYmFkIGFuc3dlclwiKTtcbiAgICAgIH1cblxuICAgICAgLy8gdG9kbyBpZiB3YXMgaGVyZVxuXG5cblxuICAgICAgLy8gdG9kbyBUZXh0Q2hhbmdlIEFuaW1hdGlvblxuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5fcXVlc3Rpb25MYWJlbC5hbmltYXRlKHtcbiAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgIGR1cmF0aW9uOiAyMDAsXG4gICAgICAgICAgY3VydmU6IEFuaW1hdGlvbkN1cnZlLmVhc2VJbk91dFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5xdWVzdGlvbkluZGV4Kys7XG4gICAgICAgIHRoaXMuYW5pbWF0ZVF1ZXN0aW9uSW5kaWNhdG9yKCk7XG4gICAgICAgIHRoaXMucXVlc3Rpb25DdXJyZW50ID0gdGhpcy5xdWVzdGlvbnNbdGhpcy5xdWVzdGlvbkluZGV4XTtcbiAgICAgIH0sIDEwMDApO1xuXG4gICAgICAvLyBjaGFuZ2UgdGhlIHRleHQgb2YgcXVlc3Rpb24gYW5kIHNob3cgaXQgYWZ0ZXIgZmFkZVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgLy8gRG8gd2hhdGV2ZXIgeW91IHdhbnQgaGVyZVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX3F1ZXN0aW9uTGFiZWwuYW5pbWF0ZSh7XG4gICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICBkdXJhdGlvbjogMjAwLFxuICAgICAgICAgIGN1cnZlOiBBbmltYXRpb25DdXJ2ZS5lYXNlSW5PdXRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5hbnN3ZXJJMC5hZGRFdmVudExpc3RlbmVyKFwidGFwXCIsICgpID0+IHtcbiAgICAgICAgICB0aGlzLm5leHRRdWVzdGlvbigwKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYW5zd2VySTEuYWRkRXZlbnRMaXN0ZW5lcihcInRhcFwiLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5uZXh0UXVlc3Rpb24oMSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFuc3dlckkyLmFkZEV2ZW50TGlzdGVuZXIoXCJ0YXBcIiwgKCkgPT4ge1xuICAgICAgICAgIHRoaXMubmV4dFF1ZXN0aW9uKDIpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hbnN3ZXJJMy5hZGRFdmVudExpc3RlbmVyKFwidGFwXCIsICgpID0+IHtcbiAgICAgICAgICB0aGlzLm5leHRRdWVzdGlvbigzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIH0sIDEyMDApO1xuXG4gICAgICBjb25zb2xlLmxvZyhgaW5kZXggOiAke3RoaXMucXVlc3Rpb25JbmRleH0gIGxlbmdodDogJHt0aGlzLnF1ZXN0aW9ucy5sZW5ndGh9YCk7XG4gICAgICBpZiAodGhpcy5xdWVzdGlvbkluZGV4ID49IHRoaXMucXVlc3Rpb25zLmxlbmd0aCAtIDEpIHtcblxuICAgICAgICAvLyB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWycvc2NvcmUnXSlcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlQnlVcmwoYC9zY29yZS8ke3RoaXMuc2NvcmV9LyR7dGhpcy5tb2RlfWAsIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcblxuICAgICAgLy8gdG9kbyBxdWVzdGlvbnMgZmluaXNoZWRcblxuICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlQnlVcmwoYC9zY29yZS8ke3RoaXMuc2NvcmV9LyR7dGhpcy5tb2RlfWAsIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuXG4gICAgfVxuICB9XG5cbiAgYW5pbWF0ZUFuc3dlcjAoKSB7XG4gICAgdGhpcy5hbnN3ZXJJMC5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlciBhbmltYXRlX2JpZ2dlclwiO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hbnN3ZXJJMC5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlclwiO1xuICAgIH0sIDEwMDApO1xuICAgIHRoaXMuYW5zd2VyTDAuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWwgYW5pbWF0ZV9iaWdnZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VyTDAuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcbiAgICB9LCAxMDAwKTtcblxuICAgIHRoaXMuYW5zd2VySTEuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXIgYW5pbWF0ZV9zbWFsbGVyXCI7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFuc3dlckkxLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyXCI7XG4gICAgfSwgMTAwMCk7XG4gICAgdGhpcy5hbnN3ZXJMMS5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbCBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VyTDEuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcbiAgICB9LCAxMDAwKTtcblxuICAgIHRoaXMuYW5zd2VySTIuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXIgYW5pbWF0ZV9zbWFsbGVyXCI7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFuc3dlckkyLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyXCI7XG4gICAgfSwgMTAwMCk7XG4gICAgdGhpcy5hbnN3ZXJMMi5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbCBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VyTDIuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcbiAgICB9LCAxMDAwKTtcblxuICAgIHRoaXMuYW5zd2VySTMuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXIgYW5pbWF0ZV9zbWFsbGVyXCI7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFuc3dlckkzLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyXCI7XG4gICAgfSwgMTAwMCk7XG4gICAgdGhpcy5hbnN3ZXJMMy5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbCBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VyTDMuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcbiAgICB9LCAxMDAwKTtcblxuICB9XG5cbiAgYW5pbWF0ZUFuc3dlcjEoKSB7XG4gICAgdGhpcy5hbnN3ZXJJMS5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlciBhbmltYXRlX2JpZ2dlclwiO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hbnN3ZXJJMS5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlclwiO1xuICAgIH0sIDEwMDApO1xuICAgIHRoaXMuYW5zd2VyTDEuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWwgYW5pbWF0ZV9iaWdnZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VyTDEuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcbiAgICB9LCAxMDAwKTtcblxuICAgIHRoaXMuYW5zd2VySTAuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXIgYW5pbWF0ZV9zbWFsbGVyXCI7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFuc3dlckkwLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyXCI7XG4gICAgfSwgMTAwMCk7XG4gICAgdGhpcy5hbnN3ZXJMMC5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbCBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VyTDAuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcbiAgICB9LCAxMDAwKTtcblxuICAgIHRoaXMuYW5zd2VySTIuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXIgYW5pbWF0ZV9zbWFsbGVyXCI7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFuc3dlckkyLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyXCI7XG4gICAgfSwgMTAwMCk7XG4gICAgdGhpcy5hbnN3ZXJMMi5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbCBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VyTDIuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcbiAgICB9LCAxMDAwKTtcblxuICAgIHRoaXMuYW5zd2VySTMuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXIgYW5pbWF0ZV9zbWFsbGVyXCI7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFuc3dlckkzLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyXCI7XG4gICAgfSwgMTAwMCk7XG4gICAgdGhpcy5hbnN3ZXJMMy5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbCBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VyTDMuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcbiAgICB9LCAxMDAwKTtcblxuICB9XG5cbiAgYW5pbWF0ZUFuc3dlcjIoKSB7XG4gICAgdGhpcy5hbnN3ZXJJMi5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlciBhbmltYXRlX2JpZ2dlclwiO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hbnN3ZXJJMi5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlclwiO1xuICAgIH0sIDEwMDApO1xuICAgIHRoaXMuYW5zd2VyTDIuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWwgYW5pbWF0ZV9iaWdnZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VyTDIuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcbiAgICB9LCAxMDAwKTtcblxuICAgIHRoaXMuYW5zd2VySTAuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXIgYW5pbWF0ZV9zbWFsbGVyXCI7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFuc3dlckkwLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyXCI7XG4gICAgfSwgMTAwMCk7XG4gICAgdGhpcy5hbnN3ZXJMMC5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbCBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VyTDAuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcbiAgICB9LCAxMDAwKTtcblxuICAgIHRoaXMuYW5zd2VySTEuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXIgYW5pbWF0ZV9zbWFsbGVyXCI7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFuc3dlckkxLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyXCI7XG4gICAgfSwgMTAwMCk7XG4gICAgdGhpcy5hbnN3ZXJMMS5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbCBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VyTDEuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcbiAgICB9LCAxMDAwKTtcblxuICAgIHRoaXMuYW5zd2VySTMuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXIgYW5pbWF0ZV9zbWFsbGVyXCI7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFuc3dlckkzLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyXCI7XG4gICAgfSwgMTAwMCk7XG4gICAgdGhpcy5hbnN3ZXJMMy5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbCBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VyTDMuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcbiAgICB9LCAxMDAwKTtcblxuICB9XG5cbiAgYW5pbWF0ZUFuc3dlcjMoKSB7XG4gICAgdGhpcy5hbnN3ZXJJMy5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlciBhbmltYXRlX2JpZ2dlclwiO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hbnN3ZXJJMy5jbGFzc05hbWUgPSBcInBhbmVsX2Fuc3dlclwiO1xuICAgIH0sIDEwMDApO1xuICAgIHRoaXMuYW5zd2VyTDMuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWwgYW5pbWF0ZV9iaWdnZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VyTDMuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcbiAgICB9LCAxMDAwKTtcblxuICAgIHRoaXMuYW5zd2VySTAuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXIgYW5pbWF0ZV9zbWFsbGVyXCI7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFuc3dlckkwLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyXCI7XG4gICAgfSwgMTAwMCk7XG4gICAgdGhpcy5hbnN3ZXJMMC5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbCBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VyTDAuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcbiAgICB9LCAxMDAwKTtcblxuICAgIHRoaXMuYW5zd2VySTEuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXIgYW5pbWF0ZV9zbWFsbGVyXCI7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFuc3dlckkxLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyXCI7XG4gICAgfSwgMTAwMCk7XG4gICAgdGhpcy5hbnN3ZXJMMS5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbCBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VyTDEuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcbiAgICB9LCAxMDAwKTtcblxuICAgIHRoaXMuYW5zd2VySTIuY2xhc3NOYW1lID0gXCJwYW5lbF9hbnN3ZXIgYW5pbWF0ZV9zbWFsbGVyXCI7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFuc3dlckkyLmNsYXNzTmFtZSA9IFwicGFuZWxfYW5zd2VyXCI7XG4gICAgfSwgMTAwMCk7XG4gICAgdGhpcy5hbnN3ZXJMMi5jbGFzc05hbWUgPSBcImFuc3dlcl9sYWJlbCBhbmltYXRlX3NtYWxsZXJcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5zd2VyTDIuY2xhc3NOYW1lID0gXCJhbnN3ZXJfbGFiZWxcIjtcbiAgICB9LCAxMDAwKTtcblxuICB9XG5cbn1cbiJdfQ==