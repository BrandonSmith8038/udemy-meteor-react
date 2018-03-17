import expect from 'expect'

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
    
    expect(res).toBe(20)
  })
  
  it('Should double a single number', function() {
    const res = add(6)
    
    expect(res).toBe(12)
  })

})

describe('Square', function () {
  it('Should square a number', function(){
    const res = square(8)
    
    expect(res).toBe(64)
  })
})

