<?php
    require 'vendor/autoload.php';
    use Plivo\RestAPI;
    $auth_id = "MAYTK0M2MZNJA1MJQ4Y2";
    $auth_token = "OThkMjNiMTUwYzcyM2Y0ZGVkYzJlNWViMWM3NWRh";
    
    $p = new RestAPI($auth_id, $auth_token);
    // Send a message
    $params = array(
            'src' => '+918971651434', // Sender's phone number with country code
            'dst' => '+919449193484', // Receiver's phone number with country code
            'text' => 'Hi, Message from Plivo' // Your SMS text message
        );
    // Send message
    $response = $p->send_message($params);
    // Print the response
    echo "Response : ";
    print_r($response['response']);
    // Print the Api ID
    echo "<br> Api ID : {$response['response']['api_id']} <br>";
    // Print the Message UUID
    echo "Message UUID : {$response['response']['message_uuid'][0]} <br>";
?>

