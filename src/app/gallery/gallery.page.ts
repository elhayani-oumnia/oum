import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {
 public keyword:string;
 public currentPage:number=1;
 public  size:number=10;
  public dataImages : Array<string>=[];
  public totalPages: number;

  constructor(private  httpClient:HttpClient) { }

  ngOnInit() {
  }

    onLoadImages() {
      this.dataImages=[];
      this.currentPage=1;
      this.totalPages=0;
      this.doSearch();

    }
    doSearch(){
        this.httpClient.get('https://pixabay.com/api/?key=15048990-f4f2c43af06ba067f02c93a76&q='+this.keyword+'&per_page='+this.size+'&page='+this.currentPage)
            .subscribe(data=> {
                data['hits'].forEach(image=>{

                    this.dataImages.push(image);
                });
                this.totalPages=data['totalHits']/this.size;
            },error => {
                console.log(error);
            });
    }

  loadData(evt) {
    if(this.currentPage<this.totalPages){
      console.log(this.currentPage+"/"+this.totalPages);
      ++this.currentPage;
      this.doSearch();
      evt.target.complete();
    }
    if(this.currentPage>=this.totalPages){
        evt.target.disabled=true;
    }
  }
}
