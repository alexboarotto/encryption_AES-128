import { addPadding } from "../utils/str2Bin"

export function mixColumns(state: string[][]){
 for (let c = 0; c < 4; c++) {
    state[0][c] = addPadding(((parseInt(state[0][c], 2)*2) ^ (parseInt(state[1][c], 2)*3) ^ parseInt(state[2][c], 2) ^ parseInt(state[3][c], 2)).toString(2))// 2*a0 + 3*a1 + a2 + a3
    state[1][c] = addPadding((parseInt(state[0][c], 2) ^ (parseInt(state[1][c], 2)*2)  ^ (parseInt(state[2][c], 2)*3)  ^ parseInt(state[3][c], 2)).toString(2)) // a0 * 2*a1 + 3*a2 + a3
    state[2][c] = addPadding((parseInt(state[0][c], 2) ^ parseInt(state[1][c], 2)  ^ (parseInt(state[2][c], 2)*2) ^ (parseInt(state[3][c], 2)*3)).toString(2)) // a0 + a1 + 2*a2 + 3*a3
    state[3][c] = addPadding(((parseInt(state[0][c], 2)*3) ^ parseInt(state[1][c], 2) ^ parseInt(state[2][c], 2) ^ (parseInt(state[3][c], 2)*2)).toString(2)) // 3*a0 + a1 + a2 + 2*a3
  }
  return state
}