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
    
    Gmoneylist.length = 6;
    Gmoneylist = ['☆A核心','☆B核心','☆☆H核心','☆☆☆☆S核心','☆☆K核心','☆☆☆M核心'];
    
    if(StarStone < 5 && StarStone >= 0){
    
    Stonelist.length = 7;
    Stonelist = ['☆A核心','☆☆C核心','☆☆☆☆J核心','☆B核心','☆F核心','☆☆E核心','☆☆☆L核心'];
    
    if(Decore <= 100 && Decore >= 10){
    
    Decorelist.length = 6;
    Decorelist = ['☆G核心','☆I核心','☆☆H核心','☆☆☆☆☆N核心','☆☆☆M核心','☆☆☆L核心'];
    
    }
    }
    
    
    }else if(Gmoney < 150 && Gmoney >= 50){
    
    Gmoneylist.length = 4;
    Gmoneylist = ['☆☆C核心','☆☆☆D核心','☆G核心','☆☆☆☆☆N核心'];
    
    if(StarStone < 10 && StarStone >= 5){
    
    Stonelist.length = 4;
    Stonelist = ['☆☆☆D核心','☆☆H核心','☆☆☆M核心','☆☆K核心'];
    
    if(Decore <= 250 && Decore > 100){
    
    Decorelist.length = 5;
    Decorelist = ['☆A核心','☆☆C核心','☆☆☆D核心','☆☆☆E核心','☆F核心'];
    
    }
    }
    
    
     }else if(Gmoney < 300 && Gmoney >= 150){
    
    Gmoneylist.length = 5;
    Gmoneylist = ['☆☆E核心','☆F核心','☆I核心','☆☆☆☆J核心','☆☆☆L核心'];
    
     if(StarStone >= 10){
    
    Stonelist.length = 3;
    Stonelist = ['☆G核心','☆I核心','☆☆☆☆☆N核心'];
    
     if(Decore > 250){
    
    Decorelist.length = 3;
    Decorelist = ['☆B核心','☆☆K核心','☆☆☆☆J核心'];
    
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
		\n你獲得了核心「' + CorEresult[Math.floor((Math.random() * (CorEresult.length)))] + '」';
    
return rply;

    

	}
////////////////

module.exports = {
	main
};
