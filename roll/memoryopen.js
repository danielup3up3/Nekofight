var rollbase = require('./rollbase.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

////////////////抽卡數
	function main(pokercard) {
  
               //基本變數
		let GachaResult = [];//結果
		let cardResult = [];
		var times = 0;//次數

	//基本變數
		let Rulistdiamond = [];  //1000G
                let Rulistheart = [];  //
                let Rulistspade = [];  //
                let Rulistclubs = [];  //
                let RulistJOKER = [];  //
    
    var diamondChance = 0;//獲得率
    var heartChance = 0;//獲得率
    var spadeChance = 0;//獲得率
    var clubsChance = 0;//獲得率
    var JOKERChance = 0;//獲得率
    
    
    //確定遊戲階段
		
		if(pokercard == '藍色'){
			//設定基本變數
      
			//出現卡片
                        times = 1;
      
			diamondChance = 43;//綠色稀有影裝+C級神器使
			heartChance = 32;//B級神器使+藍色稀有影裝+藍色影裝+紫色影裝
			spadeChance = 14;//A.S碎片
			clubsChance = 9;//A完整+8歐泊+紫色稀有影裝
			JOKERChance = 2;//S完整+金色影裝
			//
			
			//設定獎勵內容
			Rulistdiamond.length = 2;
			Rulistdiamond = ['【稀有】綠色影裝','【C】神器使'];
			
			Rulistheart.length = 4;
			Rulistheart = ['【B】神器使','【稀有】藍色影裝','藍色影裝','紫色影裝'];
			
			Rulistspade.length = 5;
			Rulistspade = ['【A】神器使碎片1','【A】神器使碎片2','【S】神器使碎片1','【S】神器使碎片2','【S】神器使碎片3'];
      
      Rulistclubs.length = 3;
			Rulistclubs = ['【A】神器使(完整)','歐泊*8','【稀有】紫色影裝'];
      
      RulistJOKER.length = 2;
			RulistJOKER = ['【S】神器使(完整)','金色影裝'];
      
      
      
     } else if(pokercard == '紅色'){
        
     times = 1;
      
			diamondChance = 43;//綠色稀有影裝+C級神器使
			heartChance = 32;//B級神器使+藍色稀有影裝+藍色影裝+紫色影裝
			spadeChance = 14;//A.S碎片
			clubsChance = 9;//A完整+8歐泊+紫色稀有影裝
			JOKERChance = 2;//S完整+金色影裝
			//
			
			//設定獎勵內容
			Rulistdiamond.length = 2;
			Rulistdiamond = ['【稀有】綠色影裝','【C】神器使'];
			
			Rulistheart.length = 4;
			Rulistheart = ['【B】神器使','【稀有】藍色影裝','藍色影裝','紫色影裝'];
			
			Rulistspade.length = 5;
			Rulistspade = ['【A】神器使碎片1','【A】神器使碎片2','【S】神器使碎片1','【S】神器使碎片2','【S】神器使碎片3'];
      
      Rulistclubs.length = 3;
			Rulistclubs = ['【A】神器使(完整)','歐泊*8','【稀有】紫色影裝'];
      
      RulistJOKER.length = 2;
			RulistJOKER = ['【S】神器使(完整)','金色影裝'];
			
     
     
      } else if(pokercard == '紫色'){
				times = 1;
      
			diamondChance = 43;//綠色稀有影裝+C級神器使
			heartChance = 32;//B級神器使+藍色稀有影裝+藍色影裝+紫色影裝
			spadeChance = 14;//A.S碎片
			clubsChance = 9;//A完整+8歐泊+紫色稀有影裝
			JOKERChance = 2;//S完整+金色影裝
			//
			
			//設定獎勵內容
			Rulistdiamond.length = 2;
			Rulistdiamond = ['【稀有】綠色影裝','【C】神器使'];
			
			Rulistheart.length = 4;
			Rulistheart = ['【B】神器使','【稀有】藍色影裝','藍色影裝','紫色影裝'];
			
			Rulistspade.length = 5;
			Rulistspade = ['【A】神器使碎片1','【A】神器使碎片2','【S】神器使碎片1','【S】神器使碎片2','【S】神器使碎片3'];
      
      Rulistclubs.length = 3;
			Rulistclubs = ['【A】神器使(完整)','歐泊*8','【稀有】紫色影裝'];
      
      RulistJOKER.length = 2;
			RulistJOKER = ['【S】神器使(完整)','金色影裝'];
      


      } else if(pokercard == '金色'){
				times = 1;
      
			diamondChance = 25;//紫色影裝
			heartChance = 35;//A碎片
			spadeChance = 24;//S碎片+紫色稀有影裝
			clubsChance = 14;//A完整
			JOKERChance = 2;//S完整+金色影裝
			//
			
			//設定獎勵內容
			Rulistdiamond.length = 1;
			Rulistdiamond = ['紫色影裝'];
			
			Rulistheart.length = 2;
			Rulistheart = ['【A】神器使碎片1','【A】神器使碎片2'];
			
			Rulistspade.length = 4;
			Rulistspade = ['【稀有】紫色影裝','【S】神器使碎片1','【S】神器使碎片2','【S】神器使碎片3'];
      
      Rulistclubs.length = 1;
			Rulistclubs = ['【A】神器使(完整)'];
      
      RulistJOKER.length = 2;
			RulistJOKER = ['【S】神器使(完整)','金色影裝'];
      
      }else{//設定說明文內容
				rply.text ='無法支援'+ pokercard + '類型的抽卡喔!\
				\n 請選擇藍色或紅色或紫色或金色';
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
    
    let GResult ='開啟結果:\n'
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
