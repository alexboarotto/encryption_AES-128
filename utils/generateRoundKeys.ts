import { ShiftRow } from "../functions/shiftRows"
import { s_box_substitution } from "../functions/subBytes"
import { addPadding } from "./str2Bin"
import { key, createKey } from "./key"

const Rcon = [[0x1,0x0,0x0,0x0],
              [0x2,0x0,0x0,0x0],
              [0x4,0x0,0x0,0x0],
              [0x8,0x0,0x0,0x0],
              [0x10,0x0,0x0,0x0],
              [0x20,0x0,0x0,0x0],
              [0x40,0x0,0x0,0x0],
              [0x80,0x0,0x0,0x0],
              [0x1b,0x0,0x0,0x0],
              [0x36,0x0,0x0,0x0]]

export function generateRoundKeys(initialKeyArray: string[]){
    let keys: key[] = []
    let initialKey: key = createKey()

    //converts initial Key from string array to key object
    for(let i = 0; i < 4; i++)
        for(let j = 0; j < 4; j++)
            initialKey.words[i][j] = initialKeyArray[4 * i + j]
            
    keys.push(initialKey)
    
    for(let i = 0; i < 10; i++)
        keys.push(genKey(keys[i], i))

    return keys
}

function genKey(prevKey: key, index: number){
    let newKey: key = createKey()
    let RotWord = ShiftRow(prevKey.words[3], 1)  

    //applies subBytes to last word of the key
    RotWord.forEach((byte: string, index: number) => {RotWord[index] = s_box_substitution(byte)})

    //generates first column of newKey
    //XOR between RotWord, first column of previous key and current Rcon column
    for(let i = 0; i < 4; i++)
        newKey.words[0][i] = addPadding((parseInt(RotWord[i], 2) ^ parseInt(prevKey.words[0][i], 2) ^ parseInt(Rcon[index][i].toString(16), 16)).toString(2))
    
    //generate remaining columns
    for(let i = 1; i < 4; i++)
        for(let j = 0; j < 4; j++)
            newKey.words[i][j] = addPadding((parseInt(prevKey.words[i][j], 2) ^ parseInt(newKey.words[i-1][j], 2)).toString(2))
    
    return newKey   
}