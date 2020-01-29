module.exports={
    //定义路劲别名，省略../
    configureWebpack:{
        resolve:{
            alias:{   //@ 已经在 目录中被定义 ，定义为src
                'assets':'@/assets',
                'common':'@/common',
                'components':'@/components',
                'network':'@/network',
                'views':'@/views'
            }
        }
    }
}