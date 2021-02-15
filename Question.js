class Question
{
    constructor()
    {
       this.title = createElement('h1');
       this.input1 = createInput("Enter your name here....");
       this.input2 = createInput("Enter Correct option here....");
       this.button = createButton('Submit');
       this.question = createElement('h3');
       this.option1 = createElement('h4');
       this.option2 = createElement('h4');
       this.option3 = createElement('h4');
       this.option4 = createElement('h4');
    }
   display() 
   {
       this.title.html("My Quiz Game")
       this.title.position(400,30)

       this.question.html("Question:- You walk into a dark room. What would you light first")
       this.question.position(400,100);
       this.option1.html("1: A Candle")
       this.option1.position(500,120);
       this.option2.html("2: A Kerosene Lamp")
       this.option2.position(500,140);
       this.option3.html("3: A Match")
       this.option3.position(500,160);
       this.option4.html("4: A Fireplace")
       this.option4.position(500,180);

       this.input1.position(500,200);
       this.input2.position(550,200);
        this.button.position(290,300)   
       this.button.mousePressed(()=>{
           this.title.hide();
           this.input1.hide();
           this.button.hide();
           contestant.name = this.input1.value();
           contestant.answer=this.input2.value();
           contestantCount+=1;
           contestant.index = contestantCount;
           contestant.update();
           contestant.updateCount(contestantCount);
       })

   }
   hide()
   {
       this.title.hide();
       this.input1.hide();
       this.button.hide();
       this.input2.hide();
   }
}