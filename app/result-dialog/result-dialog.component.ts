import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { RouterExtensions } from "nativescript-angular/router";
import * as platformModule from "tns-core-modules/platform";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout/stack-layout";
import { IAnswer } from "../questions.service";
const orientation = require("nativescript-orientation");

@Component({
  moduleId: module.id,
  selector: "app-result-dialog",
  templateUrl: "./result-dialog.component.html",
  styleUrls: ["./result-dialog.component.scss"]
})
export class ResultDialogComponent implements OnInit {

  @ViewChild("stackLayout") stackLayout: ElementRef;
  score;
  playerAnswers: Array<IAnswer>;
  _stackLayout;

  constructor(private params: ModalDialogParams, private routerExtensions: RouterExtensions) {
    this.score = `You have ${params.context.score} good answers`;
    this.playerAnswers = params.context.playerAnswers;
    console.dir(this.playerAnswers);
  }

  home() {
    this.routerExtensions.navigate(["/home"], { clearHistory: true });
    this.params.closeCallback();

  }

  result() {
    this.params.closeCallback();
    this.routerExtensions.navigate(["/play", [true, this.playerAnswers]], { clearHistory: true });
  }

  ngOnInit() {
    const _deviceType = platformModule.device.deviceType;
    const _stackLayout = <StackLayout>this.stackLayout.nativeElement;
    _stackLayout.className = _deviceType.toLowerCase();
    console.log(_deviceType);
  }

}
