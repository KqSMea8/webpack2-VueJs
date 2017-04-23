<?php
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods:GET,POST,PUT');
header('Content-type:text/json');   

$pubtime = array("2016-10-29", "2016-10-30", "2016-10-31", "2016-11-29");
$title = array("探索之路", "探索之路1", "探索之路2", "探索之路3");
$desc = array("是手机团队的探索之路", "是手机团队的探索之路1", "是手机团队的探索之路2", "是手机团队的探索之路3");
$agree=array(10,40,50,19);
$news101 = array('pubtime' => $pubtime[0] , 'title' => $title[0],'desc' => $desc[0],'agree' => $agree[0]);
$news102 = array('pubtime' => $pubtime[1] , 'title' => $title[1],'desc' => $desc[1],'agree' => $agree[1]);
$news103= array('pubtime' => $pubtime[2] , 'title' => $title[2],'desc' => $desc[2],'agree' => $agree[2]);
$news104 = array('pubtime' => $pubtime[3] , 'title' => $title[3],'desc' => $desc[3],'agree' => $agree[3]);

$_id = $_GET["newsid"];

switch ($_id) {
    case 101 :
    echo json_encode($news101, JSON_FORCE_OBJECT);
    break;
    case 102 :
    echo json_encode($news102, JSON_FORCE_OBJECT);
    break;
    case 103 :
    echo json_encode($news103, JSON_FORCE_OBJECT);
    break;
    case 104 :
    echo json_encode($news104, JSON_FORCE_OBJECT);
    break;
    default :
    echo "id is not equal to 101, 102 or 103";
}
