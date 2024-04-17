# electronの覚書
## メインプロセス-レンダラー間通信の仕組み


```
レンダラー ⇔ preload ⇔ メインプロセス
```

* レンダラー側
```
let res: any = await window.【APIName】.【rendarCallname】(arg);
```

* preload
```
contextBridge.exposeInMainWorld("【APIName】", {
    【rendarCallname】: (arg) => ipcRenderer.invoke('【mainProcessFuncName】'),
    【rendarCallname】: (arg) => ipcRenderer.invoke('【mainProcessFuncName】'),
})
```

* メインプロセス

```
// 引数のeventがないとビルドエラーとなる
ipcMain.handle("【mainProcessFuncName】", (event, arg) => {
    let res = [
        {
            id: "001",
            name: "photo001.jpg",
            type: "jpg",
            dataUrl: "http://localhost:3000/data/photo001.jpg"
        },{
            id: "002",
            name: "photo002.jpg",
            type: "jpg",
            dataUrl: "http://localhost:3000/data/photo002.jpg"
        }
    ]
  return res;
});
```