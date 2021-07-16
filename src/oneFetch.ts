import { RequestConfig } from 'types/config'

export default function OneFetch(config: RequestConfig) {
    console.log('23')
    this.config = config
    
}

OneFetch.prototype.request = function request(config: RequestConfig) {

}