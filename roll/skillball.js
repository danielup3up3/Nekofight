var rollbase = require('./rollbase.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

//////////////// 
	function main(stype) {
		
		let AttackResult = [];//結果
		let SkillResult = [];
		var times = 0;//出貨量

  
    let SkillOne = [];//技能1
		let SkillTwo = [];//技能2
		let SpecialSkill = [];//特殊技能
    
    var OneChance = 0;//技能1機率
		var TwoChance = 0;//技能2機率
		var SpecialChance = 0;//特殊技能機率
    
   
    if(stype == 1){
			//綠血區域時
			times = 1
	    
			OneChance = 100;
			TwoChance = 0;
			SpecialChance = 0;
		
			//
			
			//設定綠血攻擊模式
			SkillOne.length = 3;
			SkillOne = ['強攻','特殊','守護'];
			
			SkillTwo.length = 4;
			SkillTwo = ['【SR】無迷宮武=初始之弓','【SR】無迷宮武=回歸之槍','【SR】無迷宮武=虛無之杖','【SR】無宮武=斬夜之劍'];
			
			SpecialSkill.length = 4;
			SpecialSkill = ['【SSR】無迷宮武=初始之弓','【SSR】無迷宮武=回歸之槍','【SSR】無迷宮武=虛無之杖','【SSR】無宮武=斬夜之劍'];
			
      
      }else if(stype == 2){
			//黃血區域
		times = 2
	      
			OneChance = 100;
			TwoChance = 0;
			SpecialChance = 0;
		
			//
			
			//設定綠血攻擊模式
			SkillOne.length = 3;
			SkillOne = ['強攻','特殊','守護'];
			
			SkillTwo.length = 4;
			SkillTwo = ['【SR】無迷宮武=初始之弓','【SR】無迷宮武=回歸之槍','【SR】無迷宮武=虛無之杖','【SR】無宮武=斬夜之劍'];
			
			SpecialSkill.length = 4;
			SpecialSkill = ['【SSR】無迷宮武=初始之弓','【SSR】無迷宮武=回歸之槍','【SSR】無迷宮武=虛無之杖','【SSR】無宮武=斬夜之劍'];
		
    
    }else if(stype == 3){
			//紅血區域
			times = 3
	    
			OneChance = 100;
			TwoChance = 0;
			SpecialChance = 0;
		
			//
			
			//設定綠血攻擊模式
			SkillOne.length = 3;
			SkillOne = ['強攻','特殊','守護'];
			
			SkillTwo.length = 4;
			SkillTwo = ['【SR】無迷宮武=初始之弓','【SR】無迷宮武=回歸之槍','【SR】無迷宮武=虛無之杖','【SR】無宮武=斬夜之劍'];
			
			SpecialSkill.length = 4;
			SpecialSkill = ['【SSR】無迷宮武=初始之弓','【SSR】無迷宮武=回歸之槍','【SSR】無迷宮武=虛無之杖','【SSR】無宮武=斬夜之劍'];
      
      }else if(stype == 4){
			//紅血區域
			times = 4
	    
			OneChance = 100;
			TwoChance = 0;
			SpecialChance = 0;
		
			//
			
			//設定綠血攻擊模式
			SkillOne.length = 3;
			SkillOne = ['強攻','特殊','守護'];
			
			SkillTwo.length = 4;
			SkillTwo = ['【SR】無迷宮武=初始之弓','【SR】無迷宮武=回歸之槍','【SR】無迷宮武=虛無之杖','【SR】無宮武=斬夜之劍'];
			
			SpecialSkill.length = 4;
			SpecialSkill = ['【SSR】無迷宮武=初始之弓','【SSR】無迷宮武=回歸之槍','【SSR】無迷宮武=虛無之杖','【SSR】無宮武=斬夜之劍'];
      
      }else if(stype == 5){
			//紅血區域
			times = 5
	    
			OneChance = 100;
			TwoChance = 0;
			SpecialChance = 0;
		
			//
			
			//設定綠血攻擊模式
			SkillOne.length = 3;
			SkillOne = ['強攻','特殊','守護'];
			
			SkillTwo.length = 4;
			SkillTwo = ['【SR】無迷宮武=初始之弓','【SR】無迷宮武=回歸之槍','【SR】無迷宮武=虛無之杖','【SR】無宮武=斬夜之劍'];
			
			SpecialSkill.length = 4;
			SpecialSkill = ['【SSR】無迷宮武=初始之弓','【SSR】無迷宮武=回歸之槍','【SSR】無迷宮武=虛無之杖','【SSR】無宮武=斬夜之劍'];
      
      }else if(stype == 6){
				//設定說明文內容
				rply.text ='目前\
				\n 還沒有此模式';
				//
				
				return rply;//中斷+回傳值用
		}
      else{
				//設定說明文內容
				rply.text ='錯誤002:輸入格式錯誤\
				\n 請確認後重試一次，如果仍有問題請通報Bug給GM知道';
				//
				
				return rply;//中斷+回傳值用
		}
		
		 var temp = 0;
		AttackResult.length = times;
		
		for(var i = 0; i< times;i++){
			
			AttackResult[i] = '\n';
			
		}
    
    
    
    //分析行動
               
    for(var i=0; i< times;i++){
		temp = rollbase.Dice(100);

		if(temp > TwoChance + SpecialChance){
    
			SkillResult[i] = SkillOne[Math.floor((Math.random() * (SkillOne.length)) + 0)];
				AttackResult[i] =  '\【技能珠】:' +  SkillResult[i]+ '\n';
      
		}else if(temp <=TwoChance + SpecialChance && temp >SpecialChance ){
    
			SkillResult[i] = SkillTwo[Math.floor((Math.random() * (SkillTwo.length)) + 0)];
				AttackResult[i] =  '\【武器】:' +  SkillResult[i]+ '\n';
        
		}else if(temp <= SpecialChance){
			
			SkillResult[i] = SpecialSkill[Math.floor((Math.random() * (SpecialSkill.length)) + 0)];
				AttackResult[i] =  '\【武器】:' +  SkillResult[i]+ '\n';
		}
		
		
       let SKesult ='結果:\n'
		for(var i = 0;i<times;i++){
			SKesult = SKesult + AttackResult[i];
		}
		
		
		rply.text = SKesult;
		
		return rply;
    
		
		
		
	}
	
		
		
		
	}
////////////////

module.exports = {
	main
};
