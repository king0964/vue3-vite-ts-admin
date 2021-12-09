<template>
  <div ref="editor"></div>
</template>

<script setup lang='ts'>
import { ref, onBeforeUnmount, onMounted } from 'vue'
import WangEditor from 'wangeditor'
// 获取编辑器实例html
const editor = ref()
// 编辑器实例对象
let instance: any = ''
// 挂载完成
onMounted(() => {
  // 编辑器实例对象
  instance = new WangEditor(editor.value)
  //插入代码语言配置
  instance.config.languageType = [
    'Bash',
    'C',
    'C#',
    'C++',
    'CSS',
    'Java',
    'JavaScript',
    'JSON',
    'TypeScript',
    'Plain text',
    'Html',
    'XML',
    'SQL',
    'Go',
    'Kotlin',
    'Lua',
    'Markdown',
    'PHP',
    'Python',
    'Shell Session',
    'Ruby',
    'typescript'
  ]
  // 自定义菜单
  instance.config.menus = [
    'head',
    'bold', //字体加粗
    'fontSize',//字号
    'fontName',//字体
    'italic',
    'underline',//下划线
    'strikeThrough',//删除线
    'indent',
    'lineHeight',
    'foreColor',
    'backColor',
    'link',
    'list',//列表
    'todo',
    'justify',//对其
    'quote',// 引用
    'emoticon',
    'image',
    'video',//视频
    'table',//表格
    'code',
    'splitLine',
    'undo',//撤销
    'redo',//恢复
  ]
  // 代码高亮
  // instance.highlight = ''
  // 开启本地上传图片(这是后端上传链接)
  instance.config.uploadImgServer = '/upload-img'
  // 限制上传图片格式
  instance.config.uploadImgAccept = ['jpg', 'jpeg', 'png', 'gif', 'bmp']
  // 开启本地上传视频(这是后端上传链接)
  instance.config.uploadVideoServer = '/api/upload-video'
  // 设置编辑器高度
  instance.config.height = 150
  // 设置编辑器页面层级
  instance.config.zIndex = 10
  // 设置编辑器placeholder
  instance.config.placeholder = '请输入您的文字！'
  // 配置编辑器显示颜色
  instance.config.colors = ['#000000', '#eeece0', '#1c487f', '#4d80bf']
  // 忽略粘贴内容中的图片
  instance.config.pasteIgnoreImg = true

  Object.assign(instance.config, {
    // wangeditor 值发生变化的时候
    // onchange() {
    //   // 将值传递至父组件
    //   content.emit('getWangEditorValue', instance.txt.html())
    // },
    // 上传网络图片回调
    linkImgCallback(src: string) {
      console.log('图片 src ', src)
    },
    // 上传网络视频回调
    onlineVideoCallback(video: string) {
      // 自定义回调内容，内容成功插入后会执行该函数
      console.log('插入视频内容', video)
    }
  })
  instance.create()
})

// 页面卸载之前
onBeforeUnmount(() => {
  instance.destroy()
  instance = null
})
</script>
<style scoped lang='less'></style>
