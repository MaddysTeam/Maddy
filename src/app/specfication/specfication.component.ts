import { Component } from '@angular/core';
import { ListComponent } from 'app/shared/plugins/list/list.component';

@Component({
    selector: 'app-specfication',
    templateUrl: './specfication.component.html'
})
export class SpecficaitonComponent {

    bindList(list: ListComponent) {
        list.data = [
            { spec: { title: '何为【模块】，【组件】，【服务】，【数据绑定】?', content: ` 
            1) 【模块】 包含组件、指令和管道，把该三者打包成内聚的功能块， 并把它们的一部分公开出去，以便外部组件使用它们。 它可以向应用的依赖注入器中添加服务</br>
            2) 【组件】 组件负责控制屏幕上的一小块区域，我们称之为视图。每个组件包含【ts文件】，【style文件】和【html文件】 
            </br>
            `, code : '', imageUrl: 'https://angular.cn/generated/images/guide/architecture/overview2.png' } },
            { spec: { title: '', content: `
            3) 【元数据】 元数据告诉 Angular 如何处理一个类，把该类作为一个组件
            `, imageUrl: 'https://angular.cn/generated/images/guide/architecture/template-metadata-component.png'} },
            { spec: { title: '', content: `
            4) 【指令】 Angular 模板是动态的。当 Angular 渲染它们时，它会根据指令提供的操作对 DOM 进行转换。
            `, imageUrl: 'https://angular.cn/generated/images/guide/architecture/directive.png'} },
            { spec: { title: '', content: `
            5) 【服务】 服务是一个广义范畴，包括：值、函数，或应用所需的特性。例如【日志服务】，【数据服务】，【业务服务】等
            `, imageUrl: 'https://angular.cn/generated/images/guide/architecture/service.png'} },
            { spec: { title: '', content: `
            6) 【数据绑定】 
            `, imageUrl: 'https://angular.cn/generated/images/guide/architecture/component-databinding.png'} },

            { spec: { title: '本项目模块', content: ` 1) 【app模块】是整个项目的主模块和入口，内部包含【shared模块】，【core模块】和【业务逻辑模块】`, code : '' } },
            { spec: { title: '', content: ` 2) 【shared模块】
             <p>里包含了通用【插件模块】，【组件】，【指令】，【服务提供者】和【管道】，该模块和业务没有任何联系，作为全局通用</p>
             <p>
            3) 【插件模块】: 包含以下自定义插件：</br>
             1 【article组件】 </br>
             2 【card 组件】</br>
             4 【modal 弹出框组件】</br>
             5 【carousel 轮播组件】</br>
             6 【forms 登陆组件（要搬到core模块）】</br>
             7 【list 列表组件】</br>
             8 【popover 浮动层组件】</br>
             9 【searchbox 搜索框组件】</br>
             10【table 表格组件】</br>
             </p>
             <p>
             包含以下自定义指令：</br>
             1 【scroll gotoTop指令】 </br>
             2 【scroll 位置触发指令】</br>

             包含以下自定义服务提供者：</br>
             【httpProvider】 封装了原Angular的http请求，规定了 request 和reasonse 模式

             </p>
            `, code : '' } },
            { spec: {  content: ` 
            4)【Core模块】:本模块定义了全局包含业务核心的模块，例如【导航模块】，【页脚模块】，【登陆模块】，【注册模块】等</br>
            `, code : '' } },
            { spec: {  content: ` 
            5)【其他业务模块】:定义了包含业务的子模块，例如【news新闻模块】，【user用户模块】，【home首页模块】等</br>
            `, code : '' } },


            { spec: { title: '如何在本项目内添加【业务模块】？', content: ` 
            <p>step1 进入app文件夹，创建【业务文件夹】 例如【活动业务 active】</p>
            <p>step2 进入【acitive】文件夹 ，创建该业务通用【share】文件夹，该文件夹专门放置【活动服务】，【活动model】，【活动指令】等 </p>
            <p>step3 回到【acitive】文件夹，分析业务，可能的业务是 【活动列表】，【活动编辑】，【活动明细】，分别创建三个文件夹 </p>
            <p>step4 在上述文件夹内依次新增【ts组件文件】，【style文件】和【html模板文件】 </p>
            <p>step5 回到【acitive】文件夹 创建【子路由组件】 规定为 【业务组件名称：例如(active)】.routing.module.ts </p>
            <p>step6 最后创建【业务组件模块文件】规定为 【业务组件名称：例如(active)】.module.ts ，该文件作为该业务组件核心和入口，导入到其他模块
            注意！注意！注意！重要的说三遍，如果你希望模块内某个【组件】需要被公开给【其他模块】使用，则需要在module.ts里metadata中的export数组内添加
            </p>
            <p>step7 最后别忘了在【上级模块】，【调用模块】或者【App模块里】申明导入本模块，这样其他模块才能使用该业务模块中的组件 </p>
            </br>
            ` } },

            { spec: { title: '如果有复杂业务怎么办？', content: ` 
            <p>方案1 可以先提炼出简单的业务，并将其独立，然后再复杂业务模块里调用简单业务模块的服务即可，优点：业务独立成为模块，缺点：可能要去其他服务调用服务接口，如果不调用可能会产生重复代码</p>
            <p>方案2 在core 文件夹新增business模块，然后将所有和业务有关的servcie 放在其中 优点：业务模块间耦合下降，统一接口地址，没有重复代码，缺点：修改接口时会影响所有依赖其服务的模块</p>
            ` } },

            { spec: { title: '如果要新增或修改通用控件怎么办？', content: ` 
            <p>如果要新增，得在【app】文件下的【shared 模块】中定义控件，并且在shareModule中注册</p>
            <p>由于已有控件的修改，则通知控件作者，修改后得测试发布，切记</p>
            ` } },

            { spec: { title: '控件是否有使用说明书？如何确定在页面中使用哪些控件？', content: ` ` } },

            { spec: { title: '是否可以使用主题？，如果可以，如何设置？', content: ` ` } },

            { spec: { title: '在使用本项目前，我要学习什么知识？', content: ` ` } },

            { spec: { title: '我是否需要严格按照语言规范开发？', content: ` ` } },

            { spec: { title: '在哪里去执行http请求数据？哪里处理具体的前台业务逻辑？', content: ` ` } }

        ];
    }

}