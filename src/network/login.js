import axios from 'axios'
import md5 from 'js-md5'
const instance =axios.create({
    baseURL:"http://api.colinx.one:8888/test/loginCheck/",
    timeout:5000
});
instance.interceptors.response.use(res=>{
    return res.data;//只返回 有效的 数据 部分
})
export  function loginCheck(username,pass){
    const encrypted =md5(pass);//加密密码
    console.log('密文',encrypted);
    
    return instance.post('',{
        username,
        'passwd':encrypted
    })
}