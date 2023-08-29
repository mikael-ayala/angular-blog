import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  contentPhoto: string = ''
  contentTitle: string = ''
  contentDescription: string = ""
  id: string | null = ''

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => this.id = value.get('id'))

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.filter(data => data.id.toString() == id)[0]
    console.log(result)
    this.contentPhoto = result.photo
    this.contentTitle = result.title
    this.contentDescription = result.description
  }
}
