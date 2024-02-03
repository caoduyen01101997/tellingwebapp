import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { MatTableModule } from '@angular/material/table';




export interface UserData {
  num: string;
  year: string;
  mistake: string;
  description: string;
  fixed: string
}

const ELEMENT_DATA: UserData[] = [
  { num: '1', year: 'John', mistake: '85%', description: 'primary',fixed: "fixed" },
  // Add more data as needed
];

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {

  displayedColumns: string[] = ['num', 'year', 'mistake', 'description', 'fixed'];
  dataSource = new MatTableDataSource<UserData>(ELEMENT_DATA);

}
