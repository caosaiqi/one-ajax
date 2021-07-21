import { RequestConfig } from 'types/config'
import xhr from 'src/xhr'




export default function OneFetch(this: any, config: RequestConfig) {
  this.defaults = config
  
   
}


const initConfig = (config: RequestConfig) => {
  //Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else{
    config.method = 'get';
  }

}


OneFetch.prototype.request = function request(config: RequestConfig) {
  initConfig(config)
}


