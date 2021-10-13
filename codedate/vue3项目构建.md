# vue3项目构建

## 项目配置

### 生产环境和开发坏境的区别

1. 生产环境（dependencies已发布上线的环境）
   - --save等价于S
   - -S、--save将包依赖至dependencies(生产环境的依赖)
   - Npm install ant-desgin-vue --save
   - Npm install ant-desgin-vue --s
2. 开发环境（devDependencies）=（develop）
   - --save-dev等价于-D
   - -D、--save-dev将包依赖至devDependencies(开发环境的依赖)
   - Npm install ant-desgin-vue --save-dev
   - Npm install ant-desgin-vue -D

3. 删除模块
   - npm uninstall <name> 删除模块，但不删除模块留在package.json的信息
   - npm uninstall <name> --save删除模块，同时删除模块dependecies信息
   - npm uninstall <name> --save-dev 删除模块，同时删除de vdependecies信息

4. Vue,config.js配置

   Https://cli.vuejs.org/zh/config/

### 创建项目

1. Vue ui 启动
2. vue预设和功能
   - choose due vesion ✓   //视图版本
   - Babel ✓                         //es6装换为es5代码
   - Router ✓                       //vue-router路由
   - vuex ✓                          //vuex状态管理模式
   - Css pre-processors✓  //css预处理器
   - Linter/Formatter✓      //代码风格检查和格式化 
3. vue配置
   1. 选择3.0版本
   2. pick a css pre-processor ->sass/SCSS(with node-sass)
   3. Pick a linter / formatter config ->ESlint + prettier 代码验证规则
   4. pick additional lint features ->lint on save (选择保存的时候校验) 

### 建立项目仓库（github或coding或Gitlab）

1. GIT基础命令

- 拷贝项目：git clone<仓库地址>
- 创建分支：git branch <name>
- 创建并进入分支：git checkout -b <name>
- 切换分支：git checkout <name>
- 查看状态：git add .
- 提交：git commit -m '这里是当前提交的描述'
- 拉取：git pull (拉取远程仓库至本地开发环境)
- 推送：git push(推送本地代码至远程仓库github)
- 查看分支：git branch --list
- 查看分支（包含远程分支）：git branch -a

2. git分支

   <img src="/Users/zhanghongkuan/Library/Application Support/typora-user-images/image-20211012160220828.png" alt="image-20211012160220828"/>

### vscode 连接github仓库

1. ssh-keygen -t rsa  //在终端中生成密钥
2. cd .ssh                   //进去密钥目录
3. ls                            //查看目录文件
4. cat id_rsa.pub     //查看密钥
5. github账号        密码:Zhang15169025371

### 项目配置

1. 路由配置

   - createWebHistory :创建历史记录模式的路由
   - 192.0.0.1:8080/
   - createWebHashHistory:创建“哈希值”历史记录模式的路由
   - 192.0.0.1:8080/#/

2. 在开发环境中 访问路由，俩种模式都可以正常访问

3. 在生产环境中，“哈希”模式可以正常访问，非“哈希”模式后端协助配置转发（白屏、404等）nginx。

   

###  安装ant-design-vue

1. npm install ant-desgin-vue --save                    //这个是1.0版本
2. npm install ant-design-vue@next --save        //这个是2.0版本