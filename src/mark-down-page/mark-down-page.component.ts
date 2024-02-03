import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MarkdownService } from 'ngx-markdown';

@Component({
  selector: 'app-mark-down-page',
  standalone: true,
  imports: [],
  templateUrl: './mark-down-page.component.html',
  styleUrl: './mark-down-page.component.scss'
})
export class MarkDownPageComponent {
  title = 'personal-blog';
  markdownRaw: string | undefined;
  markdown: string | undefined;

  constructor(private mdService:MarkdownService, private httpClient:HttpClient){ }
   
     async ngOnInit() {
       this.markdownRaw = await this.httpClient.get(`/assets/hello.md`, 
       {
         responseType: 'text'
       }).toPromise();
           
      //  this.markdown=this.mdService.compile(this.markdownRaw);
     }
       
     onLoad(data:any) {
       console.log(data);
     }
            
     onError(data:any){
       console.log(data);
     }

}
