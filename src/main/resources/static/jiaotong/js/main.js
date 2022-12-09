function bindData(){//绑定数据
  //海报数据
  if(getData.Body.bizData.info.hasPage1){
    if(getData.Body.bizData.page1.f4){
      var f4=getData.Body.bizData.page1.f4
      obj.find(".share-box").attr('src', `${doMain}share/${f4}.jpg`)
    }else{
      obj.find(".share-box").attr('src', `${doMain}share/share.jpg`)
    }
  }
  if(isGrantAuth == 1){//判断是否授权
    obj.find(".img-8-7").addClass('on');
    obj.find(".check").css("display",'block')
    obj.find(".img-8-8").removeClass('off');
  }

  obj.find(".page8 .text2 p").eq(getData.Body.bizData.info.accountType).addClass('on').siblings().remove();
  obj.find(".page8 .btn .item").eq(getData.Body.bizData.info.accountType).addClass('on').siblings().remove();
  if(getData.Body.bizData.info.accountType=='1'){
    obj.find(".page8 .btn .item a").attr('href',`${links.more_exciting_url}`)
  }else if(getData.Body.bizData.info.accountType=='2'){
    obj.find(".page8 .btn .item a").attr('href', `${links.create_plot_url}`)
  }else if(getData.Body.bizData.info.accountType=='3'){
    obj.find(".page8 .btn .item a").attr('href', `${links.join_now_url}`)
  }
  obj.find('.img-8-9 a').attr("href", `${links.report_url}`)
  //全年消费
  if(getData.Body.bizData.info.hasPage1) {
    if(getData.Body.bizData.page1.f2>=70){
          obj.find('.page9 .content .text').eq(0).css("display",'block').siblings().remove();
    }else if(getData.Body.bizData.page1.f2<70&&getData.Body.bizData.page1.f2>=50){
          obj.find('.page9 .content .text').eq(1).css("display",'block').siblings().remove();
    }else if(getData.Body.bizData.page1.f2<50&&getData.Body.bizData.page1.f2>=20){
          obj.find('.page9 .content .text').eq(2).css("display",'block').siblings().remove();
    }else{
          obj.find('.page9 .content .text').eq(3).css("display",'block').siblings().remove();
    }
    if(getData.Body.bizData.page1.f3==0||getData.Body.bizData.page1.f3==''){
      obj.find('.page9').find('.page9-f3').remove();
        obj.find('.page9 .msg').remove();
    }
    obj.find('.page9 .content .f1').text(getData.Body.bizData.page1.f1);
    obj.find('.page9 .content .f2').text(getData.Body.bizData.page1.f2);
    obj.find('.page9 .content .f3').text(getData.Body.bizData.page1.f3);
           
  }else{
    obj.find(".page9").parents(".swiper-slide").remove();
  }
  //全年消费
  // 分期数据
  if(getData.Body.bizData.info.hasPage2&&getData.Body.bizData.page2!=''&&getData.Body.bizData.page2.f1!=''&&getData.Body.bizData.page2.f1!=0){
    obj.find('.page18 .f1').text(getData.Body.bizData.page2.f1);
    if(getData.Body.bizData.page2.f2==''){
      obj.find('.page18 .text p').eq(2).remove();
    }else{
      let keyArr = Object.keys(getData.Body.bizData.page2)
      var ii = 0;
      for (const key in getData.Body.bizData.page2) {
        if(getData.Body.bizData.page2[key] != '') {
          if(ii > 4) continue;
          if(ii != 0 && keyArr.length - 1 == 1) {
            obj.find('.page18 .f2').text(getData.Body.bizData.page2.f2);		  
          }else if(ii != 0) {
            if(ii > 3) {
            obj.find('.page18 .text p').eq(2).children(":last-child").before('<span class="ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="2.5s"><em>'+'......'+'</em></span>'); 				
            }else {
            obj.find('.page18 .text p').eq(2).children(":last-child").before('<span class="ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="2.5s"><em>'+getData.Body.bizData.page2[key]+'</em></span>'); 	  
            }
          }
          ii++;
        }
        
      }
    }
    obj.find('.page18 span').each(function(i,item){
      obj.find('.page18 span').eq(i).attr('swiper-animate-delay',(0.5*(i+1))+"s");
    })
  }else{
    obj.find(".page18").parents(".swiper-slide").remove();
  }
  // 分期数据
  //外卖数据
  if(getData.Body.bizData.info.hasPage3){
    let {f1, f2, f3, f4, f5} = getData.Body.bizData.page3
      
      obj.find('.page11 .f1').text(f1);
      obj.find('.page11 .f2').text(f2);
      obj.find('.page11  .f3').text(f3);
      obj.find('.page11 .f4').text(f4);
      obj.find('.page11 .f5').text(f5);
    
    if(f1 > 1000 || f1 == '' || f1 == undefined) f1 = 0; //餐饮总消费次数大于1000 置0
    if(f2 > 300000 || f2 == '' || f2 == undefined) f2 = 0; //餐饮累计消费金额大于30W 置0
    if(f3 > 50000 || f3 < 200 || f3 == '' || f3 == undefined) f3 = 0; // f3 大于5W 或 小于200 置0
    if(!f4 || f4 == '' || f4 == undefined) f4 = 0;
    if(!f5 || f5 == '' || f5 == undefined) f5 = 0;
    if(f5) {
      // 时间筛选，不再 21：00 至 03：00 之间的不显示 最晚...
      let hour = parseInt(f5.slice(f5.length-3, -1)); //小时
      if(hour < 21 && hour >= 3) {
        obj.find('.last-time').remove()
        obj.find('.last-time2').remove()
          obj.find('.page11 .dot').text("。")
      }
    }
      if(f1 > 0 && f4 > 0){//日常餐饮+外卖消费
        obj.find('.page11 .text').eq(0).css("display",'block').siblings('.text').remove();
        if(f4 > 1000) {
          obj.find('.page11 .text p').eq(2).remove();
        }
        if(f3 == 0){
          obj.find('.page11 .text p').eq(1).remove();
        }
        if(f2 == 0){
          obj.find('.page11 .text p').eq(0).remove();
        }
        if(!f5) {
          obj.find('.last-time').remove()
          obj.find('.last-time2').remove()
          obj.find('.page11 .dot').text("。")
        }
      }else if(f1 > 0 && f4 == 0){//仅日常餐饮消费	
        obj.find('.page11 .text').eq(1).css("display",'block').siblings('.text').remove();
        if(f2 == 0) {
          obj.find('.page11 .text p').eq(0).remove();
        }
        if(f3 == 0) {
          obj.find('.page11 .text p').eq(1).remove();
        }
        if(f2 == 0 && f3 == 0) {
          obj.find(".page11").parents(".swiper-slide").remove();
        }

        // if(f3 || f2) {
        //   obj.find('.page11 .text').eq(1).css("display",'block').siblings('.text').remove();
        // }else {
        //   obj.find(".page11").parents(".swiper-slide").remove();
        // }
        // if(f3 == 0){
        //   obj.find('.page11 .text p').eq(0).remove();
        // }
        // if(f2 == 0){
        //   obj.find('.page11 .text p').eq(0).remove();
        // }
      }else if(f1 == 0){//仅外卖
        obj.find('.page11 .text').eq(2).css("display",'block').siblings('.text').remove();
        // 外卖次数大于1000或为零不展示此页
        if(f4 == 0 || f4 > 1000){
          obj.find(".page11").parents(".swiper-slide").remove();
        } else if(f4 > 0 && f5 == 0){
          obj.find('.page11 .last-time2').remove();
          obj.find('.page11 .dot2').text("。")
          // obj.find(".page11").parents(".swiper-slide").remove();
        }
      }      
      obj.find('.page11 span').each(function(i,item){
        obj.find('.page11 span').eq(i).attr('swiper-animate-delay',(0.5*(i+1))+"s");
      })
  }else{
    obj.find(".page11").parents(".swiper-slide").remove();
  }
  //外卖数据
  //生活消费数据
  if(getData.Body.bizData.info.hasPage4){
    obj.find('.page2 .f1').text(getData.Body.bizData.page4.f1);
    // 超过50W也不显示
    if(getData.Body.bizData.page4.f1==0||getData.Body.bizData.page4.f1=='' || getData.Body.bizData.page4.f1 >500000){
      obj.find(".page2").parents(".swiper-slide").remove();
    }
  }else{
    obj.find(".page2").parents(".swiper-slide").remove();
  }
  //生活消费数据
  //买单吧登录数据
  if(getData.Body.bizData.info.hasPage5){
    obj.find('.page19 .f1').text(getData.Body.bizData.page5.f1);
    obj.find('.page19 .f2').text(getData.Body.bizData.page5.f2);
    obj.find('.page19 .f3').text(getData.Body.bizData.page5.f3);
    if(getData.Body.bizData.page5.f1>=3){ //登录次数大于3
      obj.find('.page19  .text').eq(0).css("display",'block').siblings('.text').remove();
      if(getData.Body.bizData.page5.f1==0||getData.Body.bizData.page5.f1==''){
        obj.find('.page19 .text p').eq(2).find('span').eq(0).remove();
      }
      if((getData.Body.bizData.page5.f1==0||getData.Body.bizData.page5.f1=='')&&(getData.Body.bizData.page5.f2==0||getData.Body.bizData.page5.f2=='')&&(getData.Body.bizData.page5.f3>0||getData.Body.bizData.page5.f3=='')){
        obj.find('.page19 .text p').eq(2).remove();
      }else if((getData.Body.bizData.page5.f2==0||getData.Body.bizData.page5.f2=='')&&(getData.Body.bizData.page5.f3==0||getData.Body.bizData.page5.f3=='')){
        obj.find('.page19 .text p').eq(2).find('span').eq(obj.find('.page19 .text p').eq(2).find('span').length-1).remove();
      }else if(getData.Body.bizData.page5.f2==0||getData.Body.bizData.page5.f2==''){
        
        obj.find('.page19 .text p').eq(2).find('span').eq(obj.find('.page19 .text p').eq(2).find('span').length-1).html('我这一年在买单吧使用了<em>'+getData.Body.bizData.page5.f3+'</em>元红包。');
      }else if(getData.Body.bizData.page5.f3==0||getData.Body.bizData.page5.f3==''){
        obj.find('.page19 .text p').eq(2).find('span').eq(obj.find('.page19 .text p').eq(2).find('span').length-1).html('我这一年在买单吧使用了<em>'+getData.Body.bizData.page5.f2+'</em>元刷卡金。');
      }
    }else if(getData.Body.bizData.page5.f1>0){
        obj.find('.page19  .text').eq(1).css("display",'block').siblings('.text').remove();
    }else{
      obj.find(".page19").parents(".swiper-slide").remove();
    }

    obj.find('.page19 span').each(function(i,item){
      obj.find('.page19 span').eq(i).attr('swiper-animate-delay',(0.5*(i+1))+"s");
    })
  }else{
    obj.find(".page19").parents(".swiper-slide").remove();
  }
  //买单吧登录数据
  //活动参与情况
  if(getData.Body.bizData.info.hasPage6){
    if(getData.Body.bizData.page6.f1>0||getData.Body.bizData.page6.f3>0||getData.Body.bizData.page6.f4>0||getData.Body.bizData.page6.f5>0){
      if(getData.Body.bizData.page6.f1==0||getData.Body.bizData.page6.f1==''||getData.Body.bizData.page6.f2==''||getData.Body.bizData.page6.f2==''){
        obj.find('.page13 .text').find('.page13-f1').remove();
      }
      if(getData.Body.bizData.page6.f3==0||getData.Body.bizData.page6.f3==''){
        obj.find('.page13 .text').find('.page13-f3').remove();
      }
      if(getData.Body.bizData.page6.f4==0||getData.Body.bizData.page6.f4==''){
        obj.find('.page13 .text').find('.page13-f4').remove();
      }
      if(getData.Body.bizData.page6.f5==0||getData.Body.bizData.page6.f5==''){
        obj.find('.page13 .text').find('.page13-f5').remove();
      }
      obj.find(".page20").parents(".swiper-slide").remove();
      obj.find('.page13 .f1').text(getData.Body.bizData.page6.f1);
      obj.find('.page13 .f2').text(getData.Body.bizData.page6.f2);
      obj.find('.page13 .f3').text(getData.Body.bizData.page6.f3);
      obj.find('.page13 .f4').text(getData.Body.bizData.page6.f4);
      obj.find('.page13 .f5').text(getData.Body.bizData.page6.f5);
      obj.find('.page13 span').each(function(i,item){
        obj.find('.page13 span').eq(i).attr('swiper-animate-delay',(0.5*(i+1))+"s");
      })
    }else{
      obj.find(".page13").parents(".swiper-slide").remove();
    }
  }else{
    obj.find(".page13").parents(".swiper-slide").remove();
    obj.find(".page20").parents(".swiper-slide").remove();
  }

  //活动参与情况
  imgs=obj.find('img');
  imgLen=imgs.length;
  loadImg(0);
}

function init(){
  var swiper = new Swiper(".mySwiper", {
      direction: 'vertical',
      initialSlide:'0',
        on:{
        init: function(){
          this.disable()
          swiperAnimateCache(this); //隐藏动画元素 
          swiperAnimate(this); //初始化完成开始动画
          if(this.slides.eq(this.activeIndex).find('.page').hasClass('page8')){
              setTimeout(function(){
                  $('.img-8-6').find('img').eq(1).css('display',"block").siblings('img').css("display",'none');
              },($('.page8 .text2 span').length+1)*500)
              $(".mp3").css("display",'block');
              this.disable()
          }
          $('.load').css("display",'none')
          $(".mp3").css('display','block');
        },
        slideChangeTransitionStart: function(){
          alert(this.activeIndex);
          swiper.disable()
        },
        slideChangeTransitionEnd: function(){ 
          swiper.enable()
          swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
          clearTimeout(loadt2)
          clearTimeout(loadt)
          $('.page18 .img').removeClass('on')

           $('.img-8-6').find('img').eq(0).css('display',"block").siblings('img').css("display",'none');
          if(this.slides.eq(this.activeIndex).find('.page').hasClass('page8')){
              setTimeout(function(){
                  $('.img-8-6').find('img').eq(1).css('display',"block").siblings('img').css("display",'none');
              },($('.page8 .text2 span').length+1)*500)
              this.disable()
          }
          if(this.slides.eq(this.activeIndex).find('.page').hasClass('page9')){
            $('.img-9-1').find('img').attr('src',`${doMain}images/bg-9.gif`);
			swiper.allowSlidePrev = false
          }else {
			swiper.allowSlidePrev = true  
		  }
          if(this.slides.eq(this.activeIndex).find('.page').hasClass('page18')){
                $('.page18 .img').addClass('on')
          }
          if(this.slides.eq(this.activeIndex).find('.page').hasClass('page17')){
              $(".mp3").css("display",'block');
              loadt2=setTimeout(function(){
                  if($(".load2").parents(".swiper-slide").hasClass('swiper-slide-active')){
                      $(".load2").css("display",'none')
                      $(".mp3").css('display','none');
                  }else{
                      $(".load2").css("display",'flex')
                  }
              },3500)
          }else{
            $(".load2").css("display",'flex')
            $(".mp3").css("display",'block');
          }

        }
      } 
    });

  $(".img-8-7").click(function(){
      if($(this).hasClass('on')){
          $(this).removeClass('on')
          $('.img-8-8').addClass('off')
          $('.check').css("display","none")
      }else{
          $(this).addClass('on')
          $('.img-8-8').removeClass('off')
          $('.check').css("display","block")
      }
  })
  $(".mask img").click(function(){
      $(".mask").css("display",'none')
  })

  $('.agree').click(function(){
      if(!$(this).hasClass('off')){
        if($(".img-8-7").hasClass('on')){//####判断没有保存授权
            $.ajax({ 
            type : "get", 
            url : `${doMainUrl}/grantAuth`, //#白名单用户点击立刻揭晓按钮 用于后端保存用户授权信息,加上对应代码注释即可
            data : {
              oprType: 'I',
            }, 
            async : false, 
            jsonp: "callback",
            dataType:'json',
            success : function(res){ 
              if(res.returnCode == '000000') {
                  swiper.enable();
                  swiper.slideNext();
              }else {

              }
            },
            fail: function(err) {
              console.log(err)
            }
          })
        }
      }

  })

  $(".share-btn").click(function(){
      $(".mask").css("display",'block');
      $(".mp3").css("display",'none');
  })
  var isplay=false
  $(".mp3").click(function(){
    if($("#play").get(0).paused){
      $("#play").get(0).play();
      isplay=true
      $('.mp3').addClass("on")
    }else{
      isplay=false
      $("#play").get(0).pause();
      $('.mp3').removeClass("on")
    }
  })
  let statusBeforeHide = true; // 记录页面切换到后台时音乐的播放状态，如果用户进行了音乐关闭操作，则将该状态置为false
  // document.hidden boolean 页面当前是否不可见
  let hiddenProperty = ('hidden' in document) ? 'hidden'
          : ('webkitHidden' in document) ? 'webkitHidden'
              : ('mozHidden' in document) ? 'mozHidden' : null;
  if (hiddenProperty) {
      let visibilityChangeEvent = hiddenProperty.replace(/hidden/i, 'visibilitychange');
      let onVisibilityChange = () => {
          console.log('visibilityChange');
          changePlay();
      };
      document.addEventListener(visibilityChangeEvent, onVisibilityChange);
  } else {
      console.log("This demo requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.");
  }

  // 更改音乐播放状态
  function changePlay() {
      if (document[hiddenProperty]) {
          // 页面隐藏
          if (statusBeforeHide) {
              $("#play").get(0).pause(); // 伪代码，音乐暂停，但不改变statusBeforeHide
          }
      } else {
          // 页面显示
          if (statusBeforeHide&&isplay) {
              $("#play").get(0).play();// 伪代码，如果statusBeforeHide是true,音乐继续播放
          }
      }
  }   
}

function loadImg(index){
  var img=new Image(),u=imgs[index].getAttribute('src');
  img.onload=function(){
    if(index>=imgLen-1){
      $(".speed em").css('width','100%');
      $(".speed-text").text('100%');
      setTimeout(function(){
        $('body').append(obj);

        init()
      },500)
      
    }else{
      index=index+1
      // console.log(index)
      $(".speed em").css('width',Math.ceil(index/imgLen*100)+'%');
      $(".speed-text").text(Math.ceil(index/imgLen*100) +'%');
      setTimeout(function(){
        loadImg(index)
      },50)
      
      
    }
  };
  img.src=u;
}