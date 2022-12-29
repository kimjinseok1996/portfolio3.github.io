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
      text: "지자체 행사용 홈페이지 <br> - 메인화면 UI 개발 작업 <br> - 슬라이드 기능 개발",
      stack: "HTML, CSS, JS, JQUERY, BOOTSTRAP",
      date: "2021-06 ~ 2021-07",
      per: 60,
    },
    {
      name: "슈퍼카밸런스 게임",
      img: "img/works/suragame.PNG",
      text: "성향에 따라 알맞은 슈퍼카가 매칭되는 밸런스 게임. <br> - css animation을 사용하여 사용자 입력에 따라 슬라이드, 모양이 변경되는 등 인터렉티브한 동작 기능 구현 <br> - 유저가 선택한 답변들을 sessionStorage에 저장하여 결과페이지에 적용",
      stack: "HTML, CSS, JS, JQUERY, BOOTSTRAP",
      date: "2021-08 ~ 2021-09",
      per: 100,
    },
    {
      name: "쇼핑몰 리닷",
      img: "img/works/lidot.PNG",
      text: "욕실용품 쇼핑몰 홈페이지 <br> - 아임포트, 이니시스모듈을 사용하여 구매기능을 구현. <br>- sns로그인 라이브러리 사용하여 kakao, naver 로그인 구현 <br>- 주문목록, 장바구니 DB 테이블 작업 <br>- ajax 통신 활용하여 장바구니, 주문목록 DB 테이블 과 API 연동 및  MySql 작성 <br>- 상품등록, 관리, 재고관리등 관리자페이지 기능 구현",
      stack: "HTML, CSS, JS, JQUERY, BOOTSTRAP, NODE.JS, AJAX, MYSQL",
      date: "2021-08 ~",
      per: 70,
    },
    {
      name: "차량 유지ˑ관리 제공 시스템",
      img: "img/works/abys.jpg",
      text: "차량 시공관리 시스템, 차량 주차장 관리 시스템 <br>- sessionStorage에 로그인 정보 저장하여 로그인 기능 구현 <br>- 차량 관리 로직 연구, 개발 <br>- JSON데이터 조작을 통하여 건물 층별 주차위치 표시기능 작업 <br>- 차량등록, 리스트 DB 테이블 작성 <br>- ajax통신으로 차량등록, 리스트화 DB 테이블 과 연계 <br>",
      stack: "HTML, CSS, JS, JQUERY, BOOTSTRAP, NODE.JS, AJAX, MYSQL",
      date: "2022-10 ~ 2022-11",
      per: 70,
    },
    {
      name: "학생 교육관리 시스템",
      img: "img/works/yg.jpg",
      text: "공무원학생들을 위한 교육관리 시스템 <br>- zustand를 사용하여 로그인정보 상태 관리 <br>- 학생들이 시험을 치르기위한 시험 스케쥴링 시스템 로직  개발 <br>- REST API 및 MySql 쿼리 작성 <br>- 공용으로 쓰이는 모달 컴포넌트 작성, 리팩터링 <br>- 학생들 시험 결과 Json 정보를 이용하여 통계 도출, 통계화면 개발",
      stack: "REACT, ZUSTAND, NODE.JS, AXIOS, MYSQL",
      date: "2022-05 ~ 2022-12",
      per: 80,
    },
  ];

  $.each(projects, function (i, v) {
    let str = `<div class="">
                <div class="p-2 d-flex justify-content-center cont-wrap align-items-center">
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
