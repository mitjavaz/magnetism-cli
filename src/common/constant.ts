import { fileURLToPath } from "url";
import { resolve }from "path";
import fse from "fs-extra";
const { readJsonSync } = fse;

// 当前文件所在目录路径
export const dirname = fileURLToPath(new URL('.', import.meta.url));
// 当前项目根路径
export const CWD = process.cwd();
export const CLI_VERSION = readJsonSync(resolve(dirname, '../../package.json')).version;
// 返回数据类型
export function typeOf(target: any): string{
  return /^\[object (\w+)]$/.exec(Object.prototype.toString.call(target))![1].toLocaleLowerCase();
}

