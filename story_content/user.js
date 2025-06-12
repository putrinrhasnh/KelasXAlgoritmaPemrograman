function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5X6gaPRecWy":
        Script1();
        break;
      case "6Osn9P9pWzk":
        Script2();
        break;
      case "6ijsLEVfrLw":
        Script3();
        break;
      case "6ViYLuJwSYQ":
        Script4();
        break;
      case "5e5JN08E55w":
        Script5();
        break;
      case "6oI0TW2mIxv":
        Script6();
        break;
      case "6RqZMkzyNHv":
        Script7();
        break;
      case "6YCV9Rm2VkJ":
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

