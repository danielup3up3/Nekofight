var rollbase = require('./rollbase.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

//////////////// 核心建造
	function main(Gmoney,StarStone,Decore) 
  
  ///基本變數(不要動)
		///基本變數

		let BonusGmoney = [];
                let BonusStarStone = [];
                let BonusDecore = [];
    
    
    //判定
    
    if(Gmoney < 50 && Gmoney >= 10){
    
    BonusGmoney.length = 6;
    BonusGmoney = ['☆A核心','☆B核心','☆☆H核心','☆☆☆☆S核心','☆☆K核心','☆☆☆M核心'];
    
    if(StarStone < 5 && StarStone >= 0){
    
    BonusStarStone.length = 7;
    BonusStarStone = ['☆A核心','☆☆C核心','☆☆☆☆J核心','☆B核心','☆F核心','☆☆E核心','☆☆☆L核心'];
    
    if(Decore <= 100 && Decore >= 10){
    
    BonusDecore.length = 6;
    BonusDecore = ['☆G核心','☆I核心','☆☆H核心','☆☆☆☆☆N核心','☆☆☆M核心','☆☆☆L核心'];
    
    }
    }
    
    
    }else if(Gmoney < 150 && Gmoney >= 50){
    
    BonusGmoney.length = 4;
    BonusGmoney = ['☆☆C核心','☆☆☆D核心','☆G核心','☆☆☆☆☆N核心'];
    
    if(StarStone < 10 && StarStone >= 5){
    
    BonusStarStone.length = 4;
    BonusStarStone = ['☆☆☆D核心','☆☆H核心','☆☆☆M核心','☆☆K核心'];
    
    if(Decore <= 250 && Decore > 100){
    
    BonusDecore.length = 5;
    BonusDecore = ['☆A核心','☆☆C核心','☆☆☆D核心','☆☆☆E核心','☆F核心'];
    
    }
    }
    
    
     }else if(Gmoney < 300 && Gmoney >= 150){
    
    BonusGmoney.length = 5;
    BonusGmoney = ['☆☆E核心','☆F核心','☆I核心','☆☆☆☆J核心','☆☆☆L核心'];
    
     if(StarStone >= 10){
    
    BonusStarStone.length = 3;
    BonusStarStone = ['☆G核心','☆I核心','☆☆☆☆☆N核心'];
    
     if(Decore > 250){
    
    BonusDecore.length = 3;
    BonusDecore = ['☆B核心','☆☆K核心','☆☆☆☆J核心'];
    
    }
    }
    
    }else{
				//設定說明文內容
				rply.text ='素材投入量出錯，請按照規定輸入';
        
        return rply;//中斷+回傳值用
		}
    
    
    let CorEresult = [];

CorEresult.length = BonusGmoney.length + BonusStarStone.length  + BonusDecore.length;

CorEresult = BonusGmoney.concat(BonusStarStone,BonusDecore);


    
    rply.text = '太棒了！！\
		\n你獲得了核心「' + CorEresult[Math.floor((Math.random() * (CorEresult.length)))] + '」';
    
return rply;

    


////////////////

module.exports = {
	main
};
