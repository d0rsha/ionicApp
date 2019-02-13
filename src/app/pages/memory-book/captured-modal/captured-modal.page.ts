import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController, ActionSheetController } from '@ionic/angular';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ImagePreviewModalPage } from '../image-preview-modal/image-preview-modal.page';

@Component({
  selector: 'app-captured-modal',
  templateUrl: './captured-modal.page.html',
  styleUrls: ['./captured-modal.page.scss'],
})
export class CapturedModalPage implements OnInit {
  images = [];
  slideOption = {
    slidesPerView: 1.3,
    spaceBetween: 5,
    autoHeight: true
  };

  constructor(private navParams: NavParams,
    private webView: WebView,
    private modalController: ModalController,
    private camera: Camera,
    private actionSheetController: ActionSheetController) { }

  ngOnInit() {
    const capturedImage = this.navParams.get('image');
    this.pushNewImage(capturedImage);
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
}
