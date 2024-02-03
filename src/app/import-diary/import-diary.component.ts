import { Component } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-import-diary',
  templateUrl: './import-diary.component.html',
  styleUrl: './import-diary.component.scss'
})
export class ImportDiaryComponent {
  public Editor = ClassicEditor;
  editorContent: string = ''

  constructor() {
    // Constructor logic goes here
    console.log('Component constructed');
  }

  ngOnInit(): void {
    // Initialization logic goes here
    console.log('Component initialized');
  }


  onEditorChange(event: any) {
    // Handle editor changes, e.g., store the content in a variable
    const editorContent = event.editor.getData();
    this.editorContent = editorContent;
    console.log(editorContent);
  }
}
