var rollbase = require('./rollbase.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

//////////////// 核心建造
	function main(Gmoney,StarStone,Decore) {
  
  ///基本變數(不要動)
		///基本變數
		let Gmoneylist = [];
                let Stonelist = [];
                let Decorelist = [];
    
    
    //判定
    
    if(Gmoney < 50 && Gmoney >= 10){
    
    Gmoneylist.length = 13;
    Gmoneylist = ['☆阿瑞斯之心','☆阿瑞斯之心','☆森之御守','☆森之御守','☆南瓜耳飾','☆南瓜耳飾','☆☆王的勝利指環','☆☆王的勝利指環','☆☆王的勝利指環','☆☆王的勝利指環','☆☆心之雲彩','☆☆心之雲彩','☆☆☆銀河筆記'];
    
    if(StarStone < 5 && StarStone >= 0){
    
    Stonelist.length = 13;
    Stonelist = ['☆阿瑞斯之心','☆阿瑞斯之心','☆阿瑞斯之心','☆☆迷失的左眼','☆☆☆☆阿希卡斯的八音盒','☆森之御守','☆森之御守','☆森之御守','☆南瓜耳飾','☆☆☆流星收集之籃','☆☆☆☆七色之虹','☆☆☆☆七色之虹','☆☆☆☆七色之虹'];
    
    if(Decore <= 100 && Decore >= 10){
    
    Decorelist.length = 11;
    Decorelist = ['☆阿瑞斯之心','☆南瓜耳飾','☆☆王的勝利指環','☆☆心之雲彩','☆☆心之雲彩','☆☆心之雲彩','☆☆心之雲彩','☆☆☆☆☆時間的備份','☆☆☆銀河筆記','☆☆☆銀河筆記','☆☆☆夜鷹'];
    
    }
    }
    
    
    }else if(Gmoney < 150 && Gmoney >= 50){
    
    Gmoneylist.length = 14;
    Gmoneylist = ['☆☆☆流星收集之籃','☆☆☆流星收集之籃','☆☆☆創世主的手信','☆☆☆創世主的手信','☆☆☆創世主的手信','☆☆☆夜鷹','☆南瓜耳飾','☆南瓜耳飾','☆南瓜耳飾','☆☆心之雲彩','☆☆心之雲彩','☆☆心之雲彩','☆☆心之雲彩','☆☆☆☆☆時間的備份'];
    
    if(StarStone < 10 && StarStone >= 5){
    
    Stonelist.length = 9;
    Stonelist = ['☆☆☆烽燠神','☆☆王的勝利指環','☆☆王的勝利指環','☆☆王的勝利指環','☆☆☆☆七色之虹','☆☆☆☆七色之虹','☆☆夢之夏日祭','☆☆夢之夏日祭','☆☆夢之夏日祭'];
    
    if(Decore <= 250 && Decore > 100){
    
    Decorelist.length = 11;
    Decorelist = ['☆水星轉輪','☆水星轉輪','☆水星轉輪','☆☆心之雲彩','☆☆☆烽燠神','☆☆☆夜鷹','☆☆☆夜鷹','☆另一個世界','☆另一個世界','☆另一個世界','☆另一個世界'];
    
    }
    }
    
    
     }else if(Gmoney < 300 && Gmoney >= 150){
    
    Gmoneylist.length = 13;
    Gmoneylist = ['☆☆天使之翼','☆☆天使之翼','☆☆天使之翼','☆Leap in the Air','☆另一個世界','☆另一個世界','☆另一個世界','☆另一個世界','☆另一個世界','☆☆☆☆阿希卡斯的八音盒','☆☆☆☆阿希卡斯的八音盒','☆☆☆☆阿希卡斯的八音盒','☆☆☆☆阿希卡斯的八音盒'];
    
     if(StarStone >= 10){
    
    Stonelist.length = 7;
    Stonelist = ['☆Leap in the Air','☆Leap in the Air','☆Leap in the Air','☆另一個世界','☆另一個世界','☆另一個世界','☆☆☆☆七色之虹'];
    
     if(Decore > 250){
    
    Decorelist.length = 12;
    Decorelist = ['☆載夜小舟','☆載夜小舟','☆載夜小舟','☆載夜小舟','☆載夜小舟','☆☆公車耳飾','☆☆☆☆七色之虹','☆☆夢之夏日祭','☆☆夢之夏日祭','☆☆公車耳飾','☆☆公車耳飾','☆☆公車耳飾'];
    
    }
    }
    
    }else{
				//設定說明文內容
				rply.text ='素材投入量出錯，請按照規定輸入';
        
        return rply;//中斷+回傳值用
		}
    
    
    let CorEresult = [];

CorEresult.length = Gmoneylist.length + Stonelist.length  + Decorelist.length;

CorEresult = Gmoneylist.concat(Stonelist,Decorelist);


    
    rply.text = '太棒了！！\
		\n你獲得了寶飾「' + CorEresult[Math.floor((Math.random() * (CorEresult.length)))] + '」';
    
return rply;

    

	}
////////////////

module.exports = {
	main
};
