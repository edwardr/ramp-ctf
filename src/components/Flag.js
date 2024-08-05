import { useEffect, useState } from 'react';

const ctfUrl = 'https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/677261';

const Flag = () => {
  const [flag, setFlag] = useState('');

  useEffect(() => {
    const fetchFlag = async () => {
      try {
        const response = await fetch(ctfUrl);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
    
        response.text().then((flag) => {
          let split = flag.split('');
          let render = '';
          for(let i = 0; i < split.length; i++) {
            const interval = setTimeout(() => {
              render += split[i];
              setFlag(render);
            }, 500 * (i + 1));
          }
        });
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchFlag();
  },[]);

  const splitState = flag.split('');

  const renderList = splitState.map((curr, i) => {
    return(
      <li key={i}>
        {splitState[i]}
      </li>
    )
  });

  return(
    <ul>
      {renderList}
    </ul>
  )
}

export default Flag;

// Bonus: Add as a comment the script you used to to get the URL in step 2

/*
  let match = document.querySelectorAll('code div span i'),
      url = '';

  for(let i = 0; i < match.length; i++) {
    url += match[i].getAttribute('value');
  }

  console.log('URL:');
  console.log(url);
 */