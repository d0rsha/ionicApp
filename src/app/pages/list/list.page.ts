import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  image = null;
  constructor(private camera: Camera,
    private webview: WebView,
    private actionSheetController: ActionSheetController) { }

  ngOnInit() {
  }

  async selectSource() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Select Image Source',
      buttons: [{
        text: 'Load from library',
        handler: () => { this.captureImage(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: 'Use Camera',
        handler: () => { this.captureImage(this.camera.PictureSourceType.CAMERA);}
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
      this.image = this.webview.convertFileSrc(imagePath);
      console.log('<list.page.ts>path: ', this.image);
    });
  }
}
