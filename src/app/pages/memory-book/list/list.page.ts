import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { ActionSheetController, ModalController, Platform, Events } from '@ionic/angular';
import { CapturedModalPage } from '../captured-modal/captured-modal.page';
import { MemoryService } from '../../../services/memory.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  memories = [];

  constructor(private camera: Camera,
    private modalController: ModalController,
    private actionSheetController: ActionSheetController,
    private pltf: Platform,
    private memoryService: MemoryService,
    private router: Router,
    private events: Events) {

    this.events.subscribe('reload-memories', () => {
      console.log('<list.page.ts> new event: reload.memories');
      this.loadMemories();
    });
  }


  ngOnInit() {
    this.pltf.ready().then(() => {
      this.loadMemories();
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
      this.modalController.create({
        component: CapturedModalPage,
        componentProps: {
          image: imagePath
        }
      }).then(modal => {
        modal.present();

        modal.onWillDismiss().then(data => {
          if (data.data && data.data['reload']) {
            // Reset memories && Reload data
            this.loadMemories();
          }

        });
      });
    });
  }


  loadMemories() {
    this.memoryService.getMemories().then(result => {
      this.memories = result;
    });
  }

  openMemory(id) {
    this.router.navigateByUrl(`/inside/menu/list/${id}`);
  }

}
