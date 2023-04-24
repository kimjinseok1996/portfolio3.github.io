var menunum = 0;
$("#menubtnbox").on("click", function () {
  if (menunum === 0) {
    menunum = 1;

    $("#mainmenu").addClass("on");
    $("body").css({ "overflow-y": "hidden" });

    $("#topmenubar, #bottommenubar").css({ top: "18px" });
    $("#middlemenubar").addClass("on");

    setTimeout(function () {
      $("#topmenubar, #bottommenubar").addClass("on");
      menunum = 2;
    }, 350);
  } else if (menunum === 2) {
    menunum = 1;

    $("#mainmenu").removeClass("on");
    $("body").css({ "overflow-y": "visible" });

    $("#topmenubar, #bottommenubar").removeClass("on");

    setTimeout(function () {
      $("#topmenubar").css({ top: "8px" });
      $("#bottommenubar").css({ top: "28px" });
      $("#middlemenubar").removeClass("on");
      menunum = 0;
    }, 350);
  }
});

$(".mainmenu_menutext p a").hover(
  function () {
    $(this).parent().siblings(".shadow").addClass("on");
  },
  function () {
    $(this).parent().siblings(".shadow").removeClass("on");
  }
);

$(".mainmenu_menutext p a").on("click", function () {
  $("#mainmenu").removeClass("on");
  $("body").css({ "overflow-y": "visible" });

  $("#topmenubar, #bottommenubar").removeClass("on");

  setTimeout(function () {
    $("#topmenubar").css({ top: "8px" });
    $("#bottommenubar").css({ top: "28px" });
    $("#middlemenubar").removeClass("on");
    menunum = 0;
  }, 350);
});
