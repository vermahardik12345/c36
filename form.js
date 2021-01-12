class form
{
    constructor(){
        this.input=createInput('Entername')
        this. button=createButton('PLAY');
        this. greeting=createElement('h3');
    
    }

    display(){
    var title=createElement('h2');
    title.html("CAR RACING GAME");
    title.position(150,10);
      
   
    this.input.position(350,150);
    this.button.position(350,250);
    
    this.button.mousePressed(()=>{

          
           player1.name=this.input.value();
           playercount=playercount+1;
           player1.updating();
           player1.updateCount(playercount);
           this.greeting.html("HELLO"     +name);
           this.greeting.position(450,180);
           this.input.hide();
           this.button.hide();
           
        }) 
            
        }
        
          hide(){
            this.input.hide();
            this.button.hide(); 
            this.greeting.hide();
          } 
        
    }

