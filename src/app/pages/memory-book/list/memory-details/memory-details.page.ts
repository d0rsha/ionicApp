import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MemoryService } from '../../../../services/memory.service';
import { ModalController } from '@ionic/angular';
import { ImagePreviewModalPage } from '../../image-preview-modal/image-preview-modal.page';

@Component({
  selector: 'app-memory-details',
  templateUrl: './memory-details.page.html',
  styleUrls: ['./memory-details.page.scss'],
})
export class MemoryDetailsPage implements OnInit {

  id = null;
  memory = null;
  slideOption = {
    slidesPerView: 1.3,
    spaceBetween: 15,
    autoHeight: true
  };
  
  constructor(private activatedRoute: ActivatedRoute,
    private memoryService: MemoryService, 
    private modalController: ModalController) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id)');
    this.memoryService.getMemoryById(this.id).then(memory => {
      this.memory = memory;
    });
  }

  openPreview(img) {
    this.modalController.create({
      component: ImagePreviewModalPage,
      componentProps: {
        image: img
      }
    }).then(modal => modal.present());
  }

  deleteMemory() {

  }

}