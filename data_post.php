<?php

define('DB_DATABASE', 'blogDB');
define('DB_USERNAME', 'shotata');
define('DB_PASSWORD', 'car2BAL');
define('PDO_DSN', 'mysql:dbhost=localhost;dbname=' . DB_DATABASE);

$now = $_POST['date_Ymd'].$_POST['date_His'];
if($_POST['date_Ymd'] == ''){
    $now = new DateTime();
    $timezone = $now->getTimezone();
    $timezone = $timezone->getName();
    $now = $now->modify('+9 hours')->format('Y-m-d H:i:s');
};

$text = $_POST['content'];
$first_image = preg_match_all('/<img.+src=[\'"]([^\'"]+)[\'"].*>/i', $text, $matches);
$first_image = $matches[1][0];



try{
    //connect
    $db = new PDO(PDO_DSN, DB_USERNAME, DB_PASSWORD);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    //insert
    $stmt1 = $db->prepare("insert into my_posts(post_date,post_content,post_title,post_status,post_modified,post_picture) values(:post_date,:post_content,:post_title,:post_status,:post_modified,:post_picture)");
    $stmt1->bindValue(':post_date',$now);
    $stmt1->bindValue(':post_content',$_POST['content']);
    $stmt1->bindValue(':post_title',$_POST['title']);
    $stmt1->bindValue(':post_status',$_POST['status']);
    $stmt1->bindValue(':post_modified',$_POST['modified']);
    $stmt1->bindvalue(':post_picture',$first_image);
    $stmt1->execute();
    $db = NULL;

    //connect
    $db = new PDO(PDO_DSN, DB_USERNAME, DB_PASSWORD);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    //select
    $stmt = $db->query("select max(id) as post_id from my_posts");
    $result = $stmt->fetch(PDO::FETCH_ASSOC);
    $post_id = $result['post_id'];
    //insert
    $stmt2 = $db->prepare("insert into my_terms(term_category,term_tag,term_post_id) values(:term_category,:term_tag,:term_post_id)");
    $stmt2->bindvalue(':term_category',$_POST['category']);
    $stmt2->bindvalue(':term_tag',$_POST['tag']);
    $stmt2->bindvalue(':term_post_id',$post_id);
    $stmt2->execute();
    $db=NULL;

}catch(PDOException $e){
    echo $e->getMessage();
    exit;
}

?>

<!DOCTYPE html>
<html lang = “ja”>
<head>
    <meta charset = “UFT-8”>
    <title>フォームからデータを受け取る</title>
</head>
<body>
    <h1>フォームデータの送信</h1>
    <a href = "http://192.168.33.10:8000/">登録完了！</a>
</body>
</html>
</body>
</html>