var rollbase = require('./rollbase.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

////////////////抽卡數
	function main(pokercard) {
  
               //基本變數
		let GachaResult = [];//結果
		let cardResult = [];
		var times = 0;//次數

	//基本變數
		let Rulistdiamond = [];  //方塊
                let Rulistheart = [];  //紅心
                let Rulistspade = [];  //黑桃
                let Rulistclubs = [];  //梅花
                let RulistJOKER = [];  //鬼牌
    
    var diamondChance = 0;//方塊獲得率
    var heartChance = 0;//紅心獲得率
    var spadeChance = 0;//黑桃獲得率
    var clubsChance = 0;//梅花獲得率
    var JOKERChance = 0;//鬼牌獲得率
    
    
    //確定遊戲階段
		
		if(pokercard == '單張'){
			//設定基本變數
      
			//出現卡片
                        times = 1;
      
			diamondChance = 24;
			heartChance = 24;
			spadeChance = 24;
			clubsChance = 24;
			JOKERChance = 4;
			//
			
			//設定獎勵內容
			Rulistdiamond.length = 13;
			Rulistdiamond = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
			
			Rulistheart.length = 13;
			Rulistheart = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
			
			Rulistspade.length = 13;
			Rulistspade = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
      
      Rulistclubs.length = 13;
			Rulistclubs = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
      
      RulistJOKER.length = 1;
			RulistJOKER = ['JOKER'];
      
      
      
     } else if(pokercard == '五張'){
				times = 5;
        
                        diamondChance = 24;
			heartChance = 24;
			spadeChance = 24;
			clubsChance = 24;
			JOKERChance = 4;
			//
			
			//設定獎勵內容
			Rulistdiamond.length = 13;
			Rulistdiamond = ['7','2','3','4','5','6','7','8','9','10','J','Q','7'];
			
			Rulistheart.length = 13;
			Rulistheart = ['7','2','3','4','5','6','7','8','9','10','J','Q','7'];
			
			Rulistspade.length = 13;
			Rulistspade = ['7','2','3','4','5','6','7','8','9','10','J','Q','7'];
      
                        Rulistclubs.length = 13;
			Rulistclubs = ['7','2','3','4','5','6','7','8','9','10','J','Q','7'];
      
                        RulistJOKER.length = 1;
			RulistJOKER = ['JOKER'];
      
      }
			
     
     
      //設定說明文
			else if(pokercard == null){
				
				//設定說明文內容
				rply.text =  '【賭博之城】 皇帝撲克\
					\n 可以選擇的模式有\
					\n 單張跟5張。\
					\n 規則:\
                                        \n 1.玩家選擇完模式後會從牌庫隨機得到對應數量的撲克。\
                                        \n 2.單張的玩家將可以用獲得的卡片自由決定比大或比小，輸入:(撲克比試 要出的卡)，來跟沙希進行一輪的勝負。\
                                        \n 3.五張的規則如上，只是需比5輪，可以自由選擇5張手卡各自的出卡順序，並根據自己贏下的局數決定獲得的獎金。\
                                        \n 獎金:\
                                        \n 單張模式=下注金額*5。\
                                        \n 五張模式=每贏一局獲得下注金額*1。\
                                        \n 鬼牌可以當任何牌用。\
                                        \n 大小:A>K>Q>J>10>9>8>7>6>5>4>3>2 \
                                        \n 單張模式會看花色，五張模式不看 \
                                        \n 五張模式若連贏5局，總獎金直接翻倍';
				//
				
				return rply;//中斷+回傳值用
			
      
      }else{//設定說明文內容
				rply.text ='無法支援'+ pokercard + '撲克的比試喔!\
				\n 請選擇單張或五張';
				//
				
				return rply;//中斷+回傳值用
		
			
      
     
     
      }
     var temp = 0;
		GachaResult.length = times;
		
		for(var i = 0; i< times;i++){
			
			GachaResult[i] = '\n';
			
		}
    
    for(var i=0; i< times;i++){
			temp = rollbase.Dice(100);

			if(temp <=diamondChance+heartChance+spadeChance+clubsChance+JOKERChance && temp >heartChance+spadeChance+clubsChance+JOKERChance){
				
				cardResult[i] = Rulistdiamond[Math.floor((Math.random() * (Rulistdiamond.length)) + 0)];
				GachaResult[i] = '\方塊' +  cardResult[i]+ '\n';
				
			}else if(temp <=heartChance+spadeChance+clubsChance+JOKERChance && temp > spadeChance+clubsChance+JOKERChance){
				
				cardResult[i] = Rulistheart[Math.floor((Math.random() * (Rulistheart.length)) + 0)];
				GachaResult[i] = '\紅心' +  cardResult[i]+ '\n';
				
			}else if(temp <= spadeChance+clubsChance+JOKERChance && temp > clubsChance+JOKERChance){
				
				cardResult[i] = Rulistspade[Math.floor((Math.random() * (Rulistspade.length)) + 0)];
				GachaResult[i] = '\黑桃' +  cardResult[i]+ '\n';
				
			}else if(temp <= clubsChance+JOKERChance && temp >JOKERChance){
				
				cardResult[i] = Rulistclubs[Math.floor((Math.random() * (Rulistclubs.length)) + 0)];
				GachaResult[i] = '\梅花' +  cardResult[i]+ '\n';
				
			}else if(temp <= JOKERChance){
				
				cardResult[i] = RulistJOKER[Math.floor((Math.random() * (RulistJOKER.length)) + 0)];
				GachaResult[i] = '\鬼牌' +  cardResult[i]+ '\n';
				
			}
		}//通常手卡處理	
    
    let GResult ='你的手卡:\n'
		for(var i = 0;i<times;i++){
			GResult = GResult + GachaResult[i];
		}
		
		
		rply.text = GResult;
		
		return rply;
		
		
		
	}

    
    

////////////////

module.exports = {
	main
};
