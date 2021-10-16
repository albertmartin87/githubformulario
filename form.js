var inputs = document.getElementsByClassName('formulario__input');
for (var i =0; i <= inputs.length; i++) {
    inputs[i].addEventListener('Keyup', function(){
if(this.value.length>=1)
   this.nextElementSibling.classlist.add('fijar');
    } else {
      this.nextElementSibling.classlist.remove('fijar');
      
    }
    });
}


