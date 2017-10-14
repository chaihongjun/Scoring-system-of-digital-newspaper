// 10.11
$(document).ready(function() {
    // 收起展开效果
    $(".slide-box").click(function() {
        $("#page-body-wrapper").slideToggle("slow");
        $('#slide-up').toggle();
        $('#slide-down').toggle();
    });
    var
        popX, //鼠标坐标X
        popY,  //鼠标坐标Y
        popWidth,   //弹窗的宽度
        popHeight,   //弹窗的高度
        editor, //插入的编辑名字
        dialog_index,// 弹窗索引
        person, //弹窗内编辑姓名
        obj, //插入的Li对象
        plus, // +  按钮 对象
        plus_index, // +  按钮 对象 索引
        preview, // 查看  按钮 对象
        preview_index, //查看按钮索引
        articleTitle_index, //文章标题索引
        minus, //  -  按钮对象
        minus_index, //  - 按钮索引
        close, //  X  按钮对象
        close_index; //  X  按钮对象索引
    var arr = []; // 存放人员姓名数组
    /* *************************************  点击  + 弹出框   ************************/
    $(".add-btn").on("click", function(e) {
        e.stopPropagation();
        //获取    +     按钮对象
        plus = $(this);
        //  获取   +   对象 索引值
        plus_index = $(".add-btn").index(this);
        // 根据按钮对象索引值   弹出对应框
        switch (plus_index) {
            case 0: // 弹出   添加责编
                $("#editor").fadeIn(300);
                break;
            case 1: // 弹出   添加组版
                $("#groupEdition").fadeIn(300);
                break;
            case 2: // 弹出   添加记者
                $("#reporter").fadeIn(300);
                break;
            case 3: // 弹出   添加通讯员
                $("#caller").fadeIn(300);
                break;
        }
        // 弹窗内编辑名称放入数组
        $(".editor-list").each(function() {
            arr.push($.trim($(this).text()));
        });
        //   console.log(arr);
    });
    /***********************           点击添加编辑          ***************************************/
    $(".editor-list").on("click", function(e) {
        e.stopPropagation();
        //高亮被选择编辑
        //如果已经被选中了，则点击之后取消被选中 并删除Li
        if ($(this).hasClass("active")) { //editor-list
            //取消选中
            $(this).removeClass("active"); //editor-list
            //  删除对应的Li
            //点击按钮的文本
            person = $.trim($(this).text()); //editor-list
            if ($(this).closest("#editor").length > 0) { //添加编辑弹出框
                $.each($(".editor-group>li"), function() {
                    if ($.trim($(this).find("span").text()) == person) { //插入框 Li
                        $(this).remove();
                    }
                });
            } else if ($(this).closest("#groupEdition").length > 0) {
                $.each($(".layout-group>li"), function() {
                    if ($.trim($(this).find("span").text()) == person) {
                        $(this).remove();
                    }
                });
            } else if ($(this).closest("#reporter").length > 0) {
                $.each($(".reporter-group>li"), function() {
                    if ($.trim($(this).find("span").text()) == person) {
                        $(this).remove();
                    }
                });
            } else if ($(this).closest("#caller").length > 0) {
                $.each($(".caller-group>li"), function() {
                    if ($.trim($(this).find("span").text()) == person) {
                        $(this).remove();
                    }
                });
            }
        } else {
            //没有被选中的，点亮
            $(this).addClass("active");
            //获取编辑名字
            editor = $.trim($(this).text());
            //console.log(editor);
            //拼接到字符串
            obj = '<li class=\"person-choosed-item\"><span>' + editor + '</span><input type=\"text\" name=\"\" value=\"98\"><i class=\"icon iconfont icon-shanchu11\"></i></li>';
            //console.log(obj);
            //  插入到对应表格
            plus.closest('.add-btn-box').next().find('ul').append(obj).find('.icon-shanchu11').click(delLi).end();
        }
    });
    /*****************************************   点击查看   ***********************************************/
    /*   点击 查看 弹出框 */
    //preview-btn
    $(".preview-btn").on("click", function(e) {
        e.stopPropagation();
        //获取点击按钮
        preview = $(this);
        // 判断点击按钮  弹出对应框
        preview_index = $(".preview-btn").index(this); //  查看按钮索引值
        // 根据按钮对象索引值   弹出对应框
        switch (preview_index) {
            case 0: //弹出  版面评分
                $("#pageScore").fadeIn(300);
                //  alert(btn_index);
                break;
            case 1: //弹出  文章评分
                $("#articleScore").fadeIn(300);
                //  alert(btn_index);
                break;
        }
    });
    /***********************************************  关闭弹窗   *******************************/
    /*****************  点击X关闭弹窗  ***********/
    $(".icon-chuyidong").on("click", function(e) {
        // console.log('.icon-chuyidong');
        //获取点击按钮对象
        close = $(this);
        e.stopPropagation();
        // 判断点击按钮  弹出对应框
        // 获取点击按钮索引值
        close_index = $(".icon-chuyidong").index(this);
        // 根据按钮对象索引值   关闭对应框
        switch (close_index) {
            case 0: //关闭  责编
                $("#editor").fadeOut(300);
                break;
            case 1: //关闭  组版
                $("#groupEdition").fadeOut(300);
                break;
            case 2: //关闭  记者
                $("#reporter").fadeOut(300);
                break;
            case 3: //关闭  通讯员
                $("#caller").fadeOut(300);
                break;
            case 4: //关闭  版面评分
                $("#pageScore").fadeOut(300);
                break;
            case 5: //关闭  文章评分
                $("#articleScore").fadeOut(300);
                break;
            case 6: //关闭  文章详情
                $("#articleDetails").fadeOut(300);
                break;
        }
    });
    /************* 点击其他地方关闭弹窗  ***************/
    $(".dialog").on("click", function(e) {
        e.stopPropagation();
        //弹窗的坐标轴
        //当前弹窗索引
         dialog_index = $(".dialog").index(this);
        // 查看弹窗
        // if ($(this).not("[style='display:none']").hasClass("view")) {
        //     popX = $(".alert_dialog_content").eq(preview_index).offset().left;
        //     popY = $(".alert_dialog_content").eq(preview_index).offset().top;
        //     popWidth = $(".alert_dialog_content").eq(preview_index).width();
        //     popHeight = $(".alert_dialog_content").eq(preview_index).height();
        // }
        // //添加弹窗
        // else if ($(this).not("[style='display:none']").hasClass("append")) {
        //     //鼠标当前坐标
        //     popX = $(".alert_dialog_content").eq(plus_index).offset().left;
        //     popY = $(".alert_dialog_content").eq(plus_index).offset().top;
        //     //弹窗的宽度 高度
        //     popWidth = $(".alert_dialog_content").eq(plus_index).width();
        //     popHeight = $(".alert_dialog_content").eq(plus_index).height();
        // }
        // //详情弹窗
        // else if ($(this).not("[style='display:none']").hasClass("details")) {
        //     //鼠标当前坐标
        //     popX = $(".alert_dialog_content").eq(articleTitle_index).offset().left;
        //     popY = $(".alert_dialog_content").eq(articleTitle_index).offset().top;
        //     //弹窗的宽度 高度
        //     popWidth = $(".alert_dialog_content").eq(articleTitle_index).width();
        //     popHeight = $(".alert_dialog_content").eq(articleTitle_index).height();
        // }
        //    console.log(popX+"+"+popY+"+"+popWidth+"+"+popHeight);
         popX = $(".alert_dialog_content").eq(dialog_index).offset().left;
            popY = $(".alert_dialog_content").eq(dialog_index).offset().top;
            popWidth = $(".alert_dialog_content").eq(dialog_index).width();
            popHeight = $(".alert_dialog_content").eq(dialog_index).height();
        //鼠标坐标不在弹出框的区域内
        if (!((e.clientX > popX) && (e.clientX < (popX + popWidth)) && (e.clientY > popY) && (e.clientY < (popY + popHeight)))) {
            //获取当前显示的弹窗,关闭
            $(this).not("[style='display:none']").fadeOut(300);
        }
    });
    /* *******************************  点击 减号 删除    ************************/
    //删除
    $('.icon-shanchu11').on("click", delLi);
    //删除方法
    function delLi(e) {
        e.stopPropagation();
        //获取点击按钮
        minus = $(this);
        //如果  点击的"-"的是责编
        if (minus.parent().parent().hasClass("editor-group")) {
            //   alert("editor-group");
            $.each($(".editor-group"), function() {
                //删除插入的Li
                minus.parent().remove();
                $("#editor").find(".editor-list").each(function(evt) {
                    if ($.trim($(this).text()) == minus.parent().find("span").text()) {
                        $(this).removeClass("active");
                    }
                });
            });
        } else if (minus.parent().parent().hasClass("layout-group")) {
            //  alert("layout-group");
            $.each($(".layout-group"), function() {
                minus.parent().remove();
                $("#groupEdition").find(".editor-list").each(function(evt) {
                    if ($.trim($(this).text()) == minus.parent().find("span").text()) {
                        $(this).removeClass("active");
                    }
                });
            });
        } else if (minus.parent().parent().hasClass("reporter-group")) {
            //     alert("reporter-group");
            $.each($(".reporter-group"), function() {
                minus.parent().remove();
                $("#reporter").find(".editor-list").each(function(evt) {
                    if ($.trim($(this).text()) == minus.parent().find("span").text()) {
                        $(this).removeClass("active");
                    }
                });
            });
        } else if (minus.parent().parent().hasClass("caller-group")) {
            //   alert("caller-group");
            $.each($(".caller-group"), function() {
                minus.parent().remove();
                $("#caller").find(".editor-list").each(function(evt) {
                    if ($.trim($(this).text()) == minus.parent().find("span").text()) {
                        $(this).removeClass("active");
                    }
                });
            });
        }
    }
    /***********************************  点击文章标题弹窗详情 **********************/
    $(".article-title").click(function() {
        //文章标题按钮索引
        articleTitle_index = $(".article-title").index(this);
        $("#articleDetails").fadeIn(300);
    });
});
