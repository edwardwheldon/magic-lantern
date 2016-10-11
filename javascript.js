var answers = [
  'Maybe.', 'Certainly not.', 'I hope so.', 'Not in your wildest dreams.',
  'There is a good chance.', 'Quite likely.', 'I think so.', 'I hope not.',
  'I hope so.', 'Never!', 'Forget it!.', 'Ahaha! Really?!?', 'Pfft.',
  'Sorry, bucko.', 'The future is bleak.', 'The future is uncertain.', 
  'I would rather not say.', 'Who cares?', 'Possibly.', 'Never, ever, ever.', 
  'There is a small chance.', 'Yes!'];


document.getElementById('answer').innerHTML = response;

function answerMe() {
	var response = answers[Math.floor(Math.random() * answers.length)];
	var question = document.getElementById("input").value;
	document.getElementById("flame").style.animation = "think 0.5s infinite";
	
	setTimeout(function(){
		document.getElementById('answer').innerHTML = "<span class='answer-text'>" + 
		question + "</span> <br>" + response;
		document.getElementById("flame").style.animation = "glow 2s infinite";
	}, 2000);
}
	
