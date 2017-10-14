// 10.11
$(document).ready(function() {
    // 收起展开效果
    $(".slide-box").click(function() {
        $("#page-body-wrapper").slideToggle("slow");
        $('#slide-up').toggle();
        $('#slide-down').toggle();
    });

  // 编辑，插入的LI,增加按钮，按钮索引，减去按钮。
    var editor, obj, plus, btn_index, minus;
    // 存放人员姓名数组
    var arr = [];



    /* *************************************  点击  + 弹出框 ************************/
    $(".add-btn").on("click", function(e) {
        //获取点击按钮对象
        plus = $(e.target);
        e.stopPropagation();

        //  获取点击按钮索引值
        btn_index = $(".add-btn").index(this);
          // 根据按钮对象索引值   弹出对应框
        switch (btn_index) {
            case 0:
                $("#editor").fadeToggle(300);

                //alert(btn_index);
                break;
            case 1:
                $("#groupEdition").fadeToggle(300);
                // alert(btn_index);
                break;
            case 2:
                $("#reporter").fadeToggle(300);
                //   alert(btn_index);
                break;
            case 3:
                $("#caller").fadeToggle(300);
                //alert(btn_index);
                break;


        }
        // 弹窗内编辑名称放入数组
        $(".editor-list").each(function() {
            arr.push($.trim($(this).text()));
        });
        //   console.log(arr);
    });
 /* *************************************  点击  + 弹出框 ************************/

/*****************************************   点击查看   ***********************************************/
    /*   点击 查看 弹出框 */
    //preview-btn
    $(".preview-btn").on("click", function(e) {
        e.stopPropagation();
        //获取点击按钮
        plus = $(e.target);
        // 判断点击按钮  弹出对应框
        btn_index = $(".preview-btn").index(this); //点击按钮索引值
        //改弹窗名称
        switch (btn_index) {
            case 0:
                $("#pageScore").fadeToggle(300);
                alert(btn_index);
                break;
            case 1:
                $("#articleScore").fadeToggle(300);
                alert(btn_index);
                break;
        }
        // 弹窗内编辑名称放入数组
        $(".editor-list").each(function() {
            arr.push($.trim($(this).text()));
        });
        //   console.log(arr);
    });
    //    2.点击选择编辑并插入表格
    $(".editor-list").on("click", function(e) {
        e.stopPropagation();
        //高亮被选择编辑
        // $(e.target).addClass("active").siblings().removeClass("active");
        //  $(e.target).addClass("active").off("click");
        if ($(e.target).hasClass("active")) {
            e.preventDefault();
           // return false;
        } else {
            $(e.target).addClass("active");
        }
        //获取编辑名字
        editor = $.trim($(e.target).text());
        //console.log(editor);
        //拼接到字符串
        obj = '<li class=\"person-choosed-item\"><span>' + editor + '</span><input type=\"text\" name=\"\" value=\"98\"><i class=\"icon iconfont icon-shanchu11\"></i></li>';
        //console.log(obj);
        //  插入到对应表格
        plus.closest('.add-btn-box').next().find('ul').append(obj).find('.icon-shanchu11').click(delLi).end();
    });
/*****************************************   点击查看   ***********************************************/

    /***********************************************  关闭弹窗   *******************************/
    /*****************  点击X关闭弹窗  ***********/
    $(".icon-chuyidong").on("click", function(e) {
        // console.log('.icon-chuyidong');
        //获取点击按钮对象
        plus = $(e.target);
        e.stopPropagation();
        // 判断点击按钮  弹出对应框
        // 获取点击按钮索引值
        btn_index = $(".icon-chuyidong").index(this);
        // 根据按钮对象索引值   关闭对应框
        switch (btn_index) {
            case 0:
                $("#editor").fadeToggle(300);
                break;
            case 1:
                $("#groupEdition").fadeToggle(300);
                break;
            case 2:
                $("#reporter").fadeToggle(300);
                break;
            case 3:
                $("#caller").fadeToggle(300);
                break;
            case 4:
                $("#pageScore").fadeToggle(300);
                break;
            case 5:
                $("#articleScore").fadeToggle(300);
                break;
        }
    });
    /************* 点击其他地方关闭弹窗  ***************/
    $(".dialog").on("click", function(e) {
        //弹窗的坐标轴
        //eq只对显示的元素有效
        //这里根据eq(btn_index)索引值 获取对应的弹窗
        var popX = $(".alert_dialog_content").eq(btn_index).offset().left;
        var popY = $(".alert_dialog_content").eq(btn_index).offset().top;
        //弹窗的宽度 高度
        var popWidth = $(".alert_dialog_content").eq(btn_index).width();
        var popHeight = $(".alert_dialog_content").eq(btn_index).height();
        if (!((e.clientX > popX) && (e.clientX < (popX + popWidth)) && (e.clientY > popY) && (e.clientY < (popY + popHeight)))) {
            btn_index = $(".dialog").index(this); //点击索引值



            switch (btn_index) {
                case 0:
                    $("#editor").fadeToggle(300);
                   $("#pageScore").fadeOut(300);
                     //alert(btn_index);
                    break;
                case 1:
                    $("#groupEdition").fadeToggle(300);
                    $("#articleScore").fadeOut(300);
                    //  alert(btn_index);
                    break;
                case 2:
                    $("#reporter").fadeToggle(300);
                    break;
                case 3:
                    $("#caller").fadeToggle(300);
                    break;
                    //查看 版面得分
                case 4:
                //   $("#pageScore").fadeToggle(300);
                    break;
                    //查看 文章得分
                case 5:
                //   $("#articleScore").fadeToggle(300);
                    break;
            }
        }
    });
  /***********************************************  关闭弹窗   *******************************/





        /* *******************************  点击 —— 删除    ************************/
    //删除
    $('.icon-shanchu11').click(delLi);
        //删除方法
    function delLi(e) {
        e.stopPropagation();
        //获取点击按钮
        minus = $(e.target);
        //点灭弹框内对应内容
        //遍历弹窗内文本
        $. each($(".clx").eq(btn_index).find(".editor-list"), function(i) {














            if (arr[i] == minus.parent().find("span").text()) {
                $(this).removeClass("active");
            }
        });
        //删除表格对应内容
        minus.parent().remove();
    }
       /* *******************************  点击 —— 删除    ************************/
});
