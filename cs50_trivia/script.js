                let score=0; //initialize score variable to keep track of user's score
                let part1correct=false; //initialize a variable to track if the user has already answered part 1 correctly
                let part2correct=false; //initialize a variable to track if the user has already answered part 2 correctly
                document.addEventListener('DOMContentLoaded',function(){
                    //this code will run after the DOM is fully loaded
                    //we need to wait until the html elements are fully loaded before JS looks for these buttons and input fields
                    //otherswise, the JS will not find these elements and will not work as expected
    /*part1*/
                    //accessing the multiple choice buttons and prompt text for part1
                    
                    const mcOptions = document.querySelectorAll('.mc-option');
                    //select all elements with the class "mc-option" and store them in a variable called mcOptions(to get a lists)
                    const feedback = document.querySelector('#mc-feedback');
                    //select the element with id "mc-feedback"
                    const correctAnswer = "2.5"; //the correct answer for the multiple choice question
            
                    //add "click" event for each button

                    mcOptions.forEach(button =>{
                        //mcoptions is a list of buttons,"forEach"can traverse each button
                        button.addEventListener('click',function(){

                            //4.3clear privious statement of all buttons
                            mcOptions.forEach(btn=>{
                                btn.classList.remove('correct','incorrect'); //remove both "correct" and "incorrect" classes from all buttons
                            })
                            //when a button is clicked, this function will run
                            console.log('You clicked a button!');
                            //for testing, to see if the event listener works

                            //4.1access the "value" of the clicked button
                            const userAnswer = button.textContent; //get the text content of the clicked button
                            console.log('User answer:', userAnswer); 
                            
                            //4.2judge with if statement
                            if(userAnswer==correctAnswer){
                                //4.4add "correct" class to the clicked button
                                button.classList.add('correct');
                                feedback.textContent= 'Correct!';
                                console.log('Correct answer!');
                                if(!part1correct){ //if the user has not already answered part 1 correctly
                                    score++; //increment the score by 1
                                    part1correct=true; //set part1correct to true, so that the user cannot earn points for this question again
                                    document.querySelector('#score').textContent=`score:${score}/2`; //update the score display
                                }
                            }else{
                                button.classList.add('incorrect');
                                feedback.textContent= 'Incorrect!';
                                console.log('Incorrect answer!');
                            }
                        });
                    });
    /*part2*/
                    const frInput=document.querySelector('#fr-input');
                    const frCheck=document.querySelector('#fr-check');
                    const frFeedback=document.querySelector('#fr-feedback');
                    const correctFrAnswer='colder';
                    frCheck.addEventListener('click',function(){
                        console.log('You clicked the check answer button!');
                        //clear previous state
                        frInput.classList.remove('correct','incorrect')
                        const userAnswer=frInput.value.trim().toLowerCase();
                        //.trim():remove any leading or trailing whitespace from the user's input
                        //.toLowerCase():convert the user's input to lowercase, so that the answer checking is case-insensitive
                        console.log('User typed:', userAnswer);
                        if(userAnswer==correctFrAnswer){
                            frInput.classList.add('correct');
                            frFeedback.textContent='Correct!';
                            console.log('Correct answer!');
                            if(!part2correct){
                                score++;
                                part2correct=true;
                                document.querySelector('#score').textContent=`score:${score}/2`;
                            }
                        }else{
                            frInput.classList.add('incorrect');
                            frFeedback.textContent='Incorrect!';
                            console.log('Incorrect answer!');
                        }
                    })

                })
                
            