var rollbase = require('./rollbase.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

////////////////抽卡數
	function main(pokercard) {
  
               //基本變數
		let GachaResult = [];//結果
		let cardResult = [];
		var times = 0;//次數

	//基本變數
		let Rulistdiamond = [];  //C
                let Rulistheart = [];  //B
                let Rulistspade = [];  //A
                let Rulistclubs = [];  //S
                let RulistJOKER = [];  //SS
    
    var diamondChance = 0;//C獲得率
    var heartChance = 0;//B獲得率
    var spadeChance = 0;//A獲得率
    var clubsChance = 0;//S獲得率
    var JOKERChance = 0;//SS獲得率
    
    
    //確定遊戲階段
		
		if(pokercard == '普通'){
			//設定基本變數
      
			//出現卡片
                        times = 4;
      
			diamondChance = 35;
			heartChance = 30;
			spadeChance = 25;
			clubsChance = 9;
			JOKERChance = 1;
			//
			
			//設定獎勵內容
			Rulistdiamond.length = 5;
			Rulistdiamond = ['裝備者傷害係數+5%','傷害係數+50','裝備者HP+100','傷害係數+80','裝備者的NP歸0時給予敵人500點固定傷害'];
			
			Rulistheart.length = 5;
			Rulistheart = ['裝備者傷害係數+10%','傷害係數+100','裝備者HP+200','裝備者技能NP/MP消耗量-5','裝備者的NP歸0時給予敵人一發傷害係數x3的傷害'];
			
			Rulistspade.length = 5;
			Rulistspade = ['裝備者傷害係數+20%','傷害係數+300','裝備者HP+400','裝備者技能NP/MP消耗量-10','裝備者持續型技能效果持續回合+1'];
      
      Rulistclubs.length = 5;
			Rulistclubs = ['裝備者傷害係數+30%','傷害係數+500','裝備者HP+800','技能風步成功率+10%','所有冷卻型技能CD-1'];
      
      RulistJOKER.length = 1;
			RulistJOKER = ['裝備者死亡時滿血滿NP復活一次(一場一次)'];
      
      
      
     } else if(pokercard == '迷宮'){
				times = 5;
        
     diamondChance = 35;
			heartChance = 30;
			spadeChance = 25;
			clubsChance = 9;
			JOKERChance = 1;
			//
			
			//設定獎勵內容
			Rulistdiamond.length = 5;
			Rulistdiamond = ['裝備者傷害係數+10%','傷害係數+100','裝備者HP+150','傷害係數+150','裝備者的NP歸0時給予敵人700點固定傷害'];
			
			Rulistheart.length = 5;
			Rulistheart = ['裝備者傷害係數+15%','傷害係數+300','裝備者HP+250','裝備者技能NP/MP消耗量-5','裝備者的NP歸0時給予敵人一發傷害係數x3的傷害'];
			
			Rulistspade.length = 5;
			Rulistspade = ['裝備者傷害係數+30%','傷害係數+500','裝備者HP+400','裝備者技能NP/MP消耗量-10','裝備者持續型技能效果持續回合+1'];
      
      Rulistclubs.length = 5;
			Rulistclubs = ['裝備者傷害係數+50%','傷害係數+700','裝備者HP+800','技能風步成功率+10%','所有冷卻型技能CD-1'];
      
      RulistJOKER.length = 1;
			RulistJOKER = ['裝備者死亡時滿血滿NP復活一次(一場一次)'];
      }
			
     
     
      //設定說明文
			else if(pokercard == null){
				
				//設定說明文內容
				rply.text =  '【武器鑑定】 \
					\n 可以選擇的附魔鑑定武器有\
					\n 普通跟迷宮。\
					\n 規則:\
                                        \n 1.玩家選擇完基底武器後消耗一個相同的武器或是1個光輝之星進行鑑定。\
                                        \n 2.武器需先達到+5或以上的強化等級才能進行附魔鑑定，鑑定完後，武器的強化效果不會消失\
                                        \n 3.一旦鑑定後，武器就不能用道具清空重洗強化數值了，請注意。\
                                        \n 4.如果鑑定結果不滿意，可以再消耗一個相同的武器或是1個光輝之星重新鑑定。\
                                        \n 5.每把武器排除第一次鑑定，最多只能重新鑑定9次，也就是總共10次。';
				//
				
				return rply;//中斷+回傳值用
			
      
      }else{//設定說明文內容
				rply.text ='無法支援'+ pokercard + '類型的鑑定喔!\
				\n 請選擇普通或迷宮';
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
				GachaResult[i] = '\【C階】' +  cardResult[i]+ '\n';
				
			}else if(temp <=heartChance+spadeChance+clubsChance+JOKERChance && temp > spadeChance+clubsChance+JOKERChance){
				
				cardResult[i] = Rulistheart[Math.floor((Math.random() * (Rulistheart.length)) + 0)];
				GachaResult[i] = '\【B階】' +  cardResult[i]+ '\n';
				
			}else if(temp <= spadeChance+clubsChance+JOKERChance && temp > clubsChance+JOKERChance){
				
				cardResult[i] = Rulistspade[Math.floor((Math.random() * (Rulistspade.length)) + 0)];
				GachaResult[i] = '\【A階】' +  cardResult[i]+ '\n';
				
			}else if(temp <= clubsChance+JOKERChance && temp >JOKERChance){
				
				cardResult[i] = Rulistclubs[Math.floor((Math.random() * (Rulistclubs.length)) + 0)];
				GachaResult[i] = '\【S階】' +  cardResult[i]+ '\n';
				
			}else if(temp <= JOKERChance){
				
				cardResult[i] = RulistJOKER[Math.floor((Math.random() * (RulistJOKER.length)) + 0)];
				GachaResult[i] = '\【SS階】' +  cardResult[i]+ '\n';
				
			}
		}//通常手卡處理	
    
    let GResult ='鑑定結果:\n'
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
