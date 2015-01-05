<?php 

$graph_url = "https://graph.facebook.com/circussmirkus/feed?access_token=130420087117450|2OiKEWXO8yNbEVpaApsrAal8koE";

$page_feed = file_get_contents($graph_url);
echo $page_feed;

/* OPTIONAL: Parse the JSON and get PHP associative array */
/*$page_feed_array = json_decode($page_feed, true);*/

?>


