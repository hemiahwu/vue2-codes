//实例化vue对象
new Vue({
    el: '#app',
    data: {
        name: 'taylorsfan',
        job: 'web开发',
        website:'https://baidu.com',
        websiteTag:'<a href="https://baidu.com"></a>'
    },
    methods: {
        greet: function (time) {
            return 'good ' + time + ' ' + this.name + '!';
        }
    }
});

/**
 *el: element 需要获取的元素，一定是html中的根容器元素
 *data: 用于数据的存储
 */