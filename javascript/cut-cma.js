$(function(){
    var cnt = 1, //カウンターを初期化
        canvas = []; //Canvasを設定する配列を初期化

    //キャンバスごとに実行
    $("canvas").each(function(){
        var imgSrc = $(this).attr("data-src"), //画像のsrcを取得
            img = new Image(); //Imageオブジェクトを呼び出し
        img.src = imgSrc; //Imageオブジェクトにsrcを指定

        //Canvasの準備
        canvas[cnt] = document.getElementById('canvas' + cnt);
        var ctx = canvas[cnt].getContext('2d'),
            wid = 0, hei = 0;

            // 生成画像の縦横長定義
            if(cnt == 1){
                wid = 458, hei = 274;
            }if(cnt == 2 || cnt == 5){
                wid = 338, hei = 188;
            }if(cnt == 3 || cnt == 4){
                wid = 255, hei = 188;
            }if(cnt == 6 || cnt == 7 || cnt == 8 || cnt == 9 || cnt == 10 || cnt == 11 || cnt == 12 || cnt == 13){
                wid = 300, hei = 100;
            }

        //画像が読み込み終わったら実行
        img.onload = function() {
            var imgWidth = img.width, //画像の元の幅を取得
                imgHeight = img.height, //画像の元の高さを取得
                imgRate = imgWidth / imgHeight, //画像の比率を取得
                newRate = wid / hei, //生成画像の比率を計算
                imgWid = 0, //Canvas上での画像の位置を初期化
                imgHei = 0; //Canvas上での画像の位置を初期化

            if(imgRate >= newRate){ //生成画像の比率が元画像の比率より小さいとき
                imgWid = (wid - (hei * imgRate)) / 2; //横方向の画像位置を計算
                ctx.drawImage(img, imgWid, imgHei, hei * imgRate, hei); //Canvasに幅を基準に画像を描画
            }else{ //生成画像の比率が元画像の比率より大きいとき
                imgHei = (hei - (wid / imgRate)) / 2; //縦方向の画像位置を計算
                ctx.drawImage(img, imgWid, imgHei, wid, wid / imgRate); //Canvasに高さを基準に画像を描画
            }
        }
        cnt++; //カウンターを設定
    });
});