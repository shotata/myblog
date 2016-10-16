<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="utf-8">
    <title>管理人ページ</title>
    <link rel="stylesheet" href="css/body.css">
    <link rel="stylesheet" href="css/toko.css">
    <link rel="stylesheet" href="css/footer.css">
    <script type="text/javascript" src="javascript/touko.js"></script>
    <script type="text/javascript" src="javascript/cut-toko.js"></script>
</head>
<body>
<canvas id="canvas1" data-src="img/20160205-pointbreak-thumb-950x713-20824.jpg" width="300" height="100"></canvas>

    <div class="MenuContainer">
        <input id="menu" type="checkbox" name="menu" class="HiddenCheckbox"/>
        <label for="menu" class="MenuIcon"></label>
        <h2 class="MenuHeader">List of articles</h2>
        <span class="MenuHeader"><ul>
          <li><a href="">all</a></li>
          <li><a href="">comic</a></li>
          <li><a href="">movie</a></li>
          <li><a href="">anime</a></li>
        </ul></span>
        <nav class="Menu">
            <span class="card-holder">

            </span>
        </nav>
    </div>

    <div class="toukou">
        <div class="blog-title">
            <a href="index1.html"><h1>名もなき感情を綴れ。</h1></a>
            <div class="title-category-ul">
                <ul>
                    <li><a href="comic.html" class="CateBtn1">comic</a><span class="CateBar1"></span></li>
                    <li><a href="movie.html" class="CateBtn2">movie</a><span class="CateBar2"></span></li>
                    <li><a href="anime.html" class="CateBtn3">anime</a><span class="CateBar3"></span></li>
                </ul>
            </div>
        </div>
        <form method="POST" action="data_post.php">
            <p>タイトル</p>
            <textarea name="title" class="title" placeholder="title here"></textarea>
            <p>本文</p>
            <textarea name="content" class="content" placeholder="text here"></textarea>
            <p>タグ<input type="text" name="tag" class="tag" placeholder="tag here"></p>
            <p>公開設定<span class="status">
            <input type="radio" name="status" value="1" checked>公開
            <input type="radio" name="status" value="2">下書き
            <input type="radio" name="status" value="3">予約</span><span class="date">
            <input type="date" name="date_Ymd" id="date_Ymd">
            <select name="date_His" id="date_His">
                <option value=" 00:00:00">00:00</option>
                <option value=" 01:00:00">01:00</option>
                <option value=" 02:00:00">02:00</option>
                <option value=" 03:00:00">03:00</option>
                <option value=" 04:00:00">04:00</option>
                <option value=" 05:00:00">05:00</option>
                <option value=" 06:00:00">06:00</option>
                <option value=" 07:00:00">07:00</option>
                <option value=" 08:00:00">08:00</option>
                <option value=" 09:00:00">09:00</option>
                <option value=" 10:00:00">10:00</option>
                <option value=" 11:00:00">11:00</option>
                <option value=" 12:00:00">12:00</option>
                <option value=" 13:00:00">13:00</option>
                <option value=" 14:00:00">14:00</option>
                <option value=" 15:00:00">15:00</option>
                <option value=" 16:00:00">16:00</option>
                <option value=" 17:00:00">17:00</option>
                <option value=" 18:00:00">18:00</option>
                <option value=" 19:00:00">19:00</option>
                <option value=" 20:00:00">20:00</option>
                <option value=" 21:00:00">21:00</option>
                <option value=" 22:00:00">22:00</option>
                <option value=" 23:00:00">23:00</option>
            </select></span></p>
            <p>カテゴリー<span class="category">
            <input type="radio" name="category" value="1" checked>comic
            <input type="radio" name="category" value="2">movie
            <input type="radio" name="category" value="3">anime</span></p>
            <p><input type="submit" class="touroku" value="登録"></p>
        </form>
    </div>
    <div class="footer">
        <h4></h4>
        <div class="page-top">
            <a href="#">
                <div class="boton"></div>
            </a>
        </div>
    </div>
</body>
</html>
