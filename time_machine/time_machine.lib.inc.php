<?php
define('TM_CONFIG','time_machine.ini');
define('TM_LOG','time_machine.log');

class Present{
	public $adult;
	public $children;
	
	public function info(){
		return $infoPresent = "IN Present adult: ".$this->adult.", children: ".$this->children;
	}
}

class Future{
	public $adult = 0;
	public $children = 0;
	
	public function info(){
		return $infoFuture = "IN Future adult: ".$this->adult.", children: ".$this->children;
	}	
}

class Leaps{
	static $i = 0;

	public function twoChildrenToFuture($pr, $fut){
		$pr->children -= 2;
		$fut->children += 2;
		file_put_contents(TM_LOG,"LEAP#".++self::$i.": 2 children to Future. RESULT: ".$pr->info().", ".$fut->info()." \n", FILE_APPEND);
	}
	
	public function childToPresent($pr, $fut){
		$pr->children += 1;
		$fut->children -= 1;
		file_put_contents(TM_LOG,"LEAP#".++self::$i.": 1 children to Present. RESULT: ".$pr->info().", ".$fut->info()." \n", FILE_APPEND);
	}
	
	public function adultToFuture($pr, $fut){
		$pr->adult -= 1;
		$fut->adult += 1;
		file_put_contents(TM_LOG,"LEAP#".++self::$i.": 1 adult to Future. RESULT: ".$pr->info().", ".$fut->info()." \n", FILE_APPEND);
	}
	
	public function adultToPresent($pr, $fut){
		$pr->adult += 1;
		$fut->adult -= 1;
		file_put_contents(TM_LOG,"LEAP#".++self::$i.": 1 adult to Present. RESULT: ".$pr->info().", ".$fut->info()." \n", FILE_APPEND);
	}

	public function leap($pr, $fut){
		$this->twoChildrenToFuture($pr, $fut);
		$this->childToPresent($pr, $fut);
		$this->adultToFuture($pr, $fut);
		$this->childToPresent($pr, $fut);
	}
	public function leap2($pr, $fut){
		$this->twoChildrenToFuture($pr, $fut);
		while($pr->children !== 0){
			$this->childToPresent($pr, $fut);
			$this->twoChildrenToFuture($pr, $fut);
		}			
		$this->adultToPresent($pr, $fut);
	}
}
function clearData($data){
	return abs((int)$data);
}
?>