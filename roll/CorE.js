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
    Gmoneylist = ['☆風之靈衣','☆風之靈衣','☆風之靈衣','☆載夜小舟','☆載夜小舟','☆載夜小舟','☆☆光輝之劍','☆☆光輝之劍','☆☆光輝之劍','☆☆光輝之劍','☆☆光輝之劍','☆☆符文石','☆☆☆自我修補系統'];
    
    if(StarStone < 5 && StarStone >= 0){
    
    Stonelist.length = 13;
    Stonelist = ['☆風之靈衣','☆風之靈衣','☆風之靈衣','☆☆魔女的掃帚','☆☆☆☆破魔劍','☆載夜小舟','☆載夜小舟','☆載夜小舟','☆魔導學徒帽','☆☆☆海之加護','☆☆☆☆不死的邪穢','☆☆☆☆不死的邪穢','☆☆☆☆不死的邪穢'];
    
    if(Decore <= 100 && Decore >= 10){
    
    Decorelist.length = 11;
    Decorelist = ['☆魔法螺旋','☆邪龍槍','☆☆光輝之劍','☆☆高速填充','☆☆高速填充','☆☆高速填充','☆☆高速填充','☆☆☆☆☆神異世界','☆☆☆自我修補系統','☆☆☆自我修補系統','☆☆☆大地精靈術'];
    
    }
    }
    
    
    }else if(Gmoney < 150 && Gmoney >= 50){
    
    Gmoneylist.length = 14;
    Gmoneylist = ['☆☆☆海之加護','☆☆☆海之加護','☆☆☆海之加護','☆☆☆自我修補系統','☆☆☆自我修補系統','☆☆☆自我修補系統','☆魔法螺旋','☆魔法螺旋','☆魔法螺旋','☆☆高速填充','☆☆高速填充','☆☆高速填充','☆☆高速填充','☆☆☆☆☆神異世界'];
    
    if(StarStone < 10 && StarStone >= 5){
    
    Stonelist.length = 9;
    Stonelist = ['☆☆☆大地精靈術','☆☆光輝之劍','☆☆光輝之劍','☆☆光輝之劍','☆☆☆☆不死的邪穢','☆☆☆☆不死的邪穢','☆☆符文石','☆☆符文石','☆☆符文石'];
    
    if(Decore <= 250 && Decore > 100){
    
    Decorelist.length = 11;
    Decorelist = ['☆風之靈衣','☆風之靈衣','☆風之靈衣','☆☆魔女的掃帚','☆☆☆自我修補系統','☆☆☆海之加護','☆☆☆海之加護','☆魔導學徒帽','☆魔導學徒帽','☆魔導學徒帽','☆魔導學徒帽'];
    
    }
    }
    
    
     }else if(Gmoney < 300 && Gmoney >= 150){
    
    Gmoneylist.length = 13;
    Gmoneylist = ['☆☆魔女的掃帚','☆☆魔女的掃帚','☆☆魔女的掃帚','☆魔導學徒帽','☆邪龍槍','☆邪龍槍','☆邪龍槍','☆邪龍槍','☆邪龍槍','☆☆☆☆破魔劍','☆☆☆☆破魔劍','☆☆☆☆破魔劍','☆☆☆☆破魔劍'];
    
     if(StarStone >= 10){
    
    Stonelist.length = 7;
    Stonelist = ['☆魔法螺旋','☆魔法螺旋','☆魔法螺旋','☆邪龍槍','☆邪龍槍','☆邪龍槍','☆☆☆☆不死的邪穢'];
    
     if(Decore > 250){
    
    Decorelist.length = 12;
    Decorelist = ['☆載夜小舟','☆載夜小舟','☆載夜小舟','☆載夜小舟','☆載夜小舟','☆☆符文石','☆☆☆☆破魔劍','☆☆符文石','☆☆符文石','☆☆符文石','☆☆符文石','☆☆符文石'];
    
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
