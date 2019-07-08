import { Component, OnInit } from "@angular/core";
import { CHARITIES } from "../charity-data";

@Component({
  selector: "app-charities",
  templateUrl: "./charities.component.html",
  styleUrls: ["./charities.component.scss"]
})
export class CharitiesComponent implements OnInit {
  charities = CHARITIES;

  constructor() {}

  ngOnInit() {}
}
