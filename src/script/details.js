;
(function ($) {
    class Details {
        constructor() {
            this.sid = location.search.substring(1).split('=')[1];//获取的sid
            // console.log(this.sid);
            this.spic = $('#spic');//小图
            this.spic = $('#spic');//小图
            this.bpic = $('#bpic');//大图
            this.sf = $('#sf');//小放
            this.bf = $('#bf');//大放
            this.list = $('#list');//小图列表
            this.list_ul = $('#list ul');//小图列表中ul
            this.count = $('#count');//购物车里面的数字
        }
        init(){
         $.ajax({
             url:'http://10.31.152.18/DNF/php/getsid.php',
             data:{
                 sid:this .sid
             },
             dataType:'json'
         }).done((detailsdata)=>{
            $('#spic img').attr('src', detailsdata.picurl);
            $('.loadtitle').html(detailsdata.title);
            $('.loadpcp').html(detailsdata.price);
            $('.miaoshu').html(detailsdata.description);
            //小图
            let piclist=detailsdata.urls.split(',');//数组
            let $strhtml='';
            $.each(piclist,function(index,value){
                $strhtml+=`
                <li><img src="${value}"></li>
                `
            });
            this.list_ul.html($strhtml)
         });
        }
    }
    new Details().init();
})(jQuery);