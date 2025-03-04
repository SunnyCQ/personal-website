document.addEventListener('DOMContentLoaded', () => {
    let player_total = 0;
    let dealer_total = 0;
    let card_set = ['A','A','A','A',2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,'J','J','J','J','Q','Q','Q','Q','K','K','K','K'];
    let game_ended = true;
    let curr_bet;
    let splitted = false;
    let first_hand_done = true;

    const start_game = document.querySelector("#start_game");
    const bet = document.getElementById('bet');

    const hit = document.querySelector("#hit");
    const stand = document.querySelector("#stand");
    const split = document.querySelector("#split");



    //Player and Dealer objects
    let dealer = {
        cards: [] //Placeholder values
    };

    let player = {
        chips: 200,
        cards: [], //Placeholder values
        cards2: []
    };

    //Display functions
    //Calculates card total value
    function calculateTotal(cards){
        let total = 0;
        if(cards.includes('A')){
            total += 10; //weird ik, but the remaining one is accounted for in the next loop
            console.log("added 10");
        }
        for (let i = 0; i < cards.length; i++){
            if(cards[i] == 'J' || cards[i] == 'Q' || cards[i] == 'K'){
                total += 10;
            }
            else if(cards[i] == 'A'){
                total += 1; //figure out how to split into two possibilities
            }
            else{
                total += cards[i];
            }
        }
        if ((cards.includes('A')) && (total > 21)){
            total -= 10; //change the ace from an 11 to a 1
            console.log("minus 10");
        }
        return total;
    }

    //Checks if the person has lost or not
    function check_loss(cards){
        total = calculateTotal(cards);
        if(total > 21){
            return true;
        }
        return false;
    }

    //function End game
    function end_game(){
        card_set = ['A','A','A','A',2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,'J','J','J','J','Q','Q','Q','Q','K','K','K','K']; //reset cards
        game_ended = true;
        start_game.innerText = "Start Game";
        return
    }

    //Updates chip value
    function update_chips(gain_loss){
        player.chips += gain_loss;
        console.log("New chip count: " + player.chips);
        chip_counter.innerText = "Your chips: $" + player.chips;
    }

    function update_bet(money){ //only updates display
        // money == bet.value
        if(!game_ended){
            bet_display.innerText = "Your bet: $" + money;  
        }else if(splitted){
            hand_1 = calculateTotal(player.cards);
            hand_2 = calculateTotal(player.cards2);
            dealer_hand = calculateTotal(dealer.cards);
            if(dealer_hand <= 21){
                if(hand_1 <= 21){
                    if(hand_1 < dealer_hand){
                        bet_display.innerText = "Hand 1 lost: -$" + (curr_bet/2);
                    }else if(hand_1 > dealer_hand){
                        bet_display.innerText = "Hand 1 won: $" + (curr_bet/2);
                    }else{
                        bet_display.innerText = "Hand 1 tied: $0";
                    }
                }else{
                    bet_display.innerText = "Hand 1 lost: -$" + (curr_bet/2);
                }
                
                if(hand_2 <= 21){
                    if(hand_2 < dealer_hand){
                        bet_display.innerText += "\nHand 2 lost: -$" + (curr_bet/2);
                    }else if(hand_2 > dealer_hand){
                        bet_display.innerText += "\nHand 2 won: $" + (curr_bet/2);
                    }else{
                        bet_display.innerText += "\nHand 2 tied: $0";
                    }
                }else{
                    bet_display.innerText += "\nHand 2 lost: -$" + (curr_bet/2);
                }
            }else{
                if(hand_1 <= 21){
                    bet_display.innerText = "Hand 1 won: $" + (curr_bet/2);
                }else{
                    bet_display.innerText = "Hand 1 lost: -$" + (curr_bet/2);
                }
                
                if(hand_2 <= 21){
                    bet_display.innerText = "Hand 2 won: $" + (curr_bet/2);
                }else{
                    bet_display.innerText = "Hand 2 lost: -$" + (curr_bet/2);
                }
            }
            
        }else if(money < 0){
            bet_display.innerText = "You lost: $" + (-money);
        }else if(money == 0){
            bet_display.innerText = "Tied, get: $" + (money) + " back.";
        }else if(money > curr_bet * 2){ //blackjack winnings 3:2
            bet_display.innerText = "Blackjack! You won: $" + money;
        }else{
            bet_display.innerText = "You won: $" + money;
        }
        return;
    }

    //Prints the total value
    function printTotal(){
        if(game_ended){
            if(splitted){
                win_loss_info.innerText = "Dealer total: " + calculateTotal(dealer.cards) + "\n" + " Player total 1: " + calculateTotal(player.cards) + "\n" + " Player total 2: " + calculateTotal(player.cards2);
            }else{
                win_loss_info.innerText = "Dealer total: " + calculateTotal(dealer.cards) + "\n" + " Player total: " + calculateTotal(player.cards);
            }
        }else if(splitted){
            win_loss_info.innerText = "Dealer total: Unknown" + "\n" + " Player total 1: " + calculateTotal(player.cards) + "\n" + " Player total 2: " + calculateTotal(player.cards2);
        }else{
            win_loss_info.innerText = "Dealer total: Unknown" + "\n" + " Player total: " + calculateTotal(player.cards);
        }
        return;
    }

    //Prints the individual cards everyone has
    function printCards(){
        if(game_ended){
            indicators.innerText = "Dealer cards: " + (dealer.cards).join(" ") + "\n" + " Player cards: " + (player.cards).join(" ");
            if(splitted){
                indicators.innerText = "Dealer cards: " + (dealer.cards).join(" ") + "\n" + " Player cards: " + (player.cards).join(" ") + "\n" + "Second hand: " + (player.cards2).join(" ");
            }
        }else if(splitted){
            indicators.innerText = "Dealer cards: ? " + (dealer.cards.slice(1)).join(" ") + "\n" + " Player cards: " + (player.cards).join(" ") + "\n" + "Second hand: " + (player.cards2).join(" ");
        }else{
            indicators.innerText = "Dealer cards: ? " + (dealer.cards.slice(1)).join(" ") + "\n" + " Player cards: " + (player.cards).join(" ");
        }
        return;
    }


    //First two cards, hit, stand, split
    function give_card(cards){
        let randomIndex = Math.floor(Math.random() * card_set.length);
        cards.push(card_set[randomIndex]);
        let curr_card = card_set[randomIndex];
        card_set.splice(randomIndex, 1);
        console.log("Remaining cards: " + card_set);
        return curr_card;
    }

    function first_two_cards(cards){
        give_card(cards);
        give_card(cards);
        return;
    }

    function hit_but(cards){
        if(!game_ended){
            if(splitted){
                if(first_hand_done == false){
                    new_card = give_card(player.cards);
                    printCards();
                    printTotal();
                    game_status.innerText = "You hit! Your new card is: " + new_card + ", and your total is now " + calculateTotal(player.cards) + ".";
                    console.log("before check loss");
    
                    if(check_loss(player.cards)){
                        game_status.innerText += "\n First hand went over 21, now hitting second hand.";
                        first_hand_done = true;
                        // update_bet(-curr_bet);
                        console.log("check loss is true");
                    }else if(calculateTotal(player.cards) == 21){
                        game_status.innerText += "\n First hand reaches 21, now hitting second hand. \n";
                        first_hand_done = true;
                        console.log("Player reached 21");
                        // end_game();
                        // dealer_finishes();  
                    }
                }else{ //second card
                    new_card = give_card(player.cards2);
                    printCards();
                    printTotal();
                    game_status.innerText = "You hit! Your new card is: " + new_card + ", and your total is now " + calculateTotal(player.cards2) + ".";
                    console.log("before check loss");
    
                    if(check_loss(player.cards2)){
                        if(check_loss(player.cards)){
                            game_status.innerText += "\n Both hands busted. You lost.";
                            // update_bet(-curr_bet);
                            console.log("check loss is true");
                            end_game();
                            update_bet(0);
                            // dealer_finishes();
                        }else{
                            // game_status.innerText += "\n Second hand went over 21. ";
                            // update_bet(-curr_bet);
                            console.log("check loss is true");
                            update_bet(0);
                            end_game();
                            dealer_finishes();
                        }
                    }else if(calculateTotal(player.cards2) == 21){
                        game_status.innerText += "\n You are at 21, so you stand. \n";
                        console.log("Player reached 21");
                        update_bet(0);
                        end_game();
                        dealer_finishes();  
                    }
                }
            }else{
                new_card = give_card(cards);
                printCards();
                printTotal();
                game_status.innerText = "You hit! Your new card is: " + new_card + ", and your total is now " + calculateTotal(player.cards) + ".";
                console.log("before check loss");

                if(check_loss(cards)){
                    game_status.innerText += "\n You went over 21. You lost.";
                    end_game();
                    update_bet(-curr_bet);
                    console.log("check loss is true");
                }else if(calculateTotal(cards) == 21){
                    game_status.innerText += "\n You are at 21, so you stand. \n";
                    console.log("Player reached 21");
                    end_game();
                    dealer_finishes();  
                }
            }
        }
        return;
    }

    function stand_but(){
        if(!game_ended){
            if(splitted){
                if(!first_hand_done){//still on first hand
                    game_status.innerText = "You stand your first hand with " + calculateTotal(player.cards) + ".\n";
                    first_hand_done = true;
                }else{
                    game_status.innerText = "You stand your second hand with " + calculateTotal(player.cards) + ".\n";
                    update_bet(0);
                    end_game();
                    dealer_finishes();   
                }
    
            }else if(!game_ended){
                game_status.innerText = "You stand with " + calculateTotal(player.cards) + ".\n";
                end_game();
                dealer_finishes();   
            }
        }
        return;
    }

    function split_but(){
        if(!game_ended){
            if((player.cards.length == 2) && (player.cards[0] == player.cards[1]) && (player.chips >= curr_bet)){ //take out an additional bet's worth of money
                game_status.innerText = "You split. You now have two hands with " + player.cards[0] + "\nHit the first hand?";
                splitted = true;
                first_hand_done = false;
                //split the card into new hand
                player.cards2.push(player.cards[0]);
                player.cards.pop();
                printCards();
                printTotal();

                update_chips(-curr_bet);
                curr_bet = curr_bet * 2;
                update_bet(curr_bet);

            }else{//game ongoing but condition not met
                game_status.innerText = "You cannot split currently. Check your card count or chip balance.";
            }
        }
        return;
    }
    //Calculations and game end

    //Start & reset game
    function start_game_but(){
        console.log("Is game_ended: " + game_ended);
        if(game_ended == true){
            splitted = false;
            if((bet.value <= 0) || (bet.value > player.chips)){
                game_status.innerText = "Invalid bet. Please make sure your bet is a positive value greater than your current balance.";
            }else{
                game_ended = false; //game status becomes ongoing
                curr_bet = bet.value
                update_bet(curr_bet);
                game_status.innerText = "Game started! Your bet is $" + curr_bet + ". \n" + "Passing out cards...";
                update_chips(-curr_bet);
                start_game.innerText = "End Game"; //When you restart, you forfeit half of your bet
                dealer.cards = [];
                player.cards = [];
                player.cards2 = [];
                first_two_cards(dealer.cards);
                first_two_cards(player.cards); 
                console.log("Dealer cards: " + (dealer.cards).join(" ") + "\n" + " Player cards: " + (player.cards).join(" "));
    
                if(calculateTotal(player.cards) == 21){
                    game_status.innerText = "You got 21 immediately. Dealer will draw immediately. \n";
                    end_game();
                    dealer_finishes();  
                }
            } 
        }else{ //Player forfeits match
            forfeit_price = Math.floor(bet.value / 2);
            update_chips(forfeit_price); //Get back half of your money
            game_status.innerText = "Player forfeits, losing $" + (forfeit_price) + ".";
            console.log("Player forfeits, losing " + (forfeit_price));
            end_game();
        }
        return; 
    }

    function dealer_finishes(){
        while(calculateTotal(dealer.cards) < 17){
            give_card(dealer.cards); //deals a card
        }
        let dealer_total = calculateTotal(dealer.cards);
        let player_total = calculateTotal(player.cards);
        let player_total_2 = calculateTotal(player.cards2);
        printCards();
        printTotal();
        if(dealer_total <= 21){
            if(!splitted){ //not splitted
                if(dealer_total > player_total){
                    game_status.innerText += "Dealer wins with " + dealer_total + " to " + player_total + ".";
                    //You just don't get the money back
                    update_bet(-curr_bet);
                }
                else if(dealer_total < player_total){
                    if(player_total == 21){
                        game_status.innerText += "Blackjack! You win " + player_total + " to " + dealer_total + ".";
                        update_chips(curr_bet * 3);
                        update_bet(curr_bet * 3);
                    }else{
                        game_status.innerText += "You win with " + player_total + " to " + dealer_total + ".";
                        update_chips(curr_bet * 2);
                        update_bet(curr_bet * 2);
                    }
                }else{
                    game_status.innerText += "Player and dealer ties with " + dealer_total + ".";
                    update_chips(curr_bet * 1);
                    update_bet(0);
                }
            }else{
                //first hand:
                let cards_1_cond;
                let cards_2_cond;
                if(player_total <= 21){
                    if(player_total < dealer_total){
                        cards_1_cond = "less";
                        game_status.innerText += "\nFirst hand loses " + player_total + " to " + dealer_total + ".\n";
                        update_chips(0);
                    }else if(player_total > dealer_total){
                        cards_1_cond = "more";
                        game_status.innerText += "\nFirst hand wins " + player_total + " to " + dealer_total + ".\n";
                        update_chips(curr_bet);
                    }else{
                        cards_1_cond = "tie";
                        game_status.innerText += "\nFirst hand ties " + player_total + " to " + dealer_total + ".\n";
                        update_chips(curr_bet/2);
                    }
                }else{
                    cards_1_cond = "bust";
                    game_status.innerText += "\nFirst hand busts. \n";
                    update_chips(0);
                }

                if(player_total_2 <= 21){
                    if(player_total_2 < dealer_total){
                        cards_2_cond = "less";
                        game_status.innerText += "Second hand loses " + player_total_2 + " to " + dealer_total + ".\n";
                        update_chips(0);
                    }else if(player_total_2 > dealer_total){
                        cards_2_cond = "more";
                        game_status.innerText += "Second hand wins " + player_total_2 + " to " + dealer_total + ".\n";
                        update_chips(curr_bet);
                    }else{
                        cards_2_cond = "tie";
                        game_status.innerText += "Second hand ties " + player_total_2 + " to " + dealer_total + ".\n";
                        update_chips(curr_bet/2);
                    }
                }else{
                    cards_1_cond = "bust";
                    game_status.innerText += "Second hand busts.";
                    update_chips(0);
                }
                update_bet(0);
                // game_status.innerText = "split finish";
            }
            
        }else{
            if(!splitted){
                game_status.innerText += "Dealer busted! You win!";
                update_chips(curr_bet * 2);
                update_bet(curr_bet * 2);
            }else{
                if((player_total <= 21) && (player_total_2 <= 21)){
                    game_status.innerText += "Dealer busted! You win on both hands!";
                    update_chips(curr_bet * 2);
                    update_bet(curr_bet * 2);
                }else if((player_total <= 21) && (player_total_2 > 21)){
                    
                }else if((player_total > 21) && (player_total_2 <= 21)){

                }
            }
        }
        //if dealer hand is 17 or higher, no draw.
        return;
    }

    //Button onclicks
    bet.addEventListener('input', () => {
        const bet = document.getElementById('bet');
        console.log("New bet is " + bet.value);
    });
 
    start_game.addEventListener('click', start_game_but);
    start_game.addEventListener('click', printCards);
    start_game.addEventListener('click', printTotal);


    hit.addEventListener('click', function() {hit_but(player.cards)});
    stand.onclick = stand_but;
    split.onclick = split_but;
});