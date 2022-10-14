## npm 发布操作
npm init -y

npm login

npm whoami

npm publish

查看registry
-> npm config get registry

http://registry.npmjs.org //默认registry
修改为淘宝镜像
默认情况下我们执行 npm install * 这个命令时就是从http://registry.npmjs.org 这个服务器上将node包下载到本地，但该服务器在美国，这样下载就会非常慢，所以我们把 registry改为国内淘宝镜像

npm config set registry http://registry.npm.taobao.org  //将registry设置为淘宝镜像

注意
如果自己本地已经设置为淘宝镜像，在publish本地node包时要改回原地址 不然会报401错误

npm config set registry http://registry.npmjs.org 