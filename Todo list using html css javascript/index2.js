document.getElementById('error').style.color = '#B22222';

const clicked = () => {
    let value = document.getElementById('input2').value
    let added = ` Added ${value}`
    console.log(value)
    if (value == '' ) {
        document.getElementById('error').innerHTML = 'Please type again';
        document.getElementById('error').style.color = '#B22222';
    }
    else {
        document.getElementById('error').innerHTML = added;
        document.getElementById('error').style.color = 'green';


        let boxout = document.getElementById('boxout');


        let li = document.createElement('li');
        li.textContent = value;
        let pos = boxout.firstElementChild
        console.log(pos)
        if (pos == null) {
            boxout.appendChild(li)

        }
        else {
            console.log(pos)
            boxout.insertBefore(li, pos)
        }


    }
}

const clickedDelete = () => {
    

    let pos = boxout.firstElementChild;
    let statement = 'There is nothing to delete';
   
 
    document.getElementById('error').style.color = '#B22222';


    if (pos == null ) {
        document.getElementById('input2').value = ''
        document.getElementById('error').innerHTML = statement;
        


    }
    else {
        let ides = document.getElementById('boxout')
        let lastchild = ides.firstElementChild;
        let statement1 = `Removed ${lastchild.innerHTML}`;

        document.getElementById('error').innerHTML = statement1;
        boxout.removeChild(lastchild);

    }




}

const clickedEdit = () => {
    let position = prompt('Enter the position of the element you want to edit')
    console.log(position)

}






