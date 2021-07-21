export function isObject(value: unknown): value is Record<string, any> {
    return Object.prototype.toString.call(value) === '[object Object]'
}


export const isURLSearchParams = (value: unknown): boolean => {
    return typeof URLSearchParams !== 'undefined' && value instanceof URLSearchParams
}


export const isArray = (value: unknown): boolean => {
    return toString.call(value) === '[object Array]'
}


export const isDate = (val: unknown): boolean => {
    return toString.call(val) === '[object Date]';
}



export const combineURLs = (baseURL: string, relativeURL: string): string => {
    return relativeURL
        ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
        : baseURL
}



export const isAbsoluteURL = (url: string): Boolean => {
    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url)
}




export const buildFullPath = (baseURL: string, requestedURL: string): string => {
    if (baseURL && !isAbsoluteURL(requestedURL)) {
        return combineURLs(baseURL, requestedURL)
    }
    return requestedURL
}


export const encode = (value: string): string => {
    return encodeURIComponent(value).
        replace(/%3A/gi, ':').
        replace(/%24/g, '$').
        replace(/%2C/gi, ',').
        replace(/%20/g, '+').
        replace(/%5B/gi, '[').
        replace(/%5D/gi, ']');
}

export const serialize = (params: Object): string => {
    if (!params || !isObject(params)) return ''

    const parts: any[] = []
    for (let key in params) {
        let val = params[key]
        if (val === null || typeof val === 'undefined') continue

        if (isArray(val)) {
            key = key + '[]'
        } else {
            val = [val]
        }

        for (let i = 0, l = val.length; i < l; i++) {
            let v = val[i]
            if (isDate(v)) {
                v = v.toISOString()
            } else if (isObject(v)) {
                v = JSON.stringify(v)
            }
            parts.push(encode(key) + '=' + encode(v));
        }

    }

    if (parts.length > 0) {
        return parts.join('&')
    }
    return ''
}

export const buildURL = (url: string, params?: object): string => {
    if (!params || !isObject(params)) return url

    let serializedParams
    if (isURLSearchParams(params)) {
        serializedParams = params.toString()
    } else {
        serializedParams = serialize(params)
    }

    if (serializedParams) {
        var hashmarkIndex = url.indexOf('#')
        if (hashmarkIndex !== -1) {
            url = url.slice(0, hashmarkIndex)
        }
        url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams
    }

    return url
}

