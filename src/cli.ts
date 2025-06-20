import inquirer from 'inquirer';

export async function runCLI(): Promise<void> {
  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'favoriteColor',
      message: "What's your favorite color?",
      choices: [
        { name: 'Blue', value: 'blue' },
        { name: 'Red', value: 'red' },
        { name: 'Yellow', value: 'yellow' }
      ]
    }
  ]);

  const color = answers.favoriteColor;
  
  if (color === 'blue') {
    console.log('FCP!');
  } else if (color === 'red') {
    console.log('SLB :/');
  } else if (color === 'yellow') {
    console.log('estoril');
  }
}