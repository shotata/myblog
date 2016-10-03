<? php

define('DB_DATABASE', 'blog_DB');
define('DB_USERNAME', 'shotata');
define('DB_PASSWORD', 'CAR2BAL');
define('PDO_DSN', 'mysql:dbhost=localhost;dbname=' . DB_DATABASE);

try{
    //connect
    $db = new PDO(PDO_DSN, DB_USERNAME, DB_PASSWORD);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    //insert
    $db->exec("insert into my_posts (post_title,post_content) values ('hoge','aiueokakikukeko')");
    echo "you got a new post!";

    //diconnect
    $db = null;

}catch(PDOException $e){
    echo $e->getMessage();
    exit;
}