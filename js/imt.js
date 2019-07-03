function imt() {
  var height = $("#height").val();
  var weight = $("#weight").val();
  var bmi = weight / (height*0.01)**2;
  var bmi = bmi.toFixed(5);
  $("#resultNumber").html("Ваш ИМТ: " + bmi);
  if (bmi < 16) {
    $("#badResult").html("Выраженный дефицит массы тела");
    $("#goodResult").empty();
  } else if ((bmi >= 16) && (bmi < 18.6)) {
    $("#badResult").html("Недостаточная масса тела");
    $("#goodResult").empty();
  } else if ((bmi >= 18.6) && (bmi < 25.1)) {
    $("#goodResult").html("Нормальная масса тела");
    $("#badResult").empty();
  } else if ((bmi >= 25.1) && (bmi < 30.1)) {
    $("#badResult").html("Избыточная масса тела");
    $("#goodResult").empty();
  } else if ((bmi >= 30.1) && (bmi < 35.1)) {
    $("#badResult").html("Ожирение первой степени");
    $("#goodResult").empty();
  } else if ((bmi >= 35.1) && (bmi < 40.1)) {
    $("#badResult").html("Ожирение второй степени");
    $("#goodResult").empty();
  } else if ((bmi >= 40.1) && (bmi < 200)) {
    $("#badResult").html("Ожирение третьей степени");
    $("#goodResult").empty();
  } else if ((bmi >= 200)&&(bmi < 9999999999)) {
    $("#badResult").html("ТЫ КТО ТВАРЬ?????!!!!");
    $("#goodResult").empty();
  }
}
