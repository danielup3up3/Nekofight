var rollbase = require('./rollbase.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

//////////////// 核心建造
	function main(Gmoney,StarStone,Decore) 
  
  ///基本變數(不要動)
		///基本變數
		let BonusGmoney10 = [];//50>G>=10
		let BonusGmoney50 = [];//150>G>=50
		let BonusGmoney150 = [];//300>G>=150
    let BonusStarStone0 = [];//5>星石>=0
    let BonusStarStone5 = [];//10>星石>=5
    let BonusStarStone10 = [];//星石>=10
    let BonusDecore10 = [];//100>=核心零件>=10
    let BonusDecore100 = [];//250>=核心零件>100
    let BonusDecore250 = [];//核心零件>250
    
    
    //判定
    
    if(Gmoney < 50 && Gmoney >= 10){
    
    BonusGmoney10.length = 6;
    BonusGmoney10 = ['☆A核心','☆B核心','☆☆H核心','☆☆☆☆S核心','☆☆K核心','☆☆☆M核心'];
    
    if(StarStone < 5 && StarStone >= 0){
    
    BonusStarStone0.length = 7;
    BonusStarStone0 = ['☆A核心','☆☆C核心','☆☆☆☆J核心','☆B核心','☆F核心','☆☆E核心','☆☆☆L核心'];
    
     if(Decore <= 100 && Decore >= 10){
    
    BonusDecore10.length = 6;
    BonusDecore10 = ['☆G核心','☆I核心','☆☆H核心','☆☆☆☆☆N核心','☆☆☆M核心','☆☆☆L核心'];
    
    }
    }
    
    
    }else if(Gmoney < 150 && Gmoney >= 50){
    
    BonusGmoney50.length = 4;
    BonusGmoney50 = ['☆☆C核心','☆☆☆D核心','☆G核心','☆☆☆☆☆N核心'];
    
    if(StarStone < 10 && StarStone >= 5){
    
    BonusStarStone5.length = 4;
    BonusStarStone5 = ['☆☆☆D核心','☆☆H核心','☆☆☆M核心','☆☆K核心'];
    
    if(Decore <= 250 && Decore > 100){
    
    BonusDecore100.length = 5;
    BonusDecore100 = ['☆A核心','☆☆C核心','☆☆☆D核心','☆☆☆E核心','☆F核心'];
    
    }
    }
    
    
     }else if(Gmoney < 300 && Gmoney >= 150){
    
    BonusGmoney150.length = 5;
    BonusGmoney150 = ['☆☆E核心','☆F核心','☆I核心','☆☆☆☆J核心','☆☆☆L核心'];
    
     if(StarStone >= 10){
    
    BonusStarStone10.length = 3;
    BonusStarStone10 = ['☆G核心','☆I核心','☆☆☆☆☆N核心'];
    
     if(Decore > 250){
    
    BonusDecore250.length = 3;
    BonusDecore250 = ['☆B核心','☆☆K核心','☆☆☆☆J核心'];
    
    }
    }
    
    }else{
				//設定說明文內容
				rply.text ='素材投入量出錯，請按照規定輸入';
        
        return rply;//中斷+回傳值用
		}
    
    
    
    
    
    


    
}

}
}
