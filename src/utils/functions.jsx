// function for break text into parts
export function splitContent(content) {
  const sentences = content.split('. ');
  const maxCharacters = 300;
  let currentCharacters = 0;
  let result = [];

  sentences.forEach((sentence, index) => {
    const sentenceLength = sentence.length + 1; // Add 1 for the space
    if (currentCharacters + sentenceLength > maxCharacters && index !== 0) {
      // If we exceed the limit and are not at the beginning, add twice <br>
      result.push(<br key={`br1_${index}`} />);
      result.push(<br key={`br2_${index}`} />);
      currentCharacters = 0; // Reset the counter
    }

    result.push(sentence + (index === sentences.length - 1 ? '' : '. '));
    currentCharacters += sentenceLength;
  });

  return result;
}
