<?php
if(file_exists(TM_LOG)){
	echo "Preview travel log:<br>";
	$result = file(TM_LOG);
	foreach($result as $row){
		echo $row.'<br>';
	}
}else{
	echo "Error reading file!";
}
?>
<form action="time_machine.php" method="GET">
<input type="submit" value="Back and clear Travel log">
</form>