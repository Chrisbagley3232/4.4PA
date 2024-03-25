import { Component, OnInit, NgZone } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { CrudService } from "src/app/service/crud.service";

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit{
  bookForm: FormGroup;
  id: any;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.paramMap.get('id');

    this.bookForm = this.formBuilder.group({
      isbn: [''],
      title: [''],
      author: [''],
      description: [''],
      published_year: [''],
      publisher: ['']
    });
  }

  ngOnInit(): void{
    this.crudService.GetBookById(this.id).subscribe((res) =>{
        this.bookForm.setValue({
            isbn: res['isbn'],
            title: res['title'],
            author: res['author'],
            description: res['description'],
            published_year: res['published_year'],
            publisher: res['publisher']
        });
    });
  }

  onSubmit(): any {
    this.crudService.UpdateBook(this.id, this.bookForm.value)
      .subscribe({
        error: (err) => console.log(err) 
      })
    this.ngZone.run(() => this.router.navigateByUrl('/books-list'));
  }
}