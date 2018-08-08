function lawrence (){
    process.nextTick(function cb(){
        console.log('Processed in next iteration 1');
      });
      process.nextTick(function cb(){
        console.log('Processed in next iteration 2');
      });
      console.log('Processed in the first iteration');

}

lawrence();
 