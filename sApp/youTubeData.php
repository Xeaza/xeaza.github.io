<?php 

$graph_url = "http://gdata.youtube.com/feeds/api/users/CircusSmirkus87/uploads?v=2&alt=json";

$page_feed = file_get_contents($graph_url);
echo $page_feed;

?>


