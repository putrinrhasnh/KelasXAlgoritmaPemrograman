function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6dQQul6SFwK":
        Script1();
        break;
      case "5vVoLi363nq":
        Script2();
        break;
      case "5ylZMNt0T4t":
        Script3();
        break;
      case "6VBxWgvqc1G":
        Script4();
        break;
      case "6jbu8IKRAVC":
        Script5();
        break;
      case "6QVKCEITJEJ":
        Script6();
        break;
      case "6emduSdcRM7":
        Script7();
        break;
      case "66eFn8VRJGs":
        Script8();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="musik.mp3";
audio.load();
audio.play();
audio.volume=0.3;
}

function Script2()
{
  window.open("https://www.onlinegdb.com/");

}

function Script3()
{
  window.open("https://www.onlinegdb.com/#");

}

function Script4()
{
  window.open("https://www.onlinegdb.com/#");

}

function Script5()
{
  window.open("https://www.onlinegdb.com/#");

}

function Script6()
{
  window.open("https://www.onlinegdb.com/#");

}

function Script7()
{
  window.open("https://www.onlinegdb.com/#");

}

function Script8()
{
  var player = GetPlayer();
var nama = player.GetVar("namaSiswa");
var nilai = player.GetVar("Results.ScorePercent");

fetch("https://script.google.com/macros/s/AKfycbxbSf61CsrPMwAtu7Iz-j_Hc_TA2VfA8JAthGHaBcPi-9qlx8x5UIxjKN13lZF5aIQgrA/exec", {
  method: "POST",
  body: JSON.stringify({
    nama: nama,
    nilai: nilai
  }),
  headers: {
    "Content-Type": "application/json"
  }
});

}

