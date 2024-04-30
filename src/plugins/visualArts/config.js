/*
 * @Description:
 * @Version: 1.668
 * @Autor: 地虎降天龙
 * @Date: 2024-04-30 08:18:21
 * @LastEditors: 地虎降天龙
 * @LastEditTime: 2024-04-30 16:12:30
 */
export default {
    name: 'visualArts',
    title: '视觉艺术',
    intro: '这里展示一些视觉艺术的效果',
    version: '0.0.1',
    author: '地虎降天龙',
    website: 'https://gitee.com/hawk86104',
    state: 'active',
    creatTime: '2024-04-30',
    updateTime: '2024-04-30',
    require: [],
    preview: [
        {
            src: 'plugins/visualArts/preview/volumetricLightGodray.png',
            type: 'img',
            name: 'volumetricLightGodray',
            title: '电影体积光',
            referenceSource: { title: 'react-three-fiber', url: 'https://codesandbox.io/s/yggpw5' },
        },
        {
            src: 'plugins/visualArts/preview/roomup.png',
            type: 'img',
            name: 'roomup',
            title: '日式会厅',
            referenceSource: { title: 'react-three-fiber', url: 'https://codesandbox.io/s/ykfpwf' },
        },
    ],
}
