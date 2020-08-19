# kz-i18n-translate

## 安装
package.json文件中写入
```js
  "devDependencies": {
    "kz-i18n-translate": "git+https://gitlab.kuaizitech.cn/zouzheng/kz-i18n-translate.git"
  },
```
执行
```bash
npm install kz-i18n-translate
```
 
## 调用方法
```js
const {kzI18nLang,kzI18nTranslate}=require('kz-i18n-translate')
```

### kzI18nLang函数参数(提取目录下所有文件的i18n语言并写入中文json文件)
参数|说明|类型|可选值|默认值
-|-|-|-|-
dir|需翻译的目录路径，如'src'|String|--|--
path|需写入的中文json文件路径，如'i18n/zh'|string|--|--

### kzI18nTranslate函数参数(翻译中文json文件并写入英文json文件)
参数|说明|类型|可选值|默认值
-|-|-|-|-
zh|中文语言json文件路径，如'i18n/zh'|String|--|--
en|英文语言json文件路径，如'i18n/en'|string|--|--