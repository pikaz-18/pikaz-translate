/*
 * @Description: 这是demo页面（组件）
 * @Date: 2020-08-23 15:28:38
 * @Author: zouzheng
 * @LastEditors: zouzheng
 * @LastEditTime: 2020-08-25 00:11:47
 */
const { pikazI18nLang, pikazI18nTranslate } = require('../src/index.js')

const translate = async () => {
    // 提取项目中所有t('')中的i18n文本语言
    await pikazI18nLang('example', 'example/i18n/zh.json')
    // 默认中文翻译英语
    await pikazI18nTranslate('example/i18n/zh.json', 'example/i18n/en.json')
}

translate()
