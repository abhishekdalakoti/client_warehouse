import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';

import {toselect} from '../../Models/container';
import { ContainerService } from 'src/app/services/container.service';
@Component({
  selector: 'app-move-container',
  templateUrl: './move-container.component.html',
  styleUrls: ['./move-container.component.css']
})
export class MoveContainerComponent implements OnInit {
  profileForm = new FormGroup({
    to_move: new FormControl(''),
    to: new FormControl(''),

  });
  parent:number;
  to_move:number;
  to:number;
 container_initial:number[];
 container_final:number[];

  constructor(private containerservice : ContainerService,
    private route : ActivatedRoute,
    private router : Router) { }

  ngOnInit(): void {
  }

}
