<!DOCTYPE html>
<head>
	<html lang="en">
	<link rel="stylesheet" type="text/css" href="../css/third.css">
	<script type="text/javascript" src="../js/third.js"></script>
	<meta charset="UTF-8" content="width=device-width, initial-scale=1">
	<link href="https://fonts.googleapis.com/css?family=Lato|Roboto&display=swap" rel="stylesheet">
	<title>Third</title>
</head>

<body style="text-align: center;">
	<div>
		<h1>Level 3</h1>
		<p class="question">What Hawaii Sustainability Goal Do These Pictures Represent?</p>
	</div>

	<div>
		<img class="images" id="image-1">
		<img class="images" id="image-2"> 
	</div>

	<div>
		<button onclick="myFunction2()" type="button" id="button" class="button2 text popup2">
			<p>Wind Off</p>
			<span class="popuptext2" id="myPopup2">X</span>
		</button>

		<button onclick="window.location.href = '../html/fourth.html';" type="button" id="button" class="button1 text">
			<p>Wind Power</p>
		</button>

		<button onclick="myFunction3()" type="button" id="button" class="button3 text popup3">
			<p>Breeze Power</p>
			<span class="popuptext3" id="myPopup3">X</span>
		</button>

		<button onclick="myFunction4()" type="button" id="button" class="button4 text popup4">
			<p>Hydropower</p>
			<span class="popuptext4" id="myPopup4">X</span>
		</button>
	</div>
</body>