import {App}  from 'vue'
import  LjButton  from './base/button'
export const compArr={
  LjButton
}
export const compRegistFunc=((app:App,componentObj:Object) => {
  Object.keys(componentObj).forEach((key:string) => {
    app.component(key,componentObj[key])
  })
})

