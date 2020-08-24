<!--
 * @Description: 这是***页面（组件）
 * @Date: 2020-08-19 18:21:20
 * @Author: zouzheng
 * @LastEditors: zouzheng
 * @LastEditTime: 2020-08-25 00:13:11
-->

# pikaz-i18n-translate

## 说明

支持提取全项目中的 t(''),$t("")等i18n语言文本写入中文json文件，并生成其他多语种的json文件，推荐使用中文，如$t("项目说明")，增强语义化，方便查看与翻译。
ps:翻译接口有请求频率限制，若一次翻译不成功，建议多试几次呦，或者更换ip绕过限制。

## 安装

```bash
npm install --save-dev pikaz-i18n-translate

yarn add pikaz-excel-js
```

## 调用方法

建立一个js文件，写入以下内容

```js
const { pikazI18nLang, pikazI18nTranslate } = require('pikaz-i18n-translate')

/**
 * @description: 翻译
 * @param {String} dir/需要翻译的目录或文件
 * @param {String} zh/需写入的中文json文件路径
 * @param {String} en/需写入的英文json文件路径
 * @return {type} 
 */
const translate = async (dir,zh,en) => {
    await pikazI18nLang(dir, zh)
    await pikazI18nTranslate(zh, en)
}

translate('src','src/i18n/zh.json','src/i18n/en.json')
```

## 示例

[示例代码](https://github.com/pikaz-18/pikaz-i18n-translate/tree/master/example)

### pikazI18nLang(dir,zh) 函数参数(提取目录下所有文件的i18n语言并写入中文json文件)

参数|说明|类型|可选值|默认值
-|-|-|-|-
dir|需翻译的目录或文件路径，如'src'|string|--|--
zh|需写入的中文json文件路径，如'src/i18n/zh.json'|string|--|--

### pikazI18nTranslate(zh,en,lang) 函数参数(翻译中文json文件并写入英文json文件)
参数|说明|类型|可选值|默认值
-|-|-|-|-
zh|中文json文件路径，如'src/i18n/zh.json'|string|--|--
en|其他语言json文件路径，如'src/i18n/en.json',默认英文|string|--|--
lang|翻译语种，可不传，默认英语，如'en'|string|en:英语;ja:日语;kr:韩语;fr:法语;ru:俄语;sp:西语;|en