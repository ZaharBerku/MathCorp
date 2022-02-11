class Valid{
    constructor(element,value, nameElement){
        this.element = element;
        this.value = value;
        this.nameElement = nameElement;
        this.#render()
        this.#setup()
    }
    #render(){
        switch(this.nameElement){
            case 'userTel':
                this.isValidTel()
            break
            case 'userName':
                this.isValidText()
            break
            case 'class':
                this.isValidNumber()    
        }
    }

    renderIsNotValid(string){
        this.element.classList.remove('isValid')
        this.element.classList.add('isNotValid')
        this.element.insertAdjacentHTML('afterend',`<p class='form__is-not-valid-text'>${string}</p>`)
    }

    renderIsValid(){
        this.element.classList.add('isValid')
        this.element.classList.remove('isNotValid')
        this.element.nextElementSibling.remove()
    }

    isValidTel(){

    }
    isValidText(){

    }
    get validNumber(value){
        return Number.isNaN(+value)
    }
    isValidNumber(){
        if(this.validNumber(this.value)){
            const string = 'Некоректний номер'
            this.renderIsNotValid(string)
        }else{
            this.renderIsValid()
        }
    }
}


