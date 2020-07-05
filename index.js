const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
     const testCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection) 

     for (let i=0;i<testCollection.length;i++){
       callback(testCollection[i])
     }
      
     return collection

    },

    map: function(collection, callback) {
      const testCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection) 

      return testCollection.map(e => callback(e))
       
    },

    reduce: function(collection, callback, acc) {
      if (!acc) {
        acc = collection[0]
        collection = collection.slice(1)
      }

      for (let i = 0; i < collection.length; i++){
        acc = callback(acc, collection[i], collection)
      }    
      return acc
    },

    find: function(collection, predicate) {
      const testCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection) 

      for (let i=0;i<testCollection.length;i++)
        if (!!predicate(testCollection[i])) return testCollection[i]
        
      return undefined

    },

    filter: function(collection, predicate) {
      const testCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection) 
      const results = []
      for (let i=0;i<testCollection.length;i++)
        if (!!predicate(testCollection[i])) results.push(testCollection[i])
        
      return results
    },
    
    size: function(collection) {
      const testCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection) 
              
      return testCollection.length
    },

    first: function(collection, n) {
      const testCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection) 
      if (!n) return testCollection[0];
      
      const results = []
      for (let i=0;i<n;i++)
        results.push(testCollection[i])
        
      return results
    },

    last: function(collection, n) {
      const testCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection) 
      if (!n) return testCollection[testCollection.length-1];
      
      const results = []
      for (let i=testCollection.length-n;i<testCollection.length;i++)
        results.push(testCollection[i])
        
      return results
    },

    compact: function(collection) {
      const testCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection) 
            
      const results = []
      for (let i=0;i<testCollection.length;i++)
      if(!!testCollection[i]) results.push(testCollection[i])
        
      return results
    },

    sortBy: function(collection, callback) {
      const testCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection) 
         
      const results = []
      for (let i=0;i<testCollection.length;i++) results.push(callback(testCollection[i]))
      
      return testCollection.sort(function(a,b){
        return callback(a) - callback(b)
      })
    },

    flatten: function(collection, shallow, result = []) {
      if (!Array.isArray(collection)) return result.push(collection)
      if (shallow) {
        for (let entry of collection) {
          if(Array.isArray(entry))
            {for (let e of entry) {
            result.push(e)}
          } else result.push(entry)
        }
      } 
      else {
        for (let entry of collection){
         this.flatten(entry,false,result)
          }
        }
      return result
      },

    uniq: function(collection, sorted=false, callback=false){
        if (sorted){
          const results = []
          for (let i=0;i<collection.length;i++){
            if (collection[i-1] !== collection[i]) results.push(collection[i-1])
            }
          return results
        }
        else if (!callback){
          return Array.from(new Set(collection))
          }
        else {
          const cbResults = new Set() 
          const results = new Set()
          for (let e of collection) {
            let cbE = callback(e)
            if (!cbResults.has(cbE)){
              cbResults.add(cbE)
              results.add(e)
            }
          }
        return Array.from(results)
        }
      },

      keys: function(obj){
        const keys =  Object.keys(obj)
        return keys 
      },

      values: function(obj){
        const vals = Object.values(obj)
        return vals
      },

      functions: function(obj){
        const results =[]
        for (let key in obj){
          if (typeof obj[key] === "function"){
            results.push(key)
          }
        }
        return results.sort()
      }

  }
})()

fi.libraryMethod()
