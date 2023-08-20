import { Command } from 'commander';

const program = new Command();

program.version(`magnetism-cli v${require('../package.json').version}`).usage('<command> [options]');

program
  .command('create')
  .description('Create a new application of Vue')
  .option('-n, --name <applicationName>', 'Application name')
  .option('-f, --formate','Choose programming format')
  .option('-l, --locale','Generate files in i18n format')
  .action(async (option)=>{
    const { create} = await import('./commands/create');

    return create(option);
  })