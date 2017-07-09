function submitAnswers() {
  const total = 5
  let score = 0
  // get user input
  const q1 = document.forms['quiz-form']['q1'].value
  const q2 = document.forms['quiz-form']['q2'].value
  const q3 = document.forms['quiz-form']['q3'].value
  const q4 = document.forms['quiz-form']['q4'].value
  const q5 = document.forms['quiz-form']['q5'].value

  // validation
  for ( let i=1; i<=total; i++ )
    if ( !eval('q'+i) )
      alert(`You missed question ${i}`)

  // // set correct answers
  const answers = ['b', 'a', 'd', 'b', 'd'];
  // // Check answers
  for ( let i=0; i<total; i++)
    if ( eval(`q${i+1}`) === answers[i] )
      score++;

  const resultText = `<h3>You scored <span>${score}</span> out of <span>${total}</span></h3>`
  results = document.getElementById('results')
  results.innerHTML = resultText
  alert(`You scored ${score} out of ${total}`)

  return false
}
