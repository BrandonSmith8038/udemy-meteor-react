const add = (a, b) =>{
  
  if(typeof b !== 'number'){
    return a + a
  }
  
    return a + b 
}

const square = a => a * a

describe('Add', function() {
  
  it('Should Add Two Numbers', function () {
    const res = add(11,9)
    
    if(res !== 20){
      throw new Error(`Expected 20 but got ${res}`)
    }
  })
  
  it('Should double a single number', function() {
    const res = add(44)
    
    if(res !== 88){
      throw new Error(`Expected 88 but got ${res}`)
    }
  })

})

describe('Square', function () {
  it('Should square a number', function(){
    const res = square(8)
    
    if(res !== 64){
      throw new Error(`Expected 64 but got ${res}`)
    }
  })
})

