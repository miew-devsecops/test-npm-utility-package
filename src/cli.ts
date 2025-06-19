import inquirer from 'inquirer';

export async function runCLI(): Promise<void> {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'favoriteColor',
      message: "What's your favorite color?",
      validate: (input: string) => {
        const trimmed = input.trim().toLowerCase();
        if (!trimmed) {
          return 'Please enter a color';
        }
        if (trimmed !== 'blue' && trimmed !== 'red') {
          return 'Please enter either "blue" or "red"';
        }
        return true;
      }
    }
  ]);

  const color = answers.favoriteColor.trim().toLowerCase();
  
  if (color === 'blue') {
    console.log('FCP!');
  } else if (color === 'red') {
    console.log('SLB :/');
  }
}