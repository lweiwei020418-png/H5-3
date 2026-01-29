import { defineConfig } from 'vite';
// 必须导入React插件，否则无法编译tsx文件
import react from '@vitejs/plugin-react'; 

// https://vitejs.dev/config/
export default defineConfig({
  // 启用React插件，编译tsx/ts文件
  plugins: [react()], 
  // 配置打包路径（确保静态资源路径正确）
  build: {
    outDir: 'dist', // 打包输出目录（默认就是dist，确认即可）
    assetsDir: 'assets', // 静态资源文件夹名（默认assets）
  },
  // 确保相对路径打包，避免部署后资源找不到
  base: './' 
});
