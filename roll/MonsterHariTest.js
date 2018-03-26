var rollbase = require('./rollbase.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

//////////////// 
	function main(monsterHP) {
  
    let SkillOne = [];//技能1
		let SkillTwo = [];//技能2
		let SpecialSkill = [];//特殊技能
    
    var OneChance = 0;//技能1機率
		var TwoChance = 0;//技能2機率
		var SpecialChance = 0;//特殊技能機率
    
    
    //哈里HP 36/36
    if(monsterHP >= 30){
			//綠血區域時
			
			OneChance = 70;
			TwoChance = 30;
			SpecialChance = 0;
		
			//
			
			//設定綠血攻擊模式
			SkillOne.length = 1;
			SkillOne = ['星之射擊'];
			
			SkillTwo.length = 1;
			SkillTwo = ['掉落陷阱'];
			
			SpecialSkill.length = 1;
			SpecialSkill = ['斷罪流星'];
			
      
      }else if(monsterHP < 30 && monsterHP >= 12){
			//黃血區域
		
			OneChance = 40;
			TwoChance = 50;
			SpecialChance = 10;
			//
			
			//設定黃血攻擊模式
			SkillOne.length = 1;
			SkillOne = ['星之射擊'];
			
			SkillTwo.length = 1;
			SkillTwo = ['掉落陷阱'];
			
			SpecialSkill.length = 1;
			SpecialSkill = ['斷罪流星'];
			
		
    
    }else if(monsterHP < 12){
			//紅血區域
			
			OneChance = 0;
			TwoChance = 30;
			SpecialChance = 70;
			//
			
			//設定黃血攻擊模式
			SkillOne.length = 1;
			SkillOne = ['星之射擊'];
			
			SkillTwo.length = 1;
			SkillTwo = ['掉落陷阱'];
			
			SpecialSkill.length = 1;
			SpecialSkill = ['斷罪流星'];
      
      }else{
				//設定說明文內容
				rply.text ='錯誤002:輸入格式錯誤\
				\n 請確認後重試一次，如果仍有問題請通報Bug給GM知道';
				//
				
				return rply;//中斷+回傳值用
		}
    
    
    
    //分析行動
                var temp = rollbase.Dice(100); 
		if(temp > TwoChance + SpecialChance){
    
			rply.text = '哈里瞄準了你之後使用了 ' + SkillOne[Math.floor((Math.random() * (SkillOne.length)) + 0)] + ' ！';
      
		}else if(temp <=TwoChance + SpecialChance && temp >SpecialChance ){
    
			rply.text = '哈里已經在你即將踏上的地方設置了 ' + SkillTwo[Math.floor((Math.random() * (SkillTwo.length)) + 0)] + ' ！';
        
		}else if(temp <= SpecialChance){
			rply.text = '哈里使出了他的奧術終結技 ' + SpecialSkill[Math.floor((Math.random() * (SpecialSkill.length)) + 0)] + ' ！';
		}
		
		
		return rply;
		
		
		
	}
////////////////

module.exports = {
	main
};
    
    
  
