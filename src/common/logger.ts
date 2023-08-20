import pico from 'picocolors';

export default {
  info(message: string){
    console.log(pico.cyan(message));
  },
  success(message: string){
    console.log(pico.green(message));
  },
  warning(message: string){
    console.log(pico.yellow(message));
  },
  error(message: string){
    console.log(pico.red(message));
  }
}