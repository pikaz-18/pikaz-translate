<!--
 * @Description: 这是***页面（组件）
 * @Date: 2020-08-19 18:21:20
 * @Author: zouzheng
 * @LastEditors: zouzheng
 * @LastEditTime: 2020-08-20 09:46:17
-->
# kz-i18n-translate

## 安装
package.json文件中写入
```js
  "devDependencies": {
    "kz-i18n-translate": "git+https://gitlab.kuaizitech.cn/f2e/knpm/kz-i18n-translate.git"
  },
```
执行
```bash
npm install kz-i18n-translate
```
 
## 调用方法
```js
const {kzI18nLang,kzI18nTranslate}=require('kz-i18n-translate')

const translate=async ()=>{
  await kzI18nLang('src','src/i18n/zh.json');
  await kzI18nTranslate('src/i18n/zh.json','src/i18n/en.json');
}

translate()
```

### kzI18nLang函数参数(提取目录下所有文件的i18n语言并写入中文json文件)
参数|说明|类型|可选值|默认值
-|-|-|-|-
dir|需翻译的目录路径，如'src'|String|--|--
path|需写入的中文json文件路径，如'src/i18n/zh.json'|string|--|--

### kzI18nTranslate函数参数(翻译中文json文件并写入英文json文件)
参数|说明|类型|可选值|默认值
-|-|-|-|-
zh|中文语言json文件路径，如'src/i18n/zh.json'|String|--|--
en|英文语言json文件路径，如'src/i18n/en.json'|string|--|--