import { defineConfig } from 'umi';
const { REACT_APP_ENV } = process.env;

export default defineConfig({
  ssr: {},
  title:false,  //避免配置Helmet时候页面一闪
  publicPath:'http://localhost:8000/',  //本地调试
  define: {
    env: REACT_APP_ENV,
  },
});
