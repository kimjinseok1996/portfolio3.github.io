var certifications = ["정보처리기사", "웹디자인기능사", "GTQ1급"];

certifications.forEach((v, i) => {
  let str = `<p style="transition-delay:${(i + 2) / 10}s">${v}</p>`;
  $(".certification_wrap").append(str);
});

var skills = [
  {
    name: "html5",
    src: "img/html5logo.png",
    num: 90,
  },
  {
    name: "css",
    src: "img/csslogo.png",
    num: 90,
  },
  {
    name: "js",
    src: "img/jslogo.png",
    num: 80,
  },
  {
    name: "jquery",
    src: "img/jquerylogo.png",
    num: 90,
  },
  {
    name: "ajax",
    src: "img/ajax.png",
    num: 80,
  },
  {
    name: "react",
    src: "img/react_icon.png",
    num: 70,
  },
  {
    name: "axios",
    src: "img/axios.png",
    num: 50,
  },
  {
    name: "git",
    src: "img/git.png",
    num: 50,
  },
  {
    name: "nodejs",
    src: "img/nodejs.png",
    num: 40,
  },
  {
    name: "npm",
    src: "img/npm.png",
    num: 40,
  },
  {
    name: "mysql",
    src: "img/mysql.png",
    num: 50,
  },
];

skills.forEach((v, i) => {
  let str = `<div class="skillsbox mb-4" style="transition-delay:${
    (i + 2) / 10
  }s">
              <img src="${v.src}" alt="" class="skillbox_img" />
              <div class="bar_wrap ms-2">
                <div class="bar"></div>
                <div class="text ms-3"><span>${v.num}</span>%</div>
              </div>
            </div>`;
  $("#skills_wrap").append(str);
});

$(window).scroll(function () {
  let windowtop = $(window).scrollTop();

  if (windowtop >= $("#section2").offset().top) {
    $("#section2 .cover").addClass("on");
    $("#skills_wrap .bar_wrap .bar, #skills_wrap .bar_wrap .text").addClass(
      "act"
    );
    $("#skills_wrap").css({
      transform: `translateY(-${windowtop - $(window).height()}px)`,
    });
  } else {
    $("#section2 .cover").removeClass("on");
    $("#skills_wrap .bar_wrap .bar, #skills_wrap .bar_wrap .text").removeClass(
      "act"
    );
  }

  if (windowtop >= $("#section2").offset().top - 300) {
    $("#abouttext > p").addClass("on");

    setTimeout(function () {
      $("#section2 .certification_wrap p").addClass("on");
      $("#section2 .certification_wrap h2").addClass("on");
    }, 500);

    setTimeout(function () {
      $("#skills_wrap .skillsbox").addClass("on");
    }, 700);

    setTimeout(function () {
      $("#skills_wrap .bar_wrap .bar").addClass("on");
    }, 900);
  }
});
