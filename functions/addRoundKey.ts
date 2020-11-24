import { addPadding } from "../utils/str2Bin"
import { key } from "../utils/key"

export function addRoundKey(state: string[][], key: key){
    for (let i = 0; i < 4; i++)
        for (let j = 0; j < 4; j++)
            state[i][j] = addPadding((parseInt(state[i][j], 2) ^ parseInt(key.words[i][j], 2)).toString(2)) //converts bitwise xor to binary string
            
    return state
}