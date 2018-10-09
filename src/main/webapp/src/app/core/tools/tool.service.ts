import { Injectable } from '@angular/core';

export class ToolService {
  constructor() { }

  public static dateFormat(date: string) {
    let mTime = new Date(date)
    let y = mTime.getFullYear() - 1911
    let M = mTime.getMonth() + 1
    let MT = M < 10 ? '0' + M : M
    let d = mTime.getDate()
    let dT = d < 10 ? '0' + d : d
    let h = mTime.getHours()
    let hT = h < 10 ? '0' + h : h
    let m = mTime.getMinutes()
    let mT = m < 10 ? '0' + m : m
    let s = mTime.getSeconds()
    let sT = s < 10 ? '0' + s : s
    return y + '/' + MT + '/' + dT + ' ' + hT + ':' + mT + ':' + sT
  }
}
