// $(document).ready(function() {
console.log("online");

document.getElementById("question").addEventListener("click", function() {
  document.getElementById("answers").classList.toggle("active");
});

document.getElementsByTagName(li).addEventListener("click", function() {
  this.classList.toggle("active");
});

// QUIZ - YOUR POTENTIAL

//   if ($("#quiz").length > 0) {
//     var questions_t = $("#quiz .question").length;

//     // CHECK QUIZ FOR COMPLETION
//     function quiz_completion() {
//       var questons_c = $("#quiz .selected span.txt.open").length;
//       if (questions_t == questons_c) {
//         $("#quiz .btn.invalid").hide();
//         $("#quiz .btn.valid").show();

//         // CHECK ANSWERS
//       }
//     }

//     // EXPAND/COLLAPSE QUESTIONS
//     $("#quiz .q").click(function() {
//       $(this)
//         .parent()
//         .siblings()
//         .find(".answers");

//       $(this)
//         .parent()
//         .siblings()
//         .removeClass("open");

//       if (
//         $(this)
//           .parent()
//           .hasClass("open")
//       ) {
//         $(this)
//           .parent()
//           .find(".answers");

//         $(this)
//           .parent()
//           .removeClass("open");
//       } else {
//         $(this)
//           .parent()
//           .find(".answers")
//           .fadeIn(250);
//         $(this)
//           .parent()
//           .addClass("open");
//       }
//     });

//     // SELECT ANSWERS
//     $("#quiz .answers a").click(function() {
//       $(this)
//         .siblings()
//         .removeClass("current");
//       var current = $(this).text();
//       var score = $(this).attr("data-score");
//       $(this)
//         .parent()
//         .parent()
//         .find(".selected span.txt")
//         .html(current);
//       $(this)
//         .parent()
//         .parent()
//         .find(".selected span.txt")
//         .attr("data-score", score);
//       $(this)
//         .parent()
//         .parent()
//         .find(".selected span.txt")
//         .addClass("open");
//       if ($(this).hasClass("current")) {
//         //
//       } else {
//         $(this).addClass("current");
//       }
//       $(this).parent();

//       $(this)
//         .parent()
//         .parent()
//         .removeClass("open");
//       quiz_completion();
//     });

//     // SUBMIT ANSWERS - ERROR
//     $("#quiz .btn.invalid a").click(function() {
//       alert("Please complete all questions before submitting.");
//     });

//     // SUBMIT ANSWERS - ADVANCE
//     $("#quiz .btn.valid a").click(function() {
//       var score_t = 0;
//       var score_avg = 0;
//       $("#quiz .selected span.txt").each(function(index) {
//         var score = $(this).attr("data-score");
//         score = parseInt(score);
//         score_t = score_t + score;
//         score_avg = score_t / questions_t;
//       });
//       //alert(score_t);
//       var selected_profile = 0;
//       if (score_avg > 3.33) {
//         selected_profile = 4;
//       } else if (score_avg > 2.44) {
//         selected_profile = 3;
//       } else if (score_avg > 1.66) {
//         selected_profile = 2;
//       } else {
//         selected_profile = 1;
//       }

//       $("#page_section_profile_quiz .text.initial").hide();
//       $("#page_section_profile_quiz #quiz").hide();
//       $("#page_section_profile_quiz .results").fadeIn(250);
//       $(
//         "#page_section_profile_quiz .results .profile_" + selected_profile
//       ).fadeIn(250);
//       $("#page_section_profile_results").fadeIn(250);
//       $("#page_section_profile_results .text_" + selected_profile).fadeIn(250);

//       $("html, body").animate(
//         {
//           scrollTop: $("#page_section_profile_quiz").position().top
//         },
//         500
//       );
//     });
//   }

//   $("#apply_cta").click(function() {
//     $("html, body").animate(
//       {
//         scrollTop: $("#page_section_profile_results").position().top
//       },
//       500
//     );
//   });
// });
