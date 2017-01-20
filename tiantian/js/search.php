<?php
$wd = $_GET["wd"];
	if($wd=='shu' || $wd =='sh'){
		echo '["小说","励志书","名著"]';
	}else if($wd=="n"){
		echo '["向着光亮的那方","你的世界","幸好有你","我遇见你"]';
	}else{
		echo '[]';
	}
?>