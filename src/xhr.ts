import { RequestConfig } from 'types/config'
import { buildFullPath, buildURL } from 'src/utils'


function initAuth(config: RequestConfig) {
}

function usePromise(): any[]{
  let resolve, reject
  const promise = new Promise((a, b) => {
    resolve = a
    reject = b
  })

  return [resolve, reject, promise]
}

export default function xhr(config: RequestConfig){
    const {
        data,
        headers,
        responseType,
        method,
        timeout,
        baseURL,
    } = config
    const [resolve, reject, promise] = usePromise()
    const request = new XMLHttpRequest()

    const fullPath =  buildFullPath(baseURL, config.url)
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params), true)

    //  Set the request timeout in MS
    request.timeout = 120000

    // HTTP basic authentication
    initAuth(config)

    
    request.onloadend = () => {
      if (!request) {
        return
      }

      let responseData
      if (!responseType || responseType === 'text' ||  responseType === 'json') {
        responseData  = request.responseText
      } else {
        responseData = request.response
      }

      const response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        config: config,
        request: request
      }

      resolve(response)
    }
    
   return promise
}

