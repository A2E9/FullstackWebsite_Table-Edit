import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent implements OnInit {

  personID!: number ;
  
  constructor(private route:ActivatedRoute) {
    this.route.params.subscribe( params => this.personID = params['id'] );
    // const id: Observable<string> = route.params.pipe(map(p => p['id']));
    console.log(this.personID);
    
   }

  ngOnInit(): void {
  }

}
