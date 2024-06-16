### 安裝 node package
```bash
cd ./wepback
npm install
```

### 編譯 js
```bash
# 產生的檔案在 ./webpack/dist 目錄下
# 環境變數會讀取當下 .env 檔案(可以使用 .env.example 建立)

cd ./wepback
yarn run build
```

### html 載入 js
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <textarea id="editor" placeholder="請輸入內容">
    </textarea>
</body>
<!-- 將編譯好的 js 載入到 html 頁面中 -->
<script src="./dist/bundle.js?v=3"></script>
</html>
```