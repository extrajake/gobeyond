// $(document).ready(function() {
//   // all custom jQuery will go here

//   $(".burger").click(function() {
//     $(".mobile-nav").toggle();
//     console.log("success");
//   });

//   $(".question-1").on("click", function() {
//     $(this).css("background-color", "#606c38");
//     $(this).css("color", "white");
//     $(".question-2, .question-3, .question-4,").css("background-color", "");
//     $(".question-2, .question-3, .question-4").css("color", "black");
//     $(".answer-2, .answer-3, .answer-4").hide();
//     $(".answer-1").show();
//   });
//   $(".question-2").on("click", function() {
//     $(this).css("background-color", "#606c38");
//     $(this).css("color", "white");
//     $(".question-1, .question-3, .question-4").css("background-color", "");
//     $(".question-1, .question-3, .question-4").css("color", "black");
//     $(".answer-1, .answer-3, .answer-4").hide();
//     $(".answer-2").show();
//   });
//   $(".question-3").on("click", function() {
//     $(this).css("background-color", "#606c38");
//     $(this).css("color", "white");
//     $(".question-1, .question-2, .question-4").css("background-color", "");
//     $(".question-1, .question-2, .question-4").css("color", "black");
//     $(".answer-1, .answer-2, .answer-4").hide();
//     $(".answer-3").show();
//   });
//   $(".question-4").on("click", function() {
//     $(this).css("background-color", "#606c38");
//     $(this).css("color", "white");
//     $(".question-1, .question-2, .question-3").css("background-color", "");
//     $(".question-1, .question-2, .question-3").css("color", "black");
//     $(".answer-1, .answer-2, .answer-3").hide();
//     $(".answer-4").show();
//   });
//   console.log("online");
// });

console.log("online");

document.getElementById('mdiv').addEventListener('click' function(){
  document.getElementsByClassName('apply-form').classList.toggle("disabled");
});
