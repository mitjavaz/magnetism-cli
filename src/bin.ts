import { Command } from 'commander';
import { CLI_VERSION } from './common/constant.js';
const program = new Command();

program.version(`magnetism-cli Version ${CLI_VERSION}`).usage('<command> [options]');

program
  .command('create')
  .description('Create a new application of Vue')
  .option('-n, --name <applicationName>', 'Application name')
  .option('-f, --formate','Choose programming format')
  .option('-l, --locale','Generate files in i18n format')
  .action(async (option)=>{
    const { create} = await import('./commands/create.js');

    return create(option);
  })

program.parse();