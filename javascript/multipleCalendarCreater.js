/*---------------------------------------------------------------*/
// multipleCalendarCreater - jQuery plugin
// Version:1.0
//
// Copyright (C) 2014 高橋 和也(Kazuya Takahashi)
/*---------------------------------------------------------------*/

(function($){
    $.fn.multipleCalendarCreater = function(options, schedule){
        var o = this;
        o.extend(options);

        //-------------------------------------
        // セル追加処理
        o.append_cell = function (className, day) {
            if(typeof className === 'undefined' || className == null){
                className = "";
            }
            if(typeof day === 'undefined'){
                day = "<br />";
            }
            $(this).find("tr:last").append("<td class='" + className + "'>" + day + "</td>");
        };

        //-------------------------------------
        // 初期パラメータ生成
        // 表示開始日付を取得
        var fromy = o.fromYear;
        var fromm = o.fromMonth;
        var fromd = 1;
        var from = Date.parse(fromy+"/"+fromm+"/"+fromd);
        now = new Date(from);

        // 表示終了日付を取得
        var toy = now.getFullYear();
        var tom = now.getMonth() + 2;
        var tod = 1;

        if (tom > 12) {
            // 月が12以上になっていた場合、年数を繰上げて月から12を引く
            toy = toy + 1;
            tom = tom - 12;
        }

        var to = Date.parse(toy+"/"+tom+"/"+tod);

        // 曜日変換用
        var jw = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
        // 一日繰り送り値
        var after = 24*60*60*1000;
        // 初期ループフラグ
        var farst_row = true;
        // ループカウント
        var i = 0;


        //-------------------------------------
        // キャプション生成
        if(o.caption){
            o.append("<caption><b>" + o.fromYear + " / " + o.fromMonth + "</b></caption>");
        }

        //-------------------------------------
        // 曜日生成
        o.append("<tr class='" + o.weekRowClass + "'></tr>");
        for (var j = 0; j < 7; j++ ){
            if(j == 0){
                o.append_cell(o.sundayClass, jw[j]);
            }else if(j == 6){
                o.append_cell(o.saturdayClass, jw[j]);
            }else{
                o.append_cell(null, jw[j]);
            }
        }

        //-------------------------------------
        // カレンダー生成
        while(from < to){

            // 現行日付をdate型に変換
            now = new Date(from);

            // 現行日付のパラメータを取得
            d = now.getDate();
            w = now.getDay();

            // 週の最初の時、行を生成する
            if(i == 0){
                o.append("<tr></tr>");
            }

            // 初期ループ時、現行日付の曜日まで空のセルで埋める
            if(farst_row){
                while(i < w){
                    o.append_cell(null);
                    i++;
                }
                farst_row = false;
            }

            // 日付に該当するクラスが存在する時、そのクラス名を追加してセルを生成
            o.append_cell(o.schedule[d], d);

            // 週の最後の時、ループカウントを初期化する
            if(i < 6){
                i++;
            }else if(i == 6){
                i = 0;
            }

            // 日付を一日繰り送る
            from = from + after;
        }

        // 月末週が7日に足りてない場合、空のセルで埋める
        while(o.find("tr:last").children().length < 7){
            o.append_cell(null);
        }

        // カラムの一括色付け
        if(typeof o.dyeColumn !== "undefined"){
            o.find("tr:not(." + o.weekRowClass + ")").each(function(){
                $(this).children("td").each(function(){
                    index_num = $(this).parent().children().index(this);
                    if(typeof o.dyeColumn[index_num] !== "undefined"){
                        $(this).attr("class", o.dyeColumn[index_num]);
                    }
                });
            });
        }

    };
})(jQuery);