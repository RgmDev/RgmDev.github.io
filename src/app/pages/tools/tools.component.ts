import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {

  tools: any[] = [];

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.http.get("assets/data/tools.json").subscribe((data: any) => {
      this.tools = data;
    });
  }

}
