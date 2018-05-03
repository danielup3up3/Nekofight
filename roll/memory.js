var rollbase = require('./rollbase.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

////////////////抽卡數
	function main(pokercard) {
  
               //基本變數
		let GachaResult = [];//結果
		let cardResult = [];
		var times = 0;//次數

	//基本變數
		let Rulistdiamond = [];  //藍色
                let Rulistheart = [];  //紅色
                let Rulistspade = [];  //紫色
                let Rulistclubs = [];  //金色
                let RulistJOKER = [];  //
    
    var diamondChance = 0;//C獲得率
    var heartChance = 0;//B獲得率
    var spadeChance = 0;//A獲得率
    var clubsChance = 0;//S獲得率
    var JOKERChance = 0;//SS獲得率
    
    
    //確定遊戲階段
		
		if(pokercard == '開啟'){
			//設定基本變數
      
			//出現卡片
                        times = 6;
      
			diamondChance = 30;
			heartChance = 30;
			spadeChance = 30;
			clubsChance = 10;
			JOKERChance = 0;
			//
			
			//設定獎勵內容
			Rulistdiamond.length = 1;
			Rulistdiamond = ['藍色碎片'];
			
			Rulistheart.length = 1;
			Rulistheart = ['紅色碎片'];
			
			Rulistspade.length = 1;
			Rulistspade = ['紫色碎片'];
      
      Rulistclubs.length = 1;
			Rulistclubs = ['金色碎片'];
      
      RulistJOKER.length = 1;
			RulistJOKER = ['無'];
      
      
      
     } else if(pokercard == '重啟'){
				times = 6;
        
     diamondChance = 0;
			heartChance = 30;
			spadeChance = 30;
			clubsChance = 30;
			JOKERChance = 10;
			//
			
			//設定獎勵內容
			Rulistdiamond.length = 1;
			Rulistdiamond = ['藍色碎片'];
			
			Rulistheart.length = 1;
			Rulistheart = ['紅色碎片'];
			
			Rulistspade.length = 1;
			Rulistspade = ['紫色碎片'];
      
      Rulistclubs.length = 1;
			Rulistclubs = ['金色碎片'];
      
      RulistJOKER.length = 1;
			RulistJOKER = ['無'];
      
      }else{//設定說明文內容
				rply.text ='無法支援'+ pokercard + '類型的抽卡喔!\
				\n 請輸入開啟或重啟';
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
				GachaResult[i] = '\~' +  cardResult[i]+ '\n';
				
			}else if(temp <=heartChance+spadeChance+clubsChance+JOKERChance && temp > spadeChance+clubsChance+JOKERChance){
				
				cardResult[i] = Rulistheart[Math.floor((Math.random() * (Rulistheart.length)) + 0)];
				GachaResult[i] = '\~' +  cardResult[i]+ '\n';
				
			}else if(temp <= spadeChance+clubsChance+JOKERChance && temp > clubsChance+JOKERChance){
				
				cardResult[i] = Rulistspade[Math.floor((Math.random() * (Rulistspade.length)) + 0)];
				GachaResult[i] = '\~' +  cardResult[i]+ '\n';
				
			}else if(temp <= clubsChance+JOKERChance && temp >JOKERChance){
				
				cardResult[i] = Rulistclubs[Math.floor((Math.random() * (Rulistclubs.length)) + 0)];
				GachaResult[i] = '\~' +  cardResult[i]+ '\n';
				
			}else if(temp <= JOKERChance){
				
				cardResult[i] = RulistJOKER[Math.floor((Math.random() * (RulistJOKER.length)) + 0)];
				GachaResult[i] = '\~' +  cardResult[i]+ '\n';
				
			}
		}//通常手卡處理	
    
    let GResult ='出現結果:\n'
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
