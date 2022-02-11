const getTemplate = (text = 'text', data = [], selectedId = null) =>{
    const items = data.map(item=>{
      const {id,value} = item
      let check = null
      if(selectedId === id){
        text = value
        check = 'checked'
      }
      return `
      
    <input class="form__input input--radio" ${check} id="radio-${id}" type="radio" name="class" value="${value}">
    <label class="form__label label--radio" for="radio-${id}" data-id="${id}" data-type="item"> ${value}</label>
    `
    }).join(' ')

    return `
    <div class="form__input div--input" data-type="input">
    <input disabled class="form__value" type="text" placeholder="${text}" name="userName" data-type="value">
    <i class="fas fa-chevron-right" data-type="arrow"></i>
    </div>
    <div class="form__dropdown">${items}</div>
         `
  }

  class Select{
    constructor(selector, className,{placeholder,data,selectedId}){
      this.element = document.querySelector(selector)
      this.className = className;
      this.placeholder = placeholder;
      this.selectedId = selectedId;
      this.data = data;
      this.#render();
      this.#setup();
    }

    #render(){
      this.createSelect()
    }

    #setup(){
      this.element.addEventListener('click',this.clickHandler.bind(this))
      this.arrow = this.element.querySelector('[data-type="arrow"]')
      this.value = this.element.querySelector('[data-type="value"]')
    }
    createSelect(){
      this.element.innerHTML = getTemplate(this.placeholder,this.data,this.selectedId)
      this.element.className = this.className.join(' ')
    }

    clickHandler(event){
      const {type, id} = event.target.dataset
      if (type === 'item'){
        this.select(id)
      }else if(type === 'value' || type === 'input'){
        this.toggle()
      }
    }

    get current(){
      return this.data.find(item => item.id === this.selectedId)
    }

    get isOpen(){
      return this.element.classList.contains('open')
    }

    select(id){
      this.selectedId = id
      this.value.value = this.current.value
      this.close()
    }

    toggle(){
      this.isOpen ? this.close() : this.open()
    }

    open(){
      this.element.classList.add('open')
      this.arrow.classList.toggle('form__arrow')
    }
    close(){
      this.element.classList.remove('open')
      this.arrow.classList.toggle('form__arrow')
    }

    destroy(){
      this.element.removeEventListener('click',this.clickHandler)
    }
  }



  const select = new Select('#select',['form__select'],{
    placeholder:'Выбери',
    selectedId:'0',
    data:[
      {id:'1', value:5},
      {id:'2', value:6},
      {id:'3', value:7},
      {id:'4', value:8},
      {id:'5', value:9},
      {id:'6', value:10},
      {id:'7', value:11},
    ],

  })