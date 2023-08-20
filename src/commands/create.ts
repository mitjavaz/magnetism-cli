import fse from 'fs-extra';
import inquirer from 'inquirer';
import { resolve } from 'path';

import logger from '../common/logger.js';
import { CWD,dirname } from '../common/constant.js';

export interface CreateCommandOption {
  name?:string;
  formate?:'sfc' | 'tsx';
  locale?:boolean;
}
export async function create(option:CreateCommandOption):Promise<void>{
  logger.info(`\n⭐ Start creating project... ⭐\n`);

  // 1. create project name
  const { name } = option.name ? option : await inquirer.prompt({
    name: 'name',
    message: 'Please input project name',
    default: 'magnetism-cli-app',
  })

  const dest = resolve(CWD, name);

  if(fse.existsSync(dest)){
    logger.error(`\n⭐ ${name} already exists and cannot be recreated... ⭐\n`);
    return;
  }

  // 2. select programming formate
  let formate = option.formate ? (
    option.formate == 'sfc' ? 'sfc' : 'tsx'
  ) : (
    await inquirer.prompt({
      name: 'formate',
      type: 'list',
      message: 'Please select programming formate for your porject',
      choices: ['sfc', 'tsx'],
    })
  )
  
  // 3. select locale
  const locale = option.locale 
    ? option.locale 
    : await inquirer.prompt({
      name: 'locale',
      type: 'confirm',
      message: 'Do you want to add locale for your project?',
      default:false,
    })

  // template DIR
  const templateDIR = resolve(dirname,'../../template');

  // BASE_DIR
  const BASE_DIR = resolve(templateDIR,'base')

  await fse.copy(BASE_DIR,dest)
  logger.success(`√ Successfully created basic template !`)
  // LOCALE_DIR_NAME
  
  // FORMATE_DIR_NAME
}
