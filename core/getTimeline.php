<?PHP 

require_once "db.php";

$qry = sprintf("SELECT name,detail,pri,s_t,s_d FROM user_todo WHERE s_d = 21");

$res = $con->query($qry);

$ret = [];
if($res){
	$stuff = [];
	while ($row = mysqli_fetch_assoc($res)) {
		$stuff[] = $row;
	}
	echo json_encode($stuff);
}else{
	echo "Error";
}



?>