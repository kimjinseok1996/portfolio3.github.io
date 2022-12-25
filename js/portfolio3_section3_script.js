$(function () {
  var workslistnum = 0;
  var winwidth = $(window).width();
  //var worksboxindex = $(".worksbox").index();
  $(".worksbox").eq(0).addClass("workson");
  $(".worksscreenbox").eq(0).addClass("worksscreenon");
  $(".worksscreenboxtext p a").eq(0).addClass("linkon");
  $(window).scroll(function () {
    windowtop = $(window).scrollTop();
    if (windowtop >= $("#section3").offset().top - 300) {
      $(".workstext_text").addClass("workstexton");

      $("#works_screenbox").addClass("worksscreenon");
      $("#workslist").addClass("worksliston");

      $("#workslist2").addClass("worksliston2");
    }

    if (winwidth <= 880) {
      $("#works_screenbox").removeClass("worksscreenon");
      $("#workslist").removeClass("worksliston");

      $("#workslist").addClass("worksliston880");
      $("#works_screenbox").addClass("worksscreenon880");
      $("#works_movebox").addClass("works_movebox880");

      $(".worksbox").eq(0).addClass("workson880");
    }
  });

  $("#workslistdownbtn").on("click", function () {
    workslistnum++;
    $("#workslistupbtn").css({ display: "block" });
    $("#works_movebox").animate({ top: "-=300px" }, 700);
    $(".worksbox").removeClass("workson");
    $(".worksbox").eq(workslistnum).addClass("workson");
    $(".worksscreenbox").removeClass("worksscreenon");
    $(".worksscreenbox").eq(workslistnum).addClass("worksscreenon");
    $(".worksscreenboxtext p a").removeClass("linkon");
    $(".worksscreenboxtext p a").eq(workslistnum).addClass("linkon");

    if (workslistnum == 7) {
      $("#workslistdownbtn").css({ display: "none" });
    }

    if (winwidth <= 880) {
      $(".worksbox").removeClass("workson880");
      $(".worksbox").eq(workslistnum).addClass("workson880");
    }
  });
  $("#workslistupbtn").on("click", function () {
    workslistnum--;
    $("#workslistdownbtn").css({ display: "block" });
    $("#works_movebox").animate({ top: "+=300px" }, 700);
    $(".worksbox").removeClass("workson");
    $(".worksbox").eq(workslistnum).addClass("workson");
    $(".worksscreenbox").removeClass("worksscreenon");
    $(".worksscreenbox").eq(workslistnum).addClass("worksscreenon");
    $(".worksscreenboxtext p a").removeClass("linkon");
    $(".worksscreenboxtext p a").eq(workslistnum).addClass("linkon");

    if (workslistnum == 0) {
      $("#workslistupbtn").css({ display: "none" });
    }

    if (winwidth <= 880) {
      $(".worksbox").removeClass("workson880");
      $(".worksbox").eq(workslistnum).addClass("workson880");
    }
  });

  //var worksboxindex = 0;
  var worksboxmovepos = 0;
  $(".worksbox").on("click", function () {
    workslistnum = $(this).index();
    worksboxmovepos = workslistnum * -300 + 150 + "px";
    $("#works_movebox").stop().animate({ top: worksboxmovepos }, 700);

    $(".worksbox").removeClass("workson");
    $(this).addClass("workson");
    $(".worksscreenbox").removeClass("worksscreenon");
    $(".worksscreenbox").eq(workslistnum).addClass("worksscreenon");
    $(".worksscreenboxtext p a").removeClass("linkon");
    $(".worksscreenboxtext p a").eq(workslistnum).addClass("linkon");

    $(".worksbox")
      .first()
      .on("click", function () {
        $("#workslistupbtn").css({ display: "none" });
      });
    $(".worksbox")
      .last()
      .on("click", function () {
        $("#workslistdownbtn").css({ display: "none" });
      });
    if (winwidth <= 880) {
      $(".worksbox").removeClass("workson880");
      $(this).addClass("workson880");
    }
  });
  $(".worksbox")
    .not($(".worksbox").eq(0))
    .on("click", function () {
      $("#workslistupbtn").css({ display: "block" });
    });
  $(".worksbox")
    .not($(".worksbox").last())
    .on("click", function () {
      $("#workslistdownbtn").css({ display: "block" });
    });

  loadWorks();
});

function loadWorks() {
  let projects = [
    {
      name: "남해마늘한우 축제",
      img: "img/works/cow.PNG",
      text: "지자체 행사용 홈페이지입니다.",
      stack: "HTML, CSS, JS, JQUERY",
      date: "2021-06 ~ 2021-07",
      per: 60,
    },
    {
      name: "슈퍼카밸런스 게임",
      img: "img/works/suragame.PNG",
      text: "성향에 따라 알맞은 슈퍼카가 매칭되는 밸런스 게임입니다. 사용자 반응에따라서 인터렉티브하게 동작합니다.",
      stack: "HTML, CSS, JS, JQUERY",
      date: "2021-08 ~ 2021-09",
      per: 100,
    },
    {
      name: "쇼핑몰",
      img: "img/works/lidot.PNG",
      text: "욕실용품 쇼핑몰 홈페이지 입니다. <br> SNS로그인, 아임포트모듈을 이용한 결제 로직, 관리자전용 관리 페이지, 재고관리 등 쇼핑몰에 필요한 기능을 구현하였습니다.",
      stack: "HTML, CSS, JS, JQUERY",
      date: "2021-08 ~",
      per: 70,
    },
    {
      name: "차량 유지ˑ관리 제공 시스템",
      img: "img/works/abys.jpg",
      text: "차량 시공관리 시스템, 차량 주차장 관리 시스템을 구현하였습니다.",
      stack: "HTML, CSS, JS, JQUERY",
      date: "2022-10 ~ 2022-11",
      per: 70,
    },
    {
      name: "학생 교육관리 시스템",
      img: "img/works/yg.jpg",
      text: "공무원학생들을 위한 교육관리, 시험스케쥴링, 시험응시, 통계 등 전반적인 온라인 교육 시스템을 구현하였습니다.",
      stack: "HTML, CSS, JS, JQUERY, REACT",
      date: "2022-05 ~ 2022-12",
      per: 80,
    },
  ];

  $.each(projects, function (i, v) {
    let str = `<div class="">
                <div class="p-2 d-flex justify-content-center cont-wrap">
                  <img src="${v.img}" alt="" class="me-md-4 md-2" />
                  <table class="table text-center">
                    <tr>
                      <th>프로젝트 명</th>
                      <td>${v.name}</td>
                    </tr>              
                    <tr>
                      <th>설명</th>
                      <td>${v.text}</td>
                    </tr>
                    <tr>
                      <th>기술스택</th>
                      <td>${v.stack}</td>
                    </tr>
                    <tr>
                      <th>기간</th>
                      <td>${v.date}</td>
                    </tr>
                    <tr>
                      <th>기여도</th>
                      <td>${v.per}%</td>
                    </tr>
                  </table>
                </div>
              </div>`;
    $("#works-slider-contents").append(str);

    let nav_str = `<div class="p-1 p-md-3">
                        <div
                          class="bg_setting"
                          style="background-image: url('${v.img}')"
                        ></div>
                      </div>`;
    $("#works-slider-nav").append(nav_str);
  });

  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    fade: true,
    infinite: false,
    asNavFor: ".slider-nav",
  });
  $(".slider-nav").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    arrows: false,
    centerMode: true,
    infinite: false,
    focusOnSelect: true,
    responsive: [
      // 반응형 웹 구현 옵션
      {
        breakpoint: 765, //화면 사이즈 960px
        settings: {
          //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
          slidesToShow: 2,
        },
      },
    ],
  });
}
