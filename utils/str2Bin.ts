//converts string into bytes array
export function str2Bin(message: string) {
    let binaryMessage = []
    for (let i = 0; i < message.length; i++){
        binaryMessage.push(addPadding(message[i].charCodeAt(0).toString(2)))
    }
    return binaryMessage
}


//adds 0s to begining of byte in case byte isn't 8 characters long
export function addPadding(byte: string){
    while(byte.length < 8) byte = "0".concat(byte)  
    return byte
} 