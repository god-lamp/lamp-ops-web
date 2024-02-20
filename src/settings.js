module.exports = {
  title: 'lamp-ops',

  /**
   * @type {boolean} true | false
   * @description 是否显示设置右侧面板
   */
  showSettings: true,

  /**
   * @type {boolean} true | false
   * @description 是否需要标签查看
   */
  tagsView: true,

  /**
   * @type {boolean} true | false
   * @description 是否修复标题
   */
  fixedHeader: true,

  /**
   * @type {boolean} true | false
   * @description 是否在侧边栏中显示徽标
   */
  sidebarLogo: true,

  /**
   * @type {string | array} 'production' | ['production', 'development']
   * @description 需要 show err logs 组件。
   * 默认值仅在生产环境中使用
   * 如果你也想在 dev 中使用它，你可以传递 ['production'， 'development']
   */
  errorLog: 'production'
}
