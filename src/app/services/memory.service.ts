import { Injectable } from '@angular/core';
import { File } from '@ionic-native/file/ngx';
import { Storage } from '@ionic/storage';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Platform } from '@ionic/angular';

const MEMORY_KEY = 'saved_memories';

@Injectable({
  providedIn: 'root'
})
export class MemoryService {

  constructor(private file: File, private storage: Storage,
    private webview: WebView) { }

  saveImage(imagePath) {
    let currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
    const folderPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);

    // Remove eventual extra image.jpg?123123
    if (currentName.indexOf('?') > -1) {
      currentName = currentName.substr(0, currentName.lastIndexOf('?'));
    }

    return this.copyFileToLocalDir(folderPath, currentName, `${new Date().getTime()}.jpg`);
  }

  copyFileToLocalDir(folderPath, currentName, newFileName) {
    return this.file.copyFile(folderPath, currentName, this.file.dataDirectory, newFileName)
      .then(success => {
        return newFileName;
      }, error => {
        console.log('<memory.service.ts> error: ', error);
      });
  }

  addMemory(memory) {
    console.log(memory);
    return this.storage.get(MEMORY_KEY).then(memories => {
      if (!memories) {
        return this.storage.set(MEMORY_KEY, [memory]);
      } else {
        memories.push(memory);
        return this.storage.set(MEMORY_KEY, memories);
      }
    });
  }

  getMemories() {
    return this.storage.get(MEMORY_KEY).then(result => {
      if (!result) {
        return [];
      }

      return result.map(item => {
        item.imas = item.images.map(img => {
          this.webview.convertFileSrc(this.file.dataDirectory + img);
          return item;
        });
      });

    });
  }
}
