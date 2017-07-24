import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-cameras',
  templateUrl: './cameras.component.html',
  styleUrls: ['./cameras.component.css']
})
export class CamerasComponent implements OnInit {
  searchData = '';
  searchBy = '$';
  selectData = [
    'Search by',
    'Name',
    'Location'
  ];
  camera = {};
  name = "";
  location="";
  data = [
    {
      camName: 'Camera_1',
      location: 'Location_1',
      onOff: 'Online',
      showEditArea: true
    },
    {
      camName: 'Camera_2',
      location: 'Location_2',
      onOff: 'Online',
      showEditArea: true
    },
    {
      camName: 'Camera_3',
      location: 'Location_3',
      onOff: 'Offline',
      showEditArea: true
    },
    {
      camName: 'Camera_4',
      location: 'Location_4',
      onOff: 'Online',
      showEditArea: true
    },

  ];
 
  constructor() { }

  close(cam) {
    cam.showEditArea = false;
  }
  show(cam) {
    this.camera = cam;
    this.name = cam.camName;
    this.location = cam.location;
  }

  edit(cam) {
    alert(cam.camName);
    cam.camName = this.name;
    cam.location = this.location;
  }
  delete(cam) {
    cam.showEditArea = false;
  }
  ngOnInit() {
  }

}
