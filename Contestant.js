class Contestant
{
    constructor()
    {
      this.name=null;
      this.index=null;
      this.answer=0;
    }
    getCount()
    {
       var cc=database.ref('contestantCount')
       cc.on("value",(data)=>{
           contestantCount=data.val()
       })
    }
    updateCount(count)
    {
       database.ref('/').update({
           contestantCount:count
       })
    }
    update()
    {
       var contestantIndex="contestants/contestent"+this.index;
       database.ref(contestantIndex).set({
           name:this.name,
           answer:this.answer
       })
    }
    static getPlayerInfo(){
        var contestantInfoRef = database.ref('contestants');
        contestantInfoRef.on("value",(data)=>{
          allContestants = data.val();
        })
      }
}