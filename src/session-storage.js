export default class{

  static get(name){
    return JSON.parse(sessionStorage.getItem(name))
  }

  static set(name, value){
    sessionStorage.setItem(name, JSON.stringify(value))
  }

}
