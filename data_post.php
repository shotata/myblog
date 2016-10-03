<?php

define('DB_DATABASE', 'blog_DB');
define('DB_USERNAME', 'shotata');
define('DB_PASSWORD', 'car2BAL');
define('PDO_DSN', 'mysql:dbhost=localhost;dbname=' . DB_DATABASE);

try{
    //connect
    $db = new PDO(PDO_DSN, DB_USERNAME, DB_PASSWORD);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    //insert

    $stmt = $db->prepare("insert into my_posts(post_date,post_content,post_title,post_status,post_modified) values(:post_date,:post_content,:post_title,:post_status,:post_modified)");
    $stmt->bindValue(':post_date',$_POST['date_Ymd'].$_POST['date_His']);
    $stmt->bindValue(':post_content',$_POST['content']);
    $stmt->bindValue(':post_title',$_POST['title']);
    $stmt->bindValue(':post_status',$_POST['status']);
    $stmt->bindValue(':post_modified',$_POST['modified']);

    $stmt->execute();
    $db = NULL;


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