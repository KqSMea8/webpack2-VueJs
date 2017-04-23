<?php
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods:GET,POST,PUT');
header('Content-type:text/json');

$_id = $_POST["newsid"];

$status = array("success", "false");
$agree=array(10,40,50,19);

$news101 = array('status' => $status[0],'agree' => $agree[0]);
$news102 = array('status' => $status[0],'agree' => $agree[1]);
$news103= array('status' => $status[0],'agree' => $agree[2]);
$news104 = array('status' => $status[0],'agree' => $agree[3]);

switch ($_id) {
    case 101 :
    $news101['agree'] +=1;
    echo json_encode($news101, JSON_FORCE_OBJECT);
    break;
    case 102 :
    $news102['agree'] +=1;
    echo json_encode($news102, JSON_FORCE_OBJECT);
    break;
    case 103 :
    $news103['agree'] +=1;
    echo json_encode($news103, JSON_FORCE_OBJECT);
    break;
    case 104 :
    $news104['agree'] +=1;
    echo json_encode($news104, JSON_FORCE_OBJECT);
    break;
    default :
    echo "id is not equal to 101, 102 or 103";
}
