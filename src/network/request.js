import axios from 'axios'

//备份默认url
const baseURL1='http://123.207.32.32:8000/api/hy';
const baseURL2='http://106.54.54.237:8000/api/hy';
 function request (config)
{

    //1.创建 实例, 在实例上 配置 默认的请求 配置选项
    const instance =axios.create({
        baseURL:baseURL1,
        timeout:5000
    });


    //2.拦截器
    instance.interceptors.request.use(config=>{
        return config;
    });

    instance.interceptors.response.use(res=>{
        return res.data;//只返回 有效的 数据 部分
    })


    return instance(config);
}

export default request