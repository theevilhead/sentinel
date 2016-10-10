<?PHP 

require_once "db.php";


$post_vars = json_decode(file_get_contents('php://input'), true); 

if(isset($post_vars)){

	$tag = $post_vars["s_tag"];
	$desc = $post_vars["s_desc"];
	$when_t = $post_vars["s_time"];
	$when_d = $post_vars["s_day"];
	$when_m = $post_vars["s_month"];
	$when_y = $post_vars["s_year"];
	$pri = $post_vars["s_pri"];

	$qry = sprintf("INSERT INTO user_todo (name, detail ,pri ,s_t ,s_d ,s_m ,s_y ) VALUES ('%s','%s','%d','%s','%d','%d','%d')",$tag,$desc,$pri,$when_t,$when_d,$when_m,$when_y);

	$res = $con->query($qry);
	if($res){
		// http_response_code(200);
		$msg = [
					"status" => "success",
					"msg" => "Success fully added ".$tag
				];
	}else{
		// http_response_code(400);
		$msg = [
					"status" => "error",
					"msg" => "Couldnt add ".$tag
				];
	}

		echo json_encode($msg);
}





?>