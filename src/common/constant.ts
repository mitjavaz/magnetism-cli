import { fileURLToPath } from "url";

export const dirname = fileURLToPath(new URL('.', import.meta.url));

export const CWD = process.cwd();

export function typeOf(target:any):string{
  return /^\[object (\w+)]$/.exec(Object.prototype.toString.call(target))![1].toLocaleLowerCase();
}
