class player{
    constructor(){
        this.index=null;
        this.distance=0;
        this.name=null;
    }
    
    getcount(){
        var playercountref=database.ref('playercount');
        playercountref.on("value", (data)=> {
        playercount=data.val();
        })
    }

    updateCount(count){
    database.ref('/').update({
    playercount:count
    });
       } 

     updating()  {
         var playerindex="players/player"+playercount;
         database.ref(playerindex).set({
             name:this.name,
             distance:this.distance



         })
     }
     static getplayerinfo(){

       var playerinfo=database.ref('players');
       playerinfo.on("value",(dat)=>{
         players=dat.val();  
       })

     }
       

    }

       