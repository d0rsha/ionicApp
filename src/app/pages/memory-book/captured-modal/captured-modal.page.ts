import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController, ActionSheetController } from '@ionic/angular';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ImagePreviewModalPage } from '../image-preview-modal/image-preview-modal.page';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MemoryService } from '../../../services/memory.service';

@Component({
  selector: 'app-captured-modal',
  templateUrl: './captured-modal.page.html',
  styleUrls: ['./captured-modal.page.scss'],
})
export class CapturedModalPage implements OnInit {
  images = [];
  slideOption = {
    slidesPerView: 1.3,
    spaceBetween: 15,
    autoHeight: true
  };
  memoryForm: FormGroup;
  colors = [
    '#aa00ff',
    '#91ccbb',
    'aabb66',
    '#aa8585'
  ];

  constructor(private navParams: NavParams,
    private webView: WebView,
    private modalController: ModalController,
    private camera: Camera,
    private actionSheetController: ActionSheetController,
    private fb: FormBuilder,
    private memoryService: MemoryService) { }

  ngOnInit() {
    const capturedImage = this.navParams.get('image');
    this.pushNewImage(capturedImage);

    this.memoryForm = this.fb.group({
      title: ['', Validators.required],
      date: new Date().toISOString().split('T')[0],
      text: '',
      color: this.colors[0]
    });
  }

  async selectSource() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Select Image Source',
      buttons: [{
        text: 'Load from library',
        handler: () => {
          this.captureImage(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: 'Use Camera',
        handler: () => { this.captureImage(this.camera.PictureSourceType.CAMERA); }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }
      ]
    });
    // No need to wait when sheet is ready
    actionSheet.present();
  }

  captureImage(sourceType: number) {
    const options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };

    this.camera.getPicture(options).then(imagePath => {
      this.pushNewImage(imagePath);
    });
  }

  openPreview(idx) {
    this.modalController.create({
      component: ImagePreviewModalPage,
      componentProps: {
        image: this.images[idx].path
      }
    }).then(modal => modal.present());
  }

  pushNewImage(path) {
    this.images.push({
      path: this.webView.convertFileSrc(path),
      file: path
    });
  }

  close() {
    this.modalController.dismiss();
  }

  removeImage(id) {
    this.images.splice(id, 1);
  }

  setColor(color) {
    this.memoryForm.patchValue({ color: color });
  }

  saveMemory() {
    let promises = [];

    for (let img of this.images) {
      const copyTask = this.memoryService.saveImage(img.file);
      promises.push(copyTask);
    }

    // Wait for the whole array of promises to finish !
    Promise.all(promises).then(res => {
      console.log('<captured-modal.pages.ts> result: ', res);
      let toSave = this.memoryForm.value;
      toSave.images = res;
      toSave.id = Date.now();

      this.memoryService.addMemory(toSave).then(result => {
        this.modalController.dismiss({ reload: true });
      });
    });
  }
}
