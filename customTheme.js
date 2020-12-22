import { useTheme } from 'beeshell/dist/common/styles/variables'
// 自定义主题变量
const customVariables = {
    mtdBrandPrimary: 'pink',
    mtdGrayBase: '#333333',
  
    buttonBorderRadius: 30
  }
  
  // 自定义主题变量与默认主题变量 merge，并返回新的主题变量
  const ret = useTheme(customVariables)
  export default ret