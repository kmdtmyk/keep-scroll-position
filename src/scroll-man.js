import SessionStorage from './session-storage'
import ElementUtil from './element-util'

export default class{

  static keep(element){
    this.restore(element)
    element.addEventListener('scroll', (e) => {
      this.save(element)
    })
  }

  static save(element){
    const xpath = ElementUtil.xpath(element)
    const scrollTop = element.scrollTop
    this._setStorage(xpath, scrollTop)
  }

  static restore(element){
    const xpath = ElementUtil.xpath(element)
    const scrollTop = this._getStorage(xpath)
    if(scrollTop){
      element.scrollTop = scrollTop
    }
  }

  static _setStorage(xpath, value){
    const json = SessionStorage.get('scrollTop') || {}
    json[xpath] = value
    SessionStorage.set('scrollTop', json)
  }

  static _getStorage(xpath){
    const json = SessionStorage.get('scrollTop') || {}
    return json[xpath]
  }

}
