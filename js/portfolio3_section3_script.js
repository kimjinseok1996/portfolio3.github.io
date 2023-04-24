$(function () {
  loadWorks();
});

$(window).scroll(function () {
  windowtop = $(window).scrollTop();
  if (windowtop >= $("#section3").offset().top - 300) {
    $("#workstext > p").addClass("on");

    $("#workslist").addClass("on");
  }
});

function loadWorks() {
  let projects = [
    {
      name: "남해마늘한우 축제",
      img: "img/works/cow.jpg",
      text: "지자체 행사용 홈페이지 <br> - 메인화면 UI 개발 작업 <br> - 슬라이드 기능 개발",
      stack: "HTML, CSS, JS, JQUERY, BOOTSTRAP",
      date: "2021-06 ~ 2021-07",
      per: 60,
      link: "",
    },
    {
      name: "슈퍼카밸런스 게임",
      img: "img/works/suragame.jpg",
      text: "성향에 따라 알맞은 슈퍼카가 매칭되는 밸런스 게임. <br> - css animation을 사용하여 사용자 입력에 따라 슬라이드, 모양이 변경되는 등 인터렉티브한 동작 기능 구현 <br> - 유저가 선택한 답변들을 sessionStorage에 저장하여 결과페이지에 적용",
      stack: "HTML, CSS, JS, JQUERY, BOOTSTRAP",
      date: "2021-08 ~ 2021-09",
      per: 100,
      link: "",
    },
    {
      name: "쇼핑몰 리닷",
      img: "img/works/lidot.jpg",
      text: "욕실용품 쇼핑몰 홈페이지 <br> - 아임포트, 이니시스모듈을 사용하여 구매기능을 구현. <br>- sns로그인 라이브러리 사용하여 kakao, naver 로그인 구현 <br>- 주문목록, 장바구니 DB 테이블 작업 <br>- ajax 통신 활용하여 장바구니, 주문목록 DB 테이블 과 API 연동 및  MySql 작성 <br>- 상품등록, 관리, 재고관리등 관리자페이지 기능 구현",
      stack: "HTML, CSS, JS, JQUERY, BOOTSTRAP, NODE.JS, AJAX, MYSQL",
      date: "2021-08 ~ 2022-12",
      per: 70,
      link: "https://lidot.co.kr/",
    },
    {
      name: "차량 유지ˑ관리 제공 시스템",
      img: "img/works/abys.jpg",
      text: "차량 시공관리 시스템, 차량 주차장 관리 시스템 <br>- sessionStorage에 로그인 정보 저장하여 로그인 기능 구현 <br>- 차량 관리 로직 연구, 개발 <br>- JSON데이터 조작을 통하여 건물 층별 주차위치 표시기능 작업 <br>- 차량등록, 리스트 DB 테이블 작성 <br>- ajax통신으로 차량등록, 리스트화 DB 테이블 과 연계 <br>",
      stack: "HTML, CSS, JS, JQUERY, BOOTSTRAP, NODE.JS, AJAX, MYSQL",
      date: "2022-10 ~ 2022-11",
      per: 70,
      link: "",
    },
    {
      name: "차량 장비 개조 관리 시스템",
      img: "img/works/hansung.jpg",
      text: "차량 장비별 개조 관리 <br>- 차량장비 신청 기능 작업(웹앱) <br>- 장비에 따른 비용 산정 및 계산 <br>- 신청 장비에 따라 견적서 화면 개발, 비용 계산 <br>- 각 회원이 신청한 장비 리스트 관리자화면 개발, 통계화면 개발",
      stack: "HTML, CSS, JS, JQUERY, BOOTSTRAP, NODE.JS, AJAX, MYSQL",
      date: "2022-06 ~ 2022-10",
      per: 60,
      link: "https://hansungtruck-service.com/salesAdmin",
    },
    {
      name: "학생 교육관리 시스템",
      img: "img/works/yg.jpg",
      text: "공무원학생들을 위한 교육관리 시스템 <br>- zustand를 사용하여 로그인정보 상태 관리 <br>- 학생들이 시험을 치르기위한 시험 스케쥴링 시스템 로직  개발 <br>- REST API 및 MySql 쿼리 작성 <br>- 공용으로 쓰이는 모달 컴포넌트 작성, 리팩터링 <br>- 학생들 시험 결과 Json 정보를 이용하여 통계 도출, 통계화면 개발",
      stack: "REACT, ZUSTAND, NODE.JS, AXIOS, MYSQL",
      date: "2022-05 ~ 2022-12",
      per: 80,
      link: "https://young-ga.com/",
    },
    {
      name: "아싸플러스",
      img: "img/works/assaplus.jpg",
      text: "아이스크림&주류 무인판매 매장 가맹점 모집 사이트 <br>- 전체적인 화면 레이아웃 설계, 퍼블리싱 작업 <br>- scroll 메소드와 css 에니메이션으로 인터렉티브한 동작 구현 <br>- Ajax 통신으로 백앤드개발자와 앱푸쉬알림 가맹문의 데이터 통신 <br>- emailJs 를 사용하여 가맹문의 데이터 특정 이메일로 전송하는 기능 구현",
      stack: "HTML, CSS, JS, JQUERY, BOOTSTRAP, AJAX",
      date: "2023-02 ~ 2023-02",
      per: 100,
      link: "https://www.assaplus.kr",
    },
  ];

  $.each(projects, function (i, v) {
    let linkTd = ``;
    if (v.link) {
      linkTd = `<tr>
                  <th>링크</th>
                  <td><a href="${v.link}" target="_blank">${v.link}</a></td>
                </tr>`;
    }
    let str = `<div class="">
                <div class="p-2 d-flex justify-content-center cont-wrap align-items-center">
                  <img src="${v.img}" alt="" class="me-md-4" />
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
                    ${linkTd}
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
