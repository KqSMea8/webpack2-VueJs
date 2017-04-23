<?php
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods:GET,POST,PUT');
header('Content-type:text/json');

$newsid=array("101", "102", "103", "104");
$pubtime = array("2016-10-29", "2016-10-30", "2016-10-31", "2016-11-29");
$title = array("探索之路", "系统之战", "大文件存储", "飞天进化");
$desc = array("是手机团队的探索之路", "如何支持业务解决", "背后的你不得不知的技术", "阿里巴巴技术委员会");
$delected=array(true,false);

$news101 = array('newsid' => $newsid[0] , 'pubtime' => $pubtime[0] , 'title' => $title[0],'desc' => $desc[0],'isdelected' => $delected[1]);
$news102 = array('newsid' => $newsid[1] , 'pubtime' => $pubtime[1] , 'title' => $title[1],'desc' => $desc[1],'isdelected' => $delected[1]);
$news103= array('newsid' => $newsid[2] , 'pubtime' => $pubtime[2] , 'title' => $title[2],'desc' => $desc[2],'isdelected' => $delected[0]);
$news104 = array('newsid' => $newsid[3] , 'pubtime' => $pubtime[3] , 'title' => $title[3],'desc' => $desc[3],'isdelected' => $delected[0]);

$news=array(json_encode($news101, JSON_FORCE_OBJECT) , json_encode($news102, JSON_FORCE_OBJECT),json_encode($news103, JSON_FORCE_OBJECT),json_encode($news104, JSON_FORCE_OBJECT));

$news=array($news101, $news102,$news103,$news104);

echo json_encode($news)

?>