#记录


## iconic 使用方法 [ionic地址](https://useiconic.com/open/)

+ 使用class
> <span class="oi oi-account-login"></span>
+ 使用图片 注意由于路径在assets下面需要添加, `./assets`
> <img src="./assets/open-iconic/svg/account-login.svg">
+ 使用svg 注意在官网中复制的svg路径不对 xlink:href="open-iconic.svg#account-login", 需要添加 `./assets/open-iconic/sprite/`
> <svg style="width: 16px; height: 16px;"><use xlink:href="./assets/open-iconic/sprite/open-iconic.svg#account-login" style="fill: #f00;"></use></svg>