import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.scss']
})


export class ConversionComponent implements OnInit {

  cr: any='';
  name = 'Angular';

  images=["https://images.oyoroomscdn.com/uploads/hotel_image/1097/340ea5ee01acc37f.jpg",
  "https://images.oyoroomscdn.com/uploads/hotel_image/1097/9b75ea873012234c.jpg",
  "https://images.oyoroomscdn.com/uploads/hotel_image/1097/d12b3a343f16cb28.jpg",
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
