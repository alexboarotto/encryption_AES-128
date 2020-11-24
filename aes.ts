import { shiftRows } from "./functions/shiftRows"
import { SubBytes } from "./functions/subBytes"
import { addRoundKey } from "./functions/addRoundKey"
import { mixColumns } from "./functions/mixColumns"
import { str2Bin } from "./utils/str2Bin"
import { generateRoundKeys } from "./utils/generateRoundKeys"
import { bin2Str } from "./utils/bin2Str"

function encryptAES_128(block: string, key: string) {
    
    console.log("Input: " + block);
    
    //checks if block length is higher than 128 bits and if key is 128 bits
    if (block.length > 16 || key.length != 16) return

    //declare STATE with empty bytes
    let state = [
        ['00000000', '00000000', '00000000', '00000000'],
        ['00000000', '00000000', '00000000', '00000000'],
        ['00000000', '00000000', '00000000', '00000000'],
        ['00000000', '00000000', '00000000', '00000000']
    ]

    let binaryBlock = str2Bin(block)
    let binaryKey = str2Bin(key)

    //fills the STATE with bytes provided by the block
    for (let i = 0; i < 4; i++)
        for (let j = 0; j < 4; j++)
            if (binaryBlock[4 * i + j]) state[i][j] = binaryBlock[4 * i + j]


    //saves round keys in array        
    const keys = generateRoundKeys(binaryKey)
    

    ///
    ///algorithm start
    ///

    //initial round
    state = addRoundKey(state, keys[0])        

    //rounds
    for(let i = 1; i <= 9; i++){
        state = SubBytes(state)
        state = shiftRows(state)
        state = mixColumns(state)
        state = addRoundKey(state, keys[i])    
    }
    
    //final round
    state = SubBytes(state)
    state = shiftRows(state)
    state = addRoundKey(state, keys[keys.length-1])   

    let result = ""

    state.forEach((array: string[]) => result += bin2Str(array))
     
    console.log("Output: " + result);
}


encryptAES_128("example==example", "passwordpassword")



