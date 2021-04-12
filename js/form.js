class Form{
    constructor(){

    }

    display(){
        var title =  createElement("h2");
        title.html(" Car Racing Game ");
        title.position(550,100);

        var button = createButton("START");
        button.position(570,300);

        var textBox = createInput("Name");
        textBox.position(550,200);

        var greets = createElement("h1");
        button.mousePressed(function(){
            button.hide();
            textBox.hide();
            var name = textBox.value();
            playerCount+=1;
            player.update(name);
            player.updateCount(playerCount);
            greets.html("Hi" + name);
            greets.position(100,100);
        });
    }
}