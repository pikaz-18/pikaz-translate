/*
 * @Description: 这是***页面（组件）
 * @Date: 2020-07-13 10:07:47
 * @Author: zouzheng
 * @LastEditors: zouzheng
 * @LastEditTime: 2020-08-23 16:08:30
 */
const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'pikaz-i18n-translate.js',
        path: path.resolve(__dirname, 'lib'),
        libraryTarget: 'umd',
    },
    target: 'node',
    node: {
        fs: 'empty',
    },
}
