<?php
require "time_machine.lib.inc.php";
if($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['preview'])){
	require "time_machine_preview.php";
	exit;
}
if($_SERVER['REQUEST_METHOD'] == 'GET'){
	if(file_exists(TM_LOG))
		unlink(TM_LOG);
?>
<form  action="<?=$_SERVER['PHP_SELF']?>" method="POST">
Enter the number of adults(without owner) and children<br>
<input type="text" name="adult" size="5">
<input type="text" name="children" size="5">
<input type="submit" value="Ok">
</form>
<?php
	exit;
}
if($_SERVER['REQUEST_METHOD'] == 'POST' && !empty($_POST['adult']) && !empty($_POST['children'])){
	//$adult = clearData($_POST['adult']) + 1;
	file_put_contents(TM_CONFIG, "adult with owner: " . (clearData($_POST['adult']) + 1) ."\n");
	file_put_contents(TM_CONFIG, "children: " .clearData($_POST['children']), FILE_APPEND);
}
$f = fopen(TM_CONFIG,'r');
$adult = substr(fgets($f),-2,1);
$children = substr(fgets($f),-1,1);
fclose($f);

$pr = new Present();
$pr->adult = $adult;
$pr->children = $children;
$fut = new Future();

echo "Before time travel: ",$pr->info(),'. ',$fut->info(),'<br>';
file_put_contents(TM_LOG,"Before time travel: ".$pr->info().". ".$fut->info()." \n", FILE_APPEND);

$travel = new Leaps();
while($pr->adult !== $fut->adult or $fut->children == 0){
	if($pr->adult == 0){
		$travel->leap2($pr, $fut);
		echo "Whole family into the future after ".Leaps::$i." leaps<br>";
		file_put_contents(TM_LOG,"After time travel: ".$pr->info()." ".$fut->info()."\nWhole family into the future after ".Leaps::$i." leaps \n\n", FILE_APPEND);
		break;
	}
	else
		$travel->leap($pr, $fut);
}

	echo "After time travel: ",$pr->info(),' ',$fut->info(),'<br>';
?>
<form action="<?=$_SERVER['PHP_SELF']?>" method="POST">
<input type="hidden" name="preview" value="1">
<input type="submit" value="Preview travel log">
</form>
