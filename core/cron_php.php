<?PHP 

date_default_timezone_set("Asia/Kolkata");

require_once "db.php";
$qry = sprintf("SELECT name,detail,pri,s_t,s_d FROM user_todo WHERE s_t - %d <= 1",date("h"));

$res = $con->query($qry);

$ret = [];
if($res){
	$stuff = [];
	while ($row = mysqli_fetch_assoc($res)) {
		$stuff[] = $row;
	}

	exec("python launch.py");

	echo json_encode($stuff);
}else{
	echo "Error";
}





?>